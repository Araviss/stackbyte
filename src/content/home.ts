import type { Metric, Testimonial } from "../types";

export const METRICS: Metric[] = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Experience" },
  { value: "0", label: "Surprise Invoices" },
];

export const DIFFERENTIATORS = [
  {
    title: "We've done this at scale.",
    description:
      "Enterprise distributed systems. Large-scale cloud migrations. We didn't learn this on your project — we brought it to your project.",
    icon: "Target",
  },
  {
    title: "We talk like humans.",
    description:
      "No jargon, no mystery retainers, no 40-page proposal for a 2-week job. You'll always know what we're doing, why we're doing it, and what it costs.",
    icon: "MessageSquare",
  },
  {
    title: "We care what happens after launch.",
    description:
      "We don't hand you a zip file and disappear. Clean code, solid tests, documentation your team can read. You're set up to succeed with or without us.",
    icon: "Shield",
  },
];

export const FEATURED_TESTIMONIAL: Testimonial = {
  quote:
    "Stackbyte took our scattered spreadsheet operation and turned it into a real platform. Six months later we're running twice the volume with half the headaches. Worth every cent.",
  author: "Jordan Mercer",
  role: "CEO",
  company: "Northgate Logistics",
};

export const TECH_LOGOS = [
  "React",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "TypeScript",
  "Python",
  "Kubernetes",
  "Terraform",
  "GCP",
];
