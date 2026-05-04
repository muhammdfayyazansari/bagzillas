"use server";

import { redirect } from "next/navigation";

import { authRoutes } from "@/lib/auth";
import { signOutAdmin } from "@/server/services/auth.service";

export async function adminLogoutAction() {
  await signOutAdmin();
  redirect(authRoutes.adminLogin);
}
