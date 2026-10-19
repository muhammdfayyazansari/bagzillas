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
    { icon: "truck", title: "Free Shipping Across Pakistan", description: "Zero delivery charges on all orders nationwide with express tracking." },
    { icon: "shield-check", title: "Cash On Delivery (COD)", description: "Convenient and safe cash payment right at your doorstep." },
    { icon: "refresh-cw", title: "7-Day Easy Exchange", description: "Hassle-free replacement and return policy on any manufacturing defect." },
    { icon: "headphones-icon", title: "Dedicated Support", description: "Prompt customer service assistance via WhatsApp and phone call." },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-stone-50 border-b border-stone-200">
      <SectionContainer>
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 mb-2 sm:mb-3">
            Shop with Confidence
          </h2>
          <p className="text-stone-600 text-xs sm:text-base md:text-lg max-w-2xl mx-auto">
            Engineered for reliability, backed by seamless Pakistani customer service.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
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
