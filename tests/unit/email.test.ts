import { describe, it, expect, vi, beforeEach } from "vitest";
import { buildContactEmailHtml, sendContactEmail } from "../../src/lib/email";
import type { EmailSender } from "../../src/lib/email";
import type { ContactFormData } from "../../src/types";

// Mock the resend package so tests never make real network calls.
// Uses a class so `new Resend()` works correctly in the implementation.
const mockEmailSend = vi.fn().mockResolvedValue({ data: {}, error: null });

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: mockEmailSend };
  },
}));

const validData: ContactFormData = {
  name: "Alex Rivera",
  email: "alex@example.com",
  company: "Acme Co",
  service: "software-development",
  budget: "10k-50k",
  message: "We need help building a customer portal.",
};

describe("buildContactEmailHtml", () => {
  it("includes the submitter's name and email", () => {
    const html = buildContactEmailHtml(validData);
    expect(html).toContain("Alex Rivera");
    expect(html).toContain("alex@example.com");
  });

  it("includes the company when provided", () => {
    const html = buildContactEmailHtml(validData);
    expect(html).toContain("Acme Co");
  });

  it("omits the company line when company is not provided", () => {
    const { company: _, ...data } = validData;
    const html = buildContactEmailHtml(data as ContactFormData);
    expect(html).not.toContain("<strong>Company:</strong>");
  });

  it("includes the message content", () => {
    const html = buildContactEmailHtml(validData);
    expect(html).toContain("customer portal");
  });

  it("converts newlines in the message to <br /> tags", () => {
    const data = { ...validData, message: "Line one\nLine two" };
    const html = buildContactEmailHtml(data);
    expect(html).toContain("Line one<br />Line two");
  });
});

describe("createResendSender", () => {
  it("throws when RESEND_API_KEY is not set", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const { createResendSender } = await import("../../src/lib/email");
    expect(() => createResendSender()).toThrow("RESEND_API_KEY environment variable is not set");
    vi.unstubAllEnvs();
  });

  it("returns an object with a send method when API key is present", async () => {
    vi.stubEnv("RESEND_API_KEY", "re_fake_key_for_testing");
    const { createResendSender } = await import("../../src/lib/email");
    const sender = createResendSender();
    expect(typeof sender.send).toBe("function");
    vi.unstubAllEnvs();
  });

  it("sends successfully when Resend returns no error", async () => {
    vi.stubEnv("RESEND_API_KEY", "re_fake_key_for_testing");
    const { createResendSender } = await import("../../src/lib/email");
    const sender = createResendSender();

    await expect(
      sender.send({
        from: "noreply@stackbyte.co",
        to: "info@stackbyte.co",
        replyTo: "alex@example.com",
        subject: "Test",
        html: "<p>Test</p>",
      })
    ).resolves.not.toThrow();

    vi.unstubAllEnvs();
  });

  it("throws when Resend returns an error object", async () => {
    mockEmailSend.mockResolvedValueOnce({ data: null, error: { message: "Invalid API key" } });

    vi.stubEnv("RESEND_API_KEY", "re_fake_key_for_testing");
    const { createResendSender } = await import("../../src/lib/email");
    const sender = createResendSender();

    await expect(
      sender.send({
        from: "noreply@stackbyte.co",
        to: "info@stackbyte.co",
        replyTo: "alex@example.com",
        subject: "Test",
        html: "<p>Test</p>",
      })
    ).rejects.toThrow("Invalid API key");

    vi.unstubAllEnvs();
  });
});

describe("sendContactEmail", () => {
  it("calls the sender with the correct payload shape", async () => {
    const mockSender: EmailSender = { send: vi.fn().mockResolvedValue(undefined) };

    // Provide the required env var for the test
    vi.stubEnv("CONTACT_EMAIL", "info@stackbyte.co");

    await sendContactEmail(validData, mockSender);

    expect(mockSender.send).toHaveBeenCalledOnce();
    const call = vi.mocked(mockSender.send).mock.calls[0][0];
    expect(call.to).toBe("info@stackbyte.co");
    expect(call.replyTo).toBe(validData.email);
    expect(call.subject).toContain(validData.name);
    expect(call.html).toBeTruthy();

    vi.unstubAllEnvs();
  });

  it("throws when CONTACT_EMAIL env var is not set", async () => {
    const mockSender: EmailSender = { send: vi.fn() };
    vi.stubEnv("CONTACT_EMAIL", "");

    await expect(sendContactEmail(validData, mockSender)).rejects.toThrow(
      "CONTACT_EMAIL environment variable is not set"
    );

    vi.unstubAllEnvs();
  });

  it("propagates sender errors to the caller", async () => {
    const mockSender: EmailSender = {
      send: vi.fn().mockRejectedValue(new Error("SMTP timeout")),
    };
    vi.stubEnv("CONTACT_EMAIL", "info@stackbyte.co");

    await expect(sendContactEmail(validData, mockSender)).rejects.toThrow("SMTP timeout");

    vi.unstubAllEnvs();
  });
});

