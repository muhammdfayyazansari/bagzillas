"use client";

import * as React from "react";
import Link from "next/link";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { SectionContainer } from "./section-container";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <SectionContainer className="py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* 1. SHOP MENU */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase mb-4 sm:mb-5">
              Shop
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=backpacks"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Backpack
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=travel-bags"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Travel Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. POLICIES MENU */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase mb-4 sm:mb-5">
              Policies
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. JOIN OUR COMMUNITY (NEWSLETTER) */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase mb-4 sm:mb-5">
              Join Our Community
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mb-4 leading-relaxed">
              Subscribe us to get latest updates about products, sales &amp; much more.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs">
                ✓ Thank you for subscribing to Bagzillas!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email... "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-[#8B5E3C] hover:bg-[#724b2f] text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>

          {/* 4. STORE INFO & SOCIALS */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase mb-4 sm:mb-5">
              Contact &amp; Store
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>Kashmir Road Faisalabad, Pakistan</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8B5E3C] shrink-0" />
                <a
                  href="tel:+923412345061"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  +92 341 2345061
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8B5E3C] shrink-0" />
                <a
                  href="mailto:albus3781@gmail.com"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  albus3781@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Links from Albus.pk */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/192ef9k3gq/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#8B5E3C] transition-colors"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">f</span>
              </a>

              <a
                href="https://www.instagram.com/albuspk_?igsh=MWx5OHJzN2Z4Y284bQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#8B5E3C] transition-colors"
                aria-label="Instagram"
              >
                <span className="font-bold text-xs">ig</span>
              </a>

              <a
                href="https://www.tiktok.com/@albus.pk?_r=1&_t=ZS-98CTxaOELvW"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#8B5E3C] transition-colors"
                aria-label="TikTok"
              >
                <span className="font-bold text-xs">tt</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()}, Bagzillas Pakistan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-400">Cash on Delivery across Pakistan</span>
            <Link href="/admin" className="text-stone-400 hover:text-white transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
