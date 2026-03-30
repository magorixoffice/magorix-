import Link from "next/link";
import { buttonBaseClass, buttonVariantClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type ProductTeaserProps = {
  className?: string;
};

export function ProductTeaser({ className }: ProductTeaserProps) {
  return (
    <section
      className={cn(
        "border-t border-white/[0.06] bg-background py-section-sm md:py-section lg:py-section-lg",
        className
      )}
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="flex max-w-xl flex-col lg:max-w-none lg:pt-2">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
              Product
            </p>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:mt-5 md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              One workspace for every stakeholder
            </h2>

            <p className="mt-5 text-base leading-relaxed text-foreground/65 md:mt-6 md:text-lg md:leading-relaxed">
              Bring schools, families, and students into a single, calm surface—so
              decisions are visible, handoffs are obvious, and nothing gets lost
              between tools.
            </p>

            <div className="mt-7 md:mt-8">
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.09] px-3 py-1.5 text-xs font-semibold text-accent",
                  "shadow-[0_0_24px_-8px_rgba(79,142,247,0.45)]"
                )}
              >
                <span
                  className="relative flex h-2 w-2"
                  aria-hidden
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Private beta
              </span>
            </div>

            <div className="mt-8 md:mt-10">
              <Link
                href="/products"
                className={cn(
                  buttonBaseClass,
                  buttonVariantClasses.primary,
                  "min-h-[48px] px-7 py-3 text-base font-semibold"
                )}
              >
                Explore the product
              </Link>
            </div>
          </div>

          <div className="w-full lg:pt-1">
            <div
              className={cn(
                "relative aspect-[16/10] w-full overflow-hidden rounded-2xl",
                "border border-white/[0.09] bg-[#0a0e16]",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_24px_80px_-32px_rgba(0,0,0,0.65)]"
              )}
              aria-label="Product interface preview placeholder"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-5%,rgba(79,142,247,0.18),transparent_60%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(8,12,20,0.85))]"
                aria-hidden
              />

              <div className="absolute inset-4 flex flex-col rounded-xl border border-dashed border-white/[0.1] bg-white/[0.02] sm:inset-5 md:inset-6">
                <div className="flex h-9 shrink-0 items-center gap-1.5 border-b border-white/[0.06] px-3">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
                  <div className="h-2 w-2/3 max-w-[12rem] rounded bg-white/[0.07]" />
                  <div className="h-2 w-full max-w-md rounded bg-white/[0.05]" />
                  <div className="mt-2 grid flex-1 grid-cols-3 gap-2 sm:gap-3">
                    <div className="rounded-lg bg-white/[0.04]" />
                    <div className="rounded-lg bg-white/[0.04]" />
                    <div className="rounded-lg bg-white/[0.04]" />
                  </div>
                </div>
              </div>

              <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/30 sm:bottom-5">
                Interface preview
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
