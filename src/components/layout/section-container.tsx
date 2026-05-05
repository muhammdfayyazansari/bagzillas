import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function SectionContainer({
  children,
  className,
  as: Component = "section",
  ...props
}: SectionContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-10xl px-4 md:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
