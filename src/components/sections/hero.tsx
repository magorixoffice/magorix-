"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonBaseClass, buttonVariantClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

const headingLines = [
  "We're building the",
  "infrastructure for",
  "tomorrow's learners.",
] as const;

export function Hero() {
  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center overflow-hidden md:min-h-[calc(100dvh-4.25rem)]"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-background"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(79,142,247,0.28),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(79,142,247,0.08),transparent_45%)]"
        aria-hidden
      />

      <Container className="relative z-10 py-16 md:py-20">
        <motion.div
          className="mx-auto flex min-w-0 max-w-4xl flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem}>
            <Badge className="border-white/12 bg-white/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/85">
              Now building the future of education
            </Badge>
          </motion.div>

          {headingLines.map((line, i) => (
            <motion.span
              key={line}
              variants={staggerItem}
              className={cn(
                "block w-full min-w-0 break-words font-heading text-[clamp(2rem,6vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground",
                i === 0 ? "mt-8 md:mt-10" : "mt-1.5 md:mt-2",
                i === 2 &&
                  "bg-gradient-to-br from-accent via-[#7eb3fb] to-accent bg-clip-text text-transparent"
              )}
            >
              {line}
            </motion.span>
          ))}

          <motion.p
            variants={staggerItem}
            className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-foreground/65 md:mt-10 md:text-lg"
          >
            An EdTech company on a mission to transform how schools, students,
            and parents experience education in India.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/contact"
              className={cn(
                buttonBaseClass,
                buttonVariantClasses.primary,
                "min-h-[48px] px-8 py-3.5 text-base font-semibold"
              )}
            >
              Get started
            </Link>
            <Link
              href="/what-we-do"
              className={cn(
                buttonBaseClass,
                buttonVariantClasses.secondary,
                "min-h-[48px] px-8 py-3.5 text-base font-semibold"
              )}
            >
              What we do
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
