import type { Service } from "../types";

export const SERVICES: Service[] = [
  {
    id: "web-design-development",
    title: "Web Design & Development",
    summary:
      "Need a website that actually works and doesn't embarrass you? That is literally what we do.",
    description:
      "Marketing sites, landing pages, e-commerce, and web apps built to load fast, look sharp, and convert. We handle design, development, and deployment — no hand-off gaps, no template-jockey results.",
    icon: "Globe",
  },
  {
    id: "software-development",
    title: "Custom Software",
    summary:
      "You need software built. We build software. This feels promising already.",
    description:
      "Internal tools, APIs, dashboards, data workflows — if it runs on a computer and needs to exist, we can probably help. Clean code, real tests, and enough documentation to keep future-you from sending angry emails.",
    icon: "Code2",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    summary:
      "AWS, GCP, Azure. We know which buttons not to press, which is honestly half the job.",
    description:
      "From standing up a clean cloud environment to untangling whatever your last vendor left behind, we handle infrastructure as code, automated deployments, cost controls, and the boring reliability bits everyone notices only when they fail.",
    icon: "Cloud",
  },
  {
    id: "devops-platform",
    title: "DevOps & Platform",
    summary:
      "If deploy day requires a group chat, a prayer, and one specific laptop, we should talk.",
    description:
      "CI/CD pipelines, containers, observability, developer tooling, and the platform work that makes delivery faster and less dramatic. Good DevOps should feel uneventful. We are big fans of uneventful.",
    icon: "Layers",
  },
  {
    id: "modernization",
    title: "Modernization",
    summary:
      "Your old software is not getting better with age. Neither is the mystery server nobody wants to reboot.",
    description:
      "Legacy codebases, manual workflows, brittle integrations, infrastructure held together by hope and a scheduled task. We scope it, fix it, and hand it back in a state your team can actually live with.",
    icon: "RefreshCw",
  },
];
