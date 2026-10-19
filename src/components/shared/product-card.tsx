"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, ShoppingCart } from "lucide-react";
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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    useCartStore.getState().addItem({
      productId: product.id,
      name: product.title,
      slug: product.slug,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    });
    useCartStore.getState().setIsOpen(true);
  };

  return (
    <motion.div
      className={cn("group flex flex-col relative mb-4 sm:mb-8", className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 mb-2.5 sm:mb-4 border border-stone-200/60 shadow-xs">
        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex flex-col gap-1.5">
          {product.isNew && (
            <Badge className="bg-[#8B5E3C] text-white text-[9.5px] sm:text-xs px-2 py-0.5 font-bold shadow-xs">
              New
            </Badge>
          )}
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <Badge variant="destructive" className="text-[9.5px] sm:text-xs px-2 py-0.5 font-bold shadow-xs">
              Sale
            </Badge>
          )}
        </div>

        {/* Mobile Quick Add Floating Button (visible on mobile only) */}
        <button
          type="button"
          onClick={handleAddToCart}
          aria-label="Quick Add to Cart"
          className="sm:hidden absolute bottom-2 right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-stone-900/90 text-white shadow-md active:scale-90 transition-transform backdrop-blur-xs"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>

        {/* Image */}
        <Link href={`/products/${product.slug}`} className="block h-full w-full">
          <div className="h-full w-full relative">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
            />
          </div>
        </Link>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 px-1">
        <div className="text-[10px] sm:text-xs text-stone-500 mb-0.5 uppercase tracking-wider font-semibold">
          {product.category}
        </div>
        <Link href={`/products/${product.slug}`} className="block mb-1 sm:mb-1.5">
          <h3 className="text-xs sm:text-sm md:text-base font-semibold text-stone-900 line-clamp-2 group-hover:text-[#8B5E3C] transition-colors leading-snug">
            {product.title}
          </h3>
        </Link>
        <div className="mt-auto flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-xs sm:text-sm md:text-base font-extrabold text-stone-900">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.compareAtPrice && (
            <span className="text-[10.5px] sm:text-xs text-stone-400 line-through">
              Rs. {product.compareAtPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* Desktop Quick Add Button Overlay */}
      <div
        className={cn(
          "hidden sm:block absolute bottom-0 left-0 right-0 p-3 translate-y-full opacity-0 transition-all duration-300 ease-in-out z-10",
          isHovered && "translate-y-16 opacity-100"
        )}
      >
        <Button
          className="w-full shadow-lg gap-2 bg-stone-900 text-white py-5 hover:bg-[#8B5E3C] rounded-full text-xs font-semibold tracking-wide transition-colors cursor-pointer"
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4" />
          Quick Add to Bag
        </Button>
      </div>
    </motion.div>
  );
}
