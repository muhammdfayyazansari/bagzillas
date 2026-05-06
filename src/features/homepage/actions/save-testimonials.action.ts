"use server";

import { requireAdminActionSession } from "@/server/services/auth.service";
import { homepageService } from "@/server/services/homepage.service";
import { testimonialsSectionSchema } from "@/features/homepage/schemas/cms.schema";
import { revalidatePath } from "next/cache";

export async function saveTestimonialsAction(formData: unknown) {
  try {
    const auth = await requireAdminActionSession();
    if (!auth.ok) return { success: false, error: auth.error };

    const parsed = testimonialsSectionSchema.safeParse(formData);
    if (!parsed.success) {
      return { success: false, error: parsed.error.errors[0].message };
    }

    await homepageService.saveTestimonialsSection(parsed.data, auth.session.admin.id);
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to save testimonials" 
    };
  }
}
