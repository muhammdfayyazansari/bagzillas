import * as React from "react";
import { Truck, ShieldCheck, RefreshCw, HeadphonesIcon } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { TrustBadge } from "@/components/shared/trust-badge";

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Bagzillas</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We are committed to providing the best quality and service for all your carrying needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <TrustBadge
            icon={Truck}
            title="Fast Nationwide Delivery"
            description="Quick and reliable delivery across all major cities in Pakistan."
          />
          <TrustBadge
            icon={ShieldCheck}
            title="Premium Quality"
            description="Durable materials and excellent craftsmanship on every product."
          />
          <TrustBadge
            icon={RefreshCw}
            title="Easy Returns"
            description="7-day hassle-free return policy for your peace of mind."
          />
          <TrustBadge
            icon={HeadphonesIcon}
            title="Dedicated Support"
            description="Our customer service team is always here to help you."
          />
        </div>
      </SectionContainer>
    </section>
  );
}
