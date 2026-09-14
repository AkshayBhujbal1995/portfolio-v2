import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DOTS = Array.from({ length: 7 }, (_, i) => i);

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let raf;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setProgress(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
        >
          <div className="relative flex h-16 w-16 items-center justify-center">
            {DOTS.map((i) => {
              const angle = (i / DOTS.length) * Math.PI * 2;
              return (
                <motion.span
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{
                    x: Math.cos(angle) * 26,
                    y: Math.sin(angle) * 26,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.05,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                />
              );
            })}
            <motion.span
              className="absolute h-2 w-2 rounded-full bg-amber-400"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-8 font-mono text-xs tracking-[0.3em] text-white/40">
            {String(progress).padStart(3, "0")}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
