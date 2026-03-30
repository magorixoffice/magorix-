import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type WwdHeroProps = {
  className?: string;
};

export function WwdHero({ className }: WwdHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-background",
        className
      )}
      aria-labelledby="wwd-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(79,142,247,0.16),transparent_58%)]"
        aria-hidden
      />
      <Container className="relative py-section-sm md:py-section lg:py-section-lg">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          What we do
        </p>
        <h1
          id="wwd-hero-heading"
          className="mt-4 max-w-3xl min-w-0 break-words font-heading text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:mt-5 md:text-4xl lg:text-5xl"
        >
          Education is broken. We&apos;re fixing it.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 md:mt-8 md:text-lg">
          Schools still run on disconnected tools and brittle handoffs—so leaders
          guess, families disengage, and students get a fragmented experience.
          Magorix exists to replace that drift with one calm, accountable layer
          built for how India actually teaches.
        </p>
      </Container>
    </section>
  );
}
