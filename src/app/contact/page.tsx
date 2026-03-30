import { ContactForm } from "@/components/contact/contact-form";
import { ContactHero, ContactInfo } from "@/components/contact/contact-info";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Reach Magorix—email, location, and a contact form for demos, partnerships, and support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex flex-col bg-background">
      <ContactHero />
      <section
        className="border-b border-white/[0.06] py-section-sm md:py-section lg:pb-section-lg"
        aria-label="Contact details and form"
      >
        <Container>
          <div className="grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
            <ContactInfo className="min-w-0" />
            <ContactForm className="min-w-0" />
          </div>
        </Container>
      </section>
    </main>
  );
}
