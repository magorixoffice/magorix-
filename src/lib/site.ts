/** Canonical site URL for metadata and Open Graph (set NEXT_PUBLIC_SITE_URL in production). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://magorix.com";

export const siteName = "Magorix";

export const defaultDescription =
  "Calm software for schools, families, and students—built for India.";

/** Public inbox shown on /contact */
export const contactEmail = "hello@magorix.com";

/** Full WhatsApp chat URL (`https://wa.me/91...` with country code, no +). Set in production. */
export const whatsappChatUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ??
  "https://wa.me/919999999999?text=Hi%20Magorix";
