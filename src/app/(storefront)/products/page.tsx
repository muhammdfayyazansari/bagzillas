import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductFilters, DesktopFilterSidebar } from "@/features/storefront/components/product-filters";
import { ProductGrid } from "@/features/storefront/components/product-grid";
import { BAGZILLAS_PRODUCTS } from "@/features/storefront/components/featured-products-section";

export const metadata = {
  title: "Shop All Bags | Bagzillas Pakistan",
  description: "Browse the complete Bagzillas collection of premium backpacks and carry bags.",
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedParams = await searchParams;
  const categoryParam = resolvedParams?.category?.toLowerCase();
  const searchParam = resolvedParams?.q?.toLowerCase();

  let products = BAGZILLAS_PRODUCTS;
  let pageTitle = "All Products";
  let pageDesc = "Premium leather backpacks and carry bags crafted for style, comfort, and everyday confidence.";

  if (categoryParam === "backpacks" || categoryParam === "backpack") {
    products = products.filter((p) => p.category.toLowerCase().includes("backpack"));
    pageTitle = "Backpacks Collection";
    pageDesc = "Ergonomic, water-resistant premium leather backpacks designed for modern professionals and students.";
  } else if (categoryParam === "travel-bags" || categoryParam === "travel") {
    products = products.filter((p) => p.category.toLowerCase().includes("travel"));
    pageTitle = "Travel Bags & Carry-Ons";
    pageDesc = "High-capacity all-in-one carry bags and travel essentials built for durability and convenience.";
  }

  if (searchParam) {
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(searchParam) ||
        p.category.toLowerCase().includes(searchParam) ||
        p.slug.toLowerCase().includes(searchParam)
    );
    pageTitle = `Search: "${resolvedParams.q}"`;
    pageDesc = `Showing search results for "${resolvedParams.q}".`;
  }

  return (
    <>
      <PageHeader
        title={pageTitle}
        description={pageDesc}
      />

      <SectionContainer className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <DesktopFilterSidebar />

          <div className="flex-1">
            <ProductFilters />
            <ProductGrid products={products} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
