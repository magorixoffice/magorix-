import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const PROBLEMS = [
  "Schools lack the tools to track real student growth.",
  "Parents are disconnected from their child's learning journey.",
  "Students are disengaged because learning isn't designed for them.",
] as const;

type WwdProblemsProps = {
  className?: string;
};

export function WwdProblems({ className }: WwdProblemsProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wwd-problems-heading"
    >
      <Container>
        <h2
          id="wwd-problems-heading"
          className="max-w-2xl font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Problems we obsess over
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
          Three gaps we see in almost every institution we talk to.
        </p>

        <ol className="mt-10 max-w-3xl space-y-8 md:mt-12 md:space-y-10">
          {PROBLEMS.map((text, index) => (
            <li key={text} className="flex gap-5 md:gap-8">
              <span
                className="shrink-0 pt-0.5 font-heading text-3xl font-bold tabular-nums leading-none text-accent/35 md:text-4xl"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-foreground/75 md:text-[17px] md:leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
