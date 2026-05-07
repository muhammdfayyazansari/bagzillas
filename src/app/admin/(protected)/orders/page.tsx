import type { Metadata } from "next";
import { OrdersTable } from "@/features/admin/components/orders/orders-table";
import { orderService } from "@/server/services/order.service";

export const metadata: Metadata = {
  title: "Orders | Admin Dashboard",
};

export default async function OrdersPage() {
  const result = await orderService.findManyPaginated({ page: 1, pageSize: 20 });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <p className="text-muted-foreground mt-1">
          Manage and track all customer orders.
        </p>
      </div>

      <OrdersTable orders={result.items} />
    </div>
  );
}
