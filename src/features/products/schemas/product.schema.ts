import { ProductStatus } from "@prisma/client";
import { z } from "zod";

const PRODUCT_STATUSES = [
  ProductStatus.DRAFT,
  ProductStatus.ACTIVE,
  ProductStatus.ARCHIVED,
] as const;

const productImageSchema = z.object({
  url: z.string().url(),
  altText: z.string().max(500).nullable().optional(),
  sortOrder: z.number().int().min(0).optional(),
  isPrimary: z.boolean().optional(),
});

const optionalMoney = z
  .union([
    z.literal(""),
    z.coerce.number().nonnegative(),
    z.undefined(),
    z.null(),
  ])
  .transform((v) =>
    v === undefined || v === null || v === "" ? null : v.toFixed(2)
  );

const categoryIdField = z
  .union([z.string().uuid(), z.literal(""), z.null()])
  .optional()
  .transform((v) => {
    if (v === undefined || v === null || v === "") return null;
    return v;
  });

const baseProductFields = {
  name: z.string().trim().min(1, "Name is required.").max(200),
  slug: z
    .union([z.string(), z.null(), z.undefined()])
    .transform((v) => {
      if (v === undefined || v === null) return null;
      const t = v.trim().slice(0, 200);
      return t.length > 0 ? t : null;
    }),
  sku: z.string().trim().min(1, "SKU is required.").max(64),
  description: z.string().max(10000).optional().nullable(),
  shortDescription: z.string().max(500).optional().nullable(),
  status: z.enum(PRODUCT_STATUSES),
  price: z.coerce.number().nonnegative("Price must be zero or greater."),
  compareAtPrice: optionalMoney,
  costPrice: optionalMoney,
  stockQuantity: z.coerce.number().int().min(0),
  categoryId: categoryIdField,
  isFeatured: z.boolean().optional(),
  metadata: z.record(z.string(), z.unknown()).optional().nullable(),
  images: z.array(productImageSchema).max(20).optional().default([]),
};

export const createProductSchema = z.object(baseProductFields);

export const updateProductSchema = z.object({
  id: z.string().uuid(),
  ...baseProductFields,
});

export const adminProductListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(50).default(10),
  q: z.string().optional(),
  status: z.enum(PRODUCT_STATUSES).optional(),
  categoryId: z.string().uuid().optional(),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type AdminProductListQuery = z.infer<typeof adminProductListQuerySchema>;
