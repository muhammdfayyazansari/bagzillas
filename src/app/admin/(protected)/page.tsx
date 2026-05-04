import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-normal">
          Admin dashboard
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Protected operations workspace for Bagzillas.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {["Products", "Orders", "Homepage CMS"].map((item) => (
          <div key={item} className="rounded-lg border bg-background p-4">
            <p className="text-sm font-medium">{item}</p>
            <p className="text-muted-foreground mt-1 text-sm">
              Module placeholder
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
