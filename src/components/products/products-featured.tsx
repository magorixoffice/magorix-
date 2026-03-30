import Link from "next/link";
import { buttonBaseClass, buttonVariantClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

function FeaturedMockup() {
  return (
    <div
      className={cn(
        "relative h-full min-h-[260px] w-full overflow-hidden lg:min-h-[420px]",
        "border-t border-white/[0.08] bg-[#070a10] lg:border-l lg:border-t-0"
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(79,142,247,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(8,12,20,0.9),transparent)]" />
      <div className="absolute inset-5 flex flex-col rounded-xl border border-dashed border-white/[0.12] bg-white/[0.03] sm:inset-6 md:inset-8">
        <div className="flex h-10 shrink-0 items-center gap-2 border-b border-white/[0.08] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="h-2.5 w-1/2 max-w-xs rounded bg-white/[0.1]" />
          <div className="h-2.5 w-full max-w-md rounded bg-white/[0.06]" />
          <div className="mt-4 grid flex-1 grid-cols-3 gap-3">
            <div className="rounded-lg bg-white/[0.05]" />
            <div className="rounded-lg bg-white/[0.05]" />
            <div className="rounded-lg bg-white/[0.05]" />
          </div>
        </div>
      </div>
      <p className="pointer-events-none absolute bottom-5 left-0 right-0 text-center font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
        Magorix workspace
      </p>
    </div>
  );
}

type ProductsFeaturedProps = {
  className?: string;
};

export function ProductsFeatured({ className }: ProductsFeaturedProps) {
  return (
    <section
      id="docs"
      className={cn(
        "scroll-mt-24 border-b border-white/[0.06] bg-background py-section-sm md:py-section lg:py-section-lg md:scroll-mt-28",
        className
      )}
      aria-labelledby="products-featured-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            Flagship
          </p>

          <article
            className={cn(
              "mt-6 overflow-hidden rounded-2xl md:mt-8",
              "border border-accent/30 bg-[#0c111c]",
              "shadow-[0_0_0_1px_rgba(79,142,247,0.12)_inset,0_0_100px_-40px_rgba(79,142,247,0.35)]"
            )}
          >
            <div className="grid lg:grid-cols-[1fr_minmax(0,1.15fr)] lg:items-stretch">
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <h2
                  id="products-featured-heading"
                  className="font-heading text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-4xl lg:text-[2.75rem]"
                >
                  Magorix Workspace
                </h2>
                <p className="mt-5 text-base leading-relaxed text-foreground/65 md:mt-6 md:text-lg">
                  The operating layer for your school: announcements, tasks,
                  permissions, and visibility across teams—without duct-taping five
                  products together.
                </p>
                <ul className="mt-8 space-y-3 text-sm leading-relaxed text-foreground/55 md:text-[15px]">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    Role-aware views for staff, families, and students
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    Audit-friendly workflows you can defend in a room
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    Built to deploy campus-by-campus, not as a risky big bang
                  </li>
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonBaseClass,
                      buttonVariantClasses.primary,
                      "min-h-[48px] px-7 py-3 text-base font-semibold"
                    )}
                  >
                    Request access
                  </Link>
                  <span className="text-xs font-medium text-foreground/40">
                    Private beta · India-first cohorts
                  </span>
                </div>
              </div>

              <FeaturedMockup />
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
