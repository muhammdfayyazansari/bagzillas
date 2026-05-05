import { Prisma, type ProductStatus } from "@prisma/client";

import { slugify } from "@/lib/slug";
import { categoryRepository } from "@/server/db/repositories/category.repository";
import {
  productRepository,
  type ProductDetailEntity,
  type ProductImageCreateRow,
  type ProductListRow,
} from "@/server/db/repositories/product.repository";
import type { ProductListFilters } from "@/server/db/queries/product-list.query";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "@/features/products/schemas/product.schema";

function isPrismaUniqueViolation(error: unknown): boolean {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  );
}

function normalizeImageRows(
  images: {
    url: string;
    altText?: string | null;
    sortOrder?: number;
    isPrimary?: boolean;
  }[]
): ProductImageCreateRow[] {
  if (images.length === 0) return [];
  const decorated = images.map((img, index) => ({
    url: img.url,
    altText: img.altText ?? null,
    sortOrder: img.sortOrder ?? index,
    isPrimary: Boolean(img.isPrimary),
  }));
  decorated.sort((a, b) => a.sortOrder - b.sortOrder);
  const primaryIdx = decorated.findIndex((i) => i.isPrimary);
  const idx = primaryIdx >= 0 ? primaryIdx : 0;
  return decorated.map((row, i) => ({
    ...row,
    isPrimary: i === idx,
  }));
}

async function allocateUniqueSlug(base: string, excludeId?: string) {
  let slug = base;
  for (let attempt = 0; attempt < 12; attempt++) {
    const taken = await productRepository.slugExists(slug, excludeId);
    if (!taken) return slug;
    slug = `${base}-${Math.random().toString(36).slice(2, 8)}`;
  }
  throw new Error("Unable to allocate a unique product slug.");
}

function toDecimal(value: string | number) {
  return new Prisma.Decimal(typeof value === "number" ? String(value) : value);
}

async function assertCategoryOptional(categoryId?: string | null) {
  if (!categoryId) return;
  const category = await categoryRepository.findById(categoryId);
  if (!category) {
    throw new Error("Selected category was not found.");
  }
}

export type ProductListResult = {
  items: ProductListRow[];
  total: number;
  page: number;
  pageSize: number;
};

export const productService = {
  async listPaginated(options: {
    page: number;
    pageSize: number;
    filters: ProductListFilters;
  }): Promise<ProductListResult> {
    const { items, total, page, pageSize } =
      await productRepository.findManyPaginated(options);
    return { items, total, page, pageSize };
  },

  async getById(id: string): Promise<ProductDetailEntity | null> {
    return productRepository.findById(id);
  },

  async createProduct(input: CreateProductInput): Promise<ProductDetailEntity> {
    await assertCategoryOptional(input.categoryId ?? null);

    let slug = input.slug ? slugify(input.slug.trim()) : slugify(input.name);
    slug = await allocateUniqueSlug(slug);

    if (await productRepository.skuExists(input.sku)) {
      throw new Error("A product with this SKU already exists.");
    }

    const images = normalizeImageRows(input.images ?? []);

    try {
      return await productRepository.create({
        product: {
          name: input.name.trim(),
          slug,
          sku: input.sku.trim(),
          description: input.description?.trim() ?? undefined,
          shortDescription: input.shortDescription?.trim() ?? undefined,
          status: input.status,
          price: toDecimal(input.price),
          compareAtPrice:
            input.compareAtPrice != null
              ? toDecimal(input.compareAtPrice)
              : undefined,
          costPrice:
            input.costPrice != null ? toDecimal(input.costPrice) : undefined,
          stockQuantity: input.stockQuantity,
          isFeatured: input.isFeatured ?? false,
          metadata:
            input.metadata === undefined
              ? undefined
              : (input.metadata as Prisma.InputJsonValue),
          category: input.categoryId
            ? { connect: { id: input.categoryId } }
            : undefined,
        },
        images,
      });
    } catch (error) {
      if (isPrismaUniqueViolation(error)) {
        throw new Error(
          "SKU or slug conflicts with an existing product. Adjust and try again."
        );
      }
      throw error;
    }
  },

  async updateProduct(input: UpdateProductInput): Promise<ProductDetailEntity> {
    await assertCategoryOptional(input.categoryId ?? null);

    const existing = await productRepository.findById(input.id);
    if (!existing) {
      throw new Error("Product not found.");
    }

    let slug = input.slug ? slugify(input.slug.trim()) : existing.slug;
    if (slug !== existing.slug) {
      slug = await allocateUniqueSlug(slug, input.id);
    }

    if (input.sku.trim() !== existing.sku) {
      if (await productRepository.skuExists(input.sku.trim(), input.id)) {
        throw new Error("A product with this SKU already exists.");
      }
    }

    const images =
      input.images !== undefined
        ? normalizeImageRows(input.images ?? [])
        : undefined;

    try {
      return await productRepository.update({
        id: input.id,
        data: {
          name: input.name.trim(),
          slug,
          sku: input.sku.trim(),
          description: input.description?.trim() ?? undefined,
          shortDescription: input.shortDescription?.trim() ?? undefined,
          status: input.status as ProductStatus,
          price: toDecimal(input.price),
          compareAtPrice:
            input.compareAtPrice != null
              ? toDecimal(input.compareAtPrice)
              : null,
          costPrice:
            input.costPrice != null ? toDecimal(input.costPrice) : null,
          stockQuantity: input.stockQuantity,
          isFeatured: input.isFeatured ?? false,
          metadata:
            input.metadata === undefined
              ? undefined
              : input.metadata === null
                ? Prisma.JsonNull
                : (input.metadata as Prisma.InputJsonValue),
          category:
            input.categoryId != null && input.categoryId !== ""
              ? { connect: { id: input.categoryId } }
              : { disconnect: true },
        },
        images,
      });
    } catch (error) {
      if (isPrismaUniqueViolation(error)) {
        throw new Error(
          "SKU or slug conflicts with an existing product. Adjust and try again."
        );
      }
      throw error;
    }
  },

  async deleteProduct(id: string): Promise<void> {
    const existing = await productRepository.findById(id);
    if (!existing) {
      throw new Error("Product not found.");
    }
    await productRepository.deleteById(id);
  },
};
