import type {
  AuthProviderAdapter,
  MiddlewareAuthProviderAdapter,
} from "@/server/auth/providers/auth-provider.interface";
import {
  SupabaseAuthProvider,
  SupabaseMiddlewareAuthProvider,
} from "@/server/auth/providers/supabase-auth.provider";

export function createAuthProvider(): AuthProviderAdapter {
  return new SupabaseAuthProvider();
}

export function createMiddlewareAuthProvider(): MiddlewareAuthProviderAdapter {
  return new SupabaseMiddlewareAuthProvider();
}
