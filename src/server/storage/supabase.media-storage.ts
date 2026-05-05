import { createClient } from "@supabase/supabase-js";

import { env } from "@/lib/env";
import type {
  MediaStorageAdapter,
  MediaUploadPayload,
  MediaUploadResult,
} from "@/server/storage/media-storage.interface";

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
}

function requireSupabaseStorageConfig() {
  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Supabase Storage uploads require NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }
  const bucket = env.SUPABASE_STORAGE_BUCKET ?? "product-images";
  return { url, serviceKey, bucket };
}

/** Uploads via service role to a bucket; expects public URLs for storefront use. */
export class SupabaseBucketMediaStorage implements MediaStorageAdapter {
  async uploadImage(input: MediaUploadPayload): Promise<MediaUploadResult> {
    const { url, serviceKey, bucket } = requireSupabaseStorageConfig();
    const supabase = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const path = `products/${Date.now()}-${sanitizeFilename(input.filename)}`;
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, input.buffer, {
        contentType: input.mimeType,
        upsert: false,
      });

    if (error) {
      throw new Error(error.message ?? "Supabase Storage upload failed.");
    }

    const { data: pub } = supabase.storage.from(bucket).getPublicUrl(data.path);
    return { url: pub.publicUrl, storageKey: data.path };
  }
}
