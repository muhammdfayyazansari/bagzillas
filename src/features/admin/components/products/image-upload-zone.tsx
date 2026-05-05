"use client";

import * as React from "react";
import { UploadCloud, X, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadProductImageAction } from "@/features/products/actions/upload-product-image.action";
import { cn } from "@/lib/utils";

export type ImageUploadItem = {
  url: string;
  altText: string;
  isPrimary: boolean;
};

type ImageUploadZoneProps = {
  images: ImageUploadItem[];
  onImagesChange: (next: ImageUploadItem[]) => void;
  disabled?: boolean;
};

export function ImageUploadZone({
  images,
  onImagesChange,
  disabled,
}: ImageUploadZoneProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const imagesRef = React.useRef(images);

  React.useLayoutEffect(() => {
    imagesRef.current = images;
  }, [images]);

  const [isDragging, setIsDragging] = React.useState(false);
  const [uploadError, setUploadError] = React.useState<string | null>(null);
  const [uploading, setUploading] = React.useState(false);

  const pushImage = React.useCallback(
    (url: string) => {
      setUploadError(null);
      const current = imagesRef.current;
      const next: ImageUploadItem = {
        url,
        altText: "",
        isPrimary: current.length === 0,
      };
      onImagesChange(
        current.length === 0
          ? [next]
          : [...current, { ...next, isPrimary: false }]
      );
    },
    [onImagesChange]
  );

  const uploadFile = React.useCallback(
    async (file: File) => {
      setUploading(true);
      setUploadError(null);
      const formData = new FormData();
      formData.set("file", file);
      const result = await uploadProductImageAction(formData);
      setUploading(false);
      if (!result.success) {
        setUploadError(result.error);
        return;
      }
      pushImage(result.url);
    },
    [pushImage]
  );

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList?.length || disabled || uploading) return;
    void uploadFile(fileList[0]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const setPrimary = (index: number) => {
    onImagesChange(
      images.map((img, i) => ({
        ...img,
        isPrimary: i === index,
      }))
    );
  };

  const removeAt = (index: number) => {
    const next = images.filter((_, i) => i !== index);
    if (next.length > 0 && !next.some((i) => i.isPrimary)) {
      next[0] = { ...next[0], isPrimary: true };
    }
    onImagesChange(next);
  };

  const updateAlt = (index: number, altText: string) => {
    onImagesChange(
      images.map((img, i) => (i === index ? { ...img, altText } : img))
    );
  };

  return (
    <div className="space-y-4">
      {uploadError ? (
        <p className="text-sm text-destructive" role="alert">
          {uploadError}
        </p>
      ) : null}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        disabled={disabled || uploading}
        onChange={(e) => handleFiles(e.target.files)}
      />

      <button
        type="button"
        disabled={disabled || uploading}
        className={cn(
          "w-full border-2 border-dashed rounded-lg p-8 text-center transition-colors flex flex-col items-center justify-center min-h-[200px]",
          disabled || uploading
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer hover:bg-muted/50",
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <UploadCloud className="h-10 w-10 text-muted-foreground mb-4" />
        <h3 className="text-sm font-medium">
          {uploading ? "Uploading…" : "Drag & drop or click to upload"}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          JPEG, PNG, or WEBP — max 5MB
        </p>
      </button>

      {images.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={`${img.url}-${i}`}
              className="relative rounded-md border bg-muted overflow-hidden group"
            >
              <div className="aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element -- admin preview of remote URLs */}
                <img
                  src={img.url}
                  alt={img.altText || "Product"}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-2 space-y-2 border-t bg-card">
                <div className="flex items-center justify-between gap-1">
                  <Button
                    type="button"
                    size="icon"
                    variant={img.isPrimary ? "default" : "outline"}
                    className="h-8 w-8"
                    disabled={disabled}
                    onClick={() => setPrimary(i)}
                    title="Set as primary"
                  >
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-destructive"
                    disabled={disabled}
                    onClick={() => removeAt(i)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Alt text</Label>
                  <Input
                    value={img.altText}
                    disabled={disabled}
                    onChange={(e) => updateAlt(i, e.target.value)}
                    placeholder="Describe the image"
                    className="h-8 text-xs"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
