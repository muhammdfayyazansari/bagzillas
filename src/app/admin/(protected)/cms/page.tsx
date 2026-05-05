import type { Metadata } from "next";
import { HeroEditor } from "@/features/admin/components/cms/hero-editor";
import { FeaturedSelector } from "@/features/admin/components/cms/featured-selector";

export const metadata: Metadata = {
  title: "Homepage CMS | Admin Dashboard",
};

export default function CMSPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Homepage CMS</h1>
        <p className="text-muted-foreground mt-1">
          Customize the content blocks on your public storefront homepage.
        </p>
      </div>

      <div className="grid gap-6">
        <HeroEditor />
        <FeaturedSelector />
      </div>
    </div>
  );
}
