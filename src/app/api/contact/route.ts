import { NextResponse } from "next/server";

const REASONS = new Set(["partnership", "career", "press", "other"]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message: string) {
  return NextResponse.json({ ok: false as const, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid JSON body.");
  }

  if (!body || typeof body !== "object") {
    return badRequest("Invalid payload.");
  }

  const { name, email, reason, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 1 || name.trim().length > 200) {
    return badRequest("Name is required (max 200 characters).");
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim()) || email.length > 320) {
    return badRequest("A valid email is required.");
  }

  if (typeof reason !== "string" || !REASONS.has(reason)) {
    return badRequest("Please select a valid reason.");
  }

  if (typeof message !== "string" || message.trim().length < 1 || message.length > 8000) {
    return badRequest("Message is required (max 8000 characters).");
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    reason,
    message: message.trim(),
  };

  if (process.env.NODE_ENV === "development") {
    console.info("[api/contact] submission", {
      name: payload.name,
      email: payload.email,
      reason: payload.reason,
      messageChars: payload.message.length,
    });
  }

  return NextResponse.json({ ok: true as const });
}
