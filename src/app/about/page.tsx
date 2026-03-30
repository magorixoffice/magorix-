import { AboutHero } from "@/components/about/about-hero";
import { AboutMissionVision } from "@/components/about/about-mission-vision";
import { AboutTeam } from "@/components/about/about-team";
import { AboutTimeline } from "@/components/about/about-timeline";
import { AboutValues } from "@/components/about/about-values";
import { pageMetadata } from "@/lib/metadata";

/** Avoid stale static HTML for this page in dev / after content edits. */
export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "About",
  description:
    "How Magorix started, what we believe, our mission and vision, values, and team.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-background">
      <AboutHero />
      <AboutTimeline />
      <AboutMissionVision />
      <AboutValues />
      <AboutTeam />
    </main>
  );
}
