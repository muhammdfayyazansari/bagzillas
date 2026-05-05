import { v2 as cloudinary } from "cloudinary";

import { env } from "@/lib/env";
import type {
  MediaStorageAdapter,
  MediaUploadPayload,
  MediaUploadResult,
} from "@/server/storage/media-storage.interface";

function requireCloudinaryConfig() {
  const cloudName = env.CLOUDINARY_CLOUD_NAME;
  const apiKey = env.CLOUDINARY_API_KEY;
  const apiSecret = env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET."
    );
  }
  return { cloudName, apiKey, apiSecret };
}

export class CloudinaryMediaStorage implements MediaStorageAdapter {
  constructor() {
    const { cloudName, apiKey, apiSecret } = requireCloudinaryConfig();
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
      secure: true,
    });
  }

  async uploadImage(input: MediaUploadPayload): Promise<MediaUploadResult> {
    requireCloudinaryConfig();
    const folder = env.CLOUDINARY_UPLOAD_FOLDER ?? "bagzillas/products";

    const result = await new Promise<{ secure_url: string; public_id: string }>(
      (resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder,
            resource_type: "image",
            use_filename: true,
            unique_filename: true,
          },
          (error, uploaded) => {
            if (error || !uploaded?.secure_url) {
              reject(error ?? new Error("Cloudinary upload failed."));
              return;
            }
            resolve({
              secure_url: uploaded.secure_url,
              public_id: uploaded.public_id,
            });
          }
        );
        stream.end(input.buffer);
      }
    );

    return { url: result.secure_url, storageKey: result.public_id };
  }
}
