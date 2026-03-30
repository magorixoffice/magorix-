import { Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { contactEmail, whatsappChatUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X (Twitter)", href: "https://x.com/" },
] as const;

type ContactInfoProps = {
  className?: string;
};

export function ContactInfo({ className }: ContactInfoProps) {
  const mailHref = `mailto:${contactEmail}`;

  return (
    <div className={cn("flex min-w-0 flex-col gap-8", className)}>
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
                href={mailHref}
                className="text-sm font-medium text-foreground transition-colors hover:text-accent md:text-base"
              >
                {contactEmail}
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
              Location
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground/65 md:text-base">
              Chennai, India
            </dd>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-accent">
            <Linkedin className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/45">
              Social
            </dt>
            <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {SOCIAL.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground/80 underline-offset-2 transition-colors hover:text-accent hover:underline"
                >
                  {label}
                </a>
              ))}
            </dd>
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
          <p className="text-sm font-medium leading-relaxed text-foreground/70">
            Response time: we reply within{" "}
            <span className="text-foreground">24 hours</span>.
          </p>
        </div>
      </dl>

      <div>
        <a
          href={whatsappChatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-6 text-base font-semibold text-emerald-300",
            "transition-[background-color,border-color,transform] duration-200 hover:border-emerald-400/45 hover:bg-emerald-500/15",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/60",
            "active:scale-[0.98] sm:w-auto"
          )}
        >
          <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
          Chat on WhatsApp
        </a>
      </div>
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
          Let&apos;s talk.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
          Whether you&apos;re a school, a potential partner,
          <br />
          a job seeker, or just curious — we&apos;d love to hear from you.
        </p>
      </Container>
    </section>
  );
}
