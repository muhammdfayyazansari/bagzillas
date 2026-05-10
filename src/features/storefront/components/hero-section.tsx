"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/section-container";

import type { HeroSectionContent } from "@/features/homepage/types/cms.types";

interface HeroSectionProps {
  data?: HeroSectionContent;
}

export function HeroSection({ data }: HeroSectionProps) {
  const heading = data?.heading || "DELSEY PARIS";

  const subheading =
    data?.subheading ||
    "Experience The World With Delsey Paris. Iconic Design Meets Ultimate Durability For Your Next Grand Adventure.";

  const primaryButtonText =
    data?.primaryButtonText || "Shop Collection";

  const primaryButtonLink =
    data?.primaryButtonLink || "/products";

  const backgroundImageUrl =
    data?.backgroundImageUrl ||
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2500&auto=format&fit=crop";

  return (
    <section className="relative w-full overflow-hidden">
      <SectionContainer className="relative !max-w-none !px-0">
        {/* HERO CONTAINER */}
        <div
          className="
            relative w-full
            min-h-[550px]
            h-[40vh]
            sm:h-[80vh]
            md:h-[85vh]
            lg:h-screen
            2xl:h-[95vh]
            3xl:h-[100vh]
          "
        >
          {/* BACKGROUND IMAGE */}
          <Image
            src={backgroundImageUrl}
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* CONTENT */}
          <div className="relative z-10 flex h-full items-center">
            <div
              className="
              flex flex-col justify-center
              h-full
                w-full
                px-4
                sm:px-6
                md:px-10
                lg:px-16
                xl:px-24
                2xl:px-32
                3xl:px-44
              "
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="
                 flex flex-col justify-around lg:h-[600px] h-96  md:h-[500px]  sm:h-[450px]  
                  max-w-full
                  sm:max-w-xl
                  md:max-w-2xl
                  lg:max-w-3xl
                  xl:max-w-4xl
                  2xl:max-w-5xl
                "
              >
                {/* STARS */}
                {/* <div
                  className="
                    mb-5 flex flex-wrap items-center gap-2
                    sm:mb-6
                    xl:mb-8
                  "
                >
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="
                        flex items-center justify-center
                        rounded-md bg-green-600
                        h-7 w-7
                        sm:h-8 sm:w-8
                        lg:h-10 lg:w-10
                        2xl:h-12 2xl:w-12
                      "
                    >
                      <Star
                        className="
                          text-white fill-white
                          h-3 w-3
                          sm:h-4 sm:w-4
                          lg:h-5 lg:w-5
                          2xl:h-6 2xl:w-6
                        "
                      />
                    </div>
                  ))}
                </div> */}

                {/* <div
                  className="
    mb-4 flex flex-wrap items-center gap-1.5
    sm:mb-5
    xl:mb-6
  "
                >
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="
        flex items-center justify-center
        rounded-md bg-green-600
        h-6 w-6
        sm:h-7 sm:w-7
        lg:h-8 lg:w-8
        2xl:h-10 2xl:w-10
      "
                    >
                      <Star
                        className="
          text-white fill-white
          h-2.5 w-2.5
          sm:h-3 sm:w-3
          lg:h-4 lg:w-4
          2xl:h-5 2xl:w-5
        "
                      />
                    </div>
                  ))}
                </div> */}


                <div className="mb-3 flex flex-wrap items-center gap-1 sm:mb-4 text-white text-sm font-semibold">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center justify-center rounded bg-green-600 h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
                      <Star className="text-white fill-white h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3" />
                    </div>
                  ))}

                  <p>Excellent 4.9</p>
                </div>

                {/* HEADING */}
                <h1
                  className="
                    font-extrabold uppercase tracking-tight text-white
                    leading-[1.05]

                    text-3xl
                    xs:text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    xl:text-8xl
                    2xl:text-[110px]
                    3xl:text-[140px]
                  "
                >
                  {heading}
                </h1>

                {/* SUBHEADING */}
                <p
                  className="
                    mt-4 text-gray-200 leading-relaxed

                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                    xl:text-2xl
                    2xl:text-3xl

                    max-w-full
                    sm:max-w-lg
                    md:max-w-2xl
                    lg:max-w-3xl
                    xl:max-w-4xl
                  "
                >
                  {subheading}
                </p>

                {/* BUTTONS */}
                <div
                  className="
                    mt-8 flex flex-col gap-4
                    sm:flex-row sm:items-center
                    lg:mt-10
                    xl:mt-12
                  "
                >
                  <Button
                    size="lg"
                    asChild
                    className="
                      w-full sm:w-auto
                      bg-white text-black
                      hover:bg-neutral-200
                      font-semibold

                      h-11 px-6 text-sm
                      sm:h-12 sm:px-7 sm:text-base
                      lg:h-14 lg:px-9 lg:text-lg
                      2xl:h-16 2xl:px-12 2xl:text-xl
                    "
                  >
                    <Link href={primaryButtonLink}>
                      {primaryButtonText}
                      <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </Link>
                  </Button>

                  {/* <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="
                      w-full sm:w-auto
                      border-white bg-transparent text-white
                      hover:bg-white hover:text-black

                      h-11 px-6 text-sm
                      sm:h-12 sm:px-7 sm:text-base
                      lg:h-14 lg:px-9 lg:text-lg
                      2xl:h-16 2xl:px-12 2xl:text-xl
                    "
                  >
                    <Link href="/products?category=best-sellers">
                      View Best Sellers
                    </Link>
                  </Button> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}





// "use client";

// import * as React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SectionContainer } from "@/components/layout/section-container";
// import type { HeroSectionContent } from "@/features/homepage/types/cms.types";
// interface HeroSectionProps {
//   data?: HeroSectionContent;
// }

// export function HeroSection({ data }: HeroSectionProps) {
//   const heading = data?.heading || "Carry Your Ambition";
//   const subheading = data?.subheading || "Premium school bags, backpacks, and accessories designed for students in Pakistan. Built for durability, comfort, and undeniable style.";
//   const primaryButtonText = data?.primaryButtonText || "Shop Collection";
//   const primaryButtonLink = data?.primaryButtonLink || "/products";
//   const backgroundImageUrl = data?.backgroundImageUrl || "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2500&auto=format&fit=crop";

//   return (
//     <div className="relative overflow-hidden bg-blue-500">
//       {/* <SectionContainer className="relative pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pt-40 lg:pb-48 bg-pink-800"> */}
//       <SectionContainer className="relative  bg-pink-800">

//         <div className="flex w-full h-[500px] lg:h-[800px] relative" >
//           <div className="absolute inset-0 w-full h-full">
//             <Image
//               src={backgroundImageUrl}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               alt="Hero Image"
//               fill
//               className="w-full h-full no-repeat"
//               priority
//             />
//           </div>
//           <div className="flex w-full h-full items-center font-bold text-white  absolute z-10 inset-0 bg-black/50">

//             <div className="flex flex-col justify-center gap-10 p-6 max-w-3xl">

// <div className="flex">
//     {
//       [1,2,3,4,5].map((item, index)=>{
//         return(
//           <span className="text-xs bg-green-700 p-2 m-px"><Star className="h-4 w-4" /></span>
//         )
//       })
//     }
// </div>

//               <h1 className="text-4xl font-bold">DELSEY PARIS</h1>
//               {/* <h1>Hero Section Content goes here!</h1> */}
//               <h1 className="text-2xl">Experience The World With Delsey Paris. Iconic Design Meets Ultimate Durability For Your Next Grand Adventure.</h1>

//              <div>
//                <Button size="lg" asChild className="font-semibold shadow-md bg-white text-black">
//                 <Link href={primaryButtonLink}>
//                   {primaryButtonText}
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//              </div>
//            </div>
//           </div>
//         </div>
//         {/*
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center bg-green-400">


//            <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="max-w-2xl"
//           >
//             <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
//               {heading.split(" ").map((word, i, arr) => (
//                 <React.Fragment key={i}>
//                   {i === arr.length - 1 ? <span className="text-primary">{word}</span> : word + " "}
//                 </React.Fragment>
//               ))}
//             </h1>
//             <p className="mt-4 text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
//               {subheading}
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" asChild className="font-semibold shadow-md">
//                 <Link href={primaryButtonLink}>
//                   {primaryButtonText}
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//               <Button size="lg" variant="outline" asChild>
//                 <Link href="/products?category=best-sellers">
//                   View Best Sellers
//                 </Link>
//               </Button>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//             className="relative lg:ml-auto w-full max-w-lg aspect-square lg:aspect-[4/5] mx-auto rounded-3xl overflow-hidden shadow-2xl"
//           >
//             <Image
//               src={backgroundImageUrl}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               alt="Hero Image"
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//           </motion.div>
//         </div> */}
//       </SectionContainer>
//     </div>
//   );
// }
