"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { cn } from "@/lib/utils";
import type { TestimonialsSectionContent } from "@/features/homepage/types/cms.types";

interface TestimonialsSectionProps {
  data?: TestimonialsSectionContent;
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const testimonials = data?.testimonials?.length ? data.testimonials : [
    {
      name: "Bilal Siddiqui",
      role: "Verified Buyer • Karachi",
      content: "The S1 backpack exceeded my expectations! The matte leather feel is ultra-luxurious, and the free fanny bag was a fantastic bonus. Arrived in just 2 days.",
      rating: 5,
    },
    {
      name: "Hamza Naveed",
      role: "Verified Buyer • Lahore",
      content: "Ordered the All in One Carry Bag for gym and weekend trips. The bottom shoe compartment is a game changer—keeps my apparel completely isolated.",
      rating: 5,
    },
    {
      name: "Sara Khan",
      role: "Verified Buyer • Islamabad",
      content: "The Onyx backpack is remarkably sleek! Perfect for office and client meetings. Fits my 15-inch laptop securely and the ergonomic straps feel feather-light.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-stone-50 border-b border-stone-200">
      <SectionContainer>
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B5E3C]/10 text-[#8B5E3C] text-[11px] sm:text-xs font-semibold mb-2 sm:mb-3">
            <Star className="h-3.5 w-3.5 fill-[#8B5E3C]" />
            <span>REAL STORIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 mb-2 sm:mb-3">
            What Our Customers Say
          </h2>
          <p className="text-stone-600 text-xs sm:text-base md:text-lg max-w-2xl mx-auto">
            Trusted by over 10,000+ daily commuters, professionals, and travelers across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xs border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-3 sm:mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-3.5 w-3.5 sm:h-4 sm:w-4",
                        i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-stone-200 text-stone-200"
                      )}
                    />
                  ))}
                </div>
                <p className="text-stone-700 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-stone-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-stone-500">{testimonial.role}</p>
                </div>
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
