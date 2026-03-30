import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type SectionSpacing = "sm" | "md" | "lg";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Vertical padding scale (default: `md`). */
  spacing?: SectionSpacing;
}

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-section-sm",
  md: "py-section",
  lg: "py-section-lg",
};

export function Section({
  className,
  spacing = "md",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "transition-[padding] duration-200 ease-out",
        spacingClasses[spacing],
        className
      )}
      {...props}
    />
  );
}
