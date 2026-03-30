import Link from "next/link";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/metadata";
import { siteName } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms",
  description: `Terms of use for ${siteName}'s websites and services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="flex flex-col bg-background">
      <section
        className="border-b border-white/[0.06] bg-background"
        aria-labelledby="terms-heading"
      >
        <Container className="py-section-sm md:py-section">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            Legal
          </p>
          <h1
            id="terms-heading"
            className="mt-4 max-w-2xl min-w-0 break-words font-heading text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-4xl"
          >
            Terms of use
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
            Rules for using {siteName}&apos;s websites and services. By
            accessing our sites or products, you agree to these terms.
          </p>
        </Container>
      </section>

      <section className="py-section-sm md:py-section lg:pb-section-lg" aria-label="Terms of use content">
        <Container>
          <div className="max-w-3xl space-y-8 text-sm leading-relaxed text-foreground/70 md:text-base">
            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Use of services
            </h2>
            <p>
              You agree to use {siteName}&apos;s websites and services only for
              lawful purposes and in a way that does not infringe the rights of
              others or restrict their use of the services.
            </p>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Intellectual property
            </h2>
            <p>
              Content on this site (including text, graphics, and branding) is
              owned by {siteName} or its licensors unless otherwise stated. You
              may not copy or redistribute it without permission, except as
              allowed by law or for personal, non-commercial reference.
            </p>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Disclaimer
            </h2>
            <p>
              Our sites and services are provided &quot;as is&quot; without
              warranties of any kind, to the extent permitted by law. We do not
              guarantee uninterrupted or error-free operation.
            </p>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, {siteName} and
              its team shall not be liable for indirect, incidental, or
              consequential damages arising from your use of our sites or
              services.
            </p>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Changes
            </h2>
            <p>
              We may update these terms from time to time. Continued use after
              changes constitutes acceptance of the revised terms.
            </p>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Contact
            </h2>
            <p>
              Questions?{" "}
              <Link
                href="/contact"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                Contact us
              </Link>{" "}
              or email{" "}
              <a
                href="mailto:hello@magorix.com"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                hello@magorix.com
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
