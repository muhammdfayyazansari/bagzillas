"use server";

import { AuthApiError } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

import { getSafeAdminRedirect } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  adminLoginSchema,
  type AdminLoginInput,
} from "@/features/auth/schemas/auth.schema";
import { getAdminSessionForUser } from "@/server/services/auth.service";

type AdminLoginActionResult = {
  error?: string;
};

export async function adminLoginAction(
  input: AdminLoginInput
): Promise<AdminLoginActionResult> {
  const parsed = adminLoginSchema.safeParse(input);

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Invalid login details.",
    };
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  if (error || !data.user) {
    return {
      error:
        error instanceof AuthApiError && error.status === 400
          ? "Invalid email or password."
          : "Unable to sign in. Please try again.",
    };
  }

  const adminSession = await getAdminSessionForUser(data.user);

  if (!adminSession) {
    await supabase.auth.signOut();

    return {
      error: "This account is not authorized for admin access.",
    };
  }

  redirect(getSafeAdminRedirect(parsed.data.redirectTo));
}
