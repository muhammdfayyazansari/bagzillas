import { LogOut } from "lucide-react";

import { adminLogoutAction } from "@/features/auth/actions/admin-logout.action";
import { Button } from "@/components/ui/button";

export function AdminLogoutButton() {
  return (
    <form action={adminLogoutAction}>
      <Button type="submit" variant="ghost">
        <LogOut className="size-4" aria-hidden="true" />
        Logout
      </Button>
    </form>
  );
}
