"use client";

import * as React from "react";
import { ShoppingBag, Heart, Share2, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProductInfoProps {
  product: {
    id: string;
    title: string;
    price: number;
    compareAtPrice?: number;
    description: string;
    category: string;
    isNew?: boolean;
    sku: string;
    inStock: boolean;
  };
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
            {product.category}
          </p>
          {product.isNew && <Badge className="bg-blue-600 hover:bg-blue-700">New Arrival</Badge>}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {product.title}
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">Rs. {product.price.toLocaleString()}</span>
          {product.compareAtPrice && (
            <span className="text-xl text-muted-foreground line-through">
              Rs. {product.compareAtPrice.toLocaleString()}
            </span>
          )}
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <Badge variant="destructive" className="ml-auto">
              Save Rs. {(product.compareAtPrice - product.price).toLocaleString()}
            </Badge>
          )}
        </div>
      </div>

      <Separator />

      <div className="prose prose-sm sm:prose-base text-muted-foreground">
        <p>{product.description}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-lg hover:bg-muted transition-colors"
            >
              -
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-lg hover:bg-muted transition-colors"
            >
              +
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="flex-1 text-base h-12" disabled={!product.inStock}>
            <ShoppingBag className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          <Button size="lg" variant="outline" className="px-4 h-12">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
          <Button size="lg" variant="outline" className="px-4 h-12">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4 text-sm text-muted-foreground">
        <p><strong>SKU:</strong> {product.sku}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            <span>Fast delivery nationwide</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span>1 Year warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            <span>7-day return policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
