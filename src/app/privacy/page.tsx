import Link from "next/link";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/metadata";
import { siteName } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy",
  description: `How ${siteName} collects, uses, and protects your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="flex flex-col bg-background">
      <section
        className="border-b border-white/[0.06] bg-background"
        aria-labelledby="privacy-heading"
      >
        <Container className="py-section-sm md:py-section">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            Legal
          </p>
          <h1
            id="privacy-heading"
            className="mt-4 max-w-2xl min-w-0 break-words font-heading text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-4xl"
          >
            Privacy policy
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
            How we handle personal information when you use {siteName}&apos;s
            websites and services. This is a concise summary; details may be
            expanded as our products evolve.
          </p>
        </Container>
      </section>

      <section className="py-section-sm md:py-section lg:pb-section-lg" aria-label="Privacy policy content">
        <Container>
          <div className="max-w-3xl space-y-8 text-sm leading-relaxed text-foreground/70 md:text-base">
            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Information we collect
            </h2>
            <p>
              We may collect information you provide directly (for example,
              name, email, and message content when you contact us), and
              technical data such as device type, browser, and approximate
              region derived from standard server logs—used to operate and
              secure our services.
            </p>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              How we use information
            </h2>
            <p>
              We use this information to respond to inquiries, improve our
              products, comply with law, and protect {siteName} and our users
              from abuse or fraud.
            </p>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share data with
              service providers who assist us (for example, hosting or email
              delivery) under agreements that require appropriate protection, or
              when required by law.
            </p>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Your choices
            </h2>
            <p>
              Where applicable, you may request access, correction, or deletion
              of personal data we hold about you by contacting us. We will
              respond in line with applicable regulations.
            </p>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Contact
            </h2>
            <p>
              Questions about this policy?{" "}
              <Link
                href="/contact"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                Get in touch
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
