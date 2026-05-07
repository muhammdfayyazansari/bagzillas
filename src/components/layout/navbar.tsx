"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ShoppingCart, User, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "./section-container";
import { CartDrawer } from "@/features/storefront/components/cart-drawer";

const navLinks = [
  { name: "Backpacks", href: "/products?category=backpacks" },
  { name: "Tote Bags", href: "/products?category=tote-bags" },
  { name: "Duffel Bags", href: "/products?category=duffel-bags" },
  { name: "Accessories", href: "/products?category=accessories" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <SectionContainer>
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="-ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Logo */}
          <div className="flex flex-1 justify-center lg:flex-none lg:justify-start">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">Bagzillas</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 lg:flex-1">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
            <CartDrawer />
          </div>
        </div>
      </SectionContainer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs border-r bg-background p-6 shadow-xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>
                  Bagzillas
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="-mr-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-8 border-t">
                <Link href="/login" className="flex items-center gap-2 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  <User className="h-5 w-5" />
                  Account
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
