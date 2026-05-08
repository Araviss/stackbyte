import { c as createComponent } from './astro-component_Cz4TCFgv.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_DX6Gg_yC.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CnTYIeYZ.mjs';
import { $ as $$CTABanner } from './CTABanner_DadOEDy1.mjs';

const ENGAGEMENT_MODELS = [
  {
    title: "Fixed-Scope Build",
    tagline: "Scoped. Priced. Done.",
    description: "We agree on what gets built, what it costs, and when it ships before we write a line of production code.",
    bestFor: "Defined builds, migrations, modernization projects"
  },
  {
    title: "Workflow Cleanup",
    tagline: "Find the mess. Fix the drag.",
    description: "We map the brittle process, identify the highest-leverage fixes, and turn the worst handoffs into simpler tools or automations.",
    bestFor: "Manual processes, spreadsheet sprawl, fragile operations"
  },
  {
    title: "Technical Advisory",
    tagline: "Senior judgment, clearly applied.",
    description: "Architecture decisions, vendor evaluations, code reviews, build-versus-buy calls, and honest technical guidance.",
    bestFor: "Founders, growing teams, technical decision support"
  }
];
const PROCESS_STEPS = [
  {
    number: "1",
    title: "We listen first.",
    description: "Tell us what is broken, slow, confusing, or half-built. Good questions here save everyone time later."
  },
  {
    number: "2",
    title: "We make a plan.",
    description: "Architecture, timeline, cost, risks - all visible before the build starts. If something does not add up, we say so."
  },
  {
    number: "3",
    title: "We build it.",
    description: "Iterative, transparent, and boring in the best possible way. You see progress, tradeoffs, and decisions as they happen."
  },
  {
    number: "4",
    title: "We hand it off clean.",
    description: "Documentation, knowledge transfer, and a sane landing. Launch should not feel like being pushed out of a moving vehicle."
  }
];

const $$Consulting = createComponent(($$result, $$props, $$slots) => {
  const symptomAccents = ["bg-brand-blue", "bg-brand-red", "bg-emerald-600", "bg-brand-yellow"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Consulting", "description": "Stackbyte consulting services: website development, custom software, cloud infrastructure, DevOps, and modernization for small and mid-size businesses." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 py-16 md:py-24"> <div class="mx-auto max-w-6xl"> <div class="mx-auto max-w-4xl text-center"> <h1 class="mt-5 text-[clamp(3.25rem,7vw,7rem)] font-black leading-[0.9] tracking-normal">
Untangle the system without rebuilding the company.
</h1> <p class="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-brand-black/65">
Modernization, custom software, cloud work, and platform cleanup for
          teams that need senior engineering without the slow dance of enterprise
          consulting.
</p> </div> <div class="mx-auto mt-12 max-w-5xl border-y border-brand-black/10 py-8"> <p class="text-center font-hand text-3xl text-brand-black/55">
if this sounds familiar
</p> ${[
    "The spreadsheet became infrastructure.",
    "Only one person knows deploy day.",
    "The old app is important and grumpy.",
    "The process works, but only with folklore."
  ].map((symptom, index) => renderTemplate`<div class="mt-5 flex items-center gap-4 border-t border-brand-black/10 pt-5 first:border-t-0 first:pt-0 md:mx-auto md:max-w-3xl"> <span${addAttribute(`h-3 w-3 shrink-0 rounded-full ${symptomAccents[index]}`, "class")} aria-hidden="true"></span> <p class="text-xl font-black leading-snug text-brand-black/80">${symptom}</p> </div>`)} </div> </div> </section> <section class="section-rule px-6 py-20 md:py-28"> <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"> <div> <p class="font-hand text-3xl text-brand-black/55">how to hire us</p> <h2 class="mt-3 text-display-sm">Work formats.</h2> <p class="mt-5 max-w-sm text-lg leading-relaxed text-brand-black/60">
Different problems need different shapes. We keep the scope clear,
          the handoff clean, and the work tied to a real outcome.
</p> </div> <div class="grid gap-6 md:grid-cols-3"> ${ENGAGEMENT_MODELS.map((model) => renderTemplate`<article class="border-t border-brand-black/10 pt-6"> <h3 class="text-2xl font-black">${model.title}</h3> <p class="mt-1 font-hand text-2xl text-brand-red">${model.tagline}</p> <p class="mt-4 leading-relaxed text-brand-black/60">${model.description}</p> </article>`)} </div> </div> </section> <section class="section-rule px-6 py-20 md:py-28"> <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"> <div> <p class="font-hand text-3xl text-brand-black/55">the process</p> <h2 class="mt-3 text-display-sm">How it goes.</h2> </div> <div class="grid gap-8 md:grid-cols-2"> ${PROCESS_STEPS.map((step) => renderTemplate`<article class="grid grid-cols-[3rem_1fr] gap-5 border-t border-brand-black/10 pt-6"> <span class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow/30 font-hand text-3xl leading-none text-brand-black/70"> ${step.number} </span> <div> <h3 class="text-2xl font-black">${step.title}</h3> <p class="mt-3 leading-relaxed text-brand-black/60">${step.description}</p> </div> </article>`)} </div> </div> </section> ${renderComponent($$result2, "CTABanner", $$CTABanner, { "title": "Ready to make the weird thing less weird?", "description": "Tell us what you are dealing with. We will tell you what is worth fixing first.", "primaryLabel": "Let's talk", "primaryHref": "/contact", "secondaryLabel": "Meet Stackbyte", "secondaryHref": "/about" })} ` })}`;
}, "C:/Users/jzonl/Projects/stackbyte/src/pages/consulting.astro", void 0);

const $$file = "C:/Users/jzonl/Projects/stackbyte/src/pages/consulting.astro";
const $$url = "/consulting";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Consulting,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
