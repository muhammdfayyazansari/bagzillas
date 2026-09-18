"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/section-container";

import type { HeroSectionContent } from "@/features/homepage/types/cms.types";
import { useState } from "react";

interface FeedHeroSectionProps {
  data?: HeroSectionContent;
}

export function FeedHeroSection({ data }: FeedHeroSectionProps) {
  const heading = data?.heading || "DELSEY PARIS";
  const [isHovered, setIsHovered] = useState(false);

  const subheading =
    data?.subheading ||
    "Experience The World With Delsey Paris. Iconic Design Meets Ultimate Durability For Your Next Grand Adventure.";

  const primaryButtonText = data?.primaryButtonText || "Shop Collection";

  const primaryButtonLink = data?.primaryButtonLink || "/products";

  const backgroundImageUrl =
    // data?.backgroundImageUrl ||
    // "/images/luggage_sale_banner.webp?q=80&w=2500&auto=format&fit=crop";
    "/images/child_with_bags.webp";

  return (
    <section className="relative w-full overflow-hidden">
      <SectionContainer className="relative max-w-none! px-0!">
        {/* HERO CONTAINER */}
        <div
          className="
            relative w-full
            min-h-137.5
            h-[40vh]
            sm:h-[65vh]
          
         
 
            3xl:h-[100vh]
          "
        >
          {/* BACKGROUND IMAGE */}
          <Image
            src={backgroundImageUrl}
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />

          {/* CONTENT */}
          <div className="relative z-10 flex h-full items-center">
            <div
              className="
              flex flex-col justify-center
              h-full
                w-full
                px-4
                sm:px-6
                md:px-10
                lg:px-16
                xl:px-24
                2xl:px-32
                3xl:px-44
              "
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="
                 flex flex-col justify-around 
                  max-w-full
                  sm:max-w-xl
                  md:max-w-2xl
                  lg:max-w-3xl
                  xl:max-w-4xl
                  2xl:max-w-5xl
                "
              >
                {/* STARS */}
                <div className="mb-3 flex flex-wrap items-center gap-1 sm:mb-4 text-white text-sm font-semibold">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-center rounded bg-green-600 h-4 w-4"
                    >
                      <Star className="text-white fill-white h-2 w-2" />
                    </div>
                  ))}

                  <p className="pl-2"> Excellent 4.9</p>
                </div>

                {/* HEADING */}
                <h1
                  className="
                    font-semibold uppercase tracking-tight text-white
                    leading-[1.05]

                    text-3xl
                    xs:text-4xl
                    sm:text-5xl
                   


                  "
                >
                  {heading}
                </h1>

                {/* SUBHEADING */}
                <h6
                  className="
                    mt-4 text-gray-200 leading-relaxed

                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl

        
                  "
                >
                  {subheading}
                </h6>

                {/* BUTTONS */}
                <div
                  className="
                    mt-8 flex flex-col gap-4
                    sm:flex-row sm:items-center
                    lg:mt-10
                    xl:mt-12
                  "
                >
                  <Button
                    size="lg"
                    asChild
                    className="
                      w-full sm:w-auto
                      bg-white text-black
                      
[a]:hover:bg-bz-green
                      font-semibold

                      h-11 px-6 text-lg
                      sm:h-12 sm:px-7 sm:text-base
                    rounded-full
                    "
                  >
                    {/* shop now button */}
                    <Link href={primaryButtonLink}>
                      {primaryButtonText}
                      {/* <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" /> */}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden whitespace-nowrap h-20 -mt-20">
          {/* 2. The moving track that pauses smoothly on hover */}
          <div className="flex text-white text-2xl tracking-wide  gap-20 w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
            {/* 3. Original Text Block (Repeated to fill space) */}
            {[
              "🚚NEED IT IN 2 HOURS IN KARACHI? ⚡JUST PAY FULL ADVANCE VIA BANK TRANSFER. STANDARD CASH ON DELIVERY ACROSS PAKISTAN TAKES 3–5 WORKING DAYS.",
              "🚚NEED IT IN 2 HOURS IN KARACHI? ⚡JUST PAY FULL ADVANCE VIA BANK TRANSFER. STANDARD CASH ON DELIVERY ACROSS PAKISTAN TAKES 3–5 WORKING DAYS.",
              "🚚NEED IT IN 2 HOURS IN KARACHI? ⚡JUST PAY FULL ADVANCE VIA BANK TRANSFER. STANDARD CASH ON DELIVERY ACROSS PAKISTAN TAKES 3–5 WORKING DAYS.",
            ].map((text, index) => (
              <div key={text + index} className="flex  gap-20 select-none">
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
