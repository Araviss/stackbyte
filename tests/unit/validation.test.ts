import { describe, it, expect } from "vitest";
import { validateContactForm, getFieldErrors } from "../../src/lib/validation";
import { ZodError } from "zod";

const validData = {
  name: "Alex Rivera",
  email: "alex@example.com",
  company: "Acme Co",
  service: "software-development",
  message: "We need help building a customer portal.",
};

describe("validateContactForm", () => {
  it("accepts a fully valid submission", () => {
    expect(() => validateContactForm(validData)).not.toThrow();
  });

  it("accepts a submission without an optional company field", () => {
    const { company: _, ...data } = validData;
    expect(() => validateContactForm(data)).not.toThrow();
  });

  it("rejects when name is missing", () => {
    expect(() => validateContactForm({ ...validData, name: "" })).toThrow(ZodError);
  });

  it("rejects when name exceeds 100 characters", () => {
    expect(() =>
      validateContactForm({ ...validData, name: "A".repeat(101) })
    ).toThrow(ZodError);
  });

  it("rejects an invalid email address", () => {
    expect(() =>
      validateContactForm({ ...validData, email: "not-an-email" })
    ).toThrow(ZodError);
  });

  it("rejects when message is under 10 characters", () => {
    expect(() =>
      validateContactForm({ ...validData, message: "Too short" })
    ).toThrow(ZodError);
  });

  it("rejects when message exceeds 2000 characters", () => {
    expect(() =>
      validateContactForm({ ...validData, message: "A".repeat(2001) })
    ).toThrow(ZodError);
  });

  it("rejects when service is empty", () => {
    expect(() => validateContactForm({ ...validData, service: "" })).toThrow(ZodError);
  });

  it("rejects a filled honeypot field", () => {
    expect(() =>
      validateContactForm({ ...validData, honeypot: "bot-value" })
    ).toThrow(ZodError);
  });

  it("accepts an empty honeypot field", () => {
    expect(() =>
      validateContactForm({ ...validData, honeypot: "" })
    ).not.toThrow();
  });
});

describe("getFieldErrors", () => {
  it("returns a map of field names to error messages", () => {
    let error!: ZodError;
    try {
      validateContactForm({ ...validData, name: "", email: "bad" });
    } catch (e) {
      error = e as ZodError;
    }

    const errors = getFieldErrors(error);
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
  });

  it("only returns entries for fields that actually failed", () => {
    let error!: ZodError;
    try {
      // Only name fails — email and other fields are valid
      validateContactForm({ ...validData, name: "" });
    } catch (e) {
      error = e as ZodError;
    }

    const errors = getFieldErrors(error);
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeUndefined();
  });
});
