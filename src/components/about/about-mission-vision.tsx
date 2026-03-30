import { Target, Telescope } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type AboutMissionVisionProps = {
  className?: string;
};

export function AboutMissionVision({ className }: AboutMissionVisionProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="about-mission-heading"
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <article
            className={cn(
              "flex flex-col gap-4 rounded-xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-7",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]",
              "transition-[border-color,box-shadow,background-color] duration-300 ease-out",
              "hover:border-accent/30 hover:bg-[#0d121c] hover:shadow-[0_0_48px_-20px_rgba(79,142,247,0.22)]"
            )}
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent">
              <Target className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <h2
                id="about-mission-heading"
                className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl"
              >
                Mission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/62 md:text-[15px]">
                Give every school a single, trustworthy surface for operations and
                learning—so educators teach, families stay informed, and students
                stay at the center.
              </p>
            </div>
          </article>

          <article
            className={cn(
              "flex flex-col gap-4 rounded-xl border border-white/[0.09] bg-[#0c111c] p-6 md:p-7",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]",
              "transition-[border-color,box-shadow,background-color] duration-300 ease-out",
              "hover:border-accent/30 hover:bg-[#0d121c] hover:shadow-[0_0_48px_-20px_rgba(79,142,247,0.22)]"
            )}
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent">
              <Telescope className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <h2
                id="about-vision-heading"
                className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl"
              >
                Vision
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/62 md:text-[15px]">
                A future where Bharat&apos;s schools run on software that respects
                context, language, and pace—without sacrificing clarity or control.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
