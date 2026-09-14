import { motion } from "framer-motion";

const GROUPS = [
  {
    title: "Open Source",
    color: "#67e8f9",
    stats: [
      { value: "29", label: "Repositories" },
      { value: "255", label: "Contributions / yr" },
      { value: "10", label: "Followers" },
    ],
  },
  {
    title: "Portfolio",
    color: "#fbbf24",
    stats: [
      { value: "8", label: "Projects Shipped" },
      { value: "6", label: "Skill Domains" },
    ],
  },
  {
    title: "Focus",
    color: "#60a5fa",
    stats: [
      { value: "3+", label: "Years Building AI" },
      { value: "1", label: "Agentic AI Specialty" },
    ],
  },
];

function Node({ value, label, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] }}
      className="flex flex-col items-center"
    >
      <div className="h-6 w-px bg-white/15" />
      <div
        className="flex h-16 w-16 flex-col items-center justify-center rounded-full border text-center"
        style={{ borderColor: `${color}55`, background: `${color}0d` }}
      >
        <span className="font-display text-lg font-semibold text-white">{value}</span>
      </div>
      <span className="mt-2 max-w-[7rem] text-center font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">
        {label}
      </span>
    </motion.div>
  );
}

function Group({ title, color, stats, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
      className="flex flex-col items-center rounded-[1.75rem] bg-white/5 p-1.5 ring-1 ring-white/5"
    >
      <div className="flex w-full flex-col items-center rounded-[calc(1.75rem-0.375rem)] bg-black/40 px-6 py-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
        <span
          className="rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em]"
          style={{ borderColor: `${color}55`, color }}
        >
          {title}
        </span>
        <div className="mt-2 h-6 w-px bg-white/15" />
        <div className="h-px w-2/3 bg-white/10" />
        <div className="flex flex-wrap items-start justify-center gap-6">
          {stats.map((s, i) => (
            <Node key={s.label} {...s} color={color} delay={0.1 + i * 0.08} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ImpactStats() {
  return (
    <section className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 block rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50 w-max"
        >
          By the numbers
        </motion.span>
        <motion.h2
          initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
        >
          Proof, not promises.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Group key={g.title} {...g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
