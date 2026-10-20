"use client";

import * as React from "react";
import { Play, Volume2, VolumeX, X } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";

interface ReelItem {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  poster: string;
}

const REELS: ReelItem[] = [
  {
    id: "reel-1",
    title: "Your everyday fit deserves an everyday flex too",
    duration: "00:25",
    videoUrl:
      "https://cdn.shopify.com/videos/c/vp/13abebf7a65c4c92ad496758eb0c1e9a/13abebf7a65c4c92ad496758eb0c1e9a.HD-720p-1.6Mbps-90326035.mp4",
    poster:
      "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/preview_images/13abebf7a65c4c92ad496758eb0c1e9a.thumbnail.0000000000.jpg?v=1785408351",
  },
  {
    id: "reel-2",
    title: "S1 Premium Leather Backpack",
    duration: "00:28",
    videoUrl:
      "https://cdn.shopify.com/videos/c/vp/e5774838fcf54247b7c7e11e12427202/e5774838fcf54247b7c7e11e12427202.HD-720p-3.0Mbps-89518770.mp4",
    poster:
      "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/preview_images/e5774838fcf54247b7c7e11e12427202.thumbnail.0000000000.jpg?v=1784649763",
  },
  {
    id: "reel-3",
    title: "albuspk best bag packs trending explore bagpacks",
    duration: "00:20",
    videoUrl:
      "https://cdn.shopify.com/videos/c/vp/cc2244f8dc8142b093bc0cdb0285ab6f/cc2244f8dc8142b093bc0cdb0285ab6f.HD-720p-1.6Mbps-89518766.mp4",
    poster:
      "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/preview_images/cc2244f8dc8142b093bc0cdb0285ab6f.thumbnail.0000000000.jpg?v=1784649761",
  },
  {
    id: "reel-4",
    title: "The backpack that makes every outfit look better",
    duration: "00:31",
    videoUrl:
      "https://cdn.shopify.com/videos/c/vp/96e4a0a90beb4d7e8bd85120d89696c7/96e4a0a90beb4d7e8bd85120d89696c7.HD-720p-1.6Mbps-89518767.mp4",
    poster:
      "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/preview_images/96e4a0a90beb4d7e8bd85120d89696c7.thumbnail.0000000000.jpg?v=1784649763",
  },
  {
    id: "reel-5",
    title: "BUY 1 GET 1 FREE GRAND LAUNCH OFFER",
    duration: "01:06",
    videoUrl:
      "https://cdn.shopify.com/videos/c/vp/9ca029ec66714782b936f4088b64d9d8/9ca029ec66714782b936f4088b64d9d8.HD-720p-1.6Mbps-89518774.mp4",
    poster:
      "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/preview_images/9ca029ec66714782b936f4088b64d9d8.thumbnail.0000000000.jpg?v=1784649783",
  },
  {
    id: "reel-6",
    title: "A huge respect to shahnasir1 for trusting us",
    duration: "00:26",
    videoUrl:
      "https://cdn.shopify.com/videos/c/vp/4f845c316c774afe819aeba8bd111b90/4f845c316c774afe819aeba8bd111b90.HD-720p-1.6Mbps-90338780.mp4",
    poster:
      "https://cdn.shopify.com/s/files/1/0701/2066/9293/files/preview_images/4f845c316c774afe819aeba8bd111b90.thumbnail.0000000000.jpg?v=1785416496",
  },
];

export function AlbusFeedReels() {
  const [activeModalReel, setActiveModalReel] = React.useState<ReelItem | null>(null);
  const [isMuted, setIsMuted] = React.useState(false);

  return (
    <section className="py-14 sm:py-20 bg-stone-50 border-b border-stone-200">
      <SectionContainer>
        {/* Section Heading matching Albus */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            As Seen in Your Feed
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-500">
            Real moments, real style. Watch how Bagzillas bags move with everyday life.
          </p>
        </div>

        {/* Video Grid / Carousel */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveModalReel(reel)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-stone-900 aspect-[9/16] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background Video (Muted Autoplay on View) */}
              <video
                src={reel.videoUrl}
                poster={reel.poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 group-hover:from-black/60 transition-colors" />

              {/* Duration Badge */}
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[11px] font-semibold text-white tracking-wider">
                {reel.duration}
              </div>

              {/* Center Play Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-11 h-11 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <p className="text-[11px] sm:text-xs font-medium text-white line-clamp-2 leading-snug drop-shadow-sm">
                  {reel.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* LIGHTBOX VIDEO MODAL */}
      {activeModalReel && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModalReel(null)}
        >
          <div
            className="relative w-full max-w-sm aspect-[9/16] max-h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalReel(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="Close video reel"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-3 left-3 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Video Player */}
            <video
              src={activeModalReel.videoUrl}
              poster={activeModalReel.poster}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              controls
              className="w-full h-full object-cover"
            />

            {/* Title Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
              <p className="text-sm font-semibold text-white drop-shadow">
                {activeModalReel.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
