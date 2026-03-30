import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type AboutHeroProps = {
  className?: string;
};

export function AboutHero({ className }: AboutHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-background",
        className
      )}
      aria-labelledby="about-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(79,142,247,0.16),transparent_58%)]"
        aria-hidden
      />
      <Container className="relative py-section-sm md:py-section lg:py-section-lg">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          About
        </p>
        <h1
          id="about-hero-heading"
          className="mt-4 max-w-3xl min-w-0 break-words font-heading text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:mt-5 md:text-4xl lg:text-5xl"
        >
          We started with a question.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 md:mt-8 md:text-lg">
          Why does education feel stuck in the past
          <br />
          when the world is moving so fast?
        </p>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-foreground/60 md:mt-8 md:max-w-3xl md:text-[17px] md:leading-relaxed">
          <p>
            We kept returning to the gap between how families actually live—on
            their phones, in their routines, with real financial and
            communication pressures—and how schools are still expected to
            operate with tools that were never designed together.
          </p>
          <p>
            That tension is not a technology problem alone. It is a design
            problem: permissions, trust, language, pace, and clarity all have
            to line up, or every “platform” becomes another tab to manage.
          </p>
          <p>
            Magorix exists to close that gap with calm, purposeful products—built
            with Indian institutions, for Indian classrooms—starting from the
            questions nobody should have to keep asking twice.
          </p>
        </div>
      </Container>
    </section>
  );
}
