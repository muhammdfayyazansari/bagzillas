import * as React from "react";
import { Truck, ShieldCheck, RefreshCw, HeadphonesIcon, HelpCircle, type LucideIcon } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { TrustBadge } from "@/components/shared/trust-badge";
import type { TrustSectionContent } from "@/features/homepage/types/cms.types";

const iconMap: Record<string, LucideIcon> = {
  truck: Truck,
  "shield-check": ShieldCheck,
  "refresh-cw": RefreshCw,
  "headphones-icon": HeadphonesIcon,
};

interface TrustSectionProps {
  data?: TrustSectionContent;
}

export function TrustSection({ data }: TrustSectionProps) {
  const badges = data?.badges || [
    { icon: "truck", title: "Fast Nationwide Delivery", description: "Quick and reliable delivery across all major cities in Pakistan." },
    { icon: "shield-check", title: "Premium Quality", description: "Durable materials and excellent craftsmanship on every product." },
    { icon: "refresh-cw", title: "Easy Returns", description: "7-day hassle-free return policy for your peace of mind." },
    { icon: "headphones-icon", title: "Dedicated Support", description: "Our customer service team is always here to help you." },
  ];

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
          {badges.map((badge, idx) => {
            const IconComponent = iconMap[badge.icon] || HelpCircle;
            return (
              <TrustBadge
                key={idx}
                icon={IconComponent}
                title={badge.title}
                description={badge.description || ""}
              />
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
