"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/section-container";
import type { HeroSectionContent } from "@/features/homepage/types/cms.types";

interface HeroSectionProps {
  data?: HeroSectionContent;
}

export function HeroSection({ data }: HeroSectionProps) {
  const heading = data?.heading || "Modern bags. Premium details. Everyday confidence.";
  const subheading =
    data?.subheading ||
    "Premium leather bags made for style, comfort, and easy everyday use. Designed for workdays, weekend travel, and everywhere in between.";
  const primaryButtonText = data?.primaryButtonText || "Shop Collection";
  const primaryButtonLink = data?.primaryButtonLink || "/products";
  const backgroundImageUrl =
    data?.backgroundImageUrl ||
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2500&auto=format&fit=crop";

  return (
    <section className="relative w-full overflow-hidden bg-stone-900">
      <SectionContainer className="relative max-w-none px-0">
        {/* HERO CONTAINER */}
        <div className="relative w-full min-h-[500px] sm:min-h-[580px] h-[72vh] sm:h-[78vh] max-h-[850px] flex items-center">
          {/* BACKGROUND IMAGE */}
          <Image
            src={backgroundImageUrl}
            alt="Albus Premium Bags"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-75 scale-105"
          />

          {/* GRADIENT OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

          {/* HERO CONTENT */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-left"
            >
              {/* SPECIAL PROMO BADGE */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-semibold mb-3 sm:mb-5 backdrop-blur-xs">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>LIMITED: BUY 1 GET 1 FANNY BAG FREE</span>
              </div>

              {/* HEADING */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-3 sm:mb-5">
                {heading}
              </h1>

              {/* SUBHEADING */}
              <p className="text-stone-300 text-xs sm:text-base lg:text-xl font-normal leading-relaxed mb-5 sm:mb-8 max-w-xl line-clamp-3 sm:line-clamp-none">
                {subheading}
              </p>

              {/* RATING & SOCIAL PROOF */}
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white text-xs sm:text-sm font-semibold">
                  4.9 / 5.0 Rating
                </span>
                <span className="text-stone-400 text-[11px] sm:text-sm hidden xs:inline">
                  • 10,000+ Verified Buyers
                </span>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-[#8B5E3C] hover:bg-[#724b2f] text-white font-semibold text-xs sm:text-base px-7 py-5 sm:py-6 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  <Link href={primaryButtonLink} className="flex items-center justify-center">
                    {primaryButtonText}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 text-xs sm:text-base px-6 py-5 sm:py-6 rounded-full backdrop-blur-sm transition-colors text-center"
                >
                  <Link href="#why-albus" className="flex items-center justify-center">
                    Why ALBUS?
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM TICKER / MARQUEE */}
        <div className="w-full bg-[#1c1917] border-t border-stone-800 py-2.5 sm:py-3.5 overflow-hidden whitespace-nowrap">
          <div className="flex gap-8 sm:gap-16 text-stone-300 text-[11px] sm:text-sm font-semibold tracking-wider uppercase animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="flex items-center gap-8 sm:gap-16 select-none shrink-0">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <span>🚚</span> FREE NATIONWIDE SHIPPING
                </span>
                <span className="text-amber-500">•</span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <span>⚡</span> CASH ON DELIVERY (COD)
                </span>
                <span className="text-amber-500">•</span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <span>🎒</span> BOGO FREE FANNY BAG
                </span>
                <span className="text-amber-500">•</span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400 inline" /> 7-DAY EASY EXCHANGE
                </span>
                <span className="text-amber-500">•</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
