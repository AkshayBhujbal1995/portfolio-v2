import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 md:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 block rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50 w-max"
        >
          Toolkit
        </motion.span>
        <motion.h2
          initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
        >
          Production AI &amp; MLOps stack
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ y: 32, opacity: 0, filter: "blur(6px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className="rounded-[1.75rem] bg-white/5 p-1.5 ring-1 ring-white/5"
            >
              <div className="h-full rounded-[calc(1.75rem-0.375rem)] bg-black/40 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                <h3 className="font-display text-sm font-semibold text-white/90">{cat.title}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-cyan-300/60">
                  {cat.context}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/60 transition-colors duration-500 hover:border-cyan-300/40 hover:text-cyan-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
