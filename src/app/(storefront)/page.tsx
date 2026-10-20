import { HeroSection } from "@/features/storefront/components/hero-section";
import { AlbusBrandMessage } from "@/features/storefront/components/albus-brand-message";
import { FeaturedProductsSection } from "@/features/storefront/components/featured-products-section";
import { AlbusStorySection } from "@/features/storefront/components/albus-story-section";
import { AlbusScrollingTicker } from "@/features/storefront/components/albus-scrolling-ticker";
import { AlbusComparisonSection } from "@/features/storefront/components/albus-comparison-section";
import { AlbusFeedReels } from "@/features/storefront/components/albus-feed-reels";
import { AlbusFaqSection } from "@/features/storefront/components/albus-faq-section";
import { TestimonialsSection } from "@/features/storefront/components/testimonials-section";
import { TrustSection } from "@/features/storefront/components/trust-section";
import { homepageService } from "@/server/services/homepage.service";

export const metadata = {
  title: "Bagzillas Pakistan | Premium Backpacks & Everyday Carry Bags",
  description:
    "Carry with confidence with Bagzillas premium backpacks—crafted for style, durability, and daily comfort. Cash on Delivery across Pakistan.",
};

export default async function HomePage() {
  const [hero, products, trust, testimonials] = await Promise.all([
    homepageService.getHeroSection(),
    homepageService.getResolvedFeaturedProducts(),
    homepageService.getTrustSection(),
    homepageService.getTestimonialsSection(),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Slideshow Hero Carousel */}
      <HeroSection data={hero || undefined} />

      {/* 2. Brand Message Block ("Luxury You Can Carry") */}
      <AlbusBrandMessage />

      {/* 3. Best Selling Products Grid */}
      <FeaturedProductsSection products={products} />

      {/* 4. Brand Story Lookbook ("Carry Your Story") */}
      <AlbusStorySection />

      {/* 5. Brown Scrolling Marquee Banner ("Buy 1 Get 1 Free...") */}
      <AlbusScrollingTicker />

      {/* 6. Comparison Table ("Why Bagzillas?") */}
      <AlbusComparisonSection />

      {/* 7. Video Gallery ("As Seen in Your Feed") */}
      <AlbusFeedReels />

      {/* 8. Frequently Asked Questions */}
      <AlbusFaqSection />

      {/* 9. Customer Testimonials ("What Our Customers Say") */}
      <TestimonialsSection data={testimonials || undefined} />

      {/* 10. 3-Column Icon Box (Free Shipping, Return Policy, Customer Support) */}
      <TrustSection data={trust || undefined} />
    </div>
  );
}
