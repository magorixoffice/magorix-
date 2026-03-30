import Link from "next/link";
import { buttonBaseClass, buttonVariantClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductTeaserProps = {
  className?: string;
};

function MiniPreview({ label }: { label: string }) {
  return (
    <div
      className={cn(
        "relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl",
        "border border-white/[0.09] bg-[#0a0e16]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-5%,rgba(79,142,247,0.14),transparent_60%)]" />
      <div className="absolute inset-3 flex flex-col rounded-lg border border-dashed border-white/[0.1] bg-white/[0.02] sm:inset-4">
        <div className="flex h-7 shrink-0 items-center gap-1 border-b border-white/[0.06] px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-2">
          <div className="h-1.5 w-2/3 max-w-[8rem] rounded bg-white/[0.07]" />
          <div className="h-1.5 w-full rounded bg-white/[0.05]" />
          <div className="mt-1 grid flex-1 grid-cols-3 gap-1">
            <div className="rounded bg-white/[0.04]" />
            <div className="rounded bg-white/[0.04]" />
            <div className="rounded bg-white/[0.04]" />
          </div>
        </div>
      </div>
      <p className="pointer-events-none absolute bottom-2 left-0 right-0 text-center font-heading text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground/28">
        {label}
      </p>
    </div>
  );
}

export function ProductTeaser({ className }: ProductTeaserProps) {
  return (
    <section
      className={cn(
        "border-t border-white/[0.06] bg-background py-section-sm md:py-section lg:py-section-lg",
        className
      )}
      aria-labelledby="home-products-heading"
    >
      <Container>
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          Our Products
        </p>
        <h2
          id="home-products-heading"
          className="mt-3 max-w-2xl font-heading text-2xl font-bold leading-tight tracking-[-0.03em] text-foreground md:text-3xl"
        >
          Purpose-built platforms for education
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/55 md:text-base">
          Wise Student and Inavora are independent products—each with its own
          site, roadmap, and support model.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-12 lg:grid-cols-2 lg:gap-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="flex min-w-0 flex-col rounded-xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-8"
            >
              <h3 className="font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl">
                {product.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65 md:text-base">
                {product.teaser}
              </p>

              <div className="mt-5">
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.09] px-3 py-1.5 text-xs font-semibold text-accent",
                    "shadow-[0_0_24px_-8px_rgba(79,142,247,0.45)]"
                  )}
                >
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {product.status}
                </span>
              </div>

              <MiniPreview label={product.name} />

              <div className="mt-6">
                {product.exploreExternal ? (
                  <a
                    href={product.exploreHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonBaseClass,
                      buttonVariantClasses.primary,
                      "min-h-[48px] px-7 py-3 text-base font-semibold"
                    )}
                  >
                    {product.exploreLabel}
                  </a>
                ) : (
                  <Link
                    href={product.exploreHref}
                    className={cn(
                      buttonBaseClass,
                      buttonVariantClasses.primary,
                      "inline-flex min-h-[48px] px-7 py-3 text-base font-semibold"
                    )}
                  >
                    {product.exploreLabel}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-foreground/45 md:mt-12">
          <Link
            href="/products"
            className="font-medium text-accent underline-offset-2 hover:underline"
          >
            View all product details
          </Link>
        </p>
      </Container>
    </section>
  );
}
