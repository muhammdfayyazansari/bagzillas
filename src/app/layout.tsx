import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
export const metadata: Metadata = {
  title: {
    default: "Bagzillas",
    template: "%s | Bagzillas",
  },
  description:
    "A production-grade ecommerce platform for school bags in Pakistan.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900" ],
  variable: "--font-roboto",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* <body className="flex min-h-full flex-col">{children}</body> */}
      <body className={roboto.className} >{children}</body>
    </html>
  );
}
