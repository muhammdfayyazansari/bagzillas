"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  ImageUploadZone,
  type ImageUploadItem,
} from "@/features/admin/components/products/image-upload-zone";

export function HeroEditor() {
  const [heroImages, setHeroImages] = React.useState<ImageUploadItem[]>([]);

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h3 className="text-lg font-semibold">Hero Section</h3>
          <p className="text-sm text-muted-foreground">Manage the main landing banner on the storefront.</p>
        </div>
        <Button variant="outline">Preview</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="hero-heading">Heading</Label>
            <Input id="hero-heading" defaultValue="Carry Your Ambition" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="hero-subheading">Subheading</Label>
            <textarea 
              id="hero-subheading" 
              className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" 
              defaultValue="Premium school bags, backpacks, and accessories designed for students in Pakistan. Built for durability, comfort, and undeniable style."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary-btn-text">Primary Button Text</Label>
              <Input id="primary-btn-text" defaultValue="Shop Collection" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="primary-btn-link">Primary Button Link</Label>
              <Input id="primary-btn-link" defaultValue="/products" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Hero Background Image</Label>
          <ImageUploadZone
            images={heroImages}
            onImagesChange={setHeroImages}
          />
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
