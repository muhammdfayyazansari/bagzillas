import type { ProductStatus } from "@prisma/client";

/** Serializable list row for admin UI (from Prisma select). */
export type AdminProductListItem = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: string;
  stockQuantity: number;
  status: ProductStatus;
  isFeatured: boolean;
  updatedAt: string;
  category: { id: string; name: string } | null;
  primaryImageUrl: string | null;
};

export type AdminProductListResponse = {
  items: AdminProductListItem[];
  total: number;
  page: number;
  pageSize: number;
};

export type AdminCategoryOption = {
  id: string;
  name: string;
  slug: string;
};

export type ProductFormValues = {
  id?: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  shortDescription: string;
  status: ProductStatus;
  price: string;
  compareAtPrice: string;
  costPrice: string;
  stockQuantity: string;
  /** Radix Select needs a non-empty sentinel for “no category”. */
  categoryId: string;
  isFeatured: boolean;
  images: { url: string; altText: string; isPrimary: boolean }[];
};
