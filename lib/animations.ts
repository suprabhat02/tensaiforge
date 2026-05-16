import type { Transition, Variants } from "framer-motion";

// ── Transitions ──────────────────────────────────────────────

export const EASE_OUT_EXPO: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export const EASE_IN_OUT: Transition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
};

export const SPRING_GENTLE: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 0.8,
};

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

// ── Directional Fades ────────────────────────────────────────

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: EASE_OUT_EXPO },
};

export const FADE_DOWN: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: EASE_OUT_EXPO },
};

export const FADE_LEFT: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: EASE_OUT_EXPO },
};

export const FADE_RIGHT: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: EASE_OUT_EXPO },
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const SCALE_IN: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: EASE_OUT_EXPO },
};

// ── Stagger Containers ───────────────────────────────────────

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const STAGGER_FAST: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

// ── Hover ────────────────────────────────────────────────────

export const HOVER_LIFT: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.01, transition: SPRING_GENTLE },
};

// ── Viewport ─────────────────────────────────────────────────

export const VIEWPORT_ONCE = { once: true, margin: "-80px" } as const;
