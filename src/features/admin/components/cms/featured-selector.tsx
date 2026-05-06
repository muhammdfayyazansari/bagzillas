"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Search, GripVertical, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { saveFeaturedProductsAction } from "@/features/homepage/actions/save-featured-products.action";
import type { FeaturedProductsContent } from "@/features/homepage/types/cms.types";

interface FeaturedSelectorProps {
  initialData?: FeaturedProductsContent;
}

export function FeaturedSelector({ initialData }: FeaturedSelectorProps) {
  const [productIds, setProductIds] = React.useState<string[]>(
    initialData?.productIds || []
  );
  
  // For UI purposes, we'll keep a simple text input to add IDs
  // In a full app, this would be a complex combobox searching the actual products.
  const [newId, setNewId] = React.useState("");

  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleAdd = () => {
    if (!newId) return;
    setProductIds([...productIds, newId]);
    setNewId("");
  };

  const handleSave = () => {
    setError(null);
    setSuccess(false);
    startTransition(async () => {
      const result = await saveFeaturedProductsAction({ productIds });
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Failed to save featured products");
      }
    });
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h3 className="text-lg font-semibold">Featured Products</h3>
          <p className="text-sm text-muted-foreground">Select and arrange products for the "Featured Arrivals" section by Product ID (UUID).</p>
        </div>
      </div>

      {error && <div className="text-sm text-destructive">{error}</div>}
      {success && <div className="text-sm text-emerald-600">Saved successfully!</div>}

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Enter Product UUID to add..." 
              className="pl-9" 
              value={newId}
              onChange={(e) => setNewId(e.target.value)}
            />
          </div>
          <Button variant="secondary" onClick={handleAdd}>Add</Button>
        </div>

        <div className="border rounded-md divide-y">
          {productIds.map((id, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-background hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <div className="h-10 w-10 bg-muted rounded border flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Product ID</p>
                  <p className="text-xs text-muted-foreground">{id}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setProductIds(productIds.filter((_, i) => i !== index))}
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          ))}
          {productIds.length === 0 && (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No featured products selected.
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t">
        <Button onClick={handleSave} disabled={isPending}>
          {isPending ? "Saving..." : "Save Selection"}
        </Button>
      </div>
    </div>
  );
}
