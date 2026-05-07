import { SectionContainer } from "@/components/layout/section-container";
import { CheckoutForm } from "@/features/checkout/components/checkout-form";

export const metadata = {
  title: "Checkout - Bagzillas",
  description: "Secure checkout for your Bagzillas order.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen py-12 bg-muted/10">
      <SectionContainer>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
          <p className="text-muted-foreground mt-2">Complete your order details below.</p>
        </div>
        <CheckoutForm />
      </SectionContainer>
    </main>
  );
}
