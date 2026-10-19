"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";

const FAQS = [
  {
    question: "How long will delivery take?",
    answer:
      "Delivery usually takes 3–5 working days across Pakistan depending on your city. All parcels are dispatched via express courier partners with live SMS and WhatsApp tracking.",
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer:
      "Yes, we offer Cash on Delivery (COD) across Pakistan for your convenience and peace of mind. You only pay when the parcel is delivered to your doorstep.",
  },
  {
    question: "Is the material long-lasting and durable?",
    answer:
      "Absolutely. The premium build ensures high tear-resistance, scratch-resistance, and long-term durability. Our bags are crafted from high-density, weather-resistant materials tested for daily commutes.",
  },
  {
    question: "Is there any warranty or return policy?",
    answer:
      "Yes, we offer a 7-day hassle-free exchange and return policy for any manufacturing defects or damaged shipments. Our customer care team is available on WhatsApp to assist you immediately.",
  },
  {
    question: "Can I fit my laptop and gym sneakers inside?",
    answer:
      "Yes! Our backpacks feature dedicated padded sleeves for up to 15.6” laptops, and models like the 'All in One Carry Bag' feature a dedicated bottom compartment to keep shoes isolated from your clean gear.",
  },
];

export function AlbusFaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 md:py-28 bg-white border-b border-stone-200">
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-[11px] sm:text-xs font-semibold mb-2 sm:mb-3">
              <HelpCircle className="h-3.5 w-3.5 text-[#8B5E3C]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 mb-2 sm:mb-3">
              Got Questions? We’ve Got Answers.
            </h2>
            <p className="text-stone-600 text-xs sm:text-base md:text-lg">
              Everything you need to know about ALBUS products, shipping, and guarantees.
            </p>
          </div>

          {/* ACCORDION LIST */}
          <div className="space-y-3 sm:space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl sm:rounded-2xl border border-stone-200/90 bg-stone-50/50 overflow-hidden transition-all duration-200 hover:border-stone-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-4 sm:py-5 sm:px-6 flex items-center justify-between text-left gap-3 sm:gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-base md:text-lg font-bold text-stone-900 leading-snug">
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
                        <div className="px-4 pb-4 sm:px-6 sm:pb-5 pt-1 text-xs sm:text-base text-stone-600 leading-relaxed border-t border-stone-200/50">
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
