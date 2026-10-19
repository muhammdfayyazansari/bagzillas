"use client";

import * as React from "react";
import { Check, X, Sparkles, Award } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";

const COMPARISON_ROWS = [
  {
    feature: "Design & Aesthetic",
    albus: "Modern premium minimalist look with clean stitching and matte hardware",
    ordinary: "Generic, bulky design with cheap zippers and outdated look",
  },
  {
    feature: "Storage & Layout",
    albus: "Smart compartments, padded laptop slot & dedicated shoe pocket",
    ordinary: "Single cramped main pouch with zero internal organization",
  },
  {
    feature: "All-Day Comfort",
    albus: "Spine-contoured ergonomic back padding & air-mesh shoulder straps",
    ordinary: "Flat unpadded straps that dig into shoulders during transit",
  },
  {
    feature: "Build Quality",
    albus: "High-density wear-resistant material + water-repellent shell",
    ordinary: "Thin polyester fabrics that rip and tear within months",
  },
  {
    feature: "Versatility",
    albus: "Engineered for office work, campus, airline travel, and daily gym",
    ordinary: "Single-purpose utility with limited durability",
  },
  {
    feature: "Warranty & Support",
    albus: "7-day easy exchange guarantee & dedicated customer support",
    ordinary: "No after-sales assistance or return options once delivered",
  },
];

export function AlbusComparisonSection() {
  return (
    <section id="why-albus" className="py-12 sm:py-20 md:py-28 bg-stone-100/70 border-b border-stone-200">
      <SectionContainer>
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-stone-100 text-[11px] sm:text-xs font-semibold mb-2 sm:mb-3">
            <Award className="h-3.5 w-3.5 text-amber-400" />
            <span>THE ALBUS DIFFERENCE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 mb-2 sm:mb-4">
            Why ALBUS?
          </h2>
          <p className="text-stone-600 text-xs sm:text-base md:text-lg">
            See how ALBUS stacks up against ordinary mass-market bags in craftsmanship, comfort, and durability.
          </p>
        </div>

        {/* 1. MOBILE RESPONSIVE CARDS (Visible on mobile only < 640px) */}
        <div className="block sm:hidden space-y-3.5">
          {COMPARISON_ROWS.map((row) => (
            <div
              key={row.feature}
              className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs"
            >
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 mb-3 pb-2 border-b border-stone-100">
                {row.feature}
              </h3>

              {/* ALBUS Benefit */}
              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/50 mb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B5E3C] mb-1">
                  <div className="h-4 w-4 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <span>ALBUS Advantage</span>
                </div>
                <p className="text-xs text-stone-800 font-medium leading-relaxed pl-5.5">
                  {row.albus}
                </p>
              </div>

              {/* Ordinary Bags */}
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/50">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-500 mb-1">
                  <div className="h-4 w-4 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
                    <X className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <span>Ordinary Bags</span>
                </div>
                <p className="text-xs text-stone-400 line-through leading-relaxed pl-5.5">
                  {row.ordinary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. TABLE VIEW (Desktop / Tablet >= 640px) */}
        <div className="hidden sm:block max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-stone-200/80 overflow-hidden">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-12 bg-stone-900 text-white font-bold text-xs sm:text-sm tracking-wider uppercase py-5 px-6 lg:px-8 items-center">
            <div className="col-span-4 text-stone-300">Feature</div>
            <div className="col-span-4 text-amber-400 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              <span>ALBUS</span>
            </div>
            <div className="col-span-4 text-stone-400">Ordinary Bags</div>
          </div>

          {/* TABLE BODY */}
          <div className="divide-y divide-stone-100">
            {COMPARISON_ROWS.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-12 py-5 px-6 lg:px-8 items-center transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-stone-50/50"
                }`}
              >
                {/* FEATURE NAME */}
                <div className="col-span-4 pr-3">
                  <span className="font-bold text-stone-900 text-xs sm:text-sm block">
                    {row.feature}
                  </span>
                </div>

                {/* ALBUS COLUMN */}
                <div className="col-span-4 pr-3 flex items-start gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                    {row.albus}
                  </span>
                </div>

                {/* ORDINARY BAGS COLUMN */}
                <div className="col-span-4 flex items-start gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-stone-400 line-through leading-snug">
                    {row.ordinary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
