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
      className={`inline-flex items-center gap-2 group select-none transition-transform active:scale-95 ${className ?? ""}`}
    >
      {/* Sleek Bagzillas Monogram Icon */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-stone-900 text-white font-black text-sm tracking-widest shadow-sm group-hover:bg-[#8B5E3C] transition-colors">
        <span>B</span>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="text-xl font-extrabold tracking-[0.12em] text-stone-900 leading-none group-hover:text-[#8B5E3C] transition-colors">
          {/* BagZillas */}
          BagZillas
        </span>
        <span className="text-[8.5px] font-semibold tracking-[0.25em] text-stone-500 uppercase leading-tight mt-0.5">
          {/* Quality Bags For Everyone */}
          Quality Products
        </span>
      </div>
    </Link>
  );
}
