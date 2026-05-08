import type { ContactFormData } from "../types";

export interface EmailSender {
  send(payload: EmailPayload): Promise<void>;
}

interface EmailPayload {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
}

/**
 * Builds the HTML body for a contact form submission email.
 * Pure function — deterministic output, easy to unit test.
 */
export function buildContactEmailHtml(data: ContactFormData): string {
  const company = data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : "";
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${company}
    <p><strong>Service Interest:</strong> ${data.service}</p>
    <p><strong>Budget:</strong> ${data.budget}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br />")}</p>
  `.trim();
}

/**
 * Sends a contact form submission email.
 * Accepts an EmailSender so tests can inject a mock — no real email sent in tests.
 */
export async function sendContactEmail(
  data: ContactFormData,
  sender: EmailSender
): Promise<void> {
  const toAddress = import.meta.env.CONTACT_EMAIL;

  if (!toAddress) {
    throw new Error("CONTACT_EMAIL environment variable is not set");
  }

  await sender.send({
    from: "noreply@stackbyte.co",
    to: toAddress,
    replyTo: data.email,
    subject: `New inquiry from ${data.name}`,
    html: buildContactEmailHtml(data),
  });
}

/**
 * Creates a Resend-backed EmailSender.
 * Separated from sendContactEmail so the transport is swappable.
 */
export function createResendSender(): EmailSender {
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  return {
    async send(payload: EmailPayload): Promise<void> {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const { error } = await resend.emails.send({
        from: payload.from,
        to: payload.to,
        reply_to: payload.replyTo,
        subject: payload.subject,
        html: payload.html,
      });

      if (error) {
        throw new Error(`Failed to send email: ${error.message}`);
      }
    },
  };
}

