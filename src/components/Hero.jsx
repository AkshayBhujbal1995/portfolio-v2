import { Suspense, lazy, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./Magnetic";
import Typewriter from "./Typewriter";

const ROLES = [
  "agentic AI agents",
  "real-time voice systems",
  "production RAG pipelines",
  "AI safety guardrails",
];

const AgentNetwork3D = lazy(() => import("./AgentNetwork3D"));

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { y: 24, opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] },
  },
};

function PillButton({ href, children, primary }) {
  return (
    <Magnetic strength={14} className="inline-block">
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className={`group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
          primary
            ? "bg-cyan-300 text-black hover:bg-cyan-200"
            : "border border-white/15 text-white/90 hover:border-white/30"
        }`}
      >
        {children}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 dark:bg-white/10">
          <FiArrowUpRight />
        </span>
      </a>
    </Magnetic>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} id="top" className="relative min-h-[100dvh] overflow-hidden px-4">
      {/* ambient mesh glow */}
      <motion.div
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute top-1/3 right-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/15 blur-[120px]"
      />

      <div className="absolute inset-0 opacity-70">
        <Suspense fallback={null}>
          <AgentNetwork3D />
        </Suspense>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100dvh] max-w-4xl flex-col items-center justify-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300/90 backdrop-blur"
        >
          AI Engineer · Pune, India
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-[13vw] leading-[0.95] font-semibold tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          Akshay Bhujbal
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-sm text-cyan-300/80 sm:text-base"
        >
          Building <Typewriter words={ROLES} className="text-white/90" />
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-balance text-base text-white/60 sm:text-lg"
        >
          AI Engineer working across <span className="text-white/90">agentic AI</span>,{" "}
          <span className="text-white/90">real-time voice</span>, and{" "}
          <span className="text-white/90">LLM orchestration &amp; safety</span> —
          MCP · LangGraph · RAG · Python.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <PillButton href="#projects" primary>
            View Projects
          </PillButton>
          <PillButton href="https://github.com/AkshayBhujbal1995">GitHub</PillButton>
          <PillButton href="https://www.linkedin.com/in/akshay-1995-bhujbal/">LinkedIn</PillButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.15em]"
        >
          <div>
            <div className="text-white/35">Role</div>
            <div className="mt-1 text-white/80">AI Engineer</div>
          </div>
          <div>
            <div className="text-white/35">Focus</div>
            <div className="mt-1 text-white/80">Agentic Systems &amp; LLM Orchestration</div>
          </div>
          <div>
            <div className="text-white/35">Stack</div>
            <div className="mt-1 text-white/80">MCP · LangGraph · RAG</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/30"
      >
        Scroll
      </motion.div>
    </section>
  );
}
