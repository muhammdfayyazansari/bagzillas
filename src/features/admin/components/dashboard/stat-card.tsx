import * as React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}

export function StatCard({ title, value, icon: Icon, trend, description, className, ...props }: StatCardProps) {
  return (
    <div className={cn("rounded-xl border bg-card p-6 shadow-sm", className)} {...props}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight">{value}</span>
        {trend && (
          <span
            className={cn(
              "text-xs font-medium",
              trend.isPositive ? "text-emerald-600" : "text-red-600"
            )}
          >
            {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
          </span>
        )}
      </div>
      {description && (
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
