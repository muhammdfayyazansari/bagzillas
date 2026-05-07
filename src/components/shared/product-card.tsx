"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cart.store";

export interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    title: string;
    price: number;
    compareAtPrice?: number;
    imageUrl: string;
    category: string;
    isNew?: boolean;
    isFeatured?: boolean;
  };
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={cn("group flex flex-col relative", className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted/30 mb-4">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.isNew && <Badge className="bg-blue-600 hover:bg-blue-700">New</Badge>}
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <Badge variant="destructive">Sale</Badge>
          )}
        </div>

        {/* Image */}
        <Link href={`/products/${product.slug}`}>
          <div className="h-full w-full relative">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
          </div>
        </Link>

        {/* Quick Add Button Overlay */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 transition-all duration-300 ease-in-out z-10",
            isHovered && "translate-y-0 opacity-100"
          )}
        >
          <Button 
            className="w-full shadow-lg gap-2 bg-background text-foreground hover:bg-background/90" 
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              useCartStore.getState().addItem({
                productId: product.id,
                name: product.title,
                slug: product.slug,
                price: product.price,
                quantity: 1,
                imageUrl: product.imageUrl,
              });
              useCartStore.getState().setIsOpen(true);
            }}
          >
            <ShoppingCart className="h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1">
        <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-medium">
          {product.category}
        </div>
        <Link href={`/products/${product.slug}`} className="block mb-2">
          <h3 className="text-base font-medium text-foreground line-clamp-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="mt-auto flex items-center gap-2">
          <span className="text-sm font-semibold">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted-foreground line-through">
              Rs. {product.compareAtPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
