import { env } from "@/lib/env";
import type { MediaStorageAdapter } from "@/server/storage/media-storage.interface";
import { CloudinaryMediaStorage } from "@/server/storage/cloudinary.media-storage";
import { SupabaseBucketMediaStorage } from "@/server/storage/supabase.media-storage";

let singleton: MediaStorageAdapter | null = null;

/**
 * Single binding point for media storage (swap provider via env for Nest parity).
 */
export function getMediaStorageAdapter(): MediaStorageAdapter {
  if (singleton) {
    return singleton;
  }

  const provider = env.MEDIA_STORAGE_PROVIDER;
  if (provider === "cloudinary") {
    singleton = new CloudinaryMediaStorage();
  } else if (provider === "supabase") {
    singleton = new SupabaseBucketMediaStorage();
  } else {
    throw new Error(
      'Set MEDIA_STORAGE_PROVIDER to "cloudinary" or "supabase" to enable admin uploads.'
    );
  }

  return singleton;
}

export function resetMediaStorageAdapterForTests() {
  singleton = null;
}
