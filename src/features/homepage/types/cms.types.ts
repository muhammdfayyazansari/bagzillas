import { z } from "zod";
import { 
  heroSectionSchema, 
  featuredProductsSchema, 
  trustSectionSchema, 
  testimonialsSectionSchema,
  trustBadgeSchema,
  testimonialSchema
} from "../schemas/cms.schema";

export type HeroSectionContent = z.infer<typeof heroSectionSchema>;
export type FeaturedProductsContent = z.infer<typeof featuredProductsSchema>;
export type TrustBadgeContent = z.infer<typeof trustBadgeSchema>;
export type TrustSectionContent = z.infer<typeof trustSectionSchema>;
export type TestimonialContent = z.infer<typeof testimonialSchema>;
export type TestimonialsSectionContent = z.infer<typeof testimonialsSectionSchema>;

export const CMS_KEYS = {
  HERO: "HERO_SECTION",
  FEATURED_PRODUCTS: "FEATURED_PRODUCTS",
  TRUST_BADGES: "TRUST_BADGES",
  TESTIMONIALS: "TESTIMONIALS",
} as const;
