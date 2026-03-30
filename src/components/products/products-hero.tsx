import { Container } from "@/components/ui/container";
import { PRODUCTS } from "@/data/products";
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
          Our Products
        </p>
        <h1
          id="products-hero-heading"
          className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground md:mt-5 md:text-5xl lg:text-6xl"
        >
          Purpose-built platforms for education
          <span className="mt-2 block bg-gradient-to-br from-accent via-[#7eb3fb] to-accent bg-clip-text text-transparent md:mt-3">
            Delivered as distinct products with dedicated roadmaps
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/55 md:mt-8 md:text-lg">
          Review the summaries below and choose the platform that aligns with
          your organization&apos;s priorities.
        </p>

        <div className="mt-10 grid min-w-0 gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={cn(
                "flex min-w-0 flex-col rounded-xl border border-white/[0.1] bg-[#0a0e16] p-6 md:p-8",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
              )}
            >
              <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                Product · {product.status}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {product.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65 md:text-base">
                {product.heroIntro}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
