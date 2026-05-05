import type { ProductImage } from "@prisma/client";

import type {
  ProductDetailEntity,
  ProductListRow,
} from "@/server/db/repositories/product.repository";
import { ADMIN_CATEGORY_NONE_VALUE } from "@/constants/admin-product-ui";
import type { AdminProductListItem } from "@/features/products/types/product.types";

function priceToString(price: { toString: () => string }) {
  return price.toString();
}

export function serializeProductListRow(row: ProductListRow): AdminProductListItem {
  const primary = row.images[0];
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    sku: row.sku,
    price: priceToString(row.price),
    stockQuantity: row.stockQuantity,
    status: row.status,
    isFeatured: row.isFeatured,
    updatedAt: row.updatedAt.toISOString(),
    category: row.category
      ? { id: row.category.id, name: row.category.name }
      : null,
    primaryImageUrl: primary?.url ?? null,
  };
}

export function productDetailToFormValues(product: ProductDetailEntity) {
  const primaryIdx = product.images.findIndex((i) => i.isPrimary);
  const ordered =
    primaryIdx > 0
      ? [
          product.images[primaryIdx],
          ...product.images.filter((_, i) => i !== primaryIdx),
        ]
      : product.images;

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    sku: product.sku,
    description: product.description ?? "",
    shortDescription: product.shortDescription ?? "",
    status: product.status,
    price: product.price.toString(),
    compareAtPrice: product.compareAtPrice?.toString() ?? "",
    costPrice: product.costPrice?.toString() ?? "",
    stockQuantity: String(product.stockQuantity),
    categoryId: product.categoryId ?? ADMIN_CATEGORY_NONE_VALUE,
    isFeatured: product.isFeatured,
    images: ordered.map((img: ProductImage) => ({
      url: img.url,
      altText: img.altText ?? "",
      isPrimary: img.isPrimary,
    })),
  };
}
