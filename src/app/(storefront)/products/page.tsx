import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductFilters, DesktopFilterSidebar } from "@/features/storefront/components/product-filters";
import { ProductGrid } from "@/features/storefront/components/product-grid";

export const metadata = {
  title: "Shop All Bags | Bagzillas",
  description: "Browse our complete collection of backpacks, tote bags, and accessories.",
};

// Mock Data
const allProducts = [
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
  },
  {
    id: "4",
    slug: "student-essential-pack",
    title: "Student Essential Pack",
    price: 2500,
    imageUrl: "https://res.cloudinary.com/dzimxrsfd/image/upload/v1778175281/bagzillas/products/file_qswnzw.webp",
    category: "Backpacks",
  },
  {
    id: "5",
    slug: "mini-crossbody",
    title: "Mini Crossbody Bag",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
  },
  {
    id: "6",
    slug: "gym-sports-duffel",
    title: "Gym & Sports Duffel",
    price: 4200,
    compareAtPrice: 4800,
    imageUrl: "https://images.unsplash.com/photo-1552345388-910403714b62?q=80&w=1000&auto=format&fit=crop",
    category: "Duffel Bags",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="All Products"
        description="Find the perfect companion for your daily journey. From durable backpacks to stylish totes."
      />

      <SectionContainer className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <DesktopFilterSidebar />

          <div className="flex-1">
            <ProductFilters />
            <ProductGrid products={allProducts} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
