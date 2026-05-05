"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Search, GripVertical, X } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data
const initialFeatured = [
  { id: "1", title: "Classic Leather Backpack", sku: "BGZ-BP-001" },
  { id: "2", title: "Urban Commuter Tote", sku: "BGZ-TT-002" },
  { id: "3", title: "Weekend Duffel Pro", sku: "BGZ-DF-003" },
  { id: "4", title: "Student Essential Pack", sku: "BGZ-BP-004" },
];

export function FeaturedSelector() {
  const [featured, setFeatured] = React.useState(initialFeatured);

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h3 className="text-lg font-semibold">Featured Products</h3>
          <p className="text-sm text-muted-foreground">Select and arrange products for the "Featured Arrivals" section.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products to add..." className="pl-9" />
          </div>
          <Button variant="secondary">Add</Button>
        </div>

        <div className="border rounded-md divide-y">
          {featured.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-3 bg-background hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <div className="h-10 w-10 bg-muted rounded border flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">{product.title}</p>
                  <p className="text-xs text-muted-foreground">{product.sku}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setFeatured(featured.filter(p => p.id !== product.id))}>
                <X className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          ))}
          {featured.length === 0 && (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No featured products selected.
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t">
        <Button>Save Selection</Button>
      </div>
    </div>
  );
}
