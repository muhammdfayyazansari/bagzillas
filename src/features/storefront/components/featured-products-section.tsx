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
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    category: "Backpacks",
    isNew: true,
  },
  {
    id: "2",
    slug: "urban-commuter-tote",
    title: "Urban Commuter Tote",
    price: 3200,
    compareAtPrice: 4000,
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    category: "Tote Bags",
  },
  {
    id: "3",
    slug: "weekend-duffel-pro",
    title: "Weekend Duffel Pro",
    price: 6800,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    category: "Duffel Bags",
    isFeatured: true,
  },
  {
    id: "4",
    slug: "student-essential-pack",
    title: "Student Essential Pack",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1491845112529-650a23274cb7?q=80&w=1000&auto=format&fit=crop",
    category: "Backpacks",
  },
];

interface FeaturedProductsSectionProps {
  products?: any[]; // Prisma Product model array
}

export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  // If we have actual products from DB, map them. Otherwise fallback to mock.
  const displayProducts = products && products.length > 0
    ? products.map(p => ({
        id: p.id,
        slug: p.slug,
        title: p.name,
        price: Number(p.price),
        compareAtPrice: p.compareAtPrice ? Number(p.compareAtPrice) : undefined,
        // Since images are separate, we might just have a placeholder or need to fetch them.
        // In this step, we'll use a placeholder if no image is included.
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop", 
        category: p.categoryId || "Bags", // We could join category in the service layer later
        isFeatured: p.isFeatured,
      }))
    : mockFeaturedProducts;

  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Arrivals</h2>
            <p className="text-muted-foreground text-lg">
              Discover our latest collection of premium bags designed for the modern student and traveler.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0 w-fit">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
