import * as React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

interface StorefrontLayoutProps {
  children: React.ReactNode;
}

export function StorefrontLayout({ children }: StorefrontLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative pb-16 lg:pb-0">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      {/* WhatsApp floating button on every storefront page */}
      <WhatsAppButton />
    </div>
  );
}
