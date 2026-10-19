import * as React from "react";
import { Truck, RotateCcw, Headphones, HelpCircle, type LucideIcon } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import type { TrustSectionContent } from "@/features/homepage/types/cms.types";

const iconMap: Record<string, LucideIcon> = {
  truck: Truck,
  "refresh-cw": RotateCcw,
  "headphones-icon": Headphones,
};

interface TrustSectionProps {
  data?: TrustSectionContent;
}

export function TrustSection({ data }: TrustSectionProps) {
  const badges = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Enjoy Free Shipping All Across Pakistan.",
    },
    {
      icon: RotateCcw,
      title: "Exchange & Return Policy",
      description: "We have 07 days exchange & Return Policy.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "We are available 24/7 for our valued customers.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-100">
      <SectionContainer>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-stone-50 border border-stone-200/80 flex items-center justify-center text-[#8B5E3C] mb-3.5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="font-sans text-base sm:text-lg font-bold text-stone-900 mb-1.5">
                  {badge.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-xs">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
