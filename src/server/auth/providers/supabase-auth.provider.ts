import { AuthProvider } from "@prisma/client";
import { createServerClient } from "@supabase/ssr";
import { AuthApiError, type User as SupabaseUser } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

import { getSupabaseConfig } from "@/lib/env";
import type {
  AuthIdentity,
  AuthProviderAdapter,
  AuthProviderMetadata,
  AuthProviderResult,
  MiddlewareAuthProviderAdapter,
  PasswordSignInInput,
} from "@/server/auth/providers/auth-provider.interface";

function getMetadata(user: SupabaseUser): AuthProviderMetadata {
  const role =
    typeof user.app_metadata?.role === "string"
      ? user.app_metadata.role
      : undefined;
  const roles = Array.isArray(user.app_metadata?.roles)
    ? user.app_metadata.roles.filter(
        (item): item is string => typeof item === "string"
      )
    : undefined;

  return {
    role,
    roles,
  };
}

function toIdentity(user: SupabaseUser): AuthIdentity | null {
  if (!user.email) {
    return null;
  }

  const name =
    typeof user.user_metadata?.name === "string"
      ? user.user_metadata.name
      : typeof user.user_metadata?.full_name === "string"
        ? user.user_metadata.full_name
        : null;

  return {
    provider: AuthProvider.SUPABASE,
    providerId: user.id,
    email: user.email.toLowerCase(),
    name,
    metadata: getMetadata(user),
  };
}

async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components cannot set cookies; Server Actions and Route Handlers can.
        }
      },
    },
  });
}

export class SupabaseAuthProvider implements AuthProviderAdapter {
  async signInWithPassword(
    input: PasswordSignInInput
  ): Promise<AuthProviderResult> {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword(input);

    if (error || !data.user) {
      return {
        error: {
          code:
            error instanceof AuthApiError && error.status === 400
              ? "INVALID_CREDENTIALS"
              : "PROVIDER_ERROR",
          message: "Unable to sign in with the configured auth provider.",
        },
      };
    }

    const identity = toIdentity(data.user);

    if (!identity) {
      return {
        error: {
          code: "MISSING_EMAIL",
          message:
            "The authenticated account does not include an email address.",
        },
      };
    }

    return { identity };
  }

  async getCurrentIdentity() {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    return toIdentity(user);
  }

  async signOut() {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  }
}

export class SupabaseMiddlewareAuthProvider implements MiddlewareAuthProviderAdapter {
  async getMiddlewareIdentity(request: NextRequest) {
    let response = NextResponse.next({
      request,
    });

    const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    return {
      response,
      identity: user ? toIdentity(user) : null,
    };
  }
}
