import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type ProductsHeroProps = {
  className?: string;
};

export function ProductsHero({ className }: ProductsHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-background",
        className
      )}
      aria-labelledby="products-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(79,142,247,0.2),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative py-section-sm md:py-section lg:py-section-lg">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          Products
        </p>
        <h1
          id="products-hero-heading"
          className="mt-4 max-w-[22rem] min-w-0 break-words font-heading text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:max-w-2xl md:mt-5 md:text-5xl lg:max-w-4xl lg:text-6xl"
        >
          One platform.
          <span className="mt-1 block bg-gradient-to-br from-accent via-[#7eb3fb] to-accent bg-clip-text text-transparent md:mt-2">
            Many doors in.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/60 md:mt-10 md:text-lg md:leading-relaxed">
          Start with the product that carries the most load today—then grow into
          the rest of the roadmap without another vendor bake-off.
        </p>
      </Container>
    </section>
  );
}
