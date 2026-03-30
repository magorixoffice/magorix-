"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const REASONS = [
  { value: "", label: "Select a reason" },
  { value: "general", label: "General inquiry" },
  { value: "demo", label: "Product demo" },
  { value: "partnership", label: "Partnership" },
  { value: "support", label: "Support" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
] as const;

const inputClass =
  "w-full rounded-lg border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition-[border-color,box-shadow] duration-200 focus:border-accent/45 focus:outline-none focus:ring-2 focus:ring-accent/20";

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/50";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setSubmitting(true);

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const reason = String(data.get("reason") ?? "");
    const message = String(data.get("message") ?? "").trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, reason, message }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setError(
          typeof json.error === "string"
            ? json.error
            : "Something went wrong. Please try again or email us directly."
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={cn("min-w-0 lg:pl-4 xl:pl-8", className)}>
      {status === "success" ? (
        <div
          className="rounded-xl border border-accent/25 bg-accent/[0.08] p-8 md:p-10"
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
              <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                Message sent
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70 md:text-base">
                Thanks—we&apos;ve received your note and will get back within a
                few business days. If it&apos;s urgent, email{" "}
                <a
                  href="mailto:hello@magorix.com"
                  className="font-medium text-accent underline-offset-2 hover:underline"
                >
                  hello@magorix.com
                </a>{" "}
                with the same subject line.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-white/[0.09] bg-[#0c111c] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] md:p-8"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
            Send a message
          </h2>
          <p className="mt-2 text-sm text-foreground/55">
            Fields marked with * are required.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Name *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@school.edu"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-reason" className={labelClass}>
                Reason *
              </label>
              <select
                id="contact-reason"
                name="reason"
                required
                defaultValue=""
                className={cn(inputClass, "cursor-pointer")}
              >
                {REASONS.map((opt) => (
                  <option
                    key={opt.value || "empty"}
                    value={opt.value}
                    disabled={opt.value === ""}
                    className="bg-[#0c111c] text-foreground"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="What should we know?"
                className={cn(inputClass, "min-h-[120px] resize-y")}
              />
            </div>
          </div>

          {error && (
            <p
              className="mt-6 rounded-lg border border-red-500/35 bg-red-500/10 px-4 py-3 text-sm text-red-200/95"
              role="alert"
            >
              {error}
            </p>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={submitting}
              className={cn(
                "inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-6 text-base font-semibold sm:w-auto sm:px-8",
                "bg-accent text-white shadow-sm transition-[filter,transform] duration-200",
                "hover:brightness-110 active:scale-[0.98]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                "disabled:pointer-events-none disabled:opacity-60"
              )}
            >
              {submitting ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
