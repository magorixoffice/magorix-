"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type RoleTeam = "all" | "engineering" | "product" | "operations";

type Role = {
  id: string;
  title: string;
  team: Exclude<RoleTeam, "all">;
  location: string;
  type: string;
};

const TABS: { id: RoleTeam; label: string }[] = [
  { id: "all", label: "All" },
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product" },
  { id: "operations", label: "Operations" },
];

const ROLES: Role[] = [
  {
    id: "1",
    title: "Senior Full-stack Engineer",
    team: "engineering",
    location: "Remote · India",
    type: "Full-time",
  },
  {
    id: "2",
    title: "Frontend Engineer",
    team: "engineering",
    location: "Remote · India",
    type: "Full-time",
  },
  {
    id: "3",
    title: "Product Designer",
    team: "product",
    location: "Remote · India",
    type: "Full-time",
  },
  {
    id: "4",
    title: "Product Manager",
    team: "product",
    location: "Remote · India",
    type: "Full-time",
  },
  {
    id: "5",
    title: "Customer Success Lead",
    team: "operations",
    location: "Remote · India",
    type: "Full-time",
  },
  {
    id: "6",
    title: "Finance & Operations",
    team: "operations",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
  },
];

type CareersRolesProps = {
  className?: string;
};

export function CareersRoles({ className }: CareersRolesProps) {
  const [active, setActive] = useState<RoleTeam>("all");

  const filtered = useMemo(() => {
    if (active === "all") return ROLES;
    return ROLES.filter((r) => r.team === active);
  }, [active]);

  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="careers-roles-heading"
    >
      <Container>
        <h2
          id="careers-roles-heading"
          className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Open roles
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
          Filter by team. Don&apos;t see a fit? Email us anyway—we read every
          note.
        </p>

        <div
          className="mt-8 flex flex-wrap gap-2 md:mt-10"
          role="tablist"
          aria-label="Filter roles by team"
        >
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`careers-tab-${tab.id}`}
                aria-controls="careers-roles-panel"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,color] duration-200",
                  isActive
                    ? "border-accent/40 bg-accent/15 text-foreground"
                    : "border-white/[0.1] bg-transparent text-foreground/60 hover:border-white/[0.18] hover:text-foreground/85"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          id="careers-roles-panel"
          role="tabpanel"
          aria-labelledby={`careers-tab-${active}`}
          className="mt-8 md:mt-10"
        >
          {filtered.length === 0 ? (
            <p className="text-sm text-foreground/50">
              No roles in this filter right now. Try another tab or reach out
              speculatively.
            </p>
          ) : (
            <ul className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
              {filtered.map((role) => (
                <li key={role.id}>
                  <Link
                    href="/contact"
                    className={cn(
                      "group flex flex-col gap-3 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6",
                      "hover:bg-white/[0.02] sm:-mx-4 sm:rounded-lg sm:px-4"
                    )}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="break-words font-heading text-lg font-semibold text-foreground group-hover:text-accent md:text-xl">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/50">
                        <span className="capitalize">{role.team}</span>
                        <span className="mx-2 text-foreground/25" aria-hidden>
                          ·
                        </span>
                        {role.location}
                        <span className="mx-2 text-foreground/25" aria-hidden>
                          ·
                        </span>
                        {role.type}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent">
                      Apply
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
