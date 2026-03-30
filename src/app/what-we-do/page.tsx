import { WwdApproach } from "@/components/what-we-do/wwd-approach";
import { WwdHero } from "@/components/what-we-do/wwd-hero";
import { WwdImpact } from "@/components/what-we-do/wwd-impact";
import { WwdProblems } from "@/components/what-we-do/wwd-problems";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "What We Do",
  description:
    "The problems we solve, how Magorix thinks differently, and impact numbers—platform-first, data-driven, community-centered.",
  path: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <main className="flex flex-col bg-background">
      <WwdHero />
      <WwdProblems />
      <WwdApproach />
      <WwdImpact />
    </main>
  );
}
