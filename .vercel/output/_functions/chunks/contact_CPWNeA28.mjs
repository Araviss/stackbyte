import { c as createComponent } from './astro-component_Cz4TCFgv.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_DX6Gg_yC.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CnTYIeYZ.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { c as contactFormSchema } from './validation_DqptTz1G.mjs';
import { ChevronDown } from 'lucide-react';

const SERVICE_OPTIONS = [
  { value: "web-design-development", label: "Web Design & Development" },
  { value: "modernization", label: "Modernization" },
  { value: "software-development", label: "Custom Software" },
  { value: "cloud-infrastructure", label: "Cloud & Infrastructure" },
  { value: "devops-platform", label: "DevOps & Platform" },
  { value: "not-sure", label: "Not sure yet - let's figure it out" }
];
const BUDGET_OPTIONS = [
  { value: "under-10k", label: "Under $10k" },
  { value: "10k-50k", label: "$10k - $50k" },
  { value: "50k-100k", label: "$50k - $100k" },
  { value: "over-100k", label: "$100k+" },
  { value: "not-sure", label: "Honestly not sure yet" }
];
const FAQ_ITEMS = [
  {
    question: "What do you actually build?",
    answer: "Websites, web apps, internal tools, data workflows, cloud infrastructure, modernization of existing systems. If it runs on a computer and your current version of it is causing pain — or does not exist yet and should — that is probably our lane."
  },
  {
    question: "How quickly can you get started?",
    answer: "Usually within two weeks of signing. We keep the pipeline intentionally small so when we take on a project, we are actually focused on it."
  },
  {
    question: "How do you handle pricing?",
    answer: "Project-based work is scoped and priced before we start. Staff augmentation and advisory retainers are billed monthly. No surprise invoices."
  },
  {
    question: "Do you work with non-technical founders?",
    answer: "All the time. You do not need to know what a Kubernetes cluster is. We translate between what the business needs and what the technology needs to do."
  },
  {
    question: "We already have a dev team. Can you still help?",
    answer: "Absolutely. We can augment capacity, provide senior perspective, or own specific workstreams while your team focuses elsewhere."
  },
  {
    question: "What if the project scope changes mid-way?",
    answer: "Scope changes happen. We handle them transparently: what changed, what it costs, and whether it makes sense to do it now or later."
  }
];

function ContactForm() {
  const [formState, setFormState] = useState("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });
  const onSubmit = async (data) => {
    setFormState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("Submission failed");
      setFormState("success");
      reset();
    } catch {
      setFormState("error");
    }
  };
  if (formState === "success") {
    return /* @__PURE__ */ jsxs("div", { className: "border-t border-brand-black/10 pt-8 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: "font-hand text-3xl text-brand-red", children: "message received." }),
      /* @__PURE__ */ jsx("h3", { className: "font-black text-2xl", children: "Got it. We'll be in touch." }),
      /* @__PURE__ */ jsxs("p", { className: "text-brand-black/70 leading-relaxed", children: [
        "Expect a response within one business day. If it's urgent, email us directly at",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:info@stackbyte.co", className: "font-bold underline", children: "info@stackbyte.co" }),
        "."
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setFormState("idle"),
          className: "self-start font-bold hover:text-brand-red transition-colors duration-200 mt-2",
          children: "Send another message"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "flex flex-col gap-6", noValidate: true, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        tabIndex: -1,
        autoComplete: "off",
        "aria-hidden": "true",
        className: "hidden",
        ...register("honeypot")
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(Field, { label: "Name", error: errors.name?.message, required: true, children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Your name",
          autoComplete: "name",
          className: inputClass(!!errors.name),
          ...register("name")
        }
      ) }),
      /* @__PURE__ */ jsx(Field, { label: "Email", error: errors.email?.message, required: true, children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          placeholder: "you@company.com",
          autoComplete: "email",
          className: inputClass(!!errors.email),
          ...register("email")
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Field, { label: "Company", error: errors.company?.message, children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "Your company (optional)",
        autoComplete: "organization",
        className: inputClass(!!errors.company),
        ...register("company")
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(Field, { label: "Service interest", error: errors.service?.message, required: true, children: /* @__PURE__ */ jsxs("select", { className: inputClass(!!errors.service), ...register("service"), children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "Select a service..." }),
        SERVICE_OPTIONS.map((opt) => /* @__PURE__ */ jsx("option", { value: opt.value, children: opt.label }, opt.value))
      ] }) }),
      /* @__PURE__ */ jsx(Field, { label: "Budget range", error: errors.budget?.message, required: true, children: /* @__PURE__ */ jsxs("select", { className: inputClass(!!errors.budget), ...register("budget"), children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "Select a range..." }),
        BUDGET_OPTIONS.map((opt) => /* @__PURE__ */ jsx("option", { value: opt.value, children: opt.label }, opt.value))
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Field, { label: "Message", error: errors.message?.message, required: true, children: /* @__PURE__ */ jsx(
      "textarea",
      {
        rows: 6,
        placeholder: "Tell us what you're working on, what's not working, or what you're trying to figure out.",
        className: `${inputClass(!!errors.message)} resize-none`,
        ...register("message")
      }
    ) }),
    formState === "error" && /* @__PURE__ */ jsx("p", { className: "text-brand-red font-bold text-sm", role: "alert", children: "Something went wrong. Please try again or email us directly at info@stackbyte.co." }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: formState === "submitting",
        className: "self-start bg-brand-black text-brand-white font-bold px-8 py-4 hover:bg-brand-red transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        children: formState === "submitting" ? "Sending..." : "Send message"
      }
    )
  ] });
}
function inputClass(hasError) {
  return `w-full border ${hasError ? "border-brand-red" : "border-brand-black/20"} bg-brand-white px-4 py-3 font-medium text-brand-black placeholder:text-brand-black/30 focus:outline-none focus:border-brand-blue`;
}
function Field({ label, error, required, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxs("label", { className: "font-bold text-sm", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-brand-red ml-1", "aria-hidden": "true", children: "*" })
    ] }),
    children,
    error && /* @__PURE__ */ jsx("p", { className: "text-brand-red text-xs font-bold", role: "alert", children: error })
  ] });
}

function AccordionItem({ item, isOpen, onToggle, index }) {
  const id = `faq-answer-${index}`;
  return /* @__PURE__ */ jsxs("div", { className: "border-t border-brand-black/10", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: onToggle,
        "aria-expanded": isOpen,
        "aria-controls": id,
        className: "w-full flex items-center justify-between gap-4 py-6 text-left hover:text-brand-red transition-colors duration-200",
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-black text-xl", children: item.question }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              size: 20,
              className: `shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { id, role: "region", hidden: !isOpen, className: "pb-6", children: /* @__PURE__ */ jsx("p", { className: "text-brand-black/65 leading-relaxed", children: item.answer }) })
  ] });
}
function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex((prev) => prev === index ? null : index);
  return /* @__PURE__ */ jsx("div", { children: items.map((item, index) => /* @__PURE__ */ jsx(
    AccordionItem,
    {
      item,
      isOpen: openIndex === index,
      onToggle: () => toggle(index),
      index
    },
    item.question
  )) });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Stackbyte | Software Consulting for SMBs", "description": "Start a conversation with Stackbyte. Tell us what you are working on and we will get back to you within one business day.", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 py-16 md:py-24"> <div class="max-w-6xl mx-auto grid gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-start"> <div class="order-2 lg:order-1"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/jzonl/Projects/stackbyte/src/components/contact/ContactForm", "client:component-export": "default" })} </div> <aside class="order-1 grid content-start gap-8 lg:order-2 lg:sticky lg:top-8 lg:text-right"> <div class="border-b border-brand-black/10 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8"> <p class="font-hand text-4xl text-brand-red">start with the weird part.</p> <h1 class="ml-auto mt-6 max-w-xl text-[clamp(3.25rem,6vw,5.75rem)] font-black leading-[0.92] tracking-normal">
Tell us what needs fixing.
</h1> <p class="ml-auto mt-7 max-w-lg text-xl leading-relaxed text-brand-black/65">
No pitch gauntlet. No commitment. Send the context, the mess, or the
            suspicious spreadsheet. We will reply like actual people.
</p> </div> <div class="border-t border-brand-black/10 pt-6 lg:border-t-0 lg:pr-8"> <p class="font-hand text-3xl text-brand-black/55">then what?</p> <ol class="mt-5 grid gap-4 text-brand-black/65"> ${[
    "We read the whole thing.",
    "We reply with honest first thoughts.",
    "If it fits, we scope the next step."
  ].map((step, i) => renderTemplate`<li class="flex gap-4 leading-relaxed lg:flex-row-reverse"> <span class="font-hand text-2xl text-brand-red">0${i + 1}</span> <span>${step}</span> </li>`)} </ol> </div> <div class="border-t border-brand-black/10 pt-6 lg:pr-8"> <p class="font-hand text-3xl text-brand-black/55">prefer email?</p> <a href="mailto:info@stackbyte.co" class="mt-2 block text-2xl font-black hover:text-brand-red transition-colors duration-200 break-all">
info@stackbyte.co
</a> </div> </aside> </div> </section> <section class="section-rule px-6 py-20 md:py-28"> <div class="max-w-6xl mx-auto grid gap-10 md:grid-cols-[0.8fr_1.2fr]"> <div> <p class="font-hand text-3xl text-brand-black/55">fine print, but readable</p> <h2 class="mt-3 text-display-sm">Questions.</h2> </div> ${renderComponent($$result2, "FAQAccordion", FAQAccordion, { "items": FAQ_ITEMS, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jzonl/Projects/stackbyte/src/components/contact/FAQAccordion", "client:component-export": "default" })} </div> </section> ` })}`;
}, "C:/Users/jzonl/Projects/stackbyte/src/pages/contact.astro", void 0);

const $$file = "C:/Users/jzonl/Projects/stackbyte/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
