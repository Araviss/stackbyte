import { c as createComponent } from './astro-component_Cz4TCFgv.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_DX6Gg_yC.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CnTYIeYZ.mjs';
import { $ as $$CTABanner } from './CTABanner_DadOEDy1.mjs';

const STORY = {
  body: [
    "I'm Jzon. I've spent years building software at enterprise scale — distributed systems, cloud infrastructure, the kind of projects that take a year to plan and another to ship. Good work, but a lot of process wrapped around it.",
    "Small and mid-size businesses have the same problems — brittle workflows, software that made sense in 2012, manual processes held together by tribal knowledge — without the departments to throw at them. Usually it's a spreadsheet, a deadline, and one person quietly becoming load-bearing.",
    "Stackbyte exists to close that gap. You get serious engineering without the six-month procurement process, the 200-page statement of work, or the consultant who vanishes after launch.",
    "We roll different because we have to. And honestly, because it is more fun this way."
  ]
};
const VALUES = [
  {
    title: "Straight talk, always.",
    description: "If something is going to be a problem, you hear it from us first. Early uncomfortable conversations beat late expensive ones.",
    icon: "MessageSquare"
  },
  {
    title: "Craft over shortcuts.",
    description: "We write code we would be comfortable maintaining later. Tests, documentation, clean architecture - not for show, but because shortcuts compound.",
    icon: "Hammer"
  },
  {
    title: "Outcomes, not outputs.",
    description: "Features are not the point. The point is your business running better than it did before we showed up.",
    icon: "TrendingUp"
  },
  {
    title: "We stay curious.",
    description: "The stack moves fast. We keep up because clients benefit from it, and because being bored is a terrible way to build software.",
    icon: "BookOpen"
  }
];
const TEAM_MEMBERS = [
  {
    name: "Jzon Livingston",
    role: "Founder & Lead Engineer",
    bio: "Built software at enterprise scale across government and private sector. Now applies that same level of engineering to businesses that actually need it — without all the bureaucracy.",
    linkedIn: "#"
  }
];

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About", "description": "Meet Stackbyte: senior software engineering for small and mid-size businesses, without the ceremony." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 py-16 md:py-24"> <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center"> <div class="order-2 lg:order-1 lg:-rotate-2"> <div class="border border-brand-black/10 bg-brand-white p-6 shadow-[18px_18px_0_0_rgba(255,90,95,0.14)]"> <p class="font-hand text-3xl text-brand-red">the short version</p> <p class="mt-6 text-3xl font-black leading-tight md:text-4xl">
Serious engineering, minus the ceremony.
</p> <p class="mt-5 text-lg leading-relaxed text-brand-black/60">
Stackbyte is built for teams that need senior help, clear scopes, and
            software that can survive real business weather.
</p> </div> </div> <div class="order-1 text-right lg:order-2 lg:pl-8"> <h1 class="ml-auto mt-5 max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.9] tracking-normal">
Small-shop manners. Big-system instincts.
</h1> </div> </div> </section> <section class="section-rule px-6 py-20 md:py-28"> <div class="max-w-6xl mx-auto grid gap-10 md:grid-cols-[0.8fr_1.2fr]"> <div> <p class="font-hand text-3xl text-brand-black/55">the premise</p> <figure class="mt-8 max-w-sm -rotate-2 border border-brand-black/10 bg-brand-white p-3 shadow-[16px_16px_0_0_rgba(243,199,51,0.24)]"> <img src="/images/jzon-livingston.jpg" alt="Jzon Livingston seated at a table" width="3024" height="4032" class="aspect-[4/5] w-full object-cover object-[50%_38%]" loading="lazy"> </figure> </div> <div class="grid gap-7"> ${TEAM_MEMBERS.map((member) => renderTemplate`<div class="border-t border-brand-black/10 pt-8"> <h2 class="text-3xl font-black">${member.name}</h2> <p class="mt-1 font-hand text-3xl text-brand-red">${member.role}</p> </div>`)} <div class="grid gap-7 text-xl leading-relaxed text-brand-black/70"> ${STORY.body.map((paragraph) => renderTemplate`<p>${paragraph}</p>`)} </div> </div> </div> </section> <section class="section-rule px-6 py-20 md:py-28"> <div class="max-w-6xl mx-auto grid gap-10 md:grid-cols-[0.8fr_1.2fr]"> <div> <p class="font-hand text-3xl text-brand-black/55">how we behave</p> <h2 class="mt-3 text-display-sm">Simple rules.</h2> </div> <div class="grid gap-x-10 gap-y-10 md:grid-cols-2"> ${VALUES.map((value) => renderTemplate`<div class="border-t border-brand-black/10 pt-6"> <h3 class="text-2xl font-black">${value.title}</h3> <p class="mt-3 leading-relaxed text-brand-black/60">${value.description}</p> </div>`)} </div> </div> </section> ${renderComponent($$result2, "CTABanner", $$CTABanner, { "title": "Sound like your kind of weird?", "description": "Excellent. We also enjoy clear scopes, clean handoffs, and software that does not require folklore to operate.", "primaryLabel": "Let's talk", "primaryHref": "/contact", "secondaryLabel": "See services", "secondaryHref": "/consulting" })} ` })}`;
}, "C:/Users/jzonl/Projects/stackbyte/src/pages/about.astro", void 0);

const $$file = "C:/Users/jzonl/Projects/stackbyte/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
