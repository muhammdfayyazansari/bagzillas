import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./section-container";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function PageHeader({ title, description, className, ...props }: PageHeaderProps) {
  return (
    <div className={cn("bg-muted/30 border-b py-12 md:py-16", className)} {...props}>
      <SectionContainer>
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-muted-foreground text-lg">
              {description}
            </p>
          )}
        </div>
      </SectionContainer>
    </div>
  );
}
