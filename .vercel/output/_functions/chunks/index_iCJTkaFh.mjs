import { c as createComponent } from './astro-component_Cz4TCFgv.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, h as addAttribute, l as renderComponent } from './entrypoint_DX6Gg_yC.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CnTYIeYZ.mjs';
import 'clsx';
import { $ as $$CTABanner } from './CTABanner_DadOEDy1.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-6 py-16 md:py-24"> <div class="mx-auto max-w-6xl"> <div class="text-center"> <p class="font-hand text-4xl leading-none text-brand-red md:text-5xl">
we roll different.
</p> <div class="relative isolate mt-8"> <img src="/images/logo.svg" alt="" class="hero-logo-stamp pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-[24rem] w-auto opacity-[0.12] saturate-75 lg:block" aria-hidden="true"> <h1 class="mx-auto max-w-5xl text-[clamp(3.4rem,7.4vw,7.25rem)] font-black leading-[0.9] tracking-normal">
Practical software for the messy middle of business.
</h1> </div> </div> <div class="mt-12 flex flex-col items-center text-center"> <div> <p class="max-w-2xl text-lg leading-relaxed text-brand-black/65 md:text-xl">
We help small and mid-size teams build, fix, and scale their software.
          Websites, custom tools, cloud infrastructure, and everything in between.
          No consulting theater. No mystery invoices. Minimal interpretive dance.
</p> <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row"> <a href="/contact" class="inline-flex items-center justify-center bg-brand-black px-7 py-4 text-base font-black text-brand-white hover:bg-brand-red transition-colors duration-200">
Tell us about it
</a> <a href="/consulting" class="inline-flex items-center justify-center border border-brand-black/20 px-7 py-4 text-base font-bold text-brand-black/70 hover:border-brand-blue hover:text-brand-blue transition-colors duration-200">
See services
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/jzonl/Projects/stackbyte/src/components/home/HeroSection.astro", void 0);

const SERVICES = [
  {
    id: "web-design-development",
    title: "Web Design & Development",
    summary: "Need a website that actually works and doesn't embarrass you? That is literally what we do.",
    description: "Marketing sites, landing pages, e-commerce, and web apps built to load fast, look sharp, and convert. We handle design, development, and deployment — no hand-off gaps, no template-jockey results.",
    icon: "Globe"
  },
  {
    id: "software-development",
    title: "Custom Software",
    summary: "You need software built. We build software. This feels promising already.",
    description: "Internal tools, APIs, dashboards, data workflows — if it runs on a computer and needs to exist, we can probably help. Clean code, real tests, and enough documentation to keep future-you from sending angry emails.",
    icon: "Code2"
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    summary: "AWS, GCP, Azure. We know which buttons not to press, which is honestly half the job.",
    description: "From standing up a clean cloud environment to untangling whatever your last vendor left behind, we handle infrastructure as code, automated deployments, cost controls, and the boring reliability bits everyone notices only when they fail.",
    icon: "Cloud"
  },
  {
    id: "devops-platform",
    title: "DevOps & Platform",
    summary: "If deploy day requires a group chat, a prayer, and one specific laptop, we should talk.",
    description: "CI/CD pipelines, containers, observability, developer tooling, and the platform work that makes delivery faster and less dramatic. Good DevOps should feel uneventful. We are big fans of uneventful.",
    icon: "Layers"
  },
  {
    id: "modernization",
    title: "Modernization",
    summary: "Your old software is not getting better with age. Neither is the mystery server nobody wants to reboot.",
    description: "Legacy codebases, manual workflows, brittle integrations, infrastructure held together by hope and a scheduled task. We scope it, fix it, and hand it back in a state your team can actually live with.",
    icon: "RefreshCw"
  }
];

const $$ServicesOverview = createComponent(($$result, $$props, $$slots) => {
  const dots = ["text-brand-blue", "text-brand-red", "text-emerald-600", "text-brand-yellow"];
  return renderTemplate`${maybeRenderHead()}<section class="section-rule px-6 py-20 md:py-28"> <div class="max-w-6xl mx-auto"> <div class="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start"> <div> <p class="font-hand text-3xl text-brand-black/55">the useful bits</p> <h2 class="mt-3 text-display-sm">What we do.</h2> </div> <div class="grid gap-8"> ${SERVICES.map((service, index) => renderTemplate`<a${addAttribute(`/consulting#${service.id}`, "href")} class="group border-t border-brand-black/10 pt-8"> <h3 class="flex items-baseline gap-3 text-2xl md:text-3xl font-black"> <span${addAttribute(`${dots[index]} text-xl`, "class")} aria-hidden="true">&bull;</span> <span class="group-hover:text-brand-red transition-colors duration-200"> ${service.title} </span> </h3> <p class="mt-3 max-w-2xl text-lg md:text-xl leading-relaxed text-brand-black/65"> ${service.summary} </p> </a>`)} </div> </div> </div> </section>`;
}, "C:/Users/jzonl/Projects/stackbyte/src/components/home/ServicesOverview.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Stackbyte",
    "url": "https://stackbyte.co",
    "description": "Software consulting for small and mid-size businesses. Website design and development, custom software, cloud infrastructure, DevOps, and modernization — without the enterprise overhead.",
    "founder": {
      "@type": "Person",
      "name": "Jzon Livingston"
    },
    "areaServed": "US",
    "serviceType": [
      "Website Design and Development",
      "Custom Software Development",
      "Website Design and Development",
      "Legacy Modernization",
      "Cloud Infrastructure",
      "DevOps and Platform Engineering"
    ],
    "knowsAbout": [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "GCP",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "PostgreSQL"
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Software Consulting for Small & Mid-Size Businesses | Stackbyte", "description": "Stackbyte helps small and mid-size teams build websites, ship custom software, and scale their infrastructure — without the enterprise price tag or the enterprise nonsense.", "schema": schema }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "ServicesOverview", $$ServicesOverview, {})} ${renderComponent($$result2, "CTABanner", $$CTABanner, { "title": "Got a process held together by vibes?", "description": "Bring us the weird spreadsheet, the duct-taped workflow, or the app nobody wants to touch. We'll be normal about it.", "primaryLabel": "Let's talk", "primaryHref": "/contact", "secondaryLabel": "See services", "secondaryHref": "/consulting" })} ` })}`;
}, "C:/Users/jzonl/Projects/stackbyte/src/pages/index.astro", void 0);

const $$file = "C:/Users/jzonl/Projects/stackbyte/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
