"use client";

import * as React from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetDescription
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Eye, Printer, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function OrderDetailsDrawer({ order }: { order: any }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Eye className="h-4 w-4" />
          <span className="sr-only">View Order</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
        <SheetHeader className="space-y-4">
          <div className="flex items-center justify-between mt-4">
            <SheetTitle className="text-2xl">Order {order.id}</SheetTitle>
            <Badge 
              variant={
                order.status === "Completed" ? "default" :
                order.status === "Processing" ? "secondary" :
                order.status === "Pending" ? "outline" : "destructive"
              }
            >
              {order.status}
            </Badge>
          </div>
          <SheetDescription>
            Placed on {order.date}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Printer className="mr-2 h-4 w-4" /> Print
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Mail className="mr-2 h-4 w-4" /> Email Invoice
            </Button>
          </div>

          <div className="rounded-lg border p-4 space-y-4 bg-muted/20">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Customer Details</h3>
            <div className="text-sm">
              <p className="font-medium">{order.customer}</p>
              <p className="text-muted-foreground">{order.email}</p>
              <p className="text-muted-foreground mt-2">+92 300 1234567</p>
            </div>
            <div className="text-sm border-t pt-4">
              <p className="font-medium mb-1">Shipping Address</p>
              <p className="text-muted-foreground">123 Street Name, Phase 4</p>
              <p className="text-muted-foreground">DHA, Lahore</p>
              <p className="text-muted-foreground">Pakistan</p>
            </div>
          </div>

          <div className="rounded-lg border p-4 space-y-4 bg-muted/20">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Order Items</h3>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-muted rounded border"></div>
                <div>
                  <p className="font-medium">Classic Leather Backpack</p>
                  <p className="text-muted-foreground">Qty: 1</p>
                </div>
              </div>
              <p className="font-medium">Rs. 4500</p>
            </div>
            {/* If there were more items, they would render here */}
          </div>

          <div className="rounded-lg border p-4 space-y-3 bg-muted/20">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Payment Summary</h3>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>Rs. {order.total - 200}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>Rs. 200</span>
            </div>
            <div className="flex justify-between text-base font-semibold border-t pt-3">
              <span>Total</span>
              <span>Rs. {order.total}</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-muted-foreground">Payment Status</span>
              <Badge variant={order.payment === "Paid" ? "default" : "secondary"} className="text-xs">
                {order.payment}
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Update Status</h3>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-start">Mark as Processing</Button>
              <Button className="w-full justify-start">Mark as Completed</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
