"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { heroSectionSchema } from "@/features/homepage/schemas/cms.schema";
import type { HeroSectionContent } from "@/features/homepage/types/cms.types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ImageUploadZone } from "@/features/admin/components/products/image-upload-zone";
import { saveHeroSectionAction } from "@/features/homepage/actions/save-hero-section.action";

interface HeroEditorProps {
  initialData?: HeroSectionContent;
}

export function HeroEditor({ initialData }: HeroEditorProps) {
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const form = useForm<HeroSectionContent>({
    resolver: zodResolver(heroSectionSchema),
    defaultValues: initialData || {
      heading: "Carry Your Ambition",
      subheading: "Premium school bags, backpacks, and accessories designed for students in Pakistan. Built for durability, comfort, and undeniable style.",
      primaryButtonText: "Shop Collection",
      primaryButtonLink: "/products",
      backgroundImageUrl: "",
    }
  });

  const onSubmit = (data: HeroSectionContent) => {
    setError(null);
    setSuccess(false);
    startTransition(async () => {
      const result = await saveHeroSectionAction(data);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Failed to save hero section");
      }
    });
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h3 className="text-lg font-semibold">Hero Section</h3>
          <p className="text-sm text-muted-foreground">Manage the main landing banner on the storefront.</p>
        </div>
      </div>

      {error && <div className="text-sm text-destructive">{error}</div>}
      {success && <div className="text-sm text-emerald-600">Saved successfully!</div>}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hero-heading">Heading</Label>
              <Input id="hero-heading" {...form.register("heading")} />
              {form.formState.errors.heading && (
                <p className="text-xs text-destructive">{form.formState.errors.heading.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hero-subheading">Subheading</Label>
              <textarea 
                id="hero-subheading" 
                {...form.register("subheading")}
                className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primary-btn-text">Primary Button Text</Label>
                <Input id="primary-btn-text" {...form.register("primaryButtonText")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-btn-link">Primary Button Link</Label>
                <Input id="primary-btn-link" {...form.register("primaryButtonLink")} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Hero Background Image</Label>
            <ImageUploadZone
              images={
                form.watch("backgroundImageUrl")
                  ? [{ url: form.watch("backgroundImageUrl")!, isPrimary: true, altText: "" }]
                  : []
              }
              onImagesChange={(images) => {
                if (images.length > 0) {
                  form.setValue("backgroundImageUrl", images[0].url, { shouldValidate: true, shouldDirty: true });
                } else {
                  form.setValue("backgroundImageUrl", "", { shouldValidate: true, shouldDirty: true });
                }
              }}
            />
            <p className="text-xs text-muted-foreground">Upload an image directly here. It will automatically update the field.</p>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
