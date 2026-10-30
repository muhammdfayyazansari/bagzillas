import * as React from "react";
import Link from "next/link";
// Image import kept for easy re-enabling of static logo
// import Image from "next/image";

interface NavLogoProps {
  className?: string;
  onClick?: () => void;
  size?: "default" | "compact" | "large";
}

export function NavLogo({ className, onClick, size = "default" }: NavLogoProps) {
  const sizeClasses = {
    compact: "h-9 sm:h-10 w-auto",
    default: "h-11 sm:h-12 md:h-13 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[210px]",
    large: "h-14 sm:h-16 w-auto max-w-[220px]",
  }[size];

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center group select-none transition-transform active:scale-95 ${className ?? ""}`}
      aria-label="Bagzillas - The Name of Quality"
    >
      {/* =========================================================================
          PREVIOUS STATIC IMAGE LOGO (COMMENTED OUT AS REQUESTED)
          Uncomment below if you wish to revert from video logo back to static image.
         ========================================================================= */}
      {/*
      <Image
        src="/images/bagzillas-logo.png"
        alt="Bagzillas - The Name of Quality"
        width={191}
        height={151}
        priority
        className={`${sizeClasses} object-contain transition-transform duration-200 group-hover:scale-105`}
      />
      */}

      {/* =========================================================================
          ANIMATED BRAND VIDEO LOGO
         ========================================================================= */}
      <video
        src="/images/hero_video/1000295211.mp4"
        poster="/images/hero_video/logo-video-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`${sizeClasses} aspect-[960/544] object-contain rounded-md transition-transform duration-200 group-hover:scale-105`}
      />
    </Link>
  );
}
