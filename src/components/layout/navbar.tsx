"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  ShoppingBag,
  User,
  Search,
  X,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Truck,
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
  { name: "Why ALBUS?", href: "/#why-albus" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [announcementIndex, setAnnouncementIndex] = React.useState(0);

  const cartCount = useCartStore((state) => (isMounted ? state.cartCount() : 0));

  React.useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-wider text-stone-700 hover:text-[#8B5E3C] transition-colors relative group py-2"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5E3C] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
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
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-stone-800 hover:bg-stone-100 hover:text-[#8B5E3C] text-sm font-semibold tracking-wide transition-colors"
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
                <div className="text-xs text-stone-500 text-center">
                  🚚 Free Shipping & COD across Pakistan
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
