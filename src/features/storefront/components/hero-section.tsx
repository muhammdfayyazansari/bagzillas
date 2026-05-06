"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/section-container";
import type { HeroSectionContent } from "@/features/homepage/types/cms.types";

interface HeroSectionProps {
  data?: HeroSectionContent;
}

export function HeroSection({ data }: HeroSectionProps) {
  const heading = data?.heading || "Carry Your Ambition";
  const subheading = data?.subheading || "Premium school bags, backpacks, and accessories designed for students in Pakistan. Built for durability, comfort, and undeniable style.";
  const primaryButtonText = data?.primaryButtonText || "Shop Collection";
  const primaryButtonLink = data?.primaryButtonLink || "/products";
  const backgroundImageUrl = data?.backgroundImageUrl || "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2500&auto=format&fit=crop";

  return (
    <div className="relative overflow-hidden bg-muted/30">
      <SectionContainer className="relative pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              {heading.split(" ").map((word, i, arr) => (
                <React.Fragment key={i}>
                  {i === arr.length - 1 ? <span className="text-primary">{word}</span> : word + " "}
                </React.Fragment>
              ))}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="font-semibold shadow-md">
                <Link href={primaryButtonLink}>
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products?category=best-sellers">
                  View Best Sellers
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg aspect-square lg:aspect-[4/5] mx-auto rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={backgroundImageUrl}
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
