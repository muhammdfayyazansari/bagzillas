import * as React from "react";
import Link from "next/link";

interface NavLogoProps {
  className?: string;
  onClick?: () => void;
}

export function NavLogo({ className, onClick }: NavLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 group select-none transition-transform active:scale-95 ${className ?? ""}`}
    >
      {/* Stylized Shopping / Luggage Bag Icon matching screenshot */}
      <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Handle */}
          <path
            d="M36 34V23C36 15.268 42.268 9 50 9C57.732 9 64 15.268 64 23V34"
            stroke="#22a86c"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Bag Body Outline */}
          <path
            d="M18 34L26 87C26.5 90.5 29.5 93 33 93H67C70.5 93 73.5 90.5 74 87L82 34H18Z"
            stroke="#22a86c"
            strokeWidth="6"
            strokeLinejoin="round"
            fill="#ffffff"
          />
          {/* Dynamic Swooshes (Orange & Cyan) */}
          <path
            d="M32 44C44 48 56 62 68 76"
            stroke="#f59e0b"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M26 64C36 68 54 62 72 52"
            stroke="#0ea5e9"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        {/* <span className="text-xl font-black tracking-tight text-gray-900 leading-none group-hover:text-[#22a86c] transition-colors"> */}
        <span className="text-md font-black tracking-tight text-gray-900 leading-none group-hover:text-[#22a86c] transition-colors">
          BAGZILLAS
        </span>
        <span className="text-[9px] font-bold tracking-[0.22em] text-[#0ea5e9] uppercase leading-tight mt">
          LUGGAGE & BAGS
        </span>
      </div>
    </Link>
  );
}
