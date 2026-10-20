import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";

// Bagzillas Live Product Catalog
export const BAGZILLAS_PRODUCTS = [
  {
    id: "albus-s1-bundle",
    slug: "s1-premium-leather-backpack",
    title: "S1 Premium Leather Backpack + One Fanny Bag Free",
    price: 2499,
    compareAtPrice: 4999,
    imageUrl: "https://www.albus.pk/cdn/shop/files/media.jpg?v=1784714546&width=896",
    category: "Backpacks",
    isFeatured: true,
  },
  {
    id: "albus-onyx",
    slug: "the-onyx-backpack",
    title: "The Onyx Backpack",
    price: 1999,
    compareAtPrice: 4999,
    imageUrl: "https://www.albus.pk/cdn/shop/files/Black_3.png?v=1784643766&width=1122",
    category: "Backpacks",
    isNew: true,
  },
  {
    id: "albus-all-in-one",
    slug: "all-in-one-carry-bag",
    title: "All in One Carry Bag",
    price: 2490,
    compareAtPrice: 3200,
    imageUrl: "https://www.albus.pk/cdn/shop/files/Black_Bag_1.png?v=1785407749&width=1254",
    category: "Travel Bags",
    isFeatured: true,
  },
  {
    id: "albus-s1",
    slug: "s1-backpack",
    title: "S1 BackPack",
    price: 2390,
    compareAtPrice: 3000,
    imageUrl: "https://www.albus.pk/cdn/shop/files/5.jpg?v=1782210619&width=768",
    category: "Backpacks",
    isNew: true,
  },
];

export const ALBUS_PRODUCTS = BAGZILLAS_PRODUCTS;

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
            "https://www.albus.pk/cdn/shop/files/media.jpg?v=1784714546&width=896",
          category: p.category?.name || "Backpacks",
          isFeatured: p.isFeatured,
        }))
      : BAGZILLAS_PRODUCTS;

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-white border-b border-stone-100">
      <SectionContainer>
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 mb-1">
              Best Selling
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              Discover our most sought-after premium backpacks and everyday carry bags.
            </p>
          </div>

          <Button
            variant="outline"
            asChild
            className="shrink-0 w-full sm:w-fit rounded-full border-stone-300 hover:bg-[#8B5E3C] hover:text-white hover:border-[#8B5E3C] transition-colors text-xs sm:text-sm py-4"
          >
            <Link href="/products" className="flex items-center justify-center">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* PRODUCTS GRID (2 columns on mobile, 4 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
