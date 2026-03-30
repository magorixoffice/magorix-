import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-max items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-foreground/90 transition-[background-color,border-color,color] duration-200 ease-out hover:border-white/15 hover:bg-white/[0.1]",
        className
      )}
      {...props}
    />
  );
}
