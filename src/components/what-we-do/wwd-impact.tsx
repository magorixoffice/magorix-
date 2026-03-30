import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "40+", label: "Campuses in active programs" },
  { value: "12k+", label: "Students & families on platform" },
  { value: "3.2×", label: "Faster cross-team handoffs (avg.)" },
  { value: "99.2%", label: "Uptime on core services" },
] as const;

type WwdImpactProps = {
  className?: string;
};

export function WwdImpact({ className }: WwdImpactProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section lg:pb-section-lg",
        className
      )}
      aria-labelledby="wwd-impact-heading"
    >
      <Container>
        <h2
          id="wwd-impact-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Impact at a glance
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
          Directional metrics from our early cohorts—your mileage will vary, but
          the goal is always the same: less drag, more signal.
        </p>

        <ul className="mt-10 grid list-none grid-cols-2 gap-8 md:mt-12 md:grid-cols-4 md:gap-10">
          {STATS.map((stat) => (
            <li key={stat.label} className="flex flex-col gap-2">
              <span className="font-heading text-3xl font-bold tracking-tight text-accent md:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm leading-snug text-foreground/55">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
