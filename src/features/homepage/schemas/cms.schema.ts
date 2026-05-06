import { z } from "zod";

export const heroSectionSchema = z.object({
  heading: z.string().min(1, "Heading is required").max(100),
  subheading: z.string().max(300).optional(),
  primaryButtonText: z.string().max(50).optional(),
  primaryButtonLink: z.string().max(200).optional(),
  backgroundImageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

export const featuredProductsSchema = z.object({
  productIds: z.array(z.string().uuid("Invalid Product ID")),
});

export const trustBadgeSchema = z.object({
  icon: z.string().min(1, "Icon identifier is required"),
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().max(200).optional(),
});

export const trustSectionSchema = z.object({
  badges: z.array(trustBadgeSchema).max(4, "Maximum of 4 badges allowed"),
});

export const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  role: z.string().max(100).optional(),
  content: z.string().min(1, "Testimonial content is required").max(500),
  rating: z.number().min(1).max(5).default(5),
  avatarUrl: z.string().url().optional().or(z.literal("")),
});

export const testimonialsSectionSchema = z.object({
  testimonials: z.array(testimonialSchema),
});
