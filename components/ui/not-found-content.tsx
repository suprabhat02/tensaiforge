/**
 * SEO-FIX: Extracted from app/not-found.tsx.
 *
 * app/not-found.tsx must be a Server Component to export `metadata` with
 * robots: { index: false } — which prevents Google from indexing 404 pages.
 * All client-side animation logic lives here so the page stays "use client".
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_UP, EASE_OUT_EXPO } from "@/lib/animations";

export function NotFoundContent() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse-slow [animation-delay:1s]" />
        <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[80px] animate-pulse-slow [animation-delay:2s]" />
      </div>

      <div className="bg-grid absolute inset-0 opacity-50" />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.p
          variants={FADE_UP}
          className="text-[8rem] font-bold leading-none text-gradient-forge sm:text-[12rem]"
        >
          404
        </motion.p>

        <motion.h1
          variants={FADE_UP}
          className="text-2xl font-bold text-foreground sm:text-3xl"
        >
          Page Not Found
        </motion.h1>

        <motion.p variants={FADE_UP} className="max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div variants={FADE_UP} transition={EASE_OUT_EXPO}>
          <Link
            href="/"
            className="btn-primary mt-4 inline-flex items-center gap-2"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
