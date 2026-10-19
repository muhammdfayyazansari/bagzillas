"use client";

import * as React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";


export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-stone-50 min-h-screen">
      <SectionContainer className="max-w-4xl">
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
            Contact ALBUS
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Have a question about an order, delivery timeline, or bulk inquiries? Reach out to our dedicated team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* STORE CONTACT INFO */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-stone-900">Get In Touch</h2>

            <div className="space-y-4 text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">Address</span>
                  <span>Kashmir Road Faisalabad, Pakistan</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">Phone &amp; WhatsApp</span>
                  <a href="tel:+923432878749" className="text-[#8B5E3C] hover:underline">
                    +92 343 2878749
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">Email</span>
                  <a href="mailto:albus3781@gmail.com" className="text-[#8B5E3C] hover:underline">
                    albus3781@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">Operating Hours</span>
                  <span>Monday – Sunday: 24/7 Available</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <a
                href="https://wa.me/923432878749"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp (+92 343 2878749)
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <h2 className="text-xl font-bold text-stone-900 mb-4">Send a Message</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been received. Our team will contact you shortly.");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmad Raza"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="03XXXXXXXXX"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you with ALBUS products?"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-stone-900 hover:bg-[#8B5E3C] text-white rounded-full font-semibold text-sm transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
