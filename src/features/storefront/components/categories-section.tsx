"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/ui/button";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const categories = [
  {
    id: "backpacks",
    title: "Travel Gym Bags",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    href: "/products?category=backpacks",
  },
  {
    id: "tote-bags",
    title: "Shop School Bags",
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    href: "/products?category=tote-bags",
  },
  {
    id: "duffel-bags",
    title: "Backpack For All",
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    href: "/products?category=duffel-bags",
  },
  {
    id: "duffel-bags2",
    title: "Laptop Shoulder Bags",
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    href: "/products?category=duffel-bags",
  },
  {
    id: "duffel-bags3",
    title: "Travel Essentials",
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    href: "/products?category=duffel-bags",
  },
];

export function CategoriesSection() {


  const sliderRef = useRef<HTMLDivElement>(null);


const scrollSlider = (direction: "left" | "right") => {
  if (!sliderRef.current) return;

  const container = sliderRef.current;

  // Get the width of one card + gap
  const card = container.firstElementChild as HTMLElement;

  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 32; // md:gap-8 = 32px

  const scrollAmount = cardWidth + gap;

  container.scrollBy({
    left: direction === "right" ? scrollAmount : -scrollAmount,
    behavior: "smooth",
  });
};







  return (
    <section className="pt-10 bg-muted/10">
      <SectionContainer >
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">BEST LUGGAGE STORE IN PAKISTAN</h2>
          <p className="font-semibold text-xl max-w-2xl mx-auto">
            SHOP BY CATEGORY
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6"> SHOP BY CATEGORY</h2>
        </div>



   <div className="relative w-full">
     {/* LEFT BUTTON */}
     <Button
       type="button"
       onClick={() => scrollSlider("left")}
       className="
         absolute left-0 top-1/2 z-20
         -translate-x-1/2 -translate-y-1/2
         flex h-11 w-11 items-center justify-center
         rounded-full bg-white shadow-lg
         transition-all duration-200
         hover:scale-110
         md:h-12 md:w-12
       "
       aria-label="Previous categories"
     >
       <ChevronLeft className="h-6 w-6 text-black" />
     </Button>

     {/* SLIDER */}
     <div
       ref={sliderRef}
       className="
         flex gap-3
         overflow-x-auto
         overflow-y-hidden
         scroll-smooth
         snap-x snap-mandatory
         scrollbar-hide
         px-1
       "
       style={{
         scrollbarWidth: "none",
         msOverflowStyle: "none",
       }}
     >
       {categories.map((category, index) => (
         <motion.div
           key={category.id}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{
             duration: 0.5,
             delay: index * 0.1,
           }}
           className="
             flex-none
             w-full
             md:w-[calc((100%-2rem)/4)]
             snap-start
           "
         >
                  
           <Link
             href={category.href}
             className="
               group
               relative
               block
               overflow-hidden
               rounded-2xl
               aspect-[9/14]
             "
           >
             <Image
               src={category.imageUrl}
               alt={category.title}
               fill
               className="
                 object-cover
                 transition-transform
                 duration-700
                 ease-in-out
                 group-hover:scale-110
               "
               sizes="
                 (min-width: 768px) 25vw,
                 100vw
               "
             />

             {/* Overlay */}
             <div
               className="
                 absolute inset-0
                 bg-black/30
                 transition-colors
                 duration-300
                 group-hover:bg-black/40
               "
             />

             {/* Content */}
             <div
               className="
                 absolute inset-0
                 flex flex-col
                 items-center
                 justify-center
               "
             >
               <h3
                 className="
                   text-xl md:text-2xl
                   font-bold
                   tracking-wider
                   text-white
                   drop-shadow-md
                 "
               >
                 {category.title}
               </h3>

               {/* BUTTON */}
               <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                 <Button
                   size="sm"                   
                  className="
                     w-full sm:w-auto
                     rounded-full
                     bg-white
                     p-5
                     text-sm
                     font-semibold
                     text-black
                     hover:text-white
                     hover:bg-bz-green
                     cursor-pointer
                   "
                   
                 >
                     SEE MORE
                   
                 </Button>
               </div>
             </div>
           </Link>
         </motion.div>
       ))}
     </div>

     {/* RIGHT BUTTON */}
     <Button
       type="button"
       onClick={() => scrollSlider("right")}
       className="
         absolute right-0 top-1/2 z-20
         translate-x-1/2 -translate-y-1/2
         flex h-11 w-11 items-center justify-center
         rounded-full bg-white shadow-lg
         transition-all duration-200
         hover:scale-110
         cursor-pointer
         md:h-12 md:w-12
       "
       aria-label="Next categories"
     >
       <ChevronRight className="h-6 w-6 text-black" />
     </Button>
   </div>



      </SectionContainer>
      {/* <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect bag for your needs, from daily school runs to weekend getaways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href} className="group block relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wider drop-shadow-md">
                    {category.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionContainer> */}
    </section>
  );
}






































// <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
//           {categories.map((category, index) => (
//             <motion.div
//               key={category.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               {/* <Link href={category.href} className="group block relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-square lg:aspect-[4/3]"> */}
//               <Link href={category.href} className="group block relative overflow-hidden rounded-2xl aspect-[9/14]">
//                 <Image
//                   src={category.imageUrl}
//                   alt={category.title}
//                   fill
//                   className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
//                   sizes="(min-width: 768px) 33vw, 100vw"
//                 />
//                 <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
//                 <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
//                   <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wider drop-shadow-md">
//                     {category.title}
//                   </h3>
//                     {/* BUTTONS */}
//                 <div
//                   className="
//                     mt-8 flex flex-col gap-4
//                     sm:flex-row sm:items-center
//                     lg:mt-10
//                     xl:mt-12
//                   "
//                 >
//                   <Button
//                     size="sm"
//                     asChild
//                     className="
//                       w-full sm:w-auto
//                       bg-white text-black
//                       hover:text-white
//                       [a]:hover:bg-bz-green
//                       font-semibold 
//                       rounded-full
//                       p-5
//                       text-md
//                     "

//                   >
//                     <Link href={"/"}>
//                     SEE MORE
//                     {/* <Link href={primaryButtonLink}>
//                       {primaryButtonText} */}
//                       {/* <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" /> */}
//                     {/* </Link> */}
//                     </Link>
//                   </Button>
//                 </div>
                  
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>