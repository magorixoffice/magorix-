import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const FUTURE = [
  {
    name: "Magorix Insights",
    blurb: "Operational and learning signals in one narrative—fewer spreadsheets, fewer surprises.",
  },
  {
    name: "Magorix Connect",
    blurb: "Purpose-built family comms with receipts: who saw what, when, and what’s still open.",
  },
  {
    name: "Magorix Campus",
    blurb: "Facilities, vendors, and safety workflows that match how Indian campuses actually run.",
  },
] as const;

type ProductsFutureProps = {
  className?: string;
};

export function ProductsFuture({ className }: ProductsFutureProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section lg:pb-section-lg",
        className
      )}
      aria-labelledby="products-future-heading"
    >
      <Container>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <h2
              id="products-future-heading"
              className="font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl"
            >
              On the roadmap
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/55 md:text-base">
              Early sketches of what comes next—names may change; the bar won&apos;t.
            </p>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-foreground/35">
            Future products
          </p>
        </div>

        <ul className="mt-10 grid list-none gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {FUTURE.map((item) => (
            <li
              key={item.name}
              className={cn(
                "flex flex-col rounded-xl border border-white/[0.07] bg-[#0a0d14] p-6",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]",
                "transition-[border-color,background-color] duration-300",
                "hover:border-white/[0.11] hover:bg-[#0c1018]"
              )}
            >
              <Badge className="w-max border-white/10 bg-white/[0.04] text-[10px] uppercase tracking-wider text-foreground/70">
                Coming soon
              </Badge>
              <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-foreground">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/50">
                {item.blurb}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
