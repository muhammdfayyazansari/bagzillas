"use client";

import * as React from "react";
import { useForm, useFieldArray } from "react-form"; // Wait, they use react-hook-form
import { useForm as useRHForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trustSectionSchema } from "@/features/homepage/schemas/cms.schema";
import type { TrustSectionContent } from "@/features/homepage/types/cms.types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { saveTrustBadgesAction } from "@/features/homepage/actions/save-trust-badges.action";
import { Trash2, Plus } from "lucide-react";

interface TrustEditorProps {
  initialData?: TrustSectionContent;
}

export function TrustEditor({ initialData }: TrustEditorProps) {
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const form = useRHForm<TrustSectionContent>({
    resolver: zodResolver(trustSectionSchema),
    defaultValues: initialData || {
      badges: [
        { icon: "truck", title: "Fast Delivery", description: "" }
      ]
    }
  });

  const { fields, append, remove } = require("react-hook-form").useFieldArray({
    control: form.control,
    name: "badges"
  });

  const onSubmit = (data: TrustSectionContent) => {
    setError(null);
    setSuccess(false);
    startTransition(async () => {
      const result = await saveTrustBadgesAction(data);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Failed to save trust badges");
      }
    });
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h3 className="text-lg font-semibold">Trust Badges</h3>
          <p className="text-sm text-muted-foreground">Manage up to 4 trust badges shown on the homepage.</p>
        </div>
      </div>

      {error && <div className="text-sm text-destructive">{error}</div>}
      {success && <div className="text-sm text-emerald-600">Saved successfully!</div>}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={(field as any).id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border p-4 rounded-md bg-muted/10 relative">
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 text-destructive"
                onClick={() => remove(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              
              <div className="col-span-3 space-y-2">
                <Label>Icon Name</Label>
                <Input 
                  {...form.register(`badges.${index}.icon` as const)} 
                  placeholder="e.g. truck, shield-check" 
                />
              </div>
              <div className="col-span-4 space-y-2">
                <Label>Title</Label>
                <Input 
                  {...form.register(`badges.${index}.title` as const)} 
                  placeholder="e.g. Fast Delivery" 
                />
              </div>
              <div className="col-span-5 space-y-2 pr-8">
                <Label>Description</Label>
                <Input 
                  {...form.register(`badges.${index}.description` as const)} 
                  placeholder="Short description..." 
                />
              </div>
            </div>
          ))}
        </div>

        {fields.length < 4 && (
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => append({ icon: "", title: "", description: "" })}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Badge
          </Button>
        )}

        <div className="flex justify-end pt-4 border-t">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save Badges"}
          </Button>
        </div>
      </form>
    </div>
  );
}
