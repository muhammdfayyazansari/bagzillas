import * as React from "react";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductCard } from "@/components/shared/product-card";

// Using the same mock data structure as featured products for now
const relatedProductsMock = [
  {
    id: "101",
    slug: "classic-leather-backpack",
    title: "Classic Leather Backpack",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    category: "Backpacks",
  },
  {
    id: "102",
    slug: "urban-commuter-tote",
    title: "Urban Commuter Tote",
    price: 3200,
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    category: "Tote Bags",
  },
  {
    id: "103",
    slug: "student-essential-pack",
    title: "Student Essential Pack",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1491845112529-650a23274cb7?q=80&w=1000&auto=format&fit=crop",
    category: "Backpacks",
  },
];

export function RelatedProducts() {
  return (
    <section className="py-16 md:py-24 border-t bg-muted/10">
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {relatedProductsMock.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
