import { HeroSection } from "@/features/storefront/components/hero-section";
import { FeaturedProductsSection } from "@/features/storefront/components/featured-products-section";
import { CategoriesSection } from "@/features/storefront/components/categories-section";
import { TrustSection } from "@/features/storefront/components/trust-section";
import { TestimonialsSection } from "@/features/storefront/components/testimonials-section";
import { NewsletterSection } from "@/features/storefront/components/newsletter-section";

export const metadata = {
  title: "Bagzillas - Premium School Bags in Pakistan",
  description: "Shop the best quality backpacks, tote bags, and accessories for students in Pakistan.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <TrustSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
