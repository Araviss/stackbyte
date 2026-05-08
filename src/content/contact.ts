import type { FaqItem } from "../types";

export const SERVICE_OPTIONS = [
  { value: "web-design-development", label: "Web Design & Development" },
  { value: "modernization", label: "Modernization" },
  { value: "software-development", label: "Custom Software" },
  { value: "cloud-infrastructure", label: "Cloud & Infrastructure" },
  { value: "devops-platform", label: "DevOps & Platform" },
  { value: "not-sure", label: "Not sure yet - let's figure it out" },
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What do you actually build?",
    answer:
      "Websites, web apps, internal tools, data workflows, cloud infrastructure, modernization of existing systems. If it runs on a computer and your current version of it is causing pain — or does not exist yet and should — that is probably our lane.",
  },
  {
    question: "How quickly can you get started?",
    answer:
      "Usually within two weeks of signing. We keep the pipeline intentionally small so when we take on a project, we are actually focused on it.",
  },
  {
    question: "How do you handle pricing?",
    answer:
      "Project-based work is scoped and priced before we start. Advisory work is billed monthly when ongoing technical guidance makes more sense. No surprise invoices.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer:
      "All the time. You do not need to know what a Kubernetes cluster is. We translate between what the business needs and what the technology needs to do.",
  },
  {
    question: "We already have a dev team. Can you still help?",
    answer:
      "Absolutely. We can provide senior perspective, review architecture, or own specific workstreams while your team focuses elsewhere.",
  },
  {
    question: "What if the project scope changes mid-way?",
    answer:
      "Scope changes happen. We handle them transparently: what changed, what it costs, and whether it makes sense to do it now or later.",
  },
];
