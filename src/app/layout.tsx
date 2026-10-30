import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Cormorant_Garamond } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bagzillas Pakistan | Premium Backpacks & Everyday Carry Bags",
    template: "%s | Bagzillas Pakistan",
  },
  description:
    "Carry with confidence with Bagzillas premium backpacks—crafted for style, durability, and daily comfort. Cash on Delivery across Pakistan.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/bagzillas-logo-square.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/bagzillas-logo-square.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${poppins.variable} ${cormorant.variable}`}>
      <body className={`${poppins.className} bg-white text-stone-900`}>{children}</body>
    </html>
  );
}
