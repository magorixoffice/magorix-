import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const MILESTONES = [
  {
    year: "2022",
    title: "The idea",
    description:
      "We started with a simple question: why is school operations software still so fragmented?",
  },
  {
    year: "2023",
    title: "First pilots",
    description:
      "Partnered with a handful of campuses to learn where clarity matters most—communication and trust.",
  },
  {
    year: "2024",
    title: "Product depth",
    description:
      "Expanded the platform with student-first workflows and tighter family visibility.",
  },
  {
    year: "Today",
    title: "Scaling thoughtfully",
    description:
      "Growing the team and roadmap with the same bar: fewer tools, better outcomes.",
  },
] as const;

type AboutTimelineProps = {
  className?: string;
};

export function AboutTimeline({ className }: AboutTimelineProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="about-story-heading"
    >
      <Container>
        <h2
          id="about-story-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Our story
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
          A short arc of how Magorix came to be—built in public with schools, not
          in a vacuum.
        </p>

        <div className="relative mt-10 max-w-3xl md:mt-12">
          <div
            className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/55 via-white/15 to-white/5 md:left-[9px]"
            aria-hidden
          />
          <ol className="relative list-none space-y-0 pl-0">
            {MILESTONES.map((item) => (
              <li
                key={item.year}
                className="relative pb-12 pl-10 last:pb-0 md:grid md:grid-cols-[7rem_1fr] md:items-start md:gap-x-8 md:pl-12"
              >
                <span
                  className="absolute left-0 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-accent/40 bg-background shadow-[0_0_0_4px_#080C14,0_0_14px_rgba(79,142,247,0.35)] md:top-2"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
                <div className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent md:pt-1">
                  {item.year}
                </div>
                <div className="mt-3 md:mt-0">
                  <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60 md:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
