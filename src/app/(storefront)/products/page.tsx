import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductFilters, DesktopFilterSidebar } from "@/features/storefront/components/product-filters";
import { ProductGrid } from "@/features/storefront/components/product-grid";
import { ALBUS_PRODUCTS } from "@/features/storefront/components/featured-products-section";

export const metadata = {
  title: "Shop All Bags | ALBUS Pakistan",
  description: "Browse the complete ALBUS collection of premium backpacks and carry bags.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="All Products"
        description="Premium leather backpacks and carry bags crafted for style, comfort, and everyday confidence."
      />

      <SectionContainer className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <DesktopFilterSidebar />

          <div className="flex-1">
            <ProductFilters />
            <ProductGrid products={ALBUS_PRODUCTS} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
