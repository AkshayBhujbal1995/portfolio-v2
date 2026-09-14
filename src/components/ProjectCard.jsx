import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project, index, featured }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), springConfig);
  const glowX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glowY = useTransform(mouseY, (v) => `${v * 100}%`);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(280px circle at ${gx} ${gy}, rgba(52,229,168,0.12), transparent 70%)`
  );

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      initial={{ y: 36, opacity: 0, filter: "blur(6px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.32, 0.72, 0, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -4 }}
      className={`group relative block rounded-[1.75rem] bg-white/5 p-1.5 ring-1 ring-white/5 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative h-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] bg-black/40 p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-colors duration-700 group-hover:bg-black/30">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />

        <div className="relative flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-emerald-300/80">
            {project.tier}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-emerald-300 group-hover:text-black">
            <FiArrowUpRight />
          </span>
        </div>

        <h3 className="relative mt-5 font-display text-xl font-semibold text-white/95">{project.title}</h3>
        <p className="relative mt-3 text-sm leading-relaxed text-white/55">{project.description}</p>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-white/45">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
