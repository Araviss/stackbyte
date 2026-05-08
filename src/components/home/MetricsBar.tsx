import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Metric } from "../../types";

interface Props {
  metrics: Metric[];
}

interface MetricItemProps {
  metric: Metric;
  index: number;
}

function MetricItem({ metric, index }: MetricItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 py-12 px-10 border-r-2 border-brand-white/10 last:border-r-0"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
    >
      <span className="font-black leading-none text-brand-yellow" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
        {metric.value}
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-brand-white/40 mt-1">
        {metric.label}
      </span>
    </motion.div>
  );
}

export default function MetricsBar({ metrics }: Props) {
  return (
    <section className="bg-brand-black border-y-2 border-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 border-l-2 border-brand-white/10">
        {metrics.map((metric, index) => (
          <MetricItem key={metric.label} metric={metric} index={index} />
        ))}
      </div>
    </section>
  );
}
