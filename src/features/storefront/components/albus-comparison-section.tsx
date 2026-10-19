"use client";

import * as React from "react";
import { SectionContainer } from "@/components/layout/section-container";

const COMPARISON_ROWS = [
  {
    feature: "Design",
    albus: "Modern premium look",
    ordinary: "Basic design",
  },
  {
    feature: "Storage",
    albus: "Smart compartments",
    ordinary: "Limited space",
  },
  {
    feature: "Comfort",
    albus: "Easy all-day carry",
    ordinary: "Less comfortable",
  },
  {
    feature: "Quality",
    albus: "Strong finishing",
    ordinary: "Quality varies",
  },
  {
    feature: "Use",
    albus: "Work, travel & daily use",
    ordinary: "Limited use",
  },
];

export function AlbusComparisonSection() {
  return (
    <section id="why-albus" className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <SectionContainer>
        {/* HEADING */}
        <div className="text-center mb-7 sm:mb-9">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#6F472D] leading-none mb-2">
            Why ALBUS?
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#5E5149]">
            See how ALBUS compares to ordinary bags.
          </p>
        </div>

        {/* COMPARISON TABLE */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-[#E7D8CD] shadow-[0_10px_30px_rgba(111,71,45,0.12)]">
          <table className="w-full border-collapse table-fixed text-center font-sans">
            <thead>
              <tr className="border-b border-[#E7D8CD]">
                <th className="w-[30%] py-3.5 sm:py-4 px-2 sm:px-4 text-[11px] sm:text-sm font-semibold text-[#382A22] bg-white border-r border-[#E7D8CD]">
                  Features
                </th>
                <th className="w-[35%] py-3.5 sm:py-4 px-2 sm:px-4 text-[11px] sm:text-sm font-semibold text-white bg-[#8B5E3C] border-r border-[#E7D8CD]">
                  ALBUS
                </th>
                <th className="w-[35%] py-3.5 sm:py-4 px-2 sm:px-4 text-[11px] sm:text-sm font-semibold text-[#382A22] bg-white">
                  Ordinary Bags
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={idx !== COMPARISON_ROWS.length - 1 ? "border-b border-[#E7D8CD]" : ""}
                >
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-[10.5px] sm:text-sm font-medium text-[#382A22] bg-white border-r border-[#E7D8CD]">
                    {row.feature}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-[10.5px] sm:text-sm font-semibold text-[#6F472D] bg-[#F3E8DF] border-r border-[#E7D8CD]">
                    {row.albus}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-[10.5px] sm:text-sm text-[#736357] bg-white">
                    {row.ordinary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>
    </section>
  );
}
