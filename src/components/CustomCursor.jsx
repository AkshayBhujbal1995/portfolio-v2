import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SELECTOR = "a, button, [data-cursor-hover]";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 22 });
  const ringY = useSpring(y, { stiffness: 260, damping: 22 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest(HOVER_SELECTOR);
      setHovering(Boolean(target));
    };
    window.addEventListener("pointermove", move);
    document.documentElement.classList.add("has-custom-cursor");
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-cyan-300"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-cyan-300/60"
        animate={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          opacity: hovering ? 0.9 : 0.5,
          backgroundColor: hovering ? "rgba(103,232,249,0.08)" : "rgba(103,232,249,0)",
        }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}
