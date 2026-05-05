import * as React from "react";
import { Badge } from "@/components/ui/badge";

const recentOrders = [
  {
    id: "ORD-1234",
    customer: "Ahmed Raza",
    email: "ahmed@example.com",
    total: 4500,
    status: "Completed",
  },
  {
    id: "ORD-1235",
    customer: "Fatima Ali",
    email: "fatima@example.com",
    total: 8200,
    status: "Processing",
  },
  {
    id: "ORD-1236",
    customer: "Usman Tariq",
    email: "usman@example.com",
    total: 3200,
    status: "Pending",
  },
  {
    id: "ORD-1237",
    customer: "Ayesha Khan",
    email: "ayesha@example.com",
    total: 11500,
    status: "Completed",
  },
  {
    id: "ORD-1238",
    customer: "Zainab Shah",
    email: "zainab@example.com",
    total: 2500,
    status: "Cancelled",
  },
];

export function RecentOrders() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold tracking-tight">Recent Orders</h3>
        <p className="text-sm text-muted-foreground">You made 15 sales this week.</p>
      </div>
      <div className="space-y-6">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium leading-none">{order.customer}</p>
              <p className="text-sm text-muted-foreground">{order.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge 
                variant={
                  order.status === "Completed" ? "default" :
                  order.status === "Processing" ? "secondary" :
                  order.status === "Pending" ? "outline" : "destructive"
                }
              >
                {order.status}
              </Badge>
              <div className="font-medium">Rs. {order.total.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
