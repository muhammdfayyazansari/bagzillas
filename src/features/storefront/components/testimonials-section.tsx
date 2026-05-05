"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "University Student",
    content: "The quality is simply unmatched. I've been using my Bagzillas backpack for a year now and it still looks brand new despite heavy daily use.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Ali",
    role: "Medical Student",
    content: "Finally found a bag that fits all my heavy books without hurting my shoulders. The ergonomic design is a lifesaver!",
    rating: 5,
  },
  {
    id: 3,
    name: "Usman Tariq",
    role: "Freelancer",
    content: "Great minimalist design and the laptop compartment is perfectly padded. Shipping was surprisingly fast too.",
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Loved by Students</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                    )}
                  />
                ))}
              </div>
              <p className="text-foreground text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
