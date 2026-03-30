import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const ROWS = [
  {
    title: "Unify the surface",
    body: "One place for announcements, tasks, and follow-ups—aligned to roles so people see what matters to them, not everything at once.",
  },
  {
    title: "Design for trust",
    body: "Permissions, audit trails, and predictable workflows. Schools adopt software when leadership and families both believe it.",
  },
  {
    title: "Measure what moves outcomes",
    body: "Lightweight signals on engagement and progress—enough to steer, never enough to drown your team in dashboards.",
  },
] as const;

function ApproachVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/[0.09] bg-[#0c111c]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(79,142,247,0.12),transparent_60%)]" />
      <div className="absolute inset-4 rounded-lg border border-dashed border-white/[0.08] bg-white/[0.02]" />
    </div>
  );
}

type WwdApproachProps = {
  className?: string;
};

export function WwdApproach({ className }: WwdApproachProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wwd-approach-heading"
    >
      <Container>
        <h2
          id="wwd-approach-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Our approach
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
          Three principles that show up in how we ship—and how the product feels
          day to day.
        </p>

        <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
          {ROWS.map((row, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={row.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16"
              >
                <div
                  className={cn(
                    isReversed && "md:order-2",
                    "flex flex-col justify-center"
                  )}
                >
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {row.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-foreground/65 md:mt-5 md:text-[17px] md:leading-relaxed">
                    {row.body}
                  </p>
                </div>
                <div className={cn(isReversed && "md:order-1")}>
                  <ApproachVisual />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
