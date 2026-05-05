import * as React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye } from "lucide-react";
import { OrderDetailsDrawer } from "./order-details-drawer";

const orders = [
  { id: "ORD-1234", date: "2026-05-06", customer: "Ahmed Raza", email: "ahmed@example.com", total: 4500, items: 1, status: "Completed", payment: "Paid" },
  { id: "ORD-1235", date: "2026-05-05", customer: "Fatima Ali", email: "fatima@example.com", total: 8200, items: 2, status: "Processing", payment: "Paid" },
  { id: "ORD-1236", date: "2026-05-04", customer: "Usman Tariq", email: "usman@example.com", total: 3200, items: 1, status: "Pending", payment: "Unpaid" },
  { id: "ORD-1237", date: "2026-05-03", customer: "Ayesha Khan", email: "ayesha@example.com", total: 11500, items: 3, status: "Completed", payment: "Paid" },
  { id: "ORD-1238", date: "2026-05-02", customer: "Zainab Shah", email: "zainab@example.com", total: 2500, items: 1, status: "Cancelled", payment: "Refunded" },
];

export function OrdersTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search orders by ID or customer..." className="pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Filter Status</Button>
          <Button variant="outline">Export CSV</Button>
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{order.customer}</span>
                    <span className="text-xs text-muted-foreground">{order.email}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      order.status === "Completed" ? "default" :
                      order.status === "Processing" ? "secondary" :
                      order.status === "Pending" ? "outline" : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={order.payment === "Paid" ? "default" : order.payment === "Refunded" ? "secondary" : "destructive"}>
                    {order.payment}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">Rs. {order.total}</TableCell>
                <TableCell className="text-center">
                  <OrderDetailsDrawer order={order} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" disabled>Previous</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  );
}
