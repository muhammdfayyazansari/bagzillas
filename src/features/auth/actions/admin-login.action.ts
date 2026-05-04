"use server";

import {
  adminLoginSchema,
  type AdminLoginInput,
} from "@/features/auth/schemas/auth.schema";
import { signInAdmin } from "@/server/services/auth.service";

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

  return signInAdmin({
    email: parsed.data.email,
    password: parsed.data.password,
    redirectTo: parsed.data.redirectTo,
  });
}
