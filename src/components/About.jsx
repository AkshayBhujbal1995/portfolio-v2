import { motion } from "framer-motion";

const points = [
  {
    label: "Expertise",
    text: "Real-time voice pipelines (LiveKit/WebRTC), multi-agent orchestration (MCP, LangChain), and RAG architectures — engineered for low-latency, production-scale use, not just prototypes.",
  },
  {
    label: "Focus",
    text: "AI safety in agentic systems — guardrails and prompt-injection defense — so autonomous agents stay reliable in production, not just in demos.",
  },
  {
    label: "Passion",
    text: "Building autonomous agents that reason, plan, and act to automate real enterprise workflows end to end.",
  },
  {
    label: "Currently deepening",
    text: "Docker, CI/CD, and infrastructure automation — taking AI systems from prototype to reliably operated production services.",
  },
];

const fadeUp = {
  hidden: { y: 40, opacity: 0, filter: "blur(6px)" },
  show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 block rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50 w-max"
        >
          About
        </motion.span>

        <motion.h2
          initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl md:max-w-3xl"
        >
          I build production AI systems that run real businesses — not demos.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {points.map((p, i) => (
            <motion.div
              key={p.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-[1.75rem] bg-white/5 p-1.5 ring-1 ring-white/5"
            >
              <div className="rounded-[calc(1.75rem-0.375rem)] bg-black/40 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                <div className="mb-3 font-display text-xs uppercase tracking-[0.2em] text-emerald-300/80">
                  {p.label}
                </div>
                <p className="text-sm leading-relaxed text-white/65">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
