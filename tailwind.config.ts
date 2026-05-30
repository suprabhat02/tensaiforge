import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // SEO/PERF: All four utility classes now resolve to Space Grotesk as the
        // primary typeface, preserving the design system. JetBrains Mono is the
        // explicit fallback for `font-mono` elements only; system stacks are
        // last-resort for all other classes.
        //
        // `sans` is overridden so that any `font-sans` usage (e.g. world-map.tsx)
        // also resolves to Space Grotesk instead of system UI fonts.
        // All four classes resolve directly to var(--font-display) = Space Grotesk.
        // Previously `body` used var(--font-body) which was aliased to
        // var(--font-display) in :root CSS — but :root never has --font-display set
        // (next/font sets it on <body> only), so the alias silently failed and fell
        // through to system fonts. Pointing every class straight at var(--font-display)
        // eliminates that broken chain entirely.
        sans: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        mono: [
          "var(--font-display)",
          "var(--font-mono)",
          ...defaultTheme.fontFamily.mono,
        ],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        forge: {
          50: "#fff5f5",
          100: "#ffe0e0",
          200: "#ffbaba",
          300: "#ff8a8a",
          400: "#ff4d4d",
          500: "#F90404",
          600: "#d90000",
          700: "#b30000",
          800: "#8c0000",
          900: "#660000",
          950: "#400000",
        },
        neon: {
          red: "#F90404",
          orange: "#ff4d2a",
          crimson: "#b30000",
        },
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(249,4,4,0.15)",
        glow: "0 0 30px rgba(249,4,4,0.2)",
        "glow-lg": "0 0 60px rgba(249,4,4,0.25)",
        "glow-red": "0 0 30px rgba(249,4,4,0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        aurora: {
          "from, to": { backgroundPosition: "50% 50%, 350% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "spin-slow": "spin-slow 8s linear infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        scroll: "scroll var(--animation-duration, 40s) linear infinite",
        shimmer: "shimmer 2s linear infinite",
        aurora: "aurora 60s linear infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
