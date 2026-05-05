import * as React from "react";
import { StorefrontLayout } from "@/components/layout/storefront-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StorefrontLayout>{children}</StorefrontLayout>;
}
