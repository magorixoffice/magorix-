"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/products", label: "Products" },
  { href: "/careers", label: "Careers" },
] as const;

const CONTACT_HREF = "/contact";

const contactButtonClass =
  "inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-[transform,box-shadow,filter] duration-200 ease-out hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]";

const menuPanelVariants = {
  closed: { opacity: 0, y: -12 },
  open: { opacity: 1, y: 0 },
};

const menuListVariants = {
  open: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.035,
      staggerDirection: -1,
    },
  },
};

const menuItemVariants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] as const },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: [0.4, 0, 0.2, 1] as const },
  },
};

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6 text-foreground">
      <motion.span
        className="absolute left-0 top-0 block h-0.5 w-full rounded-full bg-current"
        animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: "center" }}
      />
      <motion.span
        className="absolute left-0 top-[9px] block h-0.5 w-full rounded-full bg-current"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.18 }}
      />
      <motion.span
        className="absolute left-0 top-[18px] block h-0.5 w-full rounded-full bg-current"
        animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: "center" }}
      />
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 min-w-0">
      <div
        className={cn(
          "transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-out",
          scrolled
            ? "border-b border-white/[0.08] bg-background/[0.88] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-b border-transparent bg-background/45 backdrop-blur-md"
        )}
      >
        <Container className="relative">
          <div className="flex h-16 min-w-0 items-center justify-between gap-2 md:h-[4.25rem] md:gap-4">
            <Link
              href="/"
              className="group flex min-w-0 shrink-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => setOpen(false)}
            >
              <span className="truncate font-heading text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/90">
                Magorix
              </span>
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(79,142,247,0.55)]"
                aria-hidden
              />
            </Link>

            <nav
              className="absolute left-1/2 hidden max-w-[calc(100%-12rem)] -translate-x-1/2 md:block"
              aria-label="Main"
            >
              <ul className="flex items-center gap-4 whitespace-nowrap lg:gap-8 xl:gap-10">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href} className="shrink-0">
                    <Link
                      href={href}
                      className={cn(
                        "relative inline-block py-1 text-sm font-medium transition-colors duration-200 lg:text-[0.9375rem]",
                        isActive(href)
                          ? "text-foreground"
                          : "text-foreground/70 hover:text-foreground"
                      )}
                    >
                      {label}
                      {isActive(href) && (
                        <span
                          className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent/90"
                          aria-hidden
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href={CONTACT_HREF}
                className={cn(
                  contactButtonClass,
                  "hidden shrink-0 md:inline-flex"
                )}
              >
                Contact
              </Link>

              <button
                type="button"
                className="inline-flex h-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 md:hidden"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                <HamburgerIcon open={open} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {open && (
        <div
          className="fixed inset-0 top-16 z-[45] bg-black/50 backdrop-blur-[1px] md:hidden"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuPanelVariants}
            transition={{ duration: 0.26, ease: [0.4, 0, 0.2, 1] as const }}
            className="fixed left-0 right-0 top-16 z-[46] max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-y-contain border-b border-white/[0.06] bg-background/[0.98] backdrop-blur-xl md:hidden"
          >
            <motion.ul
              className="container flex w-full min-w-0 flex-col gap-1.5 pb-8 pt-3"
              aria-label="Mobile"
              variants={menuListVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <motion.li key={href} variants={menuItemVariants}>
                  <Link
                    href={href}
                    className={cn(
                      "block rounded-lg px-3 py-3.5 text-base font-medium leading-snug transition-colors duration-200",
                      isActive(href)
                        ? "bg-white/[0.06] text-foreground"
                        : "text-foreground/75 hover:bg-white/[0.04] hover:text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={menuItemVariants} className="pt-2">
                <Link
                  href={CONTACT_HREF}
                  className={cn(
                    contactButtonClass,
                    "flex w-full min-h-[48px] items-center justify-center"
                  )}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
