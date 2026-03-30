import { CareersApplyCta } from "@/components/careers/careers-apply-cta";
import { CareersHero } from "@/components/careers/careers-hero";
import { CareersRoles } from "@/components/careers/careers-roles";
import { CareersWhy } from "@/components/careers/careers-why";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Open roles at Magorix, why people join, team filters, and how to apply—remote-first, India-focused.",
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
