"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/ui/button";

export function AlbusStorySection() {
  return (
    <section id="story" className="py-12 sm:py-20 md:py-28 bg-white border-y border-stone-200 overflow-hidden">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-stone-100">
              <Image
                src="https://cdn.shopify.com/s/files/1/0701/2066/9293/files/media.jpg?v=1784714546&width=896"
                alt="Carry Your Story with ALBUS"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* FLOATING PROMO PILL */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8B5E3C] block">
                    Limited Bundle
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-stone-900 block">
                    Free Fanny Bag Included
                  </span>
                </div>
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#8B5E3C] text-white text-[10px] sm:text-xs font-bold shrink-0">
                  Offer Active
                </span>
              </div>
            </div>

            {/* DECORATIVE ACCENT CIRCLE */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 bg-[#8B5E3C]/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* TEXT & FEATURES BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-[11px] sm:text-xs font-semibold w-fit mb-3 sm:mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[#8B5E3C]" />
              <span>THE ALBUS PHILOSOPHY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.2] mb-3 sm:mb-6">
              Carry Your Story
            </h2>

            <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 font-normal">
              Inspired by modern individuals who move through life with confidence and style, ALBUS creates premium leather bags that combine smart functionality with refined design.
            </p>

            <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 font-normal">
              From intense workdays to spontaneous weekend getaways and every journey in between, each bag is engineered to keep you organized, comfortable, and effortlessly sharp.
            </p>

            {/* FEATURE CHECKLIST */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">Durable &amp; Weather-Resistant Build</span>
                  <span className="text-[11px] sm:text-xs text-stone-500">High-density materials to withstand everyday wear across Pakistan.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">Smart Isolated Compartments</span>
                  <span className="text-[11px] sm:text-xs text-stone-500">Dedicated bottom shoe compartment to keep sports footwear isolated.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">Ergonomic Air-Cushioned Straps</span>
                  <span className="text-[11px] sm:text-xs text-stone-500">Balanced custom fit across all body types with zero shoulder strain.</span>
                </div>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div>
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-stone-900 hover:bg-[#8B5E3C] text-white font-semibold rounded-full px-8 py-5 sm:py-6 text-xs sm:text-sm md:text-base shadow-md transition-colors"
              >
                <Link href="/products" className="flex items-center justify-center">
                  Shop Carry Essentials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
