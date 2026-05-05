import type { Metadata } from "next";
import { GeneralSettingsForm } from "@/features/admin/components/settings/general-settings-form";

export const metadata: Metadata = {
  title: "Settings | Admin Dashboard",
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your store preferences, payments, and notifications.
        </p>
      </div>

      <GeneralSettingsForm />
    </div>
  );
}
