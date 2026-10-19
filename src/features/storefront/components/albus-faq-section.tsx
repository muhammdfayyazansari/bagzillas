"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";

const FAQS = [
  {
    question: "How long will delivery take?",
    answer: "Delivery usually takes 3-5 working days depending on your location.",
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer: "Yes, Cash on Delivery is available across Pakistan.",
  },
  {
    question: "Is the material long-lasting?",
    answer: "Yes, the premium build ensures high tear-resistance and durability.",
  },
  {
    question: "Is there any warranty?",
    answer: "Yes, we offer a 07-day exchange and return policy for quality issues.",
  },
];

export function AlbusFaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white border-b border-stone-100">
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          {/* HEADER MATCHING ALBUS EXACTLY */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 mb-2">
              Frequently asked questions
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm md:text-base">
              Find answers to common questions about our products and services.
            </p>
          </div>

          {/* ACCORDION LIST */}
          <div className="space-y-3 sm:space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-stone-200 bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-4 sm:py-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-stone-900 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 sm:h-5 sm:w-5 text-stone-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#8B5E3C]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
