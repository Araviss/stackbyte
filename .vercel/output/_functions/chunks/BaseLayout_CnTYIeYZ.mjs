import { c as createComponent } from './astro-component_Cz4TCFgv.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, n as renderSlot, o as renderHead, u as unescapeHTML } from './entrypoint_DX6Gg_yC.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import 'clsx';

const SITE_NAME = "Stackbyte";
const SITE_TAGLINE = "We roll different.";
const SITE_DESCRIPTION = "Stackbyte is a software consulting firm that helps small and mid-size businesses build, scale, and fix their software — without the enterprise price tag or the enterprise nonsense.";
const SITE_URL = "https://stackbyte.co";
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Consulting", href: "/consulting" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

function MobileNav({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return /* @__PURE__ */ jsxs("div", { className: "relative z-[9999] md:hidden", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen((prev) => !prev),
        "aria-label": isOpen ? "Close menu" : "Open menu",
        "aria-expanded": isOpen,
        className: "relative z-[10000] bg-[#fbfbfa] p-2 border border-brand-black/20 hover:border-brand-red hover:text-brand-red transition-colors duration-200",
        children: isOpen ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
      }
    ),
    isOpen && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "fixed inset-0 z-[9998] min-h-dvh bg-[#fbfbfa] opacity-100 pt-20 flex flex-col",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Mobile navigation",
        children: [
          /* @__PURE__ */ jsx("nav", { className: "flex flex-col p-6 gap-2", children: links.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              onClick: close,
              className: "font-black text-2xl py-4 border-b border-brand-black/10 hover:text-brand-red transition-colors duration-200",
              children: link.label
            },
            link.href
          )) }),
          /* @__PURE__ */ jsx("div", { className: "p-6 mt-auto", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/contact",
              onClick: close,
              className: "block w-full text-center bg-brand-black text-brand-white font-bold px-6 py-4 hover:bg-brand-red transition-colors duration-200 text-lg",
              children: "Get in touch"
            }
          ) })
        ]
      }
    )
  ] });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="relative z-50 bg-brand-white/95 backdrop-blur-sm"> <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between"> <a href="/" class="flex items-center gap-3"${addAttribute(`${SITE_NAME} home`, "aria-label")}> <img src="/images/logo.svg"${addAttribute(`${SITE_NAME} logo`, "alt")} class="h-9 w-auto"> <span class="text-xl font-semibold tracking-normal lowercase">${SITE_NAME}</span> </a> <nav class="hidden md:flex items-center gap-10" aria-label="Main navigation"> ${NAV_LINKS.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`text-base font-medium transition-colors duration-200 hover:text-brand-red ${currentPath === link.href ? "text-brand-black" : "text-brand-black/75"}`, "class")}> ${link.label} </a>`)} </nav> <a href="/contact" class="hidden md:inline-flex items-center border border-brand-black/20 px-5 py-2.5 text-sm font-bold hover:border-brand-red hover:text-brand-red transition-colors duration-200">
Get in touch
</a> ${renderComponent($$result, "MobileNav", MobileNav, { "links": NAV_LINKS, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/jzonl/Projects/stackbyte/src/components/layout/MobileNav", "client:component-export": "default" })} </div> </header>`;
}, "C:/Users/jzonl/Projects/stackbyte/src/components/layout/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="section-rule px-6 py-14"> <div class="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between"> <div> <a href="/" class="inline-flex items-center gap-3"${addAttribute(`${SITE_NAME} home`, "aria-label")}> <img src="/images/logo.svg"${addAttribute(`${SITE_NAME} logo`, "alt")} class="h-12 w-auto"> <span class="flex flex-col justify-center leading-none"> <span class="text-xl font-semibold lowercase">${SITE_NAME}</span> <span class="mt-2 font-hand text-2xl leading-none text-brand-black/55"> ${SITE_TAGLINE} </span> </span> </a> </div> <nav class="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation"> ${NAV_LINKS.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="font-medium text-brand-black/60 hover:text-brand-red transition-colors duration-200"> ${link.label} </a>`)} </nav> <p class="text-sm text-brand-black/45">
&copy; ${year} ${SITE_NAME}. No mystery retainers.
</p> </div> </footer>`;
}, "C:/Users/jzonl/Projects/stackbyte/src/components/layout/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = SITE_DESCRIPTION,
    ogImage = "/images/og-default.png",
    schema
  } = Astro2.props;
  const canonicalUrl = new URL(Astro2.url.pathname, SITE_URL);
  const pageTitle = `${title} | ${SITE_NAME}`;
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="canonical"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg">', '<!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Patrick+Hand&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet"><title>', "</title>", "</head> <body> ", " <main> ", " </main> ", ' <script>\n      (() => {\n        const prefersReducedMotion = window.matchMedia(\n          "(prefers-reduced-motion: reduce)"\n        ).matches;\n\n        if (prefersReducedMotion || !("IntersectionObserver" in window)) {\n          return;\n        }\n\n        document.documentElement.classList.add("reveal-ready");\n\n        const revealItems = document.querySelectorAll("main > section, footer");\n        const observer = new IntersectionObserver(\n          (entries) => {\n            entries.forEach((entry) => {\n              if (!entry.isIntersecting) return;\n\n              entry.target.classList.add("is-visible");\n              observer.unobserve(entry.target);\n            });\n          },\n          {\n            rootMargin: "0px 0px -12% 0px",\n            threshold: 0.12,\n          }\n        );\n\n        revealItems.forEach((item, index) => {\n          item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 135)}ms`);\n          observer.observe(item);\n        });\n      })();\n    <\/script> </body> </html>'], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="canonical"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg">', '<!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Patrick+Hand&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet"><title>', "</title>", "</head> <body> ", " <main> ", " </main> ", ' <script>\n      (() => {\n        const prefersReducedMotion = window.matchMedia(\n          "(prefers-reduced-motion: reduce)"\n        ).matches;\n\n        if (prefersReducedMotion || !("IntersectionObserver" in window)) {\n          return;\n        }\n\n        document.documentElement.classList.add("reveal-ready");\n\n        const revealItems = document.querySelectorAll("main > section, footer");\n        const observer = new IntersectionObserver(\n          (entries) => {\n            entries.forEach((entry) => {\n              if (!entry.isIntersecting) return;\n\n              entry.target.classList.add("is-visible");\n              observer.unobserve(entry.target);\n            });\n          },\n          {\n            rootMargin: "0px 0px -12% 0px",\n            threshold: 0.12,\n          }\n        );\n\n        revealItems.forEach((item, index) => {\n          item.style.setProperty("--reveal-delay", \\`\\${Math.min(index * 45, 135)}ms\\`);\n          observer.observe(item);\n        });\n      })();\n    <\/script> </body> </html>'])), addAttribute(description, "content"), addAttribute(pageTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(canonicalUrl, "content"), addAttribute(pageTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(canonicalUrl, "href"), schema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))), pageTitle, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/jzonl/Projects/stackbyte/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
