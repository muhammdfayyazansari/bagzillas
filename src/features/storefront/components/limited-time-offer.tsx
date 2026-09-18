"use client";
import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface LimitedTimeOfferProps {
  products?: any[]; // Prisma Product model array
}

export function LimitedTimeOffer({ products }: LimitedTimeOfferProps) {
  const [isActive, setIsActive] = React.useState("new-arrivals");

  return (
   <section className="py-8 sm:py-10 lg:py-16">
  <SectionContainer>
    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
      
      {/* LEFT CONTENT */}
      <div className="flex flex-col items-start gap-6 sm:gap-8">
        <h2 className="text-lg font-bold text-bz-red sm:text-xl lg:text-2xl">
          LIMITED TIME OFFER
        </h2>

        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          Ready for Your Next Adventure?
        </h1>

        <p className="text-base font-semibold leading-7 sm:text-lg sm:leading-8 lg:text-xl">
          Upgrade your travel style with Kashif Luggage & Bags. Enjoy GRAND
          LUGGAGE SALE 15% TO 30% OFF on premium luggage sets for a limited
          time! Whether you need durable hardshell suitcases or lightweight
          softside carry-ons, we've got you covered.
        </p>

        <Button
          size="lg"
          className="
            mt-2
            rounded-lg
            bg-primary
            px-6
            py-5
            text-base
            uppercase
            tracking-wide
            text-background
            hover:bg-bz-green
            hover:text-background
            sm:px-8
            sm:py-6
            sm:text-lg
          "
        >
          Shop Sale Now
        </Button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full">
        <div className="group relative h-150 w-full overflow-hidden bg-muted/30">
          <Image
            src="/images/luggage_sale_banner.webp"
            alt="Luggage Sale"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          
            className="
            
              transition-transform
              duration-500
              ease-in-out
             
            "
          />
        </div>
      </div>

    </div>
  </SectionContainer>
</section>

  );
}
