import type { APIRoute } from "astro";
import { validateContactForm } from "../../lib/validation";
import { sendContactEmail, createResendSender } from "../../lib/email";
import { ZodError } from "zod";

// In-memory rate limiter: max 3 submissions per IP per hour.
// Simple and dependency-free — sufficient for a low-traffic contact form.
const RATE_LIMIT = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

const submissions = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = submissions.get(ip);

  if (!record || now > record.resetAt) {
    submissions.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT) return true;

  record.count += 1;
  return false;
}

export const POST: APIRoute = async ({ request }) => {
  // Reject wrong content type
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(JSON.stringify({ error: "Unsupported content type" }), {
      status: 415,
    });
  }

  // Enforce payload size limit (10KB)
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 10_000) {
    return new Response(JSON.stringify({ error: "Payload too large" }), { status: 413 });
  }

  // Rate limit by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Too many requests" }), { status: 429 });
  }

  // Parse and validate
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  let data;
  try {
    data = validateContactForm(body);
  } catch (err) {
    if (err instanceof ZodError) {
      return new Response(JSON.stringify({ error: "Validation failed", issues: err.errors }), {
        status: 422,
      });
    }
    return new Response(JSON.stringify({ error: "Bad request" }), { status: 400 });
  }

  // Silently drop honeypot-filled submissions — bots don't need to know they were caught
  if (data.honeypot) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  // Send email
  try {
    const sender = createResendSender();
    await sendContactEmail(data, sender);
  } catch (err) {
    console.error("[contact] Email send failed:", err);
    // Don't leak internal error details to the client
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

// Reject all other HTTP methods
export const ALL: APIRoute = () =>
  new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
