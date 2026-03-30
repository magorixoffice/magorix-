import { Globe2, HeartHandshake, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const REASONS = [
  {
    title: "Mission you can explain",
    line: "Work that shows up in parent-teacher meetings—not just slide decks.",
    Icon: Sparkles,
  },
  {
    title: "Small, senior team",
    line: "No layers for the sake of layers. Ownership end-to-end.",
    Icon: Users,
  },
  {
    title: "India-first context",
    line: "We optimize for Bharat’s campuses, languages, and constraints.",
    Icon: Globe2,
  },
  {
    title: "Humane pace",
    line: "Fast shipping without pretending burnout is a strategy.",
    Icon: HeartHandshake,
  },
] as const;

type CareersWhyProps = {
  className?: string;
};

export function CareersWhy({ className }: CareersWhyProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="careers-why-heading"
    >
      <Container>
        <h2
          id="careers-why-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Why join Magorix
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
          A few things people cite after they&apos;ve been here a while.
        </p>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {REASONS.map(({ title, line, Icon }) => (
            <li
              key={title}
              className="flex flex-col gap-3 rounded-xl border border-white/[0.07] bg-[#0c111c] p-5 md:p-6"
            >
              <Icon
                className="h-6 w-6 text-accent/85"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="font-heading text-base font-semibold tracking-tight text-foreground md:text-lg">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/55">
                {line}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
