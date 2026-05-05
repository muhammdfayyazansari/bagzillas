import * as React from "react";
import { ProductCard, ProductCardProps } from "@/components/shared/product-card";
import { EmptyState } from "@/components/shared/empty-state";
import { PackageX } from "lucide-react";

interface ProductGridProps {
  products: ProductCardProps["product"][];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <EmptyState
        icon={PackageX}
        title="No products found"
        description="We couldn't find any products matching your current filters. Try adjusting your search or clearing filters."
        className="my-12"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
