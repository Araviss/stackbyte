import type { EngagementModel, ProcessStep, TechCategory } from "../types";

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: "Fixed-Scope Build",
    tagline: "Scoped. Priced. Done.",
    description:
      "We agree on what gets built, what it costs, and when it ships before we write a line of production code.",
    bestFor: "Defined builds, migrations, modernization projects",
  },
  {
    title: "Workflow Cleanup",
    tagline: "Find the mess. Fix the drag.",
    description:
      "We map the brittle process, identify the highest-leverage fixes, and turn the worst handoffs into simpler tools or automations.",
    bestFor: "Manual processes, spreadsheet sprawl, fragile operations",
  },
  {
    title: "Technical Advisory",
    tagline: "Senior judgment, clearly applied.",
    description:
      "Architecture decisions, vendor evaluations, code reviews, build-versus-buy calls, and honest technical guidance.",
    bestFor: "Founders, growing teams, technical decision support",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "We listen first",
    description:
      "Tell us what is broken, slow, confusing, or half-built. Good questions here save everyone time later.",
  },
  {
    number: "2",
    title: "We make a plan",
    description:
      "Architecture, timeline, cost, risks - all visible before the build starts. If something does not add up, we say so.",
  },
  {
    number: "3",
    title: "We build it",
    description:
      "Iterative, transparent, and boring in the best possible way. You see progress, tradeoffs, and decisions as they happen.",
  },
  {
    number: "4",
    title: "We hand it off clean",
    description:
      "Documentation, knowledge transfer, and a sane landing. Launch should not feel like being pushed out of a moving vehicle.",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"],
  },
  {
    label: "Cloud",
    items: ["AWS", "GCP", "Azure", "Terraform", "Docker", "Kubernetes"],
  },
  {
    label: "Tooling",
    items: ["GitHub Actions", "Datadog", "Sentry", "Playwright", "Vitest"],
  },
];
