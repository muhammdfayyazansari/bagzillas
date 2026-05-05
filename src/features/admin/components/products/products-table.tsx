"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProductStatus } from "@prisma/client";
import { Edit, MoreHorizontal, Search, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteProductAction } from "@/features/products/actions/delete-product.action";
import type {
  AdminProductListItem,
  AdminProductListResponse,
} from "@/features/products/types/product.types";

type ActiveQuery = {
  q: string;
  page: number;
  pageSize: number;
  status?: ProductStatus;
  categoryId?: string;
};

function queryString(active: ActiveQuery, overrides?: Partial<ActiveQuery>) {
  const merged: ActiveQuery = { ...active, ...overrides };
  const params = new URLSearchParams();
  if (merged.q.trim()) params.set("q", merged.q.trim());
  if (merged.status) params.set("status", merged.status);
  if (merged.categoryId) params.set("categoryId", merged.categoryId);
  if ((merged.page ?? 1) > 1) params.set("page", String(merged.page));
  if (merged.pageSize && merged.pageSize !== 10)
    params.set("pageSize", String(merged.pageSize));
  const s = params.toString();
  return s ? `?${s}` : "";
}

function StockHint({ qty }: { qty: number }) {
  if (qty <= 0) {
    return <span className="text-destructive text-xs ml-2">Out of stock</span>;
  }
  if (qty < 10) {
    return <span className="text-amber-600 text-xs ml-2">Low</span>;
  }
  return null;
}

export function AdminProductsTable({
  list,
  activeQuery,
}: {
  list: AdminProductListResponse;
  activeQuery: ActiveQuery;
}) {
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const totalPages = Math.max(1, Math.ceil(list.total / list.pageSize));

  function onDelete(id: string, name: string) {
    if (!window.confirm(`Delete “${name}”? This cannot be undone.`)) {
      return;
    }
    startTransition(async () => {
      setErrorMessage(null);
      const res = await deleteProductAction({ id });
      if (!res.success) {
        setErrorMessage(res.error);
        return;
      }
      router.refresh();
    });
  }

  return (
    <div className="space-y-4">
      {errorMessage ? (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <form
          action="/admin/products"
          method="get"
          className="relative w-full max-w-sm"
        >
          <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            name="q"
            placeholder="Search products…"
            className="pl-9"
            defaultValue={activeQuery.q}
            disabled={pending}
          />
          {activeQuery.status ? (
            <input type="hidden" name="status" value={activeQuery.status} />
          ) : null}
          {activeQuery.categoryId ? (
            <input
              type="hidden"
              name="categoryId"
              value={activeQuery.categoryId}
            />
          ) : null}
          {activeQuery.pageSize !== 10 ? (
            <input
              type="hidden"
              name="pageSize"
              value={String(activeQuery.pageSize)}
            />
          ) : null}
        </form>
        <div className="flex items-center gap-2 md:justify-end">
          <Button variant="outline" type="button" disabled>
            Filter
          </Button>
          <Button variant="outline" type="button" disabled>
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  No products match this view.
                </TableCell>
              </TableRow>
            ) : (
              list.items.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  pending={pending}
                  onDelete={onDelete}
                />
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <PaginationBar
        list={list}
        totalPages={totalPages}
        disabled={pending}
        activeQuery={activeQuery}
      />
    </div>
  );
}

function ProductRow({
  product,
  pending,
  onDelete,
}: {
  product: AdminProductListItem;
  pending: boolean;
  onDelete: (id: string, name: string) => void;
}) {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <ProductThumb url={product.primaryImageUrl} />
          <div>
            <p className="font-medium leading-tight">{product.name}</p>
            {product.category ? (
              <p className="text-xs text-muted-foreground">
                {product.category.name}
              </p>
            ) : null}
          </div>
        </div>
      </TableCell>
      <TableCell className="font-mono text-xs">{product.sku}</TableCell>
      <TableCell>Rs. {product.price}</TableCell>
      <TableCell>
        {product.stockQuantity}
        <StockHint qty={product.stockQuantity} />
      </TableCell>
      <TableCell>
        <StatusBadge status={product.status} />
      </TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" disabled={pending}>
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/admin/products/${product.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive focus:text-destructive"
              onClick={() => onDelete(product.id, product.name)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

function ProductThumb({ url }: { url: string | null }) {
  if (!url) {
    return (
      <div className="h-10 w-10 shrink-0 rounded-md border bg-muted flex items-center justify-center text-[10px] text-muted-foreground">
        No img
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote catalog thumbnail
    <img
      src={url}
      alt=""
      className="h-10 w-10 shrink-0 rounded-md border object-cover"
    />
  );
}

function StatusBadge({ status }: { status: ProductStatus }) {
  if (status === ProductStatus.ACTIVE) {
    return <Badge>Active</Badge>;
  }
  if (status === ProductStatus.DRAFT) {
    return <Badge variant="secondary">Draft</Badge>;
  }
  return <Badge variant="outline">Archived</Badge>;
}

function PaginationBar({
  list,
  totalPages,
  activeQuery,
  disabled,
}: {
  list: AdminProductListResponse;
  totalPages: number;
  activeQuery: ActiveQuery;
  disabled: boolean;
}) {
  const currentPage = list.page;

  const prevHref =
    currentPage <= 1
      ? undefined
      : `/admin/products${queryString(activeQuery, { page: currentPage - 1 })}`;
  const nextHref =
    currentPage >= totalPages
      ? undefined
      : `/admin/products${queryString(activeQuery, { page: currentPage + 1 })}`;

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between py-4 text-sm text-muted-foreground">
      <span>
        Page {currentPage} of {totalPages}{" "}
        <span className="hidden sm:inline">({list.total} total)</span>
      </span>
      <div className="flex justify-end gap-2">
        {prevHref ? (
          <Button variant="outline" size="sm" asChild disabled={disabled}>
            <Link href={prevHref}>Previous</Link>
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
        )}
        {nextHref ? (
          <Button variant="outline" size="sm" asChild disabled={disabled}>
            <Link href={nextHref}>Next</Link>
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
