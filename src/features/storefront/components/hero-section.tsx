"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { HeroSectionContent } from "@/features/homepage/types/cms.types";

interface HeroSectionProps {
  data?: HeroSectionContent;
}

/* ---------- Polymorphic Slide Types ---------- */

type ImageSlide = {
  type: "image";
  image: string;
  mobileImage: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  duration: number;
};

type VideoSlide = {
  type: "video";
  videoSrc: string;
  poster: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  duration: number;
};

type HeroSlide = ImageSlide | VideoSlide;

/* ---------- Slide Dataset ---------- */

const SLIDES: HeroSlide[] = [
  {
    type: "video",
    videoSrc: "/images/hero_video/1000295211.mp4",
    poster: "/images/hero_video/poster.jpg",
    title: "Engineered For Everyday Life",
    buttonText: "Explore Collection",
    buttonLink: "/products",
    duration: 20000,
  },
  {
    type: "image",
    image: "https://www.albus.pk/cdn/shop/files/desktop_size.png?v=1784564918&width=1672",
    mobileImage: "https://www.albus.pk/cdn/shop/files/1413451f-2d06-4a02-b274-5f5cbabfc777-ezremove.png?v=1776586314&width=480",
    title: "Carry with Confidence",
    buttonText: "Shop Now",
    buttonLink: "/products?category=backpacks",
    duration: 6000,
  },
  {
    type: "image",
    image: "https://www.albus.pk/cdn/shop/files/ChatGPT_Image_Jul_20_2026_09_58_03_PM.png?v=1784569384&width=1916",
    mobileImage: "https://www.albus.pk/cdn/shop/files/IMG_7127_JPG.jpg?v=1777891414&width=480",
    title: "Carry with Confidence",
    buttonText: "Shop Now",
    buttonLink: "/products?category=backpacks",
    duration: 6000,
  },
];

/* ---------- Component ---------- */

export function HeroSection({ data }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const slide = SLIDES[currentSlide];

  /* Dynamic slide timer — respects per-slide duration.
     For video slides the timer acts as a maximum cap; the video's
     `onEnded` callback can also advance the slide early. */
  React.useEffect(() => {
    const currentDuration = SLIDES[currentSlide].duration;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, currentDuration);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  /* Play / pause lifecycle for the video element */
  React.useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (SLIDES[currentSlide].type === "video") {
      vid.currentTime = 0;
      vid.play().catch(() => {
        /* autoplay may be blocked — poster remains visible */
      });
    } else {
      vid.pause();
    }
  }, [currentSlide]);

  /* Advance to next slide when video finishes naturally */
  const handleVideoEnded = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-stone-900 select-none">
      {/* FULLY RESPONSIVE SLIDESHOW CONTAINER */}
      <div className="
  relative w-full
  h-[calc(100svh-105px)]
  min-h-[420px]
  max-h-[480px]
  sm:h-[calc(100svh-105px)]
  sm:min-h-[480px]
  sm:max-h-[760px]
  lg:h-[calc(100svh-105px)]
  lg:min-h-0
  lg:max-h-none
  flex items-end justify-start
">
        {/* SLIDE MEDIA — CROSSFADE & KEN BURNS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {slide.type === "video" ? (
              /* ===== VIDEO SLIDE ===== */
              <div className="absolute inset-0 w-full h-full bg-stone-900">
                <video
                  ref={videoRef}
                  src={slide.videoSrc}
                  poster={slide.poster}
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  onEnded={handleVideoEnded}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ) : (
              /* ===== IMAGE SLIDE ===== */
              <>
                {/* Desktop image (md+) */}
                <div className="hidden md:block absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={currentSlide === 0}
                    sizes="(min-width: 768px) 100vw, 0px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Mobile image (< md) */}
                <div className="block md:hidden absolute inset-0">
                  <Image
                    src={slide.mobileImage}
                    alt={slide.title}
                    fill
                    priority={currentSlide === 0}
                    sizes="(max-width: 767px) 100vw, 0px"
                    className="object-cover object-center"
                  />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* HERO CAPTION & BUTTON (BOTTOM-LEFT) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-7 sm:pb-12 md:pb-16 text-left text-white">
          <motion.div
            key={`caption-${currentSlide}`}
            initial={{ opacity: 0, x: -24, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -14, y: -6 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
            className="max-w-xs sm:max-w-md md:max-w-lg"
          >
            {/* SHOP NOW BUTTON */}
            <Button
              size="lg"
              asChild
              className="bg-[#8B5E3C] hover:bg-[#724b2f] text-white font-medium text-[11px] sm:text-xs md:text-sm px-5 sm:px-7 py-2 sm:py-2.5 md:py-5 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Link href={slide.buttonLink} className="flex items-center gap-1.5 sm:gap-2">
                <span>{slide.buttonText}</span>
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* RESPONSIVE PREV / NEXT CONTROLS */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2.5 rounded-full bg-black/35 hover:bg-black/65 active:scale-90 text-white backdrop-blur-xs transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2.5 rounded-full bg-black/35 hover:bg-black/65 active:scale-90 text-white backdrop-blur-xs transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* RESPONSIVE SLIDE INDICATORS (BOTTOM-RIGHT) */}
        <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-1.5 sm:gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === i
                  ? "w-6 sm:w-8 bg-[#8B5E3C]"
                  : "w-1.5 sm:w-2.5 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
