import {
  Globe2,
  Heart,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Value = {
  title: string;
  line: string;
  Icon: LucideIcon;
};

const VALUES: Value[] = [
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

type ValuesGridProps = {
  className?: string;
};

export function ValuesGrid({ className }: ValuesGridProps) {
  return (
    <section
      className={cn(
        "border-t border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12">
          {VALUES.map(({ title, line, Icon }) => (
            <div
              key={title}
              className="flex max-w-sm flex-col gap-3 lg:max-w-none"
            >
              <Icon
                className="h-6 w-6 shrink-0 text-accent/85"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-snug text-foreground/55">
                {line}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
