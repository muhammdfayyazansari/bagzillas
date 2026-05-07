import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  buildProductListWhere,
  type ProductListFilters,
} from "@/server/db/queries/product-list.query";

const listSelect = {
  id: true,
  name: true,
  slug: true,
  sku: true,
  price: true,
  stockQuantity: true,
  status: true,
  isFeatured: true,
  updatedAt: true,
  category: { select: { id: true, name: true } },
  images: {
    where: { isPrimary: true },
    take: 1,
    select: { url: true, altText: true },
  },
} satisfies Prisma.ProductSelect;

const detailInclude = {
  category: { select: { id: true, name: true, slug: true } },
  images: { orderBy: { sortOrder: "asc" as const } },
} satisfies Prisma.ProductInclude;

export type ProductListRow = Prisma.ProductGetPayload<{
  select: typeof listSelect;
}>;

export type ProductDetailEntity = Prisma.ProductGetPayload<{
  include: typeof detailInclude;
}>;

export type ProductImageCreateRow = {
  url: string;
  altText?: string | null;
  sortOrder: number;
  isPrimary: boolean;
};

export type ProductCreateRepoInput = {
  product: Prisma.ProductCreateInput;
  images: ProductImageCreateRow[];
};

export type ProductUpdateRepoInput = {
  id: string;
  data: Prisma.ProductUpdateInput;
  images?: ProductImageCreateRow[];
};

/** Data access only — no auth or domain rules. */
export const productRepository = {
  async slugExists(slug: string, excludeId?: string) {
    const found = await prisma.product.findFirst({
      where: {
        slug,
        ...(excludeId ? { id: { not: excludeId } } : {}),
      },
      select: { id: true },
    });
    return Boolean(found);
  },

  async skuExists(sku: string, excludeId?: string) {
    const found = await prisma.product.findFirst({
      where: {
        sku,
        ...(excludeId ? { id: { not: excludeId } } : {}),
      },
      select: { id: true },
    });
    return Boolean(found);
  },

  async findById(id: string) {
    return prisma.product.findUnique({
      where: { id },
      include: detailInclude,
    });
  },

  async findManyByIds(ids: string[]) {
    return prisma.product.findMany({
      where: { id: { in: ids } },
      include: detailInclude,
    });
  },

  async findManyPaginated(options: {
    page: number;
    pageSize: number;
    filters: ProductListFilters;
  }) {
    const { page, pageSize, filters } = options;
    const where = buildProductListWhere(filters);
    const skip = (page - 1) * pageSize;

    const [items, total] = await prisma.$transaction([
      prisma.product.findMany({
        where,
        select: listSelect,
        orderBy: [{ updatedAt: "desc" }],
        skip,
        take: pageSize,
      }),
      prisma.product.count({ where }),
    ]);

    return { items, total, page, pageSize };
  },

  async create({ product, images }: ProductCreateRepoInput) {
    return prisma.product.create({
      data: {
        ...product,
        images:
          images.length > 0
            ? {
                create: images.map((img) => ({
                  url: img.url,
                  altText: img.altText ?? undefined,
                  sortOrder: img.sortOrder,
                  isPrimary: img.isPrimary,
                })),
              }
            : undefined,
      },
      include: detailInclude,
    });
  },

  async update({ id, data, images }: ProductUpdateRepoInput) {
    return prisma.$transaction(async (tx) => {
      await tx.product.update({
        where: { id },
        data,
      });

      if (images !== undefined) {
        await tx.productImage.deleteMany({ where: { productId: id } });
        if (images.length > 0) {
          await tx.productImage.createMany({
            data: images.map((img) => ({
              productId: id,
              url: img.url,
              altText: img.altText ?? null,
              sortOrder: img.sortOrder,
              isPrimary: img.isPrimary,
            })),
          });
        }
      }

      const next = await tx.product.findUniqueOrThrow({
        where: { id },
        include: detailInclude,
      });
      return next;
    });
  },

  async deleteById(id: string) {
    return prisma.product.delete({ where: { id } });
  },
};
