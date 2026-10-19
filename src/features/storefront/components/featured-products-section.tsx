import * as React from "react";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";

// Real Albus PK Live Product Catalog
export const ALBUS_PRODUCTS = [
  {
    id: "albus-s1",
    slug: "s1-backpack",
    title: "S1 BackPack",
    price: 2390,
    compareAtPrice: 3000,
    imageUrl: "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/5.jpg?v=1782210619",
    category: "Backpacks",
    isNew: true,
  },
  {
    id: "albus-all-in-one",
    slug: "all-in-one-carry-bag",
    title: "All in One Carry Bag",
    price: 2490,
    compareAtPrice: 3200,
    imageUrl: "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/Black_Bag_1.png?v=1785407749",
    category: "Travel Bags",
    isFeatured: true,
  },
  {
    id: "albus-onyx",
    slug: "the-onyx-backpack",
    title: "The Onyx Backpack",
    price: 2890,
    compareAtPrice: 3500,
    imageUrl: "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/Black_3.png?v=1784643766",
    category: "Backpacks",
    isNew: true,
  },
  {
    id: "albus-s1-bundle",
    slug: "s1-premium-leather-backpack",
    title: "S1 Premium Leather Backpack + One Fanny Bag Free",
    price: 3490,
    compareAtPrice: 4500,
    imageUrl: "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/1sst.png?v=1781867609",
    category: "Backpacks",
    isFeatured: true,
  },
];

interface FeaturedProductsSectionProps {
  products?: any[];
}

export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  const displayProducts =
    products && products.length > 0
      ? products.map((p) => ({
          id: p.id,
          slug: p.slug,
          title: p.name,
          price: Number(p.price),
          compareAtPrice: p.compareAtPrice ? Number(p.compareAtPrice) : undefined,
          imageUrl:
            p.images?.[0]?.url ||
            "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/5.jpg?v=1782210619",
          category: p.category?.name || "Backpacks",
          isFeatured: p.isFeatured,
        }))
      : ALBUS_PRODUCTS;

  return (
    <section id="products" className="py-12 sm:py-20 md:py-28 bg-stone-50">
      <SectionContainer>
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B5E3C]/10 text-[#8B5E3C] text-[11px] sm:text-xs font-semibold mb-2 sm:mb-3">
              <Flame className="h-3.5 w-3.5" />
              <span>BEST SELLING IN PAKISTAN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 mb-2 sm:mb-3">
              Bestselling Carry Essentials
            </h2>
            <p className="text-stone-600 text-xs sm:text-base md:text-lg">
              Engineered with premium weather-resistant leather, smart compartments, and minimalist aesthetics.
            </p>
          </div>

          <Button
            variant="outline"
            asChild
            className="shrink-0 w-full sm:w-fit rounded-full border-stone-300 hover:bg-stone-900 hover:text-white transition-colors text-xs sm:text-sm py-4"
          >
            <Link href="/products" className="flex items-center justify-center">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* PRODUCTS GRID (2 columns on mobile, 4 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
