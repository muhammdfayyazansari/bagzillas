"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldCheck, Truck, RefreshCw, Send, ArrowRight } from "lucide-react";
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
      <div className="border-b border-stone-800/80 bg-stone-900/60 py-12">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-1">
                STAY CONNECTED
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Join the ALBUS Community
              </h3>
              <p className="mt-2 text-sm text-stone-400 max-w-md">
                Subscribe to get special offers, early drop access, and insider updates directly to your inbox.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to ALBUS Pakistan!");
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md lg:ml-auto w-full"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full px-5 py-3.5 bg-stone-800 border border-stone-700 rounded-full text-white placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-[#8B5E3C] hover:bg-[#724b2f] text-white rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </SectionContainer>
      </div>

      {/* 2. MAIN FOOTER NAVIGATION */}
      <SectionContainer className="py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-[0.2em] text-white">
                ALBUS
              </span>
              <span className="block text-[9px] font-bold tracking-[0.3em] text-[#8B5E3C] uppercase">
                PAKISTAN
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-stone-400 leading-relaxed">
              Modern bags. Premium details. Everyday confidence. Engineered for urban commuters, students, and travelers across Pakistan.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-stone-400">
              <span className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800">
                🚚 Nationwide COD
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800">
                🛡️ 7-Day Guarantee
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800">
                ⚡ Express Delivery
              </span>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Shop Collections
            </h4>
            <ul className="space-y-3 text-sm">
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
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore &amp; Help
            </h4>
            <ul className="space-y-3 text-sm">
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
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Payment &amp; Trust
            </h4>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed">
              We support Cash on Delivery, JazzCash, EasyPaisa, and Direct Bank Transfer across all Pakistan cities.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-stone-300">
              <span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700">COD</span>
              <span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700">JazzCash</span>
              <span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700">EasyPaisa</span>
              <span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700">Bank Wire</span>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} ALBUS Pakistan. All rights reserved.</p>
          <div className="flex items-center gap-6">
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
