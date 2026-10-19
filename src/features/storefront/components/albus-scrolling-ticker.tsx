"use client";

import * as React from "react";

export function AlbusScrollingTicker() {
  const items = [
    "BUY ONE AND GET ONE FANNY BAG FREE!",
    "FREE SHIPPING ALL OVER THE PAKISTAN!",
    "BUY ONE AND GET ONE FANNY BAG FREE!",
    "FREE SHIPPING ALL OVER THE PAKISTAN!",
    "BUY ONE AND GET ONE FANNY BAG FREE!",
    "FREE SHIPPING ALL OVER THE PAKISTAN!",
  ];

  return (
    <div className="w-full bg-[#8B5E3C] text-white py-3 sm:py-3.5 overflow-hidden select-none border-y border-[#774f32]">
      <div className="flex w-max animate-[marquee_24s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Double list for smooth seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm font-bold tracking-wider uppercase"
          >
            <span>{text}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              className="text-amber-200 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M0 6c3 0 6-3 6-6 0 3 3 6 6 6-3 0-6 3-6 6 0-3-3-6-6-6Z"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
