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
import { Eye, Printer, Mail, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getOrderDetailsAction } from "@/features/admin/actions/get-order-details.action";
import { updateOrderStatusAction } from "@/features/admin/actions/update-order-status.action";
import { OrderStatus } from "@prisma/client";

export function OrderDetailsDrawer({ orderId }: { orderId: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [order, setOrder] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);

  React.useEffect(() => {
    if (isOpen && !order) {
      setIsLoading(true);
      getOrderDetailsAction(orderId).then((res) => {
        if (res.success) {
          setOrder(res.order);
        }
        setIsLoading(false);
      });
    }
  }, [isOpen, orderId, order]);

  const handleUpdateStatus = async (status: OrderStatus) => {
    setIsUpdating(true);
    const res = await updateOrderStatusAction({ orderId, status });
    if (res.success) {
      setOrder({ ...order, status }); // Optimistic update
    }
    setIsUpdating(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Eye className="h-4 w-4" />
          <span className="sr-only">View Order</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
        {!order || isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <>
            <SheetHeader className="space-y-4">
              <div className="flex items-center justify-between mt-4">
                <SheetTitle className="text-2xl">{order.orderNumber}</SheetTitle>
                <Badge 
                  variant={
                    order.status === "DELIVERED" ? "default" :
                    order.status === "PROCESSING" || order.status === "SHIPPED" ? "secondary" :
                    order.status === "PENDING" ? "outline" : "destructive"
                  }
                >
                  {order.status}
                </Badge>
              </div>
              <SheetDescription>
                Placed on {new Date(order.createdAt).toLocaleString()}
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
                  <p className="font-medium">{order.customerName}</p>
                  <p className="text-muted-foreground">{order.customerEmail}</p>
                  <p className="text-muted-foreground mt-2">{order.customerPhone || "No Phone"}</p>
                </div>
                <div className="text-sm border-t pt-4">
                  <p className="font-medium mb-1">Shipping Address</p>
                  <p className="text-muted-foreground">{order.shippingAddress.address}</p>
                  <p className="text-muted-foreground">{order.shippingAddress.city}</p>
                </div>
                {order.notes && (
                  <div className="text-sm border-t pt-4">
                    <p className="font-medium mb-1">Order Notes</p>
                    <p className="text-muted-foreground">{order.notes}</p>
                  </div>
                )}
              </div>

              <div className="rounded-lg border p-4 space-y-4 bg-muted/20">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Order Items</h3>
                <div className="space-y-4">
                  {order.items.map((item: any) => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-muted rounded border overflow-hidden">
                          {item.productSnapshot?.imageUrl ? (
                            <img src={item.productSnapshot.imageUrl} alt={item.productName} className="object-cover w-full h-full" />
                          ) : (
                            <div className="w-full h-full bg-secondary" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{item.productName}</p>
                          <p className="text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">Rs. {Number(item.lineTotal).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border p-4 space-y-3 bg-muted/20">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Payment Summary</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>Rs. {Number(order.subtotal).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Rs. {Number(order.shippingAmount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-semibold border-t pt-3">
                  <span>Total</span>
                  <span>Rs. {Number(order.total).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span>{order.payments[0]?.method || "UNKNOWN"}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Payment Status</span>
                  <Badge variant={order.payments[0]?.status === "PAID" ? "default" : "secondary"} className="text-xs">
                    {order.payments[0]?.status || "PENDING"}
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Update Status</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => handleUpdateStatus("PROCESSING")} 
                    disabled={isUpdating || order.status === "PROCESSING"}
                  >
                    Processing
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleUpdateStatus("SHIPPED")} 
                    disabled={isUpdating || order.status === "SHIPPED"}
                  >
                    Shipped
                  </Button>
                  <Button 
                    onClick={() => handleUpdateStatus("DELIVERED")} 
                    disabled={isUpdating || order.status === "DELIVERED"}
                  >
                    Delivered
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={() => handleUpdateStatus("CANCELLED")} 
                    disabled={isUpdating || order.status === "CANCELLED"}
                  >
                    Cancel Order
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
