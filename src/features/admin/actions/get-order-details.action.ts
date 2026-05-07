"use server";

import { requireAdminActionSession } from "@/server/services/auth.service";
import { orderService } from "@/server/services/order.service";

export async function getOrderDetailsAction(orderId: string) {
  try {
    const auth = await requireAdminActionSession();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    const order = await orderService.findById(orderId);
    if (!order) {
      return { success: false, error: "Order not found" };
    }

    return { success: true, order };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to fetch order details" 
    };
  }
}
