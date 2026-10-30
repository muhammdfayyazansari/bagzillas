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
    compact: "h-10 sm:h-11 w-auto",
    default: "h-12 sm:h-13 md:h-14 w-auto",
    large: "h-15 sm:h-16 md:h-18 w-auto",
  }[size];

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center group select-none transition-transform active:scale-95 ${className ?? ""}`}
      aria-label="Bagzillas - The Name of Quality"
    >
      <Image
        src="/images/new_logo.png"
        alt="Bagzillas - The Name of Quality"
        width={401}
        height={497}
        priority
        className={`${sizeClasses} object-contain transition-transform duration-200 group-hover:scale-105`}
      />
    </Link>
  );
}
