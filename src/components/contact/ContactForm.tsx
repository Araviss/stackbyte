import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../../lib/validation";
import type { ContactFormData } from "../../types";
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from "../../content/contact";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      setFormState("success");
      reset();
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="border-t border-brand-black/10 pt-8 flex flex-col gap-4">
        <p className="font-hand text-3xl text-brand-red">message received.</p>
        <h3 className="font-black text-2xl">Got it. We'll be in touch.</h3>
        <p className="text-brand-black/70 leading-relaxed">
          Expect a response within one business day. If it's urgent, email us directly at{" "}
          <a href="mailto:info@stackbyte.co" className="font-bold underline">
            info@stackbyte.co
          </a>
          .
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="self-start font-bold hover:text-brand-red transition-colors duration-200 mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("honeypot")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Name" error={errors.name?.message} required>
          <input
            type="text"
            placeholder="Your name"
            autoComplete="name"
            className={inputClass(!!errors.name)}
            {...register("name")}
          />
        </Field>

        <Field label="Email" error={errors.email?.message} required>
          <input
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            className={inputClass(!!errors.email)}
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Company" error={errors.company?.message}>
        <input
          type="text"
          placeholder="Your company (optional)"
          autoComplete="organization"
          className={inputClass(!!errors.company)}
          {...register("company")}
        />
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Service interest" error={errors.service?.message} required>
          <select className={inputClass(!!errors.service)} {...register("service")}>
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget range" error={errors.budget?.message} required>
          <select className={inputClass(!!errors.budget)} {...register("budget")}>
            <option value="">Select a range...</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message} required>
        <textarea
          rows={6}
          placeholder="Tell us what you're working on, what's not working, or what you're trying to figure out."
          className={`${inputClass(!!errors.message)} resize-none`}
          {...register("message")}
        />
      </Field>

      {formState === "error" && (
        <p className="text-brand-red font-bold text-sm" role="alert">
          Something went wrong. Please try again or email us directly at info@stackbyte.co.
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="self-start bg-brand-black text-brand-white font-bold px-8 py-4 hover:bg-brand-red transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean): string {
  return `w-full border ${hasError ? "border-brand-red" : "border-brand-black/20"} bg-brand-white px-4 py-3 font-medium text-brand-black placeholder:text-brand-black/30 focus:outline-none focus:border-brand-blue`;
}

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, error, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-sm">
        {label}
        {required && <span className="text-brand-red ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-brand-red text-xs font-bold" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

