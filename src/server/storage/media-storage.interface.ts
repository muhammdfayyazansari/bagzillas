/**
 * Portable media upload port (Nest: inject as a provider).
 * Returns a public URL suitable to persist on `ProductImage.url`.
 */
export type MediaUploadPayload = {
  buffer: Buffer;
  filename: string;
  mimeType: string;
};

export type MediaUploadResult = {
  url: string;
  /** Provider-specific reference for future deletes (optional). */
  storageKey?: string;
};

export interface MediaStorageAdapter {
  uploadImage(input: MediaUploadPayload): Promise<MediaUploadResult>;
}
