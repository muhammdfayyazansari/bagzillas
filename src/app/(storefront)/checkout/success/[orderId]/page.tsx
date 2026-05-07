import Link from "next/link";
import { CheckCircle2, ChevronRight, Package, ArrowLeft } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Order Confirmed - Bagzillas",
};

export default async function CheckoutSuccessPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  return (
    <main className="min-h-screen py-20 bg-muted/10 flex items-center">
      <SectionContainer className="max-w-2xl text-center space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
            <CheckCircle2 className="h-24 w-24 text-emerald-500 relative z-10 bg-background rounded-full" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your purchase. We've received your order and will process it shortly.
          </p>
        </div>

        <div className="bg-card border rounded-xl p-6 inline-block w-full max-w-md shadow-sm">
          <div className="flex items-center justify-center gap-3 text-muted-foreground mb-4">
            <Package className="h-5 w-5" />
            <span className="font-medium">Order Number</span>
          </div>
          <div className="text-2xl font-mono font-bold tracking-widest text-primary bg-muted/50 py-3 rounded-lg border border-primary/10">
            {orderId}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/track-order">
              Track Order <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
