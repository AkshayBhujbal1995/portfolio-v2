import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Magnetic from "./Magnetic";

const links = [
  { label: "GitHub", href: "https://github.com/AkshayBhujbal1995", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshay-1995-bhujbal/", icon: FiLinkedin },
  { label: "Email", href: "mailto:akshaybhujbal.ai@gmail.com", icon: FiMail },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 md:py-40">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50"
        >
          Get in touch
        </motion.span>

        <motion.h2
          initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="font-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl"
        >
          Let's talk AI systems.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mx-auto mt-4 max-w-md text-white/55"
        >
          Based in Pune, India — reachable anywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {links.map(({ label, href, icon: Icon }) => (
            <Magnetic key={label} strength={12} className="inline-block">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 pl-5 pr-2 py-2 text-sm text-white/85 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-cyan-300/40 active:scale-[0.98]"
              >
                <Icon className="text-white/60" />
                {label}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <FiArrowUpRight className="text-xs" />
                </span>
              </a>
            </Magnetic>
          ))}
        </motion.div>
      </div>

      <div className="mt-32 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-8 text-xs text-white/30 sm:flex-row">
        <span>© {new Date().getFullYear()} Akshay Bhujbal</span>
        <span className="font-mono">Built with React · Three.js · Framer Motion</span>
      </div>
    </section>
  );
}
