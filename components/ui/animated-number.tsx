"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedNumberProps = Readonly<{
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}>;

export function AnimatedNumber({
  value,
  suffix = "",
  duration = 2,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced =
    typeof globalThis !== "undefined" && "matchMedia" in globalThis
      ? globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
    duration: duration,
  });
  const display = useTransform(spring, (v) =>
    Math.round(v).toLocaleString("en-US"),
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  if (prefersReduced) {
    return (
      <span ref={ref} className={className}>
        {value.toLocaleString("en-US")}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
