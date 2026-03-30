import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type HomeWhatWeDoIntroProps = {
  className?: string;
};

export function HomeWhatWeDoIntro({ className }: HomeWhatWeDoIntroProps) {
  return (
    <section
      className={cn(
        "border-t border-white/[0.06] bg-background pb-8 pt-section-sm md:pb-10 md:pt-section lg:pb-12",
        className
      )}
      aria-labelledby="home-what-we-do-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            What we do
          </p>
          <h2
            id="home-what-we-do-heading"
            className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:mt-5 md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
          >
            We solve real problems
            <span className="mt-1 block md:mt-1.5">in education.</span>
          </h2>
        </div>
      </Container>
    </section>
  );
}
