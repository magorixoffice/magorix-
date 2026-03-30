import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const cardShell =
  "rounded-xl border border-white/[0.08] bg-[#0c111c] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition-[border-color,box-shadow,background-color] duration-200 ease-out hover:border-white/[0.12] hover:bg-[#0e1420]";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, ...props },
  ref
) {
  return (
    <div ref={ref} className={cn(cardShell, className)} {...props} />
  );
});

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-1.5 border-b border-white/[0.06] p-5",
          className
        )}
        {...props}
      />
    );
  }
);

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  function CardTitle({ className, ...props }, ref) {
    return (
      <h3
        ref={ref}
        className={cn(
          "font-heading text-lg font-semibold leading-none tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    );
  }
);

export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(function CardDescription({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-foreground/65", className)}
      {...props}
    />
  );
});

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent({ className, ...props }, ref) {
    return <div ref={ref} className={cn("p-5", className)} {...props} />;
  }
);

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center border-t border-white/[0.06] p-5",
          className
        )}
        {...props}
      />
    );
  }
);
