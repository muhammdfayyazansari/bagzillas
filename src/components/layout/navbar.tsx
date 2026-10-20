"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Menu,
  ShoppingBag,
  User,
  Search,
  X,
  ChevronRight,
  ShieldCheck,
  Truck,
  Home,
  Backpack,
  Luggage,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCartStore } from "@/store/cart.store";
import { CartDrawer } from "@/features/storefront/components/cart-drawer";
import { NavLogo } from "./nav-logo";

const ANNOUNCEMENTS = [
  "🔥 BUY ONE AND GET ONE FANNY BAG FREE!",
  "🚚 FREE SHIPPING ALL OVER PAKISTAN!",
  "⚡ CASH ON DELIVERY (COD) AVAILABLE NATIONWIDE",
];

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Backpack", href: "/products?category=backpacks" },
  { name: "Travel Bags", href: "/products?category=travel-bags" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [announcementIndex, setAnnouncementIndex] = React.useState(0);
  const [searchParamsString, setSearchParamsString] = React.useState("");

  const cartCount = useCartStore((state) => (isMounted ? state.cartCount() : 0));

  React.useEffect(() => {
    setIsMounted(true);
    setSearchParamsString(window.location.search);

    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pathname]);

  const isBackpackActive =
    pathname === "/products" &&
    (searchParamsString.includes("backpack") || searchParamsString.includes("backpacks"));
  const isTravelActive =
    pathname === "/products" &&
    (searchParamsString.includes("travel") || searchParamsString.includes("travel-bags"));

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      {/* 1. TOP ANNOUNCEMENT TICKER */}
      <div className="bg-stone-900 text-stone-200 text-xs font-medium py-2 px-4 select-none overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-stone-400">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
            <span>100% Guaranteed Authentic Materials</span>
          </div>

          <div className="flex-1 text-center font-semibold tracking-wide text-[11.5px] sm:text-xs">
            <AnimatePresence mode="wait">
              <motion.span
                key={announcementIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {ANNOUNCEMENTS[announcementIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-stone-400">
            <Truck className="h-3.5 w-3.5 text-amber-500" />
            <span>3–5 Days Nationwide Delivery</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="p-2 rounded-lg text-stone-800 hover:text-stone-950 hover:bg-stone-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Brand Logo */}
        <div className="flex items-center">
          <NavLogo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isLinkActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.includes("backpacks")
                ? isBackpackActive
                : link.href.includes("travel-bags")
                ? isTravelActive
                : pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-semibold uppercase tracking-wider transition-colors relative group py-2 ${
                  isLinkActive
                    ? "text-[#8B5E3C]"
                    : "text-stone-700 hover:text-[#8B5E3C]"
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#8B5E3C] transition-all duration-200 ${
                    isLinkActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Trigger */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2.5 rounded-full text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors"
            aria-label="Search site"
          >
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </button>

          {/* Admin / Account Link */}
          <Link
            href="/admin"
            className="hidden sm:inline-flex p-2.5 rounded-full text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors"
            title="Admin Dashboard"
          >
            <User className="h-5 w-5" />
          </Link>

          {/* Sliding Cart Drawer Trigger */}
          <CartDrawer
            trigger={
              <button
                type="button"
                className="relative inline-flex items-center justify-center p-2.5 rounded-full text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer group"
                aria-label="Open shopping cart"
              >
                <ShoppingBag className="h-5 w-5 group-hover:scale-105 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8B5E3C] text-[10.5px] font-bold text-white shadow-sm ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </button>
            }
          />
        </div>
      </div>

      {/* 2b. MOBILE SCREEN MENU BAR (Visible on small screens) */}
      <div className="lg:hidden border-t border-stone-200/80 bg-stone-50/95 backdrop-blur-md px-2.5 py-2 shadow-xs">
        <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
          {/* Home Button */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-center transition-all ${
              pathname === "/"
                ? "bg-stone-900 text-white font-semibold shadow-xs"
                : "text-stone-700 hover:text-stone-950 hover:bg-stone-200/60 font-medium"
            }`}
          >
            <Home className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] leading-tight">Home</span>
          </Link>

          {/* Backpack Button */}
          <Link
            href="/products?category=backpacks"
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-center transition-all ${
              isBackpackActive
                ? "bg-stone-900 text-white font-semibold shadow-xs"
                : "text-stone-700 hover:text-stone-950 hover:bg-stone-200/60 font-medium"
            }`}
          >
            <Backpack className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] leading-tight">Backpack</span>
          </Link>

          {/* Travel Bags Button */}
          <Link
            href="/products?category=travel-bags"
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-center transition-all ${
              isTravelActive
                ? "bg-stone-900 text-white font-semibold shadow-xs"
                : "text-stone-700 hover:text-stone-950 hover:bg-stone-200/60 font-medium"
            }`}
          >
            <Luggage className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] leading-tight">Travel Bags</span>
          </Link>

          {/* Contact Button */}
          <Link
            href="/contact"
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-center transition-all ${
              pathname === "/contact"
                ? "bg-[#8B5E3C] text-white font-semibold shadow-xs"
                : "bg-white text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white font-semibold border border-amber-200/80 shadow-xs"
            }`}
          >
            <Phone className="h-4 w-4 mb-0.5" />
            <span className="text-[11px] leading-tight">Contact</span>
          </Link>
        </div>
      </div>

      {/* 3. EXPANDABLE SEARCH BAR OVERLAY */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-stone-200 bg-stone-50/95 overflow-hidden"
          >
            <div className="max-w-3xl mx-auto p-4 sm:p-6">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search backpacks, travel bags, onyx edition..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-12 pr-28 py-3.5 bg-white border border-stone-300 rounded-full text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-5 py-2 bg-stone-900 text-white rounded-full text-xs font-semibold hover:bg-[#8B5E3C] transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. RESPONSIVE MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-5 border-b border-stone-200">
                <NavLogo onClick={() => setIsMobileMenuOpen(false)} />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Navigation Buttons */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-1 mb-1">
                  Menu
                </div>

                {/* 1. Home Button */}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    pathname === "/"
                      ? "bg-stone-900 text-white border-stone-900 font-semibold shadow-sm"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-50 hover:border-stone-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        pathname === "/" ? "bg-stone-800 text-white" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      <Home className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Home</div>
                      <div className={`text-xs ${pathname === "/" ? "text-stone-300" : "text-stone-500"}`}>
                        Return to storefront
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-60" />
                </Link>

                {/* 2. Backpack Button */}
                <Link
                  href="/products?category=backpacks"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    isBackpackActive
                      ? "bg-stone-900 text-white border-stone-900 font-semibold shadow-sm"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-50 hover:border-stone-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isBackpackActive ? "bg-stone-800 text-white" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      <Backpack className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Backpack</div>
                      <div
                        className={`text-xs ${
                          isBackpackActive ? "text-stone-300" : "text-stone-500"
                        }`}
                      >
                        Premium leather backpacks
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    Hot
                  </span>
                </Link>

                {/* 3. Travel Bags Button */}
                <Link
                  href="/products?category=travel-bags"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    isTravelActive
                      ? "bg-stone-900 text-white border-stone-900 font-semibold shadow-sm"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-50 hover:border-stone-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isTravelActive ? "bg-stone-800 text-white" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      <Luggage className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Travel Bags</div>
                      <div
                        className={`text-xs ${
                          isTravelActive ? "text-stone-300" : "text-stone-500"
                        }`}
                      >
                        All-in-one carry &amp; travel bags
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-60" />
                </Link>

                {/* 4. Contact Button */}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all mt-3 ${
                    pathname === "/contact"
                      ? "bg-[#8B5E3C] text-white border-[#8B5E3C] font-semibold shadow-sm"
                      : "bg-[#8B5E3C]/10 text-[#8B5E3C] border-[#8B5E3C]/30 hover:bg-[#8B5E3C] hover:text-white font-semibold"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#8B5E3C] text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Contact Button</div>
                      <div className="text-xs opacity-80">
                        24/7 Support &amp; Direct Assistance
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-60" />
                </Link>

                {/* WhatsApp Quick Link inside Drawer */}
                <div className="pt-3">
                  <a
                    href="https://wa.me/923412345061?text=Hello%20Bagzillas!%20I%20have%20an%20inquiry%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors text-xs font-semibold"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span>WhatsApp: +92 341 2345061</span>
                  </a>
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
                <div className="text-xs text-stone-500 text-center">
                  🚚 Free Shipping &amp; COD across Pakistan
                </div>
                <Link
                  href="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full py-2.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Admin Portal
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
