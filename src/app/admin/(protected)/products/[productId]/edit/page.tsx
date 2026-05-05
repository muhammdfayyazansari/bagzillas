import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { ProductForm } from "@/features/admin/components/products/product-form";
import { productDetailToFormValues } from "@/features/products/lib/serialize-admin-product";
import { categoryRepository } from "@/server/db/repositories/category.repository";
import { productService } from "@/server/services/product.service";

type EditPageParams = Promise<{ productId: string }>;

export async function generateMetadata({
  params,
}: {
  params: EditPageParams;
}): Promise<Metadata> {
  const { productId } = await params;
  const product = await productService.getById(productId);
  return {
    title: product
      ? `Edit ${product.name} | Admin`
      : "Edit Product | Admin Dashboard",
  };
}

export default async function EditProductPage({
  params,
}: {
  params: EditPageParams;
}) {
  const { productId } = await params;

  const [product, categories] = await Promise.all([
    productService.getById(productId),
    categoryRepository.findSelectList(),
  ]);

  if (!product) {
    notFound();
  }

  const defaultValues = productDetailToFormValues(product);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/products"
          className="flex h-9 w-9 items-center justify-center rounded-md border bg-background hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit product</h1>
          <p className="text-muted-foreground mt-1">{product.name}</p>
        </div>
      </div>

      <ProductForm
        mode="edit"
        categories={categories}
        defaultValues={defaultValues}
      />
    </div>
  );
}
