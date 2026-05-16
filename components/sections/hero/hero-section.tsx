"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Sparkles } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";
import { FADE_UP, FADE_DOWN, EASE_OUT_EXPO } from "@/lib/animations";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80",
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&q=80",
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Dotted glow background */}
      <DottedGlowBackground
        gap={18}
        radius={1.5}
        color="rgba(255,255,255,0.15)"
        darkColor="rgba(255,255,255,0.15)"
        glowColor="rgba(249, 4, 4, 0.6)"
        darkGlowColor="rgba(249, 4, 4, 0.6)"
        opacity={0.5}
        speedMin={0.3}
        speedMax={0.8}
        speedScale={0.6}
      />

      {/* Gradient overlays for depth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5"
        aria-hidden="true"
      />

      {/* Floating radial glow orbs */}
      <div
        className="absolute left-1/4 top-1/3 h-[500px] w-[500px] animate-pulse-slow rounded-full bg-red-500/8 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-pulse-slow rounded-full bg-orange-500/6 blur-[100px]"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      {/* Parallax images */}
      <ParallaxHeroImages
        images={HERO_IMAGES}
        variant="edge-focus"
        imageClassName="w-32 h-20 sm:w-48 sm:h-32 md:w-64 md:h-44 rounded-xl opacity-20 ring-1 ring-white/5"
      />

      {/* Main content */}
      <div className="section-x relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_DOWN}
          transition={{ delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 font-mono text-xs tracking-wider text-red-400 backdrop-blur-sm">
            <Sparkles size={12} className="animate-pulse" />
            AI-First Engineering Studio
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
          </span>
        </motion.div>

        {/* H1 */}
        {/* SEO-FIX: Added id="hero-heading" so aria-labelledby on the <section>
             creates a machine-readable section identity for crawlers and AT. */}
        <motion.h1
          id="hero-heading"
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ ...EASE_OUT_EXPO, delay: 0.4 }}
          className="mt-8 font-display text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.5rem]"
        >
          <span className="block">Engineering</span>
          <span className="text-gradient-forge mt-1 block">Intelligence</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ ...EASE_OUT_EXPO, delay: 0.5 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          We build AI-powered web, mobile, cloud &amp; automation systems for
          companies that refuse to be ordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ ...EASE_OUT_EXPO, delay: 0.6 }}
          className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group btn-primary relative inline-flex items-center justify-center gap-2 overflow-hidden px-8 py-4 text-base"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project{" "}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </a>
          <a
            href="#projects"
            className="btn-ghost inline-flex items-center justify-center px-8 py-4 text-base"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ ...EASE_OUT_EXPO, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for Projects
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span>50+ Products Shipped</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Enterprise-Grade Security</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
            Scroll
          </span>
          <svg
            width="20"
            height="32"
            viewBox="0 0 20 32"
            fill="none"
            className="text-muted-foreground/40"
            aria-hidden="true"
          >
            <rect
              x="1"
              y="1"
              width="18"
              height="30"
              rx="9"
              stroke="currentColor"
              strokeWidth="1"
            />
            <motion.circle
              cx="10"
              cy="10"
              r="2.5"
              fill="currentColor"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
