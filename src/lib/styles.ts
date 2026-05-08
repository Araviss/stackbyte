/**
 * Shared Tailwind class maps.
 * Use these instead of repeating class strings across components.
 */

export const buttonVariants = {
  primary:
    "inline-flex items-center justify-center bg-brand-yellow text-brand-black font-bold px-6 py-3 rounded-none border-2 border-brand-black hover:bg-brand-red hover:text-brand-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black",
  secondary:
    "inline-flex items-center justify-center bg-transparent text-brand-black font-bold px-6 py-3 rounded-none border-2 border-brand-black hover:bg-brand-black hover:text-brand-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black",
} as const;

export const headingVariants = {
  display: "font-black text-5xl md:text-7xl leading-none tracking-tight",
  h1: "font-black text-4xl md:text-6xl leading-none tracking-tight",
  h2: "font-black text-3xl md:text-5xl leading-tight",
  h3: "font-bold text-2xl md:text-3xl leading-snug",
  h4: "font-bold text-xl leading-snug",
} as const;

export const sectionVariants = {
  default: "py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto",
  full: "py-20 md:py-28 px-6 md:px-12",
  tight: "py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type HeadingVariant = keyof typeof headingVariants;
export type SectionVariant = keyof typeof sectionVariants;
