import { z, ZodError } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  company: z.string().max(100, "Company name must be under 100 characters").optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2e3, "Message must be under 2000 characters"),
  honeypot: z.string().max(0, "Bot detected").optional()
});
function validateContactForm(data) {
  return contactFormSchema.parse(data);
}

async function sendContactEmail(data, sender) {
  {
    throw new Error("CONTACT_EMAIL environment variable is not set");
  }
}
function createResendSender() {
  {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
}

const prerender = false;
const RATE_LIMIT = 3;
const WINDOW_MS = 60 * 60 * 1e3;
const submissions = /* @__PURE__ */ new Map();
function isRateLimited(ip) {
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
const POST = async ({ request }) => {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(JSON.stringify({ error: "Unsupported content type" }), {
      status: 415
    });
  }
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 1e4) {
    return new Response(JSON.stringify({ error: "Payload too large" }), { status: 413 });
  }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Too many requests" }), { status: 429 });
  }
  let body;
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
        status: 422
      });
    }
    return new Response(JSON.stringify({ error: "Bad request" }), { status: 400 });
  }
  if (data.honeypot) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }
  try {
    const sender = createResendSender();
    await sendContactEmail(data, sender);
  } catch (err) {
    console.error("[contact] Email send failed:", err);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
const ALL = () => new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
