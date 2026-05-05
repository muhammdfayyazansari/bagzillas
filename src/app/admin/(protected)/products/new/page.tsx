import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductForm } from "@/features/admin/components/products/product-form";

export const metadata: Metadata = {
  title: "Add Product | Admin Dashboard",
};

export default function NewProductPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Add Product</h1>
          <p className="text-muted-foreground mt-1">
            Create a new product to add to your catalog.
          </p>
        </div>
      </div>

      <ProductForm />
    </div>
  );
}
