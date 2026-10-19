"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import type { TestimonialsSectionContent } from "@/features/homepage/types/cms.types";

interface CustomerReview {
  name: string;
  comment: string;
  productName: string;
  productSlug: string;
  productImage: string;
  salePrice: string;
  regularPrice: string;
}

const ALBUS_REVIEWS: CustomerReview[] = [
  {
    name: "Ahmad Raza",
    comment:
      "The quality feels premium, and the finishing is very neat. It looks even better in person and feels perfect for everyday use",
    productName: "S1 BackPack",
    productSlug: "s1-backpack",
    productImage: "https://www.albus.pk/cdn/shop/files/5.jpg?v=1782210619&width=768",
    salePrice: "Rs.2,390.00",
    regularPrice: "Rs.3,000.00",
  },
  {
    name: "Sara",
    comment:
      "I love the modern design. It has enough space for all my essentials without looking bulky. Definitely worth buying.",
    productName: "S1 BackPack",
    productSlug: "s1-backpack",
    productImage: "https://www.albus.pk/cdn/shop/files/5.jpg?v=1782210619&width=768",
    salePrice: "Rs.2,390.00",
    regularPrice: "Rs.3,000.00",
  },
  {
    name: "Taibah",
    comment:
      "The material, stitching and zippers all feel strong. The bag has a clean, premium look that matches every outfit.",
    productName: "S1 Premium Leather Backpack + One Fanny Bag Free",
    productSlug: "s1-premium-leather-backpack",
    productImage: "https://www.albus.pk/cdn/shop/files/media.jpg?v=1784714546&width=896",
    salePrice: "Rs.2,499.00",
    regularPrice: "Rs.4,999.00",
  },
  {
    name: "Javeria Masood",
    comment:
      "This bag looks professional and keeps everything organized. I use it daily for work, and it is very comfortable to carry.",
    productName: "The Onyx Backpack",
    productSlug: "the-onyx-backpack",
    productImage: "https://www.albus.pk/cdn/shop/files/Black_4.png?v=1784643766&width=1122",
    salePrice: "Rs.1,999.00",
    regularPrice: "Rs.4,999.00",
  },
];

interface TestimonialsSectionProps {
  data?: TestimonialsSectionContent;
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-stone-50 border-b border-stone-200">
      <SectionContainer>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm md:text-base">
            Honest feedback from people who carry ALBUS everyday.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ALBUS_REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5 GOLD STARS */}
                <div className="flex gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[#ff9c05] text-[#ff9c05]"
                    />
                  ))}
                </div>

                {/* USER NAME & VERIFIED BADGE */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-stone-900 text-sm">
                    {review.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-stone-500 italic">
                    <Check className="h-3 w-3 text-stone-400 stroke-[3]" />
                    Verified Buyer
                  </span>
                </div>

                {/* QUOTE */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-5">
                  {review.comment}
                </p>
              </div>

              {/* LINKED PRODUCT ATTACHMENT */}
              <div className="pt-3.5 border-t border-stone-100 flex items-center gap-3">
                <div className="relative w-12 h-14 rounded-md overflow-hidden bg-stone-100 shrink-0">
                  <Image
                    src={review.productImage}
                    alt={review.productName}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${review.productSlug}`}
                    className="text-xs font-semibold text-stone-900 hover:text-[#8B5E3C] line-clamp-1 block transition-colors"
                  >
                    {review.productName}
                  </Link>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs font-bold text-[#8B5E3C]">
                      {review.salePrice}
                    </span>
                    <span className="text-[11px] text-stone-400 line-through">
                      {review.regularPrice}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
