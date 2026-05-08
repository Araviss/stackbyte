import { z } from "zod";
import type { ContactFormData } from "../types";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  company: z
    .string()
    .max(100, "Company name must be under 100 characters")
    .optional(),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

/**
 * Validates raw form data. Throws a ZodError if invalid.
 * Pure function — no side effects, easy to unit test.
 */
export function validateContactForm(data: unknown): ContactFormData {
  return contactFormSchema.parse(data);
}

/**
 * Returns field-level error messages from a ZodError.
 * Returns an empty object when there are no errors.
 */
export function getFieldErrors(
  error: z.ZodError
): Partial<Record<keyof ContactFormData, string>> {
  return Object.fromEntries(
    error.issues.map((issue) => [issue.path[0], issue.message])
  ) as Partial<Record<keyof ContactFormData, string>>;
}
