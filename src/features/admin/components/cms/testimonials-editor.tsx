"use client";

import * as React from "react";
import { useForm as useRHForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { testimonialsSectionSchema } from "@/features/homepage/schemas/cms.schema";
import type { TestimonialsSectionContent } from "@/features/homepage/types/cms.types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { saveTestimonialsAction } from "@/features/homepage/actions/save-testimonials.action";
import { Trash2, Plus } from "lucide-react";

interface TestimonialsEditorProps {
  initialData?: TestimonialsSectionContent;
}

export function TestimonialsEditor({ initialData }: TestimonialsEditorProps) {
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const form = useRHForm<TestimonialsSectionContent>({
    resolver: zodResolver(testimonialsSectionSchema),
    defaultValues: initialData || {
      testimonials: []
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "testimonials"
  });

  const onSubmit = (data: TestimonialsSectionContent) => {
    setError(null);
    setSuccess(false);
    startTransition(async () => {
      const result = await saveTestimonialsAction(data);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Failed to save testimonials");
      }
    });
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h3 className="text-lg font-semibold">Testimonials</h3>
          <p className="text-sm text-muted-foreground">Manage customer reviews shown on the homepage.</p>
        </div>
      </div>

      {error && <div className="text-sm text-destructive">{error}</div>}
      {success && <div className="text-sm text-emerald-600">Saved successfully!</div>}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6">
          {fields.map((field, index) => (
            <div key={(field as any).id} className="grid gap-4 items-start border p-4 rounded-md bg-muted/10 relative">
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 text-destructive"
                onClick={() => remove(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Customer Name</Label>
                  <Input {...form.register(`testimonials.${index}.name` as const)} placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label>Role / School (Optional)</Label>
                  <Input {...form.register(`testimonials.${index}.role` as const)} placeholder="Student, LGS" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Review Content</Label>
                <textarea 
                  {...form.register(`testimonials.${index}.content` as const)}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Great bag, loved the quality!"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Rating (1-5)</Label>
                  <Input 
                    type="number" 
                    min="1" max="5" 
                    {...form.register(`testimonials.${index}.rating` as const, { valueAsNumber: true })} 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Avatar Image URL (Optional)</Label>
                  <Input {...form.register(`testimonials.${index}.avatarUrl` as const)} placeholder="https://..." />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button 
          type="button" 
          variant="outline" 
          onClick={() => append({ name: "", content: "", rating: 5, role: "", avatarUrl: "" })}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" /> Add Testimonial
        </Button>

        <div className="flex justify-end pt-4 border-t">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save Testimonials"}
          </Button>
        </div>
      </form>
    </div>
  );
}
