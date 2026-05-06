import type { Metadata } from "next";
import { HeroEditor } from "@/features/admin/components/cms/hero-editor";
import { FeaturedSelector } from "@/features/admin/components/cms/featured-selector";
import { TrustEditor } from "@/features/admin/components/cms/trust-editor";
import { TestimonialsEditor } from "@/features/admin/components/cms/testimonials-editor";
import { homepageService } from "@/server/services/homepage.service";

export const metadata: Metadata = {
  title: "Homepage CMS | Admin Dashboard",
};

export default async function CMSPage() {
  const [hero, featured, trust, testimonials] = await Promise.all([
    homepageService.getHeroSection(),
    homepageService.getFeaturedProducts(),
    homepageService.getTrustSection(),
    homepageService.getTestimonialsSection(),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Homepage CMS</h1>
        <p className="text-muted-foreground mt-1">
          Customize the content blocks on your public storefront homepage.
        </p>
      </div>

      <div className="grid gap-6">
        <HeroEditor initialData={hero || undefined} />
        <FeaturedSelector initialData={featured || undefined} />
        <TrustEditor initialData={trust || undefined} />
        <TestimonialsEditor initialData={testimonials || undefined} />
      </div>
    </div>
  );
}
