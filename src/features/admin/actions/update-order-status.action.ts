"use server";

import { z } from "zod";
import { OrderStatus } from "@prisma/client";
import { requireAdminActionSession } from "@/server/services/auth.service";
import { orderService } from "@/server/services/order.service";
import { revalidatePath } from "next/cache";

const schema = z.object({
  orderId: z.string().uuid(),
  status: z.nativeEnum(OrderStatus),
});

export async function updateOrderStatusAction(payload: unknown) {
  try {
    const auth = await requireAdminActionSession();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      return { success: false, error: "Invalid payload" };
    }

    await orderService.updateStatus(parsed.data.orderId, parsed.data.status);
    
    revalidatePath("/admin/orders");
    
    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to update order status" 
    };
  }
}
