"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { requireAdminActionSession } from "@/server/services/auth.service";
import { productService } from "@/server/services/product.service";

const deleteProductSchema = z.object({
  id: z.string().uuid(),
});

export type DeleteProductActionState =
  | { success: true }
  | { success: false; error: string };

export async function deleteProductAction(input: unknown) {
  const auth = await requireAdminActionSession();
  if (!auth.ok) {
    return { success: false as const, error: auth.error };
  }

  const parsed = deleteProductSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false as const,
      error: "Invalid product id.",
    };
  }

  try {
    await productService.deleteProduct(parsed.data.id);
    revalidatePath("/admin/products");
    return { success: true as const };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to delete product.";
    return { success: false as const, error: message };
  }
}
