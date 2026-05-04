import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
        <div className="flex size-12 items-center justify-center rounded-lg border bg-card text-card-foreground">
          <ShoppingBag className="size-6" aria-hidden="true" />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
            Bagzillas
          </h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground">
            Foundation setup is ready for a scalable ecommerce storefront and
            admin platform.
          </p>
        </div>
        <Button type="button" variant="secondary">
          Ecommerce foundation
        </Button>
      </section>
    </main>
  );
}
