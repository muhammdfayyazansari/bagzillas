import { HeroSection } from "@/features/storefront/components/hero-section";
import { FeaturedProductsSection } from "@/features/storefront/components/featured-products-section";
import { CategoriesSection } from "@/features/storefront/components/categories-section";
import { TrustSection } from "@/features/storefront/components/trust-section";
import { TestimonialsSection } from "@/features/storefront/components/testimonials-section";
import { NewsletterSection } from "@/features/storefront/components/newsletter-section";
import { homepageService } from "@/server/services/homepage.service";

export const metadata = {
  title: "Bagzillas - Premium School Bags in Pakistan",
  description: "Shop the best quality backpacks, tote bags, and accessories for students in Pakistan.",
};

export default async function HomePage() {
  const [hero, products, trust, testimonials] = await Promise.all([
    homepageService.getHeroSection(),
    homepageService.getResolvedFeaturedProducts(),
    homepageService.getTrustSection(),
    homepageService.getTestimonialsSection(),
  ]);

  return (
    <>
      <HeroSection data={hero || undefined} />
      <CategoriesSection />
      <FeaturedProductsSection products={products} />
      <TrustSection data={trust || undefined} />
      <TestimonialsSection data={testimonials || undefined} />
      <NewsletterSection />
    </>
  );
}
