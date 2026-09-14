import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

function useClock(timeZone) {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time.toLocaleTimeString("en-GB", { timeZone, hour12: false });
}

function usePointer() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return pos;
}

export default function Hud() {
  const puneTime = useClock("Asia/Kolkata");
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const pointer = usePointer();

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setProgress(Math.round(v * 100)));
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="pointer-events-none fixed bottom-6 left-6 z-30 hidden select-none flex-col gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 md:flex"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
          </span>
          Systems online
        </div>
        <div>Pune · {puneTime} IST</div>
        <div>Scroll {String(progress).padStart(2, "0")}%</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="pointer-events-none fixed bottom-6 right-6 z-30 hidden select-none flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 md:flex"
      >
        <div>X {pointer.x.toFixed(4)}</div>
        <div>Y {pointer.y.toFixed(4)}</div>
      </motion.div>
    </>
  );
}
