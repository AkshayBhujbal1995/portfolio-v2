import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, moreProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 block rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50 w-max"
        >
          Projects · ranked by AI depth
        </motion.span>
        <motion.h2
          initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
        >
          Featured work
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} featured={i === 0} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mt-20"
        >
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-white/40">
            More on GitHub
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {moreProjects.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/55 transition-colors duration-500 hover:border-white/25 hover:text-white/90"
              >
                {p.title}
                <FiArrowUpRight className="text-white/30 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
