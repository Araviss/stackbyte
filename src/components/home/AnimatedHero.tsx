import { motion } from "framer-motion";

/**
 * Decorative background blobs for the hero section.
 * Rendered as a React island so animation only runs client-side.
 */
export default function AnimatedHero() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-yellow/20"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full bg-brand-blue/15"
        animate={{ scale: [1, 1.05, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-brand-red/10"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
