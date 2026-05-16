"use client";

import { motion, type Variants } from "framer-motion";
import { FADE_UP } from "@/lib/animations";

type AnimateInProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}>;

export function AnimateIn({
  children,
  className,
  variants = FADE_UP,
  delay = 0,
  once = true,
}: AnimateInProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
