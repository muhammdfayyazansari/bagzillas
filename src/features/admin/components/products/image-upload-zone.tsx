"use client";

import * as React from "react";
import { UploadCloud, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageUploadZone() {
  const [isDragging, setIsDragging] = React.useState(false);
  const [images, setImages] = React.useState<string[]>([]);

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
    // Placeholder logic
    setImages([...images, "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=200&auto=format&fit=crop"]);
  };

  return (
    <div className="space-y-4">
      <div 
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[200px]",
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:bg-muted/50"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <UploadCloud className="h-10 w-10 text-muted-foreground mb-4" />
        <h3 className="text-sm font-medium">Drag & drop images here</h3>
        <p className="text-xs text-muted-foreground mt-1">Or click to browse files (JPEG, PNG, WEBP)</p>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-md border bg-muted overflow-hidden group">
              <img src={img} alt="Preview" className="object-cover w-full h-full" />
              <button 
                onClick={() => setImages(images.filter((_, index) => index !== i))}
                className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
