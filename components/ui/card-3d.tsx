"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Card3DProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function Card3D({ children, className }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const mq = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set((y - 0.5) * -15);
    rotateY.set((x - 0.5) * 15);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        style={{
          rotateX: prefersReduced ? 0 : springRotateX,
          rotateY: prefersReduced ? 0 : springRotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}

        {/* Shimmer overlay */}
        {!prefersReduced && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              background: `radial-gradient(600px circle at 50% 50%, rgba(0,245,255,0.06), transparent 40%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
