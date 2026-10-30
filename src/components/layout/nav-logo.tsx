import * as React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLogoProps {
  className?: string;
  onClick?: () => void;
  size?: "default" | "compact" | "large";
}

export function NavLogo({ className, onClick, size = "default" }: NavLogoProps) {
  const sizeClasses = {
    compact: "h-9 w-auto",
    default: "h-11 sm:h-12 md:h-13 w-auto",
    large: "h-14 sm:h-16 w-auto",
  }[size];

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center group select-none transition-transform active:scale-95 ${className ?? ""}`}
      aria-label="Bagzillas - The Name of Quality"
    >
      <Image
        src="/images/bagzillas-logo.png"
        alt="Bagzillas - The Name of Quality"
        width={191}
        height={151}
        priority
        className={`${sizeClasses} object-contain transition-transform duration-200 group-hover:scale-105`}
      />
    </Link>
  );
}
