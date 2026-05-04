import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AdminLoginForm } from "@/features/auth/components/admin-login-form";
import { authRoutes, getSafeAdminRedirect } from "@/lib/auth";
import { getAdminSession } from "@/server/services/auth.service";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Login",
};

type AdminLoginPageProps = {
  searchParams: Promise<{
    error?: string;
    next?: string;
  }>;
};

function getErrorMessage(error?: string) {
  if (error === "unauthorized") {
    return "You do not have permission to access the admin dashboard.";
  }

  return undefined;
}

export default async function AdminLoginPage({
  searchParams,
}: AdminLoginPageProps) {
  const params = await searchParams;
  const adminSession = await getAdminSession();
  const redirectTo = getSafeAdminRedirect(params.next);

  if (adminSession) {
    redirect(authRoutes.adminDashboard);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-12">
      <AdminLoginForm
        redirectTo={redirectTo}
        initialError={getErrorMessage(params.error)}
      />
    </main>
  );
}
