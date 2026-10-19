import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TrustBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function TrustBadge({ icon: Icon, title, description, className, ...props }: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-3.5 sm:p-6 bg-white rounded-2xl border border-stone-200/80 shadow-xs",
        className
      )}
      {...props}
    >
      <div className="mb-2 sm:mb-4 inline-flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#8B5E3C]/10 text-[#8B5E3C]">
        <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
      </div>
      <h3 className="mb-1 sm:mb-2 text-xs sm:text-base font-bold text-stone-900 leading-tight">
        {title}
      </h3>
      <p className="text-[10.5px] sm:text-sm text-stone-500 leading-normal line-clamp-2 sm:line-clamp-none">
        {description}
      </p>
    </div>
  );
}
