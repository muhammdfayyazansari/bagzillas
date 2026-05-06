import { homepageRepository } from "@/server/db/repositories/homepage.repository";
import { prisma } from "@/lib/prisma";
import { 
  heroSectionSchema, 
  featuredProductsSchema, 
  trustSectionSchema, 
  testimonialsSectionSchema 
} from "@/features/homepage/schemas/cms.schema";
import { CMS_KEYS } from "@/features/homepage/types/cms.types";
import type { 
  HeroSectionContent, 
  FeaturedProductsContent, 
  TrustSectionContent, 
  TestimonialsSectionContent 
} from "@/features/homepage/types/cms.types";

export const homepageService = {
  async getHeroSection(): Promise<HeroSectionContent | null> {
    const record = await homepageRepository.getByKey(CMS_KEYS.HERO);
    if (!record || record.status !== "PUBLISHED") return null;
    
    const parsed = heroSectionSchema.safeParse(record.content);
    return parsed.success ? parsed.data : null;
  },

  async getFeaturedProducts(): Promise<FeaturedProductsContent | null> {
    const record = await homepageRepository.getByKey(CMS_KEYS.FEATURED_PRODUCTS);
    if (!record || record.status !== "PUBLISHED") return null;

    const parsed = featuredProductsSchema.safeParse(record.content);
    return parsed.success ? parsed.data : null;
  },

  async getResolvedFeaturedProducts() {
    const content = await this.getFeaturedProducts();
    if (!content || content.productIds.length === 0) return [];

    const products = await prisma.product.findMany({
      where: {
        id: { in: content.productIds },
        status: "ACTIVE",
      },
    });

    // Reorder based on the saved array order
    return products.sort(
      (a, b) => content.productIds.indexOf(a.id) - content.productIds.indexOf(b.id)
    );
  },

  async getTrustSection(): Promise<TrustSectionContent | null> {
    const record = await homepageRepository.getByKey(CMS_KEYS.TRUST_BADGES);
    if (!record || record.status !== "PUBLISHED") return null;

    const parsed = trustSectionSchema.safeParse(record.content);
    return parsed.success ? parsed.data : null;
  },

  async getTestimonialsSection(): Promise<TestimonialsSectionContent | null> {
    const record = await homepageRepository.getByKey(CMS_KEYS.TESTIMONIALS);
    if (!record || record.status !== "PUBLISHED") return null;

    const parsed = testimonialsSectionSchema.safeParse(record.content);
    return parsed.success ? parsed.data : null;
  },

  async saveHeroSection(data: HeroSectionContent, adminId: string) {
    const validated = heroSectionSchema.parse(data);
    return homepageRepository.upsertContent(
      CMS_KEYS.HERO,
      "Hero Section",
      validated,
      adminId
    );
  },

  async saveFeaturedProducts(data: FeaturedProductsContent, adminId: string) {
    const validated = featuredProductsSchema.parse(data);
    return homepageRepository.upsertContent(
      CMS_KEYS.FEATURED_PRODUCTS,
      "Featured Products",
      validated,
      adminId
    );
  },

  async saveTrustSection(data: TrustSectionContent, adminId: string) {
    const validated = trustSectionSchema.parse(data);
    return homepageRepository.upsertContent(
      CMS_KEYS.TRUST_BADGES,
      "Trust Badges",
      validated,
      adminId
    );
  },

  async saveTestimonialsSection(data: TestimonialsSectionContent, adminId: string) {
    const validated = testimonialsSectionSchema.parse(data);
    return homepageRepository.upsertContent(
      CMS_KEYS.TESTIMONIALS,
      "Testimonials",
      validated,
      adminId
    );
  },
};
