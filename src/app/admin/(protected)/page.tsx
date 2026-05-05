import type { Metadata } from "next";
import { Package, ShoppingCart, DollarSign, Clock } from "lucide-react";
import { StatCard } from "@/features/admin/components/dashboard/stat-card";
import { SalesChart } from "@/features/admin/components/dashboard/sales-chart";
import { RecentOrders } from "@/features/admin/components/dashboard/recent-orders";

export const metadata: Metadata = {
  title: "Admin Dashboard | Bagzillas",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's an overview of your store.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="Rs. 450,230"
          icon={DollarSign}
          trend={{ value: 12.5, isPositive: true }}
          description="Compared to last month"
        />
        <StatCard
          title="Sales"
          value="+2350"
          icon={ShoppingCart}
          trend={{ value: 18.2, isPositive: true }}
          description="Compared to last month"
        />
        <StatCard
          title="Pending Orders"
          value="12"
          icon={Clock}
          trend={{ value: 4.1, isPositive: false }}
          description="Needs attention"
        />
        <StatCard
          title="Total Products"
          value="45"
          icon={Package}
          description="Active in store"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <SalesChart />
        </div>
        <div className="col-span-3">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
