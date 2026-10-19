"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/ui/button";

export function AlbusStorySection() {
  return (
    <section id="story" className="py-12 sm:py-16 md:py-24 bg-white border-y border-stone-100 overflow-hidden">
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
                src="https://www.albus.pk/cdn/shop/files/2_1.png?v=1778757314&width=1000"
                alt="ALBUS Carry Your Story"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

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
          </motion.div>

          {/* TEXT & COPY BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#6F472D] leading-[1.2] mb-4 sm:mb-6">
              Carry Your Story
            </h2>

            <p className="text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 font-normal">
              Inspired by modern individuals who move through life with confidence and style, <strong className="font-bold text-stone-900">ALBUS</strong> creates premium leather bags that combine smart functionality with refined design.
            </p>

            <p className="text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 font-normal">
              From workdays to weekend plans and every journey in between, each bag is made to keep you organized, comfortable and effortlessly stylish. With ALBUS, carry more than your essentials—carry confidence wherever you go.
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
                  <span className="text-[11px] sm:text-xs text-stone-500">Dedicated organization compartments for laptop, accessories, and everyday carry.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">Ergonomic Comfort</span>
                  <span className="text-[11px] sm:text-xs text-stone-500">Padded shoulder straps engineered for effortless all-day carry.</span>
                </div>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div>
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-[#8B5E3C] hover:bg-[#70492c] text-white font-semibold rounded-full px-8 py-5 sm:py-6 text-xs sm:text-sm md:text-base shadow-md transition-colors"
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
