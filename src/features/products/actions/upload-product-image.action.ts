"use server";

import { requireAdminActionSession } from "@/server/services/auth.service";
import { getMediaStorageAdapter } from "@/server/storage/media-storage.factory";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp"]);

export type UploadProductImageActionState =
  | { success: true; url: string }
  | { success: false; error: string };

export async function uploadProductImageAction(
  formData: FormData
): Promise<UploadProductImageActionState> {
  const auth = await requireAdminActionSession();
  if (!auth.ok) {
    return { success: false, error: auth.error };
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return { success: false, error: "Missing file payload." };
  }

  if (file.size <= 0) {
    return { success: false, error: "File is empty." };
  }

  if (file.size > MAX_BYTES) {
    return { success: false, error: "File must be under 5MB." };
  }

  const mime = file.type.toLowerCase();
  if (!ALLOWED.has(mime)) {
    return { success: false, error: "Only JPEG, PNG, and WEBP images are allowed." };
  }

  try {
    const storage = getMediaStorageAdapter();
    const buffer = Buffer.from(await file.arrayBuffer());
    const { url } = await storage.uploadImage({
      buffer,
      filename: file.name || "upload",
      mimeType: mime,
    });
    return { success: true, url };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Image upload failed.";
    return { success: false, error: message };
  }
}
