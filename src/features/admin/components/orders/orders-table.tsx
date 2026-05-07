"use client";

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
import { Search } from "lucide-react";
import { OrderDetailsDrawer } from "./order-details-drawer";

interface OrdersTableProps {
  orders: any[]; // Replacing any with appropriate typing as needed
}

export function OrdersTable({ orders }: OrdersTableProps) {
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
            {orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                  No orders found.
                </TableCell>
              </TableRow>
            ) : orders.map((order) => {
              const paymentStatus = order.payments?.[0]?.status || "PENDING";
              return (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.orderNumber}</TableCell>
                  <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{order.customerName}</span>
                      <span className="text-xs text-muted-foreground">{order.customerEmail}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        order.status === "DELIVERED" ? "default" :
                        order.status === "PROCESSING" || order.status === "SHIPPED" ? "secondary" :
                        order.status === "PENDING" ? "outline" : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={paymentStatus === "PAID" ? "default" : "secondary"}>
                      {paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">Rs. {Number(order.total).toLocaleString()}</TableCell>
                  <TableCell className="text-center">
                    <OrderDetailsDrawer orderId={order.id} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" disabled>Previous</Button>
        <Button variant="outline" size="sm" disabled>Next</Button>
      </div>
    </div>
  );
}
