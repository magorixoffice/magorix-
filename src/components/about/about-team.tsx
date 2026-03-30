import { ABOUT_TEAM } from "@/data/about-team";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

type AboutTeamProps = {
  className?: string;
};

export function AboutTeam({ className }: AboutTeamProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section lg:pb-section-lg",
        className
      )}
      aria-labelledby="about-team-heading"
    >
      <Container>
        <h2
          id="about-team-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Team
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
          A small, senior group—shipping with schools, not around them.
        </p>

        <ul className="mt-10 grid list-none grid-cols-2 gap-4 md:mt-12 md:grid-cols-4 md:gap-6">
          {ABOUT_TEAM.map((member) => (
            <li key={member.name}>
              <div
                className={cn(
                  "group flex flex-col overflow-hidden rounded-xl border border-white/[0.09] bg-[#0c111c]",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]",
                  "transition-[border-color,box-shadow,background-color] duration-300 ease-out",
                  "hover:border-accent/30 hover:shadow-[0_0_40px_-18px_rgba(79,142,247,0.25)]"
                )}
              >
                <div
                  className={cn(
                    "flex aspect-square items-center justify-center",
                    "bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent",
                    "font-heading text-2xl font-bold tracking-tight text-foreground/35",
                    "transition-colors duration-300 group-hover:text-accent/90"
                  )}
                  aria-hidden
                >
                  {initials(member.name)}
                </div>
                <div className="border-t border-white/[0.06] p-4">
                  <div className="font-heading text-sm font-semibold text-foreground">
                    {member.name}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-foreground/55">
                    {member.role}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
