import { c as createComponent } from './astro-component_Cz4TCFgv.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, h as addAttribute } from './entrypoint_DX6Gg_yC.mjs';
import 'clsx';

const $$CTABanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CTABanner;
  const { title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section-rule px-6 py-24 md:py-32"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-display-sm">${title}</h2> ${description && renderTemplate`<p class="font-hand mx-auto mt-5 max-w-2xl text-3xl md:text-4xl leading-tight text-brand-black/65"> ${description} </p>`} <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"> <a${addAttribute(primaryHref, "href")} class="inline-flex items-center justify-center bg-brand-black px-8 py-4 font-black text-brand-white hover:bg-brand-red transition-colors duration-200"> ${primaryLabel} </a> ${secondaryLabel && secondaryHref && renderTemplate`<a${addAttribute(secondaryHref, "href")} class="inline-flex items-center justify-center px-8 py-4 font-bold text-brand-black/65 hover:text-brand-blue transition-colors duration-200"> ${secondaryLabel} </a>`} </div> </div> </section>`;
}, "C:/Users/jzonl/Projects/stackbyte/src/components/shared/CTABanner.astro", void 0);

export { $$CTABanner as $ };
