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
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCartStore } from "@/store/cart.store";
import { CartDrawer } from "@/features/storefront/components/cart-drawer";
import { NavLogo } from "./nav-logo";

interface SubCategoryItem {
  name: string;
  href: string;
}

interface CategoryNavItem {
  name: string;
  href: string;
  hasSubmenu?: boolean;
  isSpecial?: boolean;
  subcategories?: SubCategoryItem[];
}

const CATEGORIES_MENU: CategoryNavItem[] = [
  {
    name: "Grand Luggage Sale Live",
    href: "/products?category=luggage&sale=true",
    isSpecial: true,
  },
  {
    name: "Luggage",
    href: "/products?category=luggage",
    hasSubmenu: true,
    subcategories: [
      { name: "Hard-shell Suitcase", href: "/products?category=luggage&type=hard-shell" },
      { name: "Soft-Shell Luggages", href: "/products?category=luggage&type=soft-shell" },
      { name: "Aluminum Suitcase", href: "/products?category=luggage&type=aluminum" },
      { name: "Kids Luggage", href: "/products?category=luggage&type=kids" },
      { name: "Small Carry-on Suitcase", href: "/products?category=luggage&type=carry-on" },
      { name: "Medium Suitcase", href: "/products?category=luggage&type=medium" },
      { name: "Large Suitcase", href: "/products?category=luggage&type=large" },
    ],
  },
  {
    name: "Travel-Gym Bags",
    href: "/products?category=travel-gym-bags",
    hasSubmenu: true,
    subcategories: [
      { name: "Duffel Bags", href: "/products?category=duffel-bags" },
      { name: "Sports Gym Bags", href: "/products?category=sports-gym-bags" },
      { name: "Weekender Holdalls", href: "/products?category=weekender-holdalls" },
      { name: "Foldable Travel Bags", href: "/products?category=foldable-travel" },
      { name: "Shoe Compartment Bags", href: "/products?category=shoe-compartment" },
    ],
  },
  {
    name: "Backpacks",
    href: "/products?category=backpacks",
    hasSubmenu: true,
    subcategories: [
      { name: "School Backpacks", href: "/products?category=backpacks&type=school" },
      { name: "College & University Bags", href: "/products?category=backpacks&type=college" },
      { name: "Anti-Theft Backpacks", href: "/products?category=backpacks&type=anti-theft" },
      { name: "Waterproof Travel Packs", href: "/products?category=backpacks&type=waterproof" },
      { name: "Casual Daypacks", href: "/products?category=backpacks&type=casual" },
    ],
  },
  {
    name: "Kid's School Bags",
    href: "/products?category=kids-school-bags",
    hasSubmenu: true,
    subcategories: [
      { name: "Cartoon & Character Bags", href: "/products?category=kids-school-bags&type=character" },
      { name: "Trolley / Wheeled School Bags", href: "/products?category=kids-school-bags&type=trolley" },
      { name: "Junior Primary Backpacks", href: "/products?category=kids-school-bags&type=junior" },
      { name: "School Lunch Bags", href: "/products?category=lunch-bags" },
      { name: "Pencil Cases & Pouches", href: "/products?category=pencil-cases" },
    ],
  },
  {
    name: "Laptop Bags",
    href: "/products?category=laptop-bags",
    hasSubmenu: true,
    subcategories: [
      { name: "15.6 Inch Laptop Backpacks", href: "/products?category=laptop-bags&type=15-inch" },
      { name: "Professional Briefcases", href: "/products?category=laptop-bags&type=briefcase" },
      { name: "Padded Laptop Sleeves", href: "/products?category=laptop-bags&type=sleeves" },
      { name: "Messenger Laptop Bags", href: "/products?category=laptop-bags&type=messenger" },
    ],
  },
  {
    name: "Cross Body Bags",
    href: "/products?category=cross-body-bags",
    hasSubmenu: true,
    subcategories: [
      { name: "Chest Sling Bags", href: "/products?category=cross-body-bags&type=chest-sling" },
      { name: "Travel Waist Bags", href: "/products?category=cross-body-bags&type=waist-pack" },
      { name: "Everyday Crossbody Bags", href: "/products?category=cross-body-bags&type=everyday" },
    ],
  },
  {
    name: "Travel Essentials",
    href: "/products?category=travel-essentials",
    hasSubmenu: true,
    subcategories: [
      { name: "Luggage Packing Cubes", href: "/products?category=travel-essentials&type=packing-cubes" },
      { name: "TSA Approved Locks", href: "/products?category=travel-essentials&type=tsa-locks" },
      { name: "Luggage Covers & Tags", href: "/products?category=travel-essentials&type=covers-tags" },
      { name: "Neck Pillows", href: "/products?category=travel-essentials&type=pillows" },
    ],
  },
  {
    name: "All Collection",
    href: "/products",
    hasSubmenu: false,
  },
];

const BRANDS_MENU = [
  { name: "Delsey Paris", href: "/products?brand=delsey-paris" },
  { name: "Samsonite", href: "/products?brand=samsonite" },
  { name: "American Tourister", href: "/products?brand=american-tourister" },
  { name: "Bagzillas Originals", href: "/products?brand=bagzillas" },
  { name: "Swisswin", href: "/products?brand=swisswin" },
  { name: "VIP Luggage", href: "/products?brand=vip" },
  { name: "Polo Club", href: "/products?brand=polo-club" },
];

export function Navbar() {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  // Cascading dropdown states
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  const [activeCategoryName, setActiveCategoryName] = React.useState<string>("Luggage");
  const [isBrandsOpen, setIsBrandsOpen] = React.useState(false);

  // Mobile accordion states
  const [mobileExpandedSection, setMobileExpandedSection] = React.useState<string | null>(null);
  const [mobileActiveCategory, setMobileActiveCategory] = React.useState<string | null>(null);

  const categoryTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const brandsTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const cartCount = useCartStore((state) => (isMounted ? state.cartCount() : 0));

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCategoryMouseEnter = () => {
    if (categoryTimeoutRef.current) clearTimeout(categoryTimeoutRef.current);
    setIsCategoryOpen(true);
  };

  const handleCategoryMouseLeave = () => {
    categoryTimeoutRef.current = setTimeout(() => {
      setIsCategoryOpen(false);
    }, 180);
  };

  const handleBrandsMouseEnter = () => {
    if (brandsTimeoutRef.current) clearTimeout(brandsTimeoutRef.current);
    setIsBrandsOpen(true);
  };

  const handleBrandsMouseLeave = () => {
    brandsTimeoutRef.current = setTimeout(() => {
      setIsBrandsOpen(false);
    }, 180);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const currentActiveCategory = CATEGORIES_MENU.find(
    (cat) => cat.name === activeCategoryName
  );
  const text = "";

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">

      <div className="w-full overflow-hidden whitespace-nowrap pt-3">

        {/* 2. The moving track that pauses smoothly on hover */}
        <div className="flex  gap-20 w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">

          {/* 3. Original Text Block (Repeated to fill space) */}
          {
            ["📦 FREE DELIVERY ON BACKPACK ORDERS ABOVE RS. 10,000!", "🔥 BACK TO SCHOOL SALE: FLAT 15% OFF ALL BACKPACKS!", "✨ DISCOUNT AUTOMATICALLY APPLIED AT CHECKOUT!", "📦 FREE DELIVERY ON BACKPACK ORDERS ABOVE RS. 10,000!", "🔥 BACK TO SCHOOL SALE: FLAT 15% OFF ALL BACKPACKS!", "✨ DISCOUNT AUTOMATICALLY APPLIED AT CHECKOUT!"].map((text, index) => (
              <div className="flex  gap-20 select-none font-extrabold">
                <span>/</span>
                <span>{text}</span>
              </div>
            ))
          }
        </div>
      </div>

      {/* Top Navbar Row */}
      {/* <div className="mx-auto flex h-[74px] max-w-9xl items-center justify-between px-4 sm:px-6 lg:px-10"> */}
      <div className="mx-auto w-full max-w-9xl px-4 md:px-6 lg:px-8 flex h-[74px] items-center justify-between sm:px-6">
        {/* Mobile Menu Toggle button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#5c8a58] hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Brand Logo */}
        <div className="flex flex-1 justify-center lg:flex-none lg:justify-start ">
          <NavLogo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          {/* HOME */}
          <Link
            href="/"
            className="text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#5c8a58] transition-colors py-2"
          >
            HOME
          </Link>

          {/* SHOP BY CATEGORY (Cascading Flyout Menu) */}
          <div
            className="relative py-4"
            onMouseEnter={handleCategoryMouseEnter}
            onMouseLeave={handleCategoryMouseLeave}
          >
            <button
              type="button"
              className={`flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer ${isCategoryOpen ? "text-[#5c8a58]" : "text-[#658e65] hover:text-[#5c8a58]"
                }`}
            >
              <span>SHOP BY CATEGORY</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isCategoryOpen ? "rotate-180 text-[#5c8a58]" : "text-[#658e65]"
                  }`}
              />
            </button>

            {/* Cascading Flyout Menu Container */}
            <AnimatePresence>
              {isCategoryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-[calc(100%-8px)] flex z-50 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.18)]"
                >
                  {/* Column 1: Main Categories List */}
                  <div className="w-64 bg-white border border-gray-200/90 py-3 select-none">
                    {CATEGORIES_MENU.map((cat) => {
                      const isHovered = activeCategoryName === cat.name;
                      return (
                        <div
                          key={cat.name}
                          onMouseEnter={() => {
                            if (cat.hasSubmenu) {
                              setActiveCategoryName(cat.name);
                            }
                          }}
                          className={`relative group flex items-center justify-between px-6 py-2.5 text-[13px] font-bold cursor-pointer transition-colors ${cat.isSpecial
                            ? "text-gray-900 hover:text-[#5c8a58]"
                            : isHovered
                              ? "text-[#5c8a58] bg-gray-50/90"
                              : "text-gray-900 hover:text-[#5c8a58] hover:bg-gray-50/60"
                            }`}
                        >
                          <Link
                            href={cat.href}
                            onClick={() => setIsCategoryOpen(false)}
                            className="flex-1 flex items-center gap-2"
                          >
                            <span>{cat.name}</span>
                            {cat.isSpecial && (
                              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            )}
                          </Link>
                          {cat.hasSubmenu && (
                            <ChevronRight
                              className={`h-3.5 w-3.5 ml-2 transition-colors ${isHovered ? "text-[#5c8a58]" : "text-gray-400 group-hover:text-gray-700"
                                }`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Column 2: Subcategories (Flyout to the right) */}
                  {currentActiveCategory?.hasSubmenu &&
                    currentActiveCategory.subcategories && (
                      <div className="w-64 bg-white border-t border-r border-b border-gray-200/90 py-3 -ml-[1px] shadow-[10px_15px_40px_-5px_rgba(0,0,0,0.14)]">
                        {currentActiveCategory.subcategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsCategoryOpen(false)}
                            className="block px-6 py-2.5 text-[13px] font-bold text-gray-800 hover:text-[#5c8a58] hover:bg-gray-50/80 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SHOP BY BRANDS */}
          <div
            className="relative py-4"
            onMouseEnter={handleBrandsMouseEnter}
            onMouseLeave={handleBrandsMouseLeave}
          >
            <button
              type="button"
              className={`flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer ${isBrandsOpen ? "text-[#5c8a58]" : "text-gray-900 hover:text-[#5c8a58]"
                }`}
            >
              <span>SHOP BY BRANDS</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isBrandsOpen ? "rotate-180 text-[#5c8a58]" : "text-gray-600"
                  }`}
              />
            </button>

            {/* Brands Dropdown */}
            <AnimatePresence>
              {isBrandsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-[calc(100%-8px)] w-56 bg-white border border-gray-200/90 py-3 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.18)] z-50"
                >
                  {BRANDS_MENU.map((brand) => (
                    <Link
                      key={brand.name}
                      href={brand.href}
                      onClick={() => setIsBrandsOpen(false)}
                      className="block px-6 py-2.5 text-[13px] font-bold text-gray-800 hover:text-[#5c8a58] hover:bg-gray-50/80 transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 my-1 pt-1">
                    <Link
                      href="/products"
                      onClick={() => setIsBrandsOpen(false)}
                      className="flex items-center justify-between px-6 py-2 text-xs font-bold text-[#5c8a58] hover:underline"
                    >
                      <span>Explore All Brands</span>
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* GRAND LUGGAGE SALE */}
          <Link
            href="/products?category=luggage&sale=true"
            className="text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#5c8a58] transition-colors py-2 flex items-center gap-1.5"
          >
            <span>GRAND LUGGAGE SALE</span>
          </Link>

          {/* CONTACT US */}
          <Link
            href="/contact"
            className="text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#5c8a58] transition-colors py-2"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Right Side Utility Icons */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Search Icon / Toggle */}
          <button
            type="button"
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="p-1.5 text-gray-900 hover:text-[#5c8a58] transition-colors rounded-full hover:bg-gray-100"
            aria-label="Search products"
          >
            <Search className="h-5 w-5 stroke-[2.2]" />
          </button>

          {/* User / Account Icon */}
          <Link
            href="/admin/login"
            className="p-1.5 text-gray-900 hover:text-[#5c8a58] transition-colors rounded-full hover:bg-gray-100"
            aria-label="My Account"
          >
            <User className="h-5 w-5 stroke-[2.2]" />
          </Link>

          {/* Shopping Bag Icon with Count right next to it */}
          <CartDrawer
            trigger={
              <button
                type="button"
                className="flex items-center gap-1.5 p-1.5 text-gray-900 hover:text-[#5c8a58] transition-colors cursor-pointer group"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="h-5 w-5 stroke-[2.2] group-hover:scale-105 transition-transform" />
                <span className="text-[14px] font-black tracking-tight text-gray-900 leading-none">
                  {cartCount}
                </span>
              </button>
            }
          />
        </div>
      </div>

      {/* Interactive Expandable Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-200 bg-gray-50/95 overflow-hidden"
          >
            <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bags, suitcases, backpacks, trolley, laptop bags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full rounded-full border border-gray-300 bg-white py-2.5 pl-12 pr-24 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#5c8a58] focus:outline-none focus:ring-2 focus:ring-[#5c8a58]/20 shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 rounded-full bg-[#22a86c] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#1b8c59] transition-colors"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-3 p-1 text-gray-400 hover:text-gray-700"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.28 }}
              className="fixed inset-y-0 left-0 z-50 w-full max-w-sm border-r border-gray-200 bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <NavLogo onClick={() => setIsMobileMenuOpen(false)} />
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Search Form */}
              <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
                <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                  <Search className="absolute left-3.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search bags & luggage..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#5c8a58] focus:outline-none"
                  />
                </form>
              </div>

              {/* Drawer Links with Multi-Level Accordions */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
                {/* HOME */}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-[#5c8a58]"
                >
                  HOME
                </Link>

                {/* SHOP BY CATEGORY Accordion */}
                <div className="border-b border-gray-100 py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedSection(
                        mobileExpandedSection === "categories" ? null : "categories"
                      )
                    }
                    className="flex w-full items-center justify-between py-2 text-sm font-bold uppercase tracking-wider text-[#658e65]"
                  >
                    <span>SHOP BY CATEGORY</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${mobileExpandedSection === "categories" ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {mobileExpandedSection === "categories" && (
                    <div className="pl-3 pb-3 space-y-2 mt-1">
                      {CATEGORIES_MENU.map((cat) => (
                        <div key={cat.name} className="space-y-1">
                          {cat.hasSubmenu ? (
                            <div>
                              <button
                                type="button"
                                onClick={() =>
                                  setMobileActiveCategory(
                                    mobileActiveCategory === cat.name ? null : cat.name
                                  )
                                }
                                className="flex w-full items-center justify-between py-1.5 text-[13px] font-semibold text-gray-800 hover:text-[#5c8a58]"
                              >
                                <span>{cat.name}</span>
                                <ChevronDown
                                  className={`h-3.5 w-3.5 text-gray-400 transition-transform ${mobileActiveCategory === cat.name ? "rotate-180 text-[#5c8a58]" : ""
                                    }`}
                                />
                              </button>

                              {mobileActiveCategory === cat.name && cat.subcategories && (
                                <div className="pl-3 space-y-1.5 py-1 border-l-2 border-emerald-100 ml-1">
                                  {cat.subcategories.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block py-1 text-xs font-medium text-gray-600 hover:text-[#5c8a58]"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={cat.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1.5 text-[13px] font-semibold text-gray-800 hover:text-[#5c8a58]"
                            >
                              {cat.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* SHOP BY BRANDS Accordion */}
                <div className="border-b border-gray-100 py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedSection(
                        mobileExpandedSection === "brands" ? null : "brands"
                      )
                    }
                    className="flex w-full items-center justify-between py-2 text-sm font-bold uppercase tracking-wider text-gray-900"
                  >
                    <span>SHOP BY BRANDS</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${mobileExpandedSection === "brands" ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {mobileExpandedSection === "brands" && (
                    <div className="pl-3 pb-2 space-y-1.5 mt-1 border-l-2 border-gray-100 ml-1">
                      {BRANDS_MENU.map((brand) => (
                        <Link
                          key={brand.name}
                          href={brand.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-xs font-semibold text-gray-700 hover:text-[#5c8a58]"
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* GRAND LUGGAGE SALE */}
                <Link
                  href="/products?category=luggage&sale=true"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-[#5c8a58] border-b border-gray-100"
                >
                  GRAND LUGGAGE SALE
                </Link>

                {/* CONTACT US */}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-[#5c8a58]"
                >
                  CONTACT US
                </Link>
              </div>

              {/* Drawer Footer */}
              <div className="p-5 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                <Link
                  href="/admin/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-[#5c8a58]"
                >
                  <User className="h-4 w-4" />
                  <span>My Account</span>
                </Link>
                <div className="flex items-center gap-1.5 text-sm font-bold text-gray-700">
                  <ShoppingBag className="h-4 w-4" />
                  <span>{cartCount} Items</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
