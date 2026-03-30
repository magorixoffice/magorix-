import {
  Globe2,
  Heart,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const VALUES: { title: string; line: string; Icon: LucideIcon }[] = [
  {
    title: "Speed",
    line: "Ship updates without waiting on brittle workflows.",
    Icon: Zap,
  },
  {
    title: "Student-first",
    line: "Every decision ladders up to learner outcomes.",
    Icon: Heart,
  },
  {
    title: "Trust",
    line: "Clear permissions, audit-friendly by default.",
    Icon: Shield,
  },
  {
    title: "Built for Bharat",
    line: "Local context, languages, and realities—first-class.",
    Icon: Globe2,
  },
];

type AboutValuesProps = {
  className?: string;
};

export function AboutValues({ className }: AboutValuesProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="about-values-heading"
    >
      <Container>
        <h2
          id="about-values-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          What we stand for
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
          The same principles that shape the product—written down so we don&apos;t
          drift.
        </p>

        <ul className="mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {VALUES.map(({ title, line, Icon }) => (
            <li
              key={title}
              className={cn(
                "flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#0c111c] p-5",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]",
                "transition-[border-color,background-color] duration-300 ease-out",
                "hover:border-white/[0.12] hover:bg-[#0e1420]"
              )}
            >
              <Icon
                className="h-6 w-6 text-accent/85"
                strokeWidth={1.75}
                aria-hidden
              />
              <div>
                <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-snug text-foreground/55">
                  {line}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
