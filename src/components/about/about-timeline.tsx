import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const MILESTONES = [
  { year: "2023", title: "Founded" },
  { year: "2024", title: "First school onboarded" },
  { year: "2025", title: "Platform launch" },
] as const;

const STORY_PARAGRAPHS = [
  "Magorix began as a small team asking why school technology so often adds noise instead of clarity. We spent our early months listening to administrators, teachers, and parents—mapping where work breaks down and where trust is lost.",
  "Those conversations shaped our first products: tools that respect how Indian institutions actually operate, from classrooms to family communication. We did not start with a slide deck; we started with problems we could name on a campus.",
  "As we grew, we kept one rule: ship with schools, not around them. Every release is tested against real timetables, real permissions, and real families—not a generic idea of “EdTech.”",
  "Today we are a focused product company with Wise Student and Inavora—each with its own roadmap—united by the belief that education deserves software as intentional as the people running it.",
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
          How we started, what we learned with schools, and where we are headed.
        </p>

        <div className="mt-10 grid min-w-0 gap-10 md:mt-12 lg:grid-cols-2 lg:gap-14 lg:items-start">
          {/* Left: timeline */}
          <div className="min-w-0">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Milestones
            </p>
            <div className="relative mt-6 max-w-md">
              <div
                className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/55 via-white/15 to-white/5 md:left-[9px]"
                aria-hidden
              />
              <ol className="relative list-none space-y-0 pl-0">
                {MILESTONES.map((item) => (
                  <li
                    key={item.year}
                    className="relative pb-10 pl-10 last:pb-0 md:pl-12"
                  >
                    <span
                      className="absolute left-0 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-accent/40 bg-background shadow-[0_0_0_4px_#080C14,0_0_14px_rgba(79,142,247,0.35)] md:top-2"
                      aria-hidden
                    >
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <p className="font-heading text-base font-semibold tracking-tight text-foreground md:text-lg">
                      <span className="text-accent">{item.year}</span>
                      <span className="text-foreground/35"> — </span>
                      {item.title}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: origin narrative */}
          <div className="min-w-0 space-y-5 text-sm leading-relaxed text-foreground/62 md:text-[15px]">
            {STORY_PARAGRAPHS.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
