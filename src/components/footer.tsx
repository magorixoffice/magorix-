import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const tagline = "Thoughtful products for teams that move with intent.";

const columns = {
  company: {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  product: {
    title: "Product",
    links: [
      { href: "/products", label: "Products" },
      { href: "/what-we-do", label: "What We Do" },
      { href: "/products#docs", label: "Documentation" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { href: "/contact", label: "Get in touch" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
} as const;

const socialLinks = [
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    Icon: Twitter,
  },
  {
    href: "https://github.com",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "mailto:hello@magorix.com",
    label: "Email",
    Icon: Mail,
  },
] as const;

const linkClass =
  "text-sm text-foreground/65 transition-colors duration-200 hover:text-foreground";

function LogoMark() {
  return (
    <Link
      href="/"
      className="group inline-flex w-max items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/90">
        Magorix
      </span>
      <span
        className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(79,142,247,0.55)]"
        aria-hidden
      />
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-background">
      <Container className="py-14 lg:py-16">
        <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex min-w-0 flex-col gap-5 lg:col-span-4">
            <LogoMark />
            <p className="max-w-sm text-sm leading-relaxed text-foreground/60">
              {tagline}
            </p>
            <p className="text-xs text-foreground/45">
              © {year} Magorix. All rights reserved.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-8">
            {(Object.keys(columns) as (keyof typeof columns)[]).map((key) => {
              const { title, links } = columns[key];
              return (
                <div key={title} className="flex flex-col gap-4">
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-foreground/45">
                    {title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ href, label }) => (
                      <li key={href}>
                        <Link href={href} className={linkClass}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground/55">
            Built with purpose in India <span aria-hidden>🇮🇳</span>
          </p>
          <ul className="flex flex-wrap items-center gap-2 sm:justify-end">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-foreground/70 transition-[color,background-color,border-color,transform] duration-200 ease-out",
                    "hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-foreground active:scale-[0.97]"
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
