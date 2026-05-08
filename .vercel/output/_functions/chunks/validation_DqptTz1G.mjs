import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  company: z.string().max(100, "Company name must be under 100 characters").optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2e3, "Message must be under 2000 characters"),
  honeypot: z.string().max(0, "Bot detected").optional()
});
function validateContactForm(data) {
  return contactFormSchema.parse(data);
}

export { contactFormSchema as c, validateContactForm as v };
