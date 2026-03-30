import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const PLACEHOLDER_LOGOS = [
  "Aurora Labs",
  "Vertex",
  "Northwind",
  "Pulse",
  "Lattice",
  "Catalyst",
  "Meridian",
  "Helio",
] as const;

const marqueeMaskClass =
  "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]";

type LogoMarqueeProps = {
  label?: string;
  className?: string;
};

export function LogoMarquee({
  label = "Trusted by teams who ship",
  className,
}: LogoMarqueeProps) {
  const track = [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section
      className={cn(
        "border-y border-white/[0.06] bg-background/30 py-10 md:py-12",
        className
      )}
    >
      <Container>
        <p className="text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
          {label}
        </p>

        <div
          className={cn(
            "relative mt-7 overflow-hidden md:mt-8",
            marqueeMaskClass
          )}
        >
          <div
            className={cn(
              "flex w-max gap-14 md:gap-20",
              "animate-marquee motion-reduce:animate-none"
            )}
          >
            {track.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 select-none font-heading text-base font-semibold tracking-tight text-foreground/28 md:text-lg"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
