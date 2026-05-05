"use server";

import { revalidatePath } from "next/cache";

import {
  updateProductSchema,
  type UpdateProductInput,
} from "@/features/products/schemas/product.schema";
import { requireAdminActionSession } from "@/server/services/auth.service";
import { productService } from "@/server/services/product.service";

export type UpdateProductActionState =
  | { success: true }
  | { success: false; error: string };

export async function updateProductAction(
  input: UpdateProductInput
): Promise<UpdateProductActionState> {
  const auth = await requireAdminActionSession();
  if (!auth.ok) {
    return { success: false, error: auth.error };
  }

  const parsed = updateProductSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Invalid product data.",
    };
  }

  try {
    await productService.updateProduct(parsed.data);
    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${parsed.data.id}/edit`);
    return { success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to update product.";
    return { success: false, error: message };
  }
}
