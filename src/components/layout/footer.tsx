"use client";

import * as React from "react";
import Link from "next/link";
import { Send, ArrowRight } from "lucide-react";
import { SectionContainer } from "./section-container";

const footerLinks = {
  shop: [
    { name: "All Bags", href: "/products" },
    { name: "S1 BackPack", href: "/products/s1-backpack" },
    { name: "All in One Carry Bag", href: "/products/all-in-one-carry-bag" },
    { name: "The Onyx Backpack", href: "/products/the-onyx-backpack" },
    { name: "Bundle Offers", href: "/products/s1-premium-leather-backpack" },
  ],
  support: [
    { name: "Frequently Asked Questions", href: "/#faq" },
    { name: "Why ALBUS?", href: "/#why-albus" },
    { name: "Our Story", href: "/#story" },
    { name: "Shipping & Delivery Policy", href: "/shipping" },
    { name: "Exchange & Returns", href: "/returns" },
  ],
  legal: [
    { name: "Cash on Delivery Terms", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* 1. NEWSLETTER PROMO BANNER */}
      <div className="border-b border-stone-800/80 bg-stone-900/60 py-8 sm:py-12">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <span className="text-[10.5px] sm:text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-1">
                STAY CONNECTED
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Join the ALBUS Community
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-400 max-w-md">
                Subscribe to get special offers, early drop access, and insider updates directly to your inbox.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to ALBUS Pakistan!");
              }}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-md lg:ml-auto w-full"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-stone-800 border border-stone-700 rounded-full text-white placeholder-stone-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-[#8B5E3C] hover:bg-[#724b2f] text-white rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </SectionContainer>
      </div>

      {/* 2. MAIN FOOTER NAVIGATION */}
      <SectionContainer className="py-10 sm:py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Brand Info */}
          <div className="col-span-2 sm:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl sm:text-2xl font-black tracking-[0.2em] text-white">
                ALBUS
              </span>
              <span className="block text-[8.5px] sm:text-[9px] font-bold tracking-[0.3em] text-[#8B5E3C] uppercase">
                PAKISTAN
              </span>
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Modern bags. Premium details. Everyday confidence. Engineered for urban commuters, students, and travelers across Pakistan.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs text-stone-400">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-stone-900 border border-stone-800">
                🚚 Nationwide COD
              </span>
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-stone-900 border border-stone-800">
                🛡️ 7-Day Guarantee
              </span>
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-stone-900 border border-stone-800">
                ⚡ Express Delivery
              </span>
            </div>
          </div>

          {/* Shop */}
          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Shop Collections
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Explore &amp; Help
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Payment Methods */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Payment &amp; Trust
            </h4>
            <p className="text-[11px] sm:text-xs text-stone-400 mb-3 leading-relaxed">
              We support Cash on Delivery, JazzCash, EasyPaisa, and Direct Bank Transfer across all Pakistan cities.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs font-medium text-stone-300">
              <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700">COD</span>
              <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700">JazzCash</span>
              <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700">EasyPaisa</span>
              <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700">Bank Wire</span>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-stone-500 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} ALBUS Pakistan. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-stone-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/admin" className="hover:text-stone-300 transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
