import { SectionContainer } from "@/components/layout/section-container";
import { ProductImageGallery } from "@/features/storefront/components/product-image-gallery";
import { ProductInfo } from "@/features/storefront/components/product-info";
import { RelatedProducts } from "@/features/storefront/components/related-products";

export const metadata = {
  title: "Classic Leather Backpack | Bagzillas",
  description: "Premium full-grain leather backpack for daily commute.",
};

// Mock Data for a single product
const mockProduct = {
  id: "1",
  slug: "classic-leather-backpack",
  title: "Classic Leather Backpack",
  price: 4500,
  compareAtPrice: 5500,
  description: "The Classic Leather Backpack is designed for the modern professional and student. Crafted from premium full-grain synthetic leather, it offers unparalleled durability and a timeless aesthetic. Features a padded laptop sleeve, water-resistant exterior, and ergonomic shoulder straps for all-day comfort.",
  category: "Backpacks",
  isNew: true,
  sku: "BGZ-BP-001",
  inStock: true,
  images: [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1491845112529-650a23274cb7?q=80&w=1000&auto=format&fit=crop"
  ]
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, we would fetch the product by slug here.
  // For now, we just use the mock product.
  
  return (
    <>
      <SectionContainer className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ProductImageGallery images={mockProduct.images} productName={mockProduct.title} />
          <div className="lg:py-8">
            <ProductInfo product={mockProduct} />
          </div>
        </div>
      </SectionContainer>

      <RelatedProducts />
    </>
  );
}
