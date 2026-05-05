"use server";

import { revalidatePath } from "next/cache";

import {
  createProductSchema,
  type CreateProductInput,
} from "@/features/products/schemas/product.schema";
import { requireAdminActionSession } from "@/server/services/auth.service";
import { productService } from "@/server/services/product.service";

export type CreateProductActionState =
  | { success: true; productId: string }
  | { success: false; error: string };

export async function createProductAction(
  input: CreateProductInput
): Promise<CreateProductActionState> {
  const auth = await requireAdminActionSession();
  if (!auth.ok) {
    return { success: false, error: auth.error };
  }

  const parsed = createProductSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Invalid product data.",
    };
  }

  try {
    const product = await productService.createProduct(parsed.data);
    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${product.id}/edit`);
    return { success: true, productId: product.id };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create product.";
    return { success: false, error: message };
  }
}
