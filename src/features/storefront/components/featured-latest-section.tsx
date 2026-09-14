"use client";
import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";

// Mock Data
const mockFeaturedProducts = [
  {
    id: "1",
    slug: "classic-leather-backpack",
    title: "Classic Leather Backpack",
    price: 4500,
    imageUrl:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    category: "new-arrivals",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "2",
    slug: "urban-commuter-tote",
    title: "Urban Commuter Tote",
    price: 3200,
    compareAtPrice: 4000,
    imageUrl:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    category: "softside-luggage",
    isFeatured: true,
  },
  {
    id: "3",
    slug: "weekend-duffel-pro",
    title: "Weekend Duffel Pro",
    price: 6800,
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    category: "softside-luggage",
    isFeatured: true,
  },
  {
    id: "4",
    slug: "student-essential-pack",
    title: "Student Essential Pack",
    price: 2500,
    imageUrl:
      "https://res.cloudinary.com/dzimxrsfd/image/upload/v1778175281/bagzillas/products/file_qswnzw.webp",
    category: "new-arrivals",
    isNew: true,
  },
  {
    id: "5",
    slug: "premium-travel-backpack",
    title: "Premium Travel Backpack",
    price: 7500,
    compareAtPrice: 9000,
    imageUrl:
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=1000&auto=format&fit=crop",
    category: "luggage",
    isFeatured: true,
  },
  {
    id: "6",
    slug: "minimalist-laptop-bag",
    title: "Minimalist Laptop Bag",
    price: 3900,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    category: "new-arrivals",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "7",
    slug: "canvas-daypack",
    title: "Canvas Daypack",
    price: 2800,
    compareAtPrice: 3500,
    imageUrl:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000&auto=format&fit=crop",
    category: "softside-luggage",
  },
  {
    id: "8",
    slug: "executive-leather-briefcase",
    title: "Executive Leather Briefcase",
    price: 8500,
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    category: "softside-luggage",
    isFeatured: true,
  },
  {
    id: "9",
    slug: "compact-sling-bag",
    title: "Compact Sling Bag",
    price: 1800,
    compareAtPrice: 2200,
    imageUrl:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000&auto=format&fit=crop",
    category: "new-arrivals",
    isNew: true,
  },
  {
    id: "10",
    slug: "premium-gym-duffel",
    title: "Premium Gym Duffel",
    price: 4200,
    imageUrl:
      "https://images.unsplash.com/photo-1580087464351-2e5f4c1e9a0a?q=80&w=1000&auto=format&fit=crop",
    category: "softside-luggage",
    isFeatured: true,
  },
  {
    id: "11",
    slug: "everyday-crossbody",
    title: "Everyday Crossbody",
    price: 2300,
    compareAtPrice: 2800,
    imageUrl:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
    category: "new-arrivals",
    isNew: true,
  },
  {
    id: "12",
    slug: "waterproof-adventure-pack",
    title: "Waterproof Adventure Pack",
    price: 5900,
    imageUrl:
      "https://images.unsplash.com/photo-1622260614153-03223fb72052?q=80&w=1000&auto=format&fit=crop",
    category: "softside-luggage",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "13",
    slug: "classic-school-backpack",
    title: "Classic School Backpack",
    price: 2200,
    compareAtPrice: 2700,
    imageUrl:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1000&auto=format&fit=crop",
    category: "new-arrivals",
  },
  {
    id: "14",
    slug: "premium-carry-on-bag",
    title: "Premium Carry-On Bag",
    price: 7200,
    imageUrl:
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1000&auto=format&fit=crop",
    category: "hardtop-suitcase",
    isFeatured: true,
  },
  {
    id: "15",
    slug: "streetwear-mini-backpack",
    title: "Streetwear Mini Backpack",
    price: 2900,
    imageUrl:
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1000&auto=format&fit=crop",
    category: "new-arrivals",
    isNew: true,
  },
  {
    id: "16",
    slug: "luxury-leather-duffel",
    title: "Luxury Leather Duffel",
    price: 12500,
    compareAtPrice: 15000,
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    category: "softside-luggage",
    isFeatured: true,
    isNew: true,
  },
];

interface FeaturedLatestSectionProps {
  products?: any[]; // Prisma Product model array
}

export function FeaturedLatestSection({
  products,
}: FeaturedLatestSectionProps) {
  const [isActive, setIsActive] = React.useState("new-arrivals");

  // If we have actual products from DB, map them. Otherwise fallback to mock.
  const displayProducts =
    products && products.length > 0
      ? products.map((p) => ({
          id: p.id,
          slug: p.slug,
          title: p.name,
          price: Number(p.price),
          compareAtPrice: p.compareAtPrice
            ? Number(p.compareAtPrice)
            : undefined,
          // Since images are separate, we might just have a placeholder or need to fetch them.
          // In this step, we'll use a placeholder if no image is included.
          imageUrl:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
          category: p.categoryId || "Bags", // We could join category in the service layer later
          isFeatured: p.isFeatured,
        }))
      : mockFeaturedProducts;

  return (
    <section className="py-10">
      <SectionContainer>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 ">
          <div className="max-w-2xl">
            {/* <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Arrivals</h2> */}
            {/* <p className="text-muted-foreground text-lg">
              Discover our latest collection of premium bags designed for the modern student and traveler.
            </p> */}
          </div>
          <div className="flex gap-4">
            {[
              { id: "1", label: "NEW ARRIVALS", value: "new-arrivals" },
              // { id: "2", label: "FEATURED PRODUCTS", value: "featured-products" },
              { id: "3", label: "luggage", value: "luggage" },
              { id: "4", label: "hardtop suitcase", value: "hardtop-suitcase" },
              { id: "5", label: "softside luggage", value: "softside-luggage" },
            ].map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setIsActive(tab.value)}
                variant="outline"
                className={` p-6 text-md tracking-wide uppercase ${isActive === tab.value ? "text-background hover:bg-primary hover:text-background bg-primary" : ""}`}
              >
                {tab?.label}
                {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
              </Button>
            ))}
          </div>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayProducts
            .filter((p) => p.category === isActive)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="
            mt-2
            rounded-lg
            bg-primary
            px-6
            py-5
            text-base
            uppercase
            tracking-wide
            text-background
            hover:bg-bz-green
            hover:text-background
            sm:px-8
            sm:py-6
            sm:text-lg
          "
          >
            See More
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
