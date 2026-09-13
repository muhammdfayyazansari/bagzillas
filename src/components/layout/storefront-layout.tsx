import * as React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface StorefrontLayoutProps {
  children: React.ReactNode;
}

export function StorefrontLayout({ children }: StorefrontLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full overflow-hidden whitespace-nowrap pt-3">

        {/* 2. The moving track that pauses smoothly on hover */}
        <div className="flex  gap-20 w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">

          {/* 3. Original Text Block (Repeated to fill space) */}
          {
            ["📦 FREE DELIVERY ON BACKPACK ORDERS ABOVE RS. 10,000!", "🔥 BACK TO SCHOOL SALE: FLAT 15% OFF ALL BACKPACKS!", "✨ DISCOUNT AUTOMATICALLY APPLIED AT CHECKOUT!", "📦 FREE DELIVERY ON BACKPACK ORDERS ABOVE RS. 10,000!", "🔥 BACK TO SCHOOL SALE: FLAT 15% OFF ALL BACKPACKS!", "✨ DISCOUNT AUTOMATICALLY APPLIED AT CHECKOUT!"]
              .map((text, index) => (
                <div key={text + index} className="flex  gap-20 select-none font-extrabold">
                  <span>/</span>
                  <span>{text}</span>
                </div>
              ))
          }
        </div>
      </div>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
