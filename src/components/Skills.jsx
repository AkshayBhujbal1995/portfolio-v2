import { motion } from "framer-motion";
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiOpencv,
  SiDocker,
  SiPostgresql,
  SiNginx,
  SiFastapi,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiHuggingface,
  SiGithubactions,
} from "react-icons/si";
import { FiCpu, FiCode, FiDatabase } from "react-icons/fi";
import { skillCategories } from "../data/skills";

const ICONS = {
  python: SiPython,
  pandas: SiPandas,
  numpy: SiNumpy,
  sklearn: SiScikitlearn,
  tensorflow: SiTensorflow,
  keras: SiKeras,
  pytorch: SiPytorch,
  opencv: SiOpencv,
  docker: SiDocker,
  postgresql: SiPostgresql,
  nginx: SiNginx,
  fastapi: SiFastapi,
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  huggingface: SiHuggingface,
  githubactions: SiGithubactions,
  sql: FiDatabase,
  api: FiCode,
  agent: FiCpu,
};

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
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {cat.items.map((skill) => {
                    const Icon = ICONS[skill.icon] ?? FiCpu;
                    return (
                      <span
                        key={skill.name}
                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2.5 pr-3.5 font-mono text-[11px] text-white/70 transition-all duration-500 hover:border-cyan-300/40 hover:bg-white/[0.06] hover:text-cyan-200"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors duration-500 group-hover:bg-cyan-300/15 group-hover:text-cyan-200">
                          <Icon size={13} />
                        </span>
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
