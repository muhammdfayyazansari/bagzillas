"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProductStatus } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUploadZone } from "@/features/admin/components/products/image-upload-zone";
import { createProductAction } from "@/features/products/actions/create-product.action";
import { updateProductAction } from "@/features/products/actions/update-product.action";
import { ADMIN_CATEGORY_NONE_VALUE } from "@/constants/admin-product-ui";
import {
  createProductSchema,
  updateProductSchema,
} from "@/features/products/schemas/product.schema";
import type { AdminCategoryOption } from "@/features/products/types/product.types";
import type { ProductFormValues } from "@/features/products/types/product.types";

type ProductFormProps = {
  mode: "create" | "edit";
  categories: AdminCategoryOption[];
  defaultValues?: ProductFormValues;
};

const EMPTY_VALUES: ProductFormValues = {
  name: "",
  slug: "",
  sku: "",
  description: "",
  shortDescription: "",
  status: ProductStatus.DRAFT,
  price: "",
  compareAtPrice: "",
  costPrice: "",
  stockQuantity: "0",
  categoryId: ADMIN_CATEGORY_NONE_VALUE,
  isFeatured: false,
  images: [],
};

function normalizePayloadImages(values: ProductFormValues) {
  return values.images.map((img, idx) => ({
    url: img.url,
    altText: img.altText.trim() ? img.altText.trim() : null,
    sortOrder: idx,
    isPrimary: img.isPrimary,
  }));
}

export function ProductForm({
  mode,
  categories,
  defaultValues,
}: ProductFormProps) {
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();
  const [banner, setBanner] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const form = useForm<ProductFormValues>({
    defaultValues: defaultValues ?? EMPTY_VALUES,
  });

  React.useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues, form]);

  function buildBody(values: ProductFormValues) {
    const images = normalizePayloadImages(values);
    const categoryId =
      values.categoryId &&
      values.categoryId.length > 0 &&
      values.categoryId !== ADMIN_CATEGORY_NONE_VALUE
        ? values.categoryId
        : null;

    return {
      name: values.name,
      slug:
        values.slug.trim().length > 0 ? values.slug.trim() : null,
      sku: values.sku,
      description: values.description.trim() || null,
      shortDescription: values.shortDescription.trim() || null,
      status: values.status,
      price: Number(values.price),
      compareAtPrice: values.compareAtPrice,
      costPrice: values.costPrice,
      stockQuantity: Number(values.stockQuantity),
      categoryId,
      isFeatured: values.isFeatured,
      metadata: undefined,
      images,
    };
  }

  function onSubmit(values: ProductFormValues) {
    setBanner(null);

    startTransition(async () => {
      if (mode === "create") {
        const body = createProductSchema.safeParse(buildBody(values));
        if (!body.success) {
          setBanner({
            type: "error",
            message: body.error.issues[0]?.message ?? "Check the form fields.",
          });
          return;
        }
        const result = await createProductAction(body.data);
        if (!result.success) {
          setBanner({ type: "error", message: result.error });
          return;
        }
        setBanner({ type: "success", message: "Product created." });
        router.push(`/admin/products/${result.productId}/edit`);
        router.refresh();
        return;
      }

      const id = values.id;
      if (!id) {
        setBanner({
          type: "error",
          message: "Missing product id.",
        });
        return;
      }

      const body = updateProductSchema.safeParse({
        id,
        ...buildBody(values),
      });
      if (!body.success) {
        setBanner({
          type: "error",
          message: body.error.issues[0]?.message ?? "Check the form fields.",
        });
        return;
      }
      const result = await updateProductAction(body.data);
      if (!result.success) {
        setBanner({ type: "error", message: result.error });
        return;
      }
      setBanner({ type: "success", message: "Changes saved." });
      router.refresh();
    });
  }

  return (
    <form
      className="space-y-8 max-w-4xl"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      {banner ? (
        <div
          className={`rounded-lg border px-4 py-3 text-sm ${
            banner.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-50"
              : "border-destructive/50 bg-destructive/10 text-destructive"
          }`}
          role="status"
        >
          {banner.message}
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">General Information</h3>

            <div className="space-y-2">
              <Label htmlFor="product-name">Product title</Label>
              <Input
                id="product-name"
                disabled={pending}
                {...form.register("name", { required: true })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (optional)</Label>
                <Input
                  id="slug"
                  placeholder="Auto from title if empty"
                  disabled={pending}
                  {...form.register("slug")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" disabled={pending} {...form.register("sku")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortDescription">Short description</Label>
              <textarea
                id="shortDescription"
                disabled={pending}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                {...form.register("shortDescription")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                disabled={pending}
                className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                {...form.register("description")}
              />
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Media</h3>
            <Controller
              control={form.control}
              name="images"
              render={({ field }) => (
                <ImageUploadZone
                  disabled={pending}
                  images={field.value}
                  onImagesChange={field.onChange}
                />
              )}
            />
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Pricing & Inventory</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (Rs.)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min={0}
                  disabled={pending}
                  {...form.register("price", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="compareAtPrice">Compare at (Rs.)</Label>
                <Input
                  id="compareAtPrice"
                  type="number"
                  step="0.01"
                  min={0}
                  disabled={pending}
                  {...form.register("compareAtPrice")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="costPrice">Cost (Rs.)</Label>
                <Input
                  id="costPrice"
                  type="number"
                  step="0.01"
                  min={0}
                  disabled={pending}
                  {...form.register("costPrice")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stockQuantity">Stock quantity</Label>
                <Input
                  id="stockQuantity"
                  type="number"
                  min={0}
                  step={1}
                  disabled={pending}
                  {...form.register("stockQuantity", { required: true })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Status</h3>
            <Controller
              control={form.control}
              name="status"
              render={({ field }) => (
                <Select
                  disabled={pending}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ProductStatus.ACTIVE}>Active</SelectItem>
                    <SelectItem value={ProductStatus.DRAFT}>Draft</SelectItem>
                    <SelectItem value={ProductStatus.ARCHIVED}>
                      Archived
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Organization</h3>
            <Controller
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select
                    disabled={pending}
                    onValueChange={field.onChange}
                    value={field.value || ADMIN_CATEGORY_NONE_VALUE}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={ADMIN_CATEGORY_NONE_VALUE}>
                        None
                      </SelectItem>
                      {categories.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            />

            <div className="flex items-center gap-2 pt-2">
              <Controller
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <input
                    type="checkbox"
                    id="featured"
                    disabled={pending}
                    className="h-4 w-4 rounded border border-input accent-primary"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
              <Label htmlFor="featured" className="font-normal cursor-pointer">
                Featured product
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" type="button" asChild disabled={pending}>
          <Link href="/admin/products">Cancel</Link>
        </Button>
        <Button type="submit" disabled={pending}>
          {pending ? "Saving…" : mode === "create" ? "Create Product" : "Save"}
        </Button>
      </div>
    </form>
  );
}
