"use server";

import { z } from "zod";
import { checkoutSchema } from "@/features/checkout/schemas/checkout.schema";
import { orderService } from "@/server/services/order.service";
import { revalidatePath } from "next/cache";

const payloadSchema = checkoutSchema.extend({
  items: z.array(
    z.object({
      productId: z.string().uuid("Invalid product ID"),
      quantity: z.number().min(1).int(),
    })
  ).min(1, "Cart cannot be empty"),
});

export async function createOrderAction(payload: unknown) {
  try {
    const parsed = payloadSchema.safeParse(payload);
    
    if (!parsed.success) {
      return { 
        success: false, 
        error: parsed.error.issues[0].message || "Invalid checkout data" 
      };
    }

    const { items, ...checkoutData } = parsed.data;

    // Call service to securely calculate prices and create order
    const order = await orderService.createCheckoutOrder(checkoutData, items);

    // Revalidate paths that might show stock changes or orders
    revalidatePath("/products");
    revalidatePath("/admin/orders");

    return { 
      success: true, 
      orderId: order.orderNumber 
    };
  } catch (error) {
    console.error("Order creation error:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to place order." 
    };
  }
}
