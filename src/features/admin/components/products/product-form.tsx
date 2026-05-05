"use client";

import * as React from "react";
import { useForm } from "react-form"; // We use a placeholder form approach for now, or just standard HTML forms, but the stack uses react-hook-form.
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ImageUploadZone } from "./image-upload-zone";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export function ProductForm() {
  return (
    <form className="space-y-8 max-w-4xl" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column - Main Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">General Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="title">Product Title</Label>
              <Input id="title" placeholder="e.g. Classic Leather Backpack" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea 
                id="description" 
                className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="Product description..."
              />
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Media</h3>
            <ImageUploadZone />
          </div>
          
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Pricing & Inventory</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (Rs.)</Label>
                <Input id="price" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="comparePrice">Compare at Price (Rs.)</Label>
                <Input id="comparePrice" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" placeholder="BGZ-..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input id="stock" type="number" placeholder="0" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Organization */}
        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Status</h3>
            <Select defaultValue="active">
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Organization</h3>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select defaultValue="backpacks">
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="backpacks">Backpacks</SelectItem>
                  <SelectItem value="tote-bags">Tote Bags</SelectItem>
                  <SelectItem value="duffel-bags">Duffel Bags</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" type="button">Cancel</Button>
        <Button type="submit">Save Product</Button>
      </div>
    </form>
  );
}
