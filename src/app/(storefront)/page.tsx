import { HeroSection } from "@/features/storefront/components/hero-section";
import { FeaturedProductsSection } from "@/features/storefront/components/featured-products-section";
import { AlbusStorySection } from "@/features/storefront/components/albus-story-section";
import { AlbusComparisonSection } from "@/features/storefront/components/albus-comparison-section";
import { TrustSection } from "@/features/storefront/components/trust-section";
import { TestimonialsSection } from "@/features/storefront/components/testimonials-section";
import { AlbusFaqSection } from "@/features/storefront/components/albus-faq-section";
import { homepageService } from "@/server/services/homepage.service";

export const metadata = {
  title: "ALBUS Pakistan | Premium Backpacks & Everyday Carry Bags",
  description:
    "Upgrade your everyday carry with ALBUS premium backpacks—crafted for style, durability, and daily comfort. Cash on Delivery across Pakistan.",
};

export default async function HomePage() {
  const [hero, products, trust, testimonials] = await Promise.all([
    homepageService.getHeroSection(),
    homepageService.getResolvedFeaturedProducts(),
    homepageService.getTrustSection(),
    homepageService.getTestimonialsSection(),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* 1. Hero Slideshow & Announcement Ticker */}
      <HeroSection data={hero || undefined} />

      {/* 2. Best Selling Carry Products Grid */}
      <FeaturedProductsSection products={products} />

      {/* 3. Brand Story & Lookbook ("Carry Your Story") */}
      <AlbusStorySection />

      {/* 4. Comparison Table ("Why ALBUS?") */}
      <AlbusComparisonSection />

      {/* 5. Trust Badges (Shipping, COD, Warranty) */}
      <TrustSection data={trust || undefined} />

      {/* 6. Customer Testimonials */}
      <TestimonialsSection data={testimonials || undefined} />

      {/* 7. FAQs Accordion */}
      <AlbusFaqSection />
    </div>
  );
}
