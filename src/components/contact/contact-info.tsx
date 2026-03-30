import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type ContactInfoProps = {
  className?: string;
};

export function ContactInfo({ className }: ContactInfoProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-8", className)}>
      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
          Get in touch
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/60 md:text-base">
          Tell us what you&apos;re trying to solve—we read every message and
          reply within a few business days.
        </p>
      </div>

      <dl className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-accent">
            <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/45">
              Email
            </dt>
            <dd className="mt-1">
              <a
                href="mailto:hello@magorix.com"
                className="text-sm font-medium text-foreground transition-colors hover:text-accent md:text-base"
              >
                hello@magorix.com
              </a>
            </dd>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-accent">
            <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/45">
              Based in
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground/65 md:text-base">
              India · Remote-first team
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}

export function ContactHero() {
  return (
    <section
      className="border-b border-white/[0.06] bg-background"
      aria-labelledby="contact-hero-heading"
    >
      <Container className="py-section-sm md:py-section">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          Contact
        </p>
        <h1
          id="contact-hero-heading"
          className="mt-4 max-w-2xl min-w-0 break-words font-heading text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-4xl"
        >
          Let&apos;s start with the problem
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
          Product questions, partnerships, or support—use the form and we&apos;ll
          route it to the right person.
        </p>
      </Container>
    </section>
  );
}
