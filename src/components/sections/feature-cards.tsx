import {
  GraduationCap,
  School,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const FEATURES: Feature[] = [
  {
    title: "For Schools",
    description:
      "Better tools, deeper insights, and smarter administration built for institutional needs.",
    Icon: School,
  },
  {
    title: "For Families",
    description:
      "Keep parents connected and informed about every step of their child's growth.",
    Icon: UsersRound,
  },
  {
    title: "For Students",
    description:
      "Learning experiences that are personalised, engaging, and actually effective.",
    Icon: GraduationCap,
  },
];

function FeatureCard({ title, description, Icon }: Feature) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-7",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]",
        "transition-[border-color,box-shadow,background-color] duration-300 ease-out",
        "hover:border-accent/35 hover:bg-[#0d121c]",
        "hover:shadow-[0_0_56px_-18px_rgba(79,142,247,0.28)]"
      )}
    >
      <div
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent",
          "transition-[border-color,background-color,color] duration-300",
          "group-hover:border-accent/25 group-hover:bg-accent/10"
        )}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/62 md:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}

type FeatureCardsProps = {
  className?: string;
};

export function FeatureCards({ className }: FeatureCardsProps) {
  return (
    <section
      className={cn(
        "border-t border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
