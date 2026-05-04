import type { ReactNode } from "react";

import { AdminShell } from "@/features/auth/components/admin-shell";
import { requireAdminSession } from "@/server/services/auth.service";

export const dynamic = "force-dynamic";

type AdminProtectedLayoutProps = {
  children: ReactNode;
};

export default async function AdminProtectedLayout({
  children,
}: AdminProtectedLayoutProps) {
  const adminSession = await requireAdminSession();

  return <AdminShell adminSession={adminSession}>{children}</AdminShell>;
}
