import type { Metadata } from "next";
import { FeatureCards } from "@/components/sections/feature-cards";
import { HomeWhatWeDoIntro } from "@/components/sections/home-what-we-do-intro";
import { Hero } from "@/components/sections/hero";
import { HiringBanner } from "@/components/sections/hiring-banner";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { ProductTeaser } from "@/components/sections/product-teaser";
import { ValuesGrid } from "@/components/sections/values-grid";
import { defaultDescription, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteName },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: defaultDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoMarquee />
      <HomeWhatWeDoIntro />
      <FeatureCards />
      <ValuesGrid />
      <ProductTeaser />
      <HiringBanner />
    </main>
  );
}
