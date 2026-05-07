"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CreditCard, Truck } from "lucide-react";

import { checkoutSchema, type CheckoutFormData } from "@/features/checkout/schemas/checkout.schema";
import { useCartStore } from "@/store/cart.store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { createOrderAction } from "@/features/checkout/actions/create-order.action";

export function CheckoutForm() {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const [serverError, setServerError] = React.useState<string | null>(null);

  const items = useCartStore((state) => state.items);
  const cartTotal = useCartStore((state) => state.cartTotal());
  const clearCart = useCartStore((state) => state.clearCart);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      city: "",
      address: "",
      notes: "",
      paymentMethod: "CASH_ON_DELIVERY",
    },
  });

  const onSubmit = (data: CheckoutFormData) => {
    setServerError(null);
    startTransition(async () => {
      // Pass cart items to the server for secure pricing
      const payload = {
        ...data,
        items: items.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      };

      const result = await createOrderAction(payload);
      if (result.success && result.orderId) {
        clearCart();
        router.push(`/checkout/success/${result.orderId}`);
      } else {
        setServerError(result.error || "Failed to place order. Please try again.");
      }
    });
  };

  if (items.length === 0 && !isPending) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Button onClick={() => router.push("/products")}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Form */}
      <div className="lg:col-span-7 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact & Delivery</h2>
          {serverError && (
            <div className="mb-6 p-4 rounded-md bg-destructive/10 text-destructive text-sm font-medium">
              {serverError}
            </div>
          )}
          <form id="checkout-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...form.register("email")} />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Ali Khan" {...form.register("fullName")} />
                {form.formState.errors.fullName && (
                  <p className="text-xs text-destructive">{form.formState.errors.fullName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="03XX XXXXXXX" {...form.register("phone")} />
                {form.formState.errors.phone && (
                  <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Lahore" {...form.register("city")} />
              {form.formState.errors.city && (
                <p className="text-xs text-destructive">{form.formState.errors.city.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Complete Address</Label>
              <Input id="address" placeholder="House 123, Street 4, Phase 5..." {...form.register("address")} />
              {form.formState.errors.address && (
                <p className="text-xs text-destructive">{form.formState.errors.address.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Order Notes (Optional)</Label>
              <textarea
                id="notes"
                {...form.register("notes")}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                placeholder="Any special instructions for delivery?"
              />
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold">Payment Method</h3>
              
              <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer bg-primary/5 border-primary ring-1 ring-primary">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-primary">Cash on Delivery (COD)</p>
                    <p className="text-xs text-muted-foreground">Pay when you receive your order.</p>
                  </div>
                </div>
                <input 
                  type="radio" 
                  value="CASH_ON_DELIVERY" 
                  checked={form.watch("paymentMethod") === "CASH_ON_DELIVERY"}
                  {...form.register("paymentMethod")}
                  className="h-4 w-4 text-primary"
                />
              </label>

              <label className="flex items-center justify-between border rounded-lg p-4 opacity-50 cursor-not-allowed">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-muted-foreground">Online Payment (Coming Soon)</p>
                    <p className="text-xs text-muted-foreground">Credit/Debit Card via Stripe/JazzCash.</p>
                  </div>
                </div>
                <input type="radio" disabled className="h-4 w-4" />
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="lg:col-span-5 relative">
        <div className="sticky top-24">
          <Card className="bg-muted/30 border-0 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.productId} className="flex gap-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden border bg-background shrink-0">
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                      <div className="absolute -top-2 -right-2 bg-muted text-muted-foreground text-xs h-5 w-5 rounded-full flex items-center justify-center font-medium">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="font-medium line-clamp-2">{item.name}</p>
                      <p className="text-muted-foreground mt-1">Rs. {item.price.toLocaleString()}</p>
                    </div>
                    <p className="font-medium text-sm">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">Rs. {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-xl font-bold">Rs. {cartTotal.toLocaleString()}</span>
              </div>

              <Button 
                type="submit" 
                form="checkout-form" 
                size="lg" 
                className="w-full text-lg shadow-md"
                disabled={isPending}
              >
                {isPending ? "Processing..." : "Place Order (COD)"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
