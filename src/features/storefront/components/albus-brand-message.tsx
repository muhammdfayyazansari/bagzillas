import * as React from "react";

export function AlbusBrandMessage() {
  return (
    <section className="w-full py-8 sm:py-10 px-4 sm:px-6 text-center bg-white border-b border-stone-100">
      <div className="max-w-4xl mx-auto">
        <p className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#8B5E3C] uppercase mb-2.5 sm:mb-3">
          ALBUS — Luxury You Can Carry
        </p>

        <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-[#6F472D] leading-tight sm:leading-snug">
          <span className="inline bg-[#8B5E3C] text-white px-2 py-0.5 rounded-xs sm:rounded-sm box-decoration-clone">
            Modern bags. Premium details. Everyday confidence.
          </span>
          <span className="block mt-2 sm:mt-2.5 text-base sm:text-2xl md:text-3xl font-serif text-[#6F472D] font-semibold">
            Premium leather bags made for style, comfort, and easy everyday use.
          </span>
        </h2>
      </div>
    </section>
  );
}
