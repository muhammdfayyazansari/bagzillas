import { LayoutDashboard, Package, Settings, ShoppingCart } from "lucide-react";
import type { ReactNode } from "react";

import type { AdminSession } from "@/server/services/auth.service";
import { AdminLogoutButton } from "@/features/auth/components/admin-logout-button";

type AdminShellProps = {
  adminSession: AdminSession;
  children: ReactNode;
};

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Products", icon: Package },
  { label: "Orders", icon: ShoppingCart },
  { label: "Settings", icon: Settings },
];

export function AdminShell({ adminSession, children }: AdminShellProps) {
  const displayName =
    adminSession.user.name ?? adminSession.user.email ?? "Admin user";

  return (
    <div className="flex min-h-screen bg-muted/30">
      <aside className="hidden w-64 border-r bg-background lg:block">
        <div className="flex h-16 items-center border-b px-6">
          <span className="text-lg font-semibold">Bagzillas Admin</span>
        </div>
        <nav className="space-y-1 p-3">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="text-muted-foreground flex h-9 items-center gap-2 rounded-md px-3 text-sm"
            >
              <item.icon className="size-4" aria-hidden="true" />
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
          <div>
            <p className="text-sm font-medium">{displayName}</p>
            <p className="text-muted-foreground text-xs">
              {adminSession.admin.role}
            </p>
          </div>
          <AdminLogoutButton />
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
