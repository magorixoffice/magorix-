import type { Metadata } from "next";
import { siteName } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path starting with / (e.g. /about). */
  path: string;
};

/** Title template in root layout; OG/Twitter use `Title · SiteName`. */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const fullTitle = `${title} · ${siteName}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
