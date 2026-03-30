import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type CareersApplyCtaProps = {
  className?: string;
};

export function CareersApplyCta({ className }: CareersApplyCtaProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-14 md:py-16 lg:py-[4.5rem]",
        className
      )}
      aria-labelledby="careers-apply-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent via-[#3f7adf] to-[#2a5fbf]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_100%_0%,rgba(255,255,255,0.16),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_100%,rgba(0,0,0,0.12),transparent_50%)]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
          <h2
            id="careers-apply-heading"
            className="font-heading text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl lg:text-[2rem]"
          >
            Applying is simple
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:mt-5 md:text-lg">
            Send your profile, a short note on what you want to learn next, and
            one thing you shipped that you&apos;re proud of—PDFs optional, clarity
            required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <Link
              href="mailto:careers@magorix.com?subject=Application%20%E2%80%94%20Magorix"
              className={cn(
                "inline-flex min-h-[48px] items-center justify-center rounded-lg px-8 py-3 text-base font-semibold",
                "bg-white text-background shadow-md shadow-black/10",
                "transition-[transform,background-color,box-shadow] duration-200 ease-out",
                "hover:bg-white/95 hover:shadow-lg hover:shadow-black/15",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                "active:scale-[0.98]"
              )}
            >
              Email careers
            </Link>
            <Link
              href="/contact"
              className={cn(
                "inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/25 px-8 py-3 text-base font-semibold text-white",
                "transition-[background-color,border-color] duration-200",
                "hover:bg-white/10 hover:border-white/35",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              )}
            >
              Use contact form
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
