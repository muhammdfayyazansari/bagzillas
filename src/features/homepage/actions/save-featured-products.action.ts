"use server";

import { requireAdminActionSession } from "@/server/services/auth.service";
import { homepageService } from "@/server/services/homepage.service";
import { featuredProductsSchema } from "@/features/homepage/schemas/cms.schema";
import { revalidatePath } from "next/cache";

export async function saveFeaturedProductsAction(formData: unknown) {
  try {
    const auth = await requireAdminActionSession();
    if (!auth.ok) return { success: false, error: auth.error };

    const parsed = featuredProductsSchema.safeParse(formData);
    if (!parsed.success) {
      return { success: false, error: parsed.error.issues[0].message };
    }

    await homepageService.saveFeaturedProducts(parsed.data, auth.session.admin.id);
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to save featured products" 
    };
  }
}
