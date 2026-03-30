import { CareersApplyCta } from "@/components/careers/careers-apply-cta";
import { CareersHero } from "@/components/careers/careers-hero";
import { CareersRoles } from "@/components/careers/careers-roles";
import { CareersWhy } from "@/components/careers/careers-why";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join Magorix—early-stage team, open roles, why we work here, and how to apply. Remote-first, India-focused.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <main className="flex flex-col bg-background">
      <CareersHero />
      <CareersWhy />
      <CareersRoles />
      <CareersApplyCta />
    </main>
  );
}
