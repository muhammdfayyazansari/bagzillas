import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AdminProductsTable } from "@/features/admin/components/products/products-table";
import { serializeProductListRow } from "@/features/products/lib/serialize-admin-product";
import { adminProductListQuerySchema } from "@/features/products/schemas/product.schema";
import { productService } from "@/server/services/product.service";

export const metadata: Metadata = {
  title: "Products | Admin Dashboard",
};

type ProductsSearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: ProductsSearchParams;
}) {
  const raw = await searchParams;

  const toSingle = (v: string | string[] | undefined) =>
    Array.isArray(v) ? v[0] : v;

  const parsed = adminProductListQuerySchema.safeParse({
    page: toSingle(raw.page),
    pageSize: toSingle(raw.pageSize),
    q: toSingle(raw.q),
    status: toSingle(raw.status),
    categoryId: toSingle(raw.categoryId),
  });

  const query = parsed.success
    ? parsed.data
    : adminProductListQuerySchema.parse({
        page: 1,
      });

  const result = await productService.listPaginated({
    page: query.page,
    pageSize: query.pageSize,
    filters: {
      search: query.q ?? null,
      status: query.status ?? null,
      categoryId: query.categoryId ?? null,
    },
  });

  const list = {
    items: result.items.map(serializeProductListRow),
    total: result.total,
    page: result.page,
    pageSize: result.pageSize,
  };

  const activeQuery = {
    q: query.q ?? "",
    page: query.page,
    pageSize: query.pageSize,
    status: query.status,
    categoryId: query.categoryId,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground mt-1">
            Manage your store&apos;s inventory and product catalog.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <AdminProductsTable list={list} activeQuery={activeQuery} />
    </div>
  );
}
