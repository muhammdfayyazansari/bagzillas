import * as React from "react";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductCard } from "@/components/shared/product-card";
import { BAGZILLAS_PRODUCTS } from "./featured-products-section";

export function RelatedProducts() {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-t border-stone-200 bg-stone-50">
      <SectionContainer>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-stone-900 mb-6 sm:mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {BAGZILLAS_PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
