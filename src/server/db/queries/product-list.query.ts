import type { Prisma } from "@prisma/client";
import type { ProductStatus } from "@prisma/client";

export type ProductListFilters = {
  search?: string | null;
  status?: ProductStatus | null;
  categoryId?: string | null;
};

export function buildProductListWhere(
  filters: ProductListFilters
): Prisma.ProductWhereInput {
  const where: Prisma.ProductWhereInput = {};
  const q = filters.search?.trim();
  if (q) {
    where.OR = [
      { name: { contains: q, mode: "insensitive" } },
      { sku: { contains: q, mode: "insensitive" } },
      { slug: { contains: q, mode: "insensitive" } },
    ];
  }
  if (filters.status) {
    where.status = filters.status;
  }
  if (filters.categoryId) {
    where.categoryId = filters.categoryId;
  }
  return where;
}
