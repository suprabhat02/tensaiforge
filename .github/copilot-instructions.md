# TENSAIFORGE — Copilot Instructions

> Every response must satisfy **all** checklists below. Non-negotiable.

---

## Stack & Project Layout

- **Framework**: Next.js 16 (App Router, TypeScript strict mode, no `src/`)
- **Styling**: Tailwind CSS v3 via `tailwind.config.ts` — never inline `style=` except for dynamic CSS custom properties
- **Animation**: Framer Motion (`framer-motion`) — import from `"framer-motion"`, never `"motion/react"`
- **Fonts**: Space Grotesk → `--font-display` + `--font-body`; JetBrains Mono → `--font-mono`
- **Brand color**: `#F90404` (HSL `0 97% 49%`) — the `forge` Tailwind scale and `--neon-red` CSS variable
- **Import alias**: `@/*` maps to project root
- **Key paths**:
  - `components/sections/` — one folder per page section
  - `components/ui/` — reusable primitives (Aceternity + custom)
  - `lib/animations.ts` — shared Framer Motion `Variants` (`FADE_UP`, `FADE_LEFT`, `FADE_RIGHT`, `SCALE_IN`, etc.)
  - `styles/globals.css` — CSS variables, `.forge-card`, `.section-x`, `.section-y`, `.text-gradient-forge`, `.btn-primary`
  - `lib/constants.ts` — site-wide data (`SERVICES`, `BENTO_FEATURES`, `TESTIMONIALS`, etc.)

---

## Animation — Framer Motion Rules

- **Always** use `<AnimateIn>` (`components/ui/animate-in.tsx`) for scroll-triggered section reveals.
  - It uses `whileInView` + `viewport={{ once: true, margin: "0px 0px -60px 0px" }}` — do **not** replace this with `useInView` + `motion.create(Tag)` inside render, that pattern breaks the ref.
- Use `FADE_UP` (default), `FADE_LEFT`, `FADE_RIGHT`, `SCALE_IN` from `lib/animations.ts`. Never hardcode variant objects inline unless they are unique one-offs.
- Stagger children with `delay={index * 0.08}` when mapping card grids.
- Interactive hover states: use `whileHover={{ scale: 1.02 }}` or Tailwind `group-hover:` — pick one approach per component, don't mix both.
- Never animate `width`, `height`, or `layout` properties without `layout` prop — it causes layout thrash.
- Keep `duration` ≤ 0.7s; easing `[0.16, 1, 0.3, 1]` (expo-out) for reveals, `[0.4, 0, 0.2, 1]` (ease-in-out) for transitions.

---

## Aceternity UI Integration

When a prompt mentions Aceternity UI or a specific component name:

1. **Always fetch the registry JSON first**: `https://ui.aceternity.com/registry/<component-slug>.json`
2. Adapt imports: replace `"motion/react"` → `"framer-motion"`, replace `"clsx"` → `cn` from `@/lib/utils`
3. Recolor: replace cyan/violet/purple default gradients with the `#F90404` brand palette
4. **Free tier components available** (fetch before using): `glowing-effect`, `timeline`, `tracing-beam`, `card-hover-effect`, `infinite-moving-cards`, `moving-border`, `background-beams`, `wavy-background`, `sparkles`, `3d-card-effect`, `bento-grid`, `hero-parallax`, `text-generate-effect`, `aurora-background`, `lamp-effect`, `parallax-scroll`, `floating-dock`, `animated-tooltip`, `background-gradient-animation`
5. Place the component file in `components/ui/` — one file per component
6. Wrap with `<AnimateIn>` at the section level; do **not** add `whileInView` inside the Aceternity component itself

---

## Design System — Always Follow

### Colors

```
Brand red:    #F90404  (Tailwind: forge-500, CSS: --neon-red)
Hover/accent: #ff4d2a  (forge-400)
Deep:         #dc2626  (forge-600)
Background:   hsl(var(--background))
Card:         hsl(var(--card))
Border:       hsl(var(--border))
Muted text:   hsl(var(--muted-foreground))
```

- Use `text-gradient-forge` class for gradient headings
- Use `forge-card` class for card base styles
- Use `btn-primary` for primary CTAs, `btn-ghost` for secondary
- Use `section-x` + `section-y` on every `<section>` for consistent spacing

### Typography

```
Display/headings:  font-display (Space Grotesk) — use font-bold, tracking-tight
Body:              font-body (Space Grotesk) — use text-muted-foreground
Mono/code:         font-mono (JetBrains Mono)
Section labels:    <SectionLabel> component — never raw text
```

- Heading scale: `text-4xl lg:text-5xl` for H2, `text-xl` for H3 cards
- Never use `font-sans` — the design system overrides it; use `font-display` or `font-body`

### Spacing

- Sections: always `className="section-x section-y relative"` (or `overflow-hidden` added when needed)
- Max content width: `max-w-screen-xl` with `mx-auto`
- Card gaps: `gap-4` standard, `gap-6` for large grids
- Internal card padding: `p-6 lg:p-8`

---

## Responsiveness — Non-Negotiable

Every component must work at: `320px` (mobile) · `768px` (tablet) · `1280px` (desktop) · `1536px` (2xl)

- Mobile-first: default classes are mobile, then `md:` and `lg:` override
- Grid patterns:
  - 1 column mobile → 2 columns md → 3 columns lg (standard card grid)
  - Side-by-side sections: `flex flex-col lg:flex-row` with `flex-1` on both children
- Images: always use `next/image` with `width`, `height`, and `alt`; remote images need `remotePatterns` in `next.config.ts` (Unsplash already added)
- Touch targets: min `h-10 w-10` for interactive elements
- Never use fixed `px` widths for container elements — use `%`, `max-w-*`, or `w-full`
- Text never truncates unexpectedly — use `break-words` or `min-w-0` in flex children

---

## Accessibility (WCAG 2.1 AA)

- Every `<section>` must have `aria-labelledby` pointing to its `<h2 id="...">`
- Every icon-only button must have `aria-label`
- All `<img>` tags must have descriptive `alt` text; decorative images use `alt=""`
- Minimum contrast ratio 4.5:1 for normal text, 3:1 for large text
  - White text on `#F90404` passes AA for large text; for small body text use `#ff4d2a` on dark backgrounds or white text with opacity ≥ 90%
- Focus ring: `focus:outline-none focus:ring-1 focus:ring-red-400` on all interactive elements
- Keyboard navigable: carousels, modals, and dropdowns must handle `Tab` + `Escape`
- Never `aria-hidden` content that is the only source of information
- Use `<AnimateIn>` with `once={true}` by default — respect prefers-reduced-motion (Framer Motion handles this automatically via its global reduced-motion detection)

---

## Core Web Vitals

- **LCP**: Hero images must use `<Image priority />`. Avoid render-blocking third-party scripts.
- **CLS**: All images and embeds must have explicit `width` + `height` or aspect-ratio. Avoid inserting DOM nodes above existing content.
- **INP**: No synchronous heavy work on the main thread. Expensive computations go in `useEffect` or Web Workers. Three.js globe must stay `dynamic` import with `{ ssr: false }`.
- **TTFB**: Prefer static generation (`"use client"` only where interactivity requires it). Server components are default.
- Use `loading="lazy"` on below-the-fold `<img>` tags; `<Image>` handles this automatically.
- Avoid large Framer Motion `layout` animations — they force expensive reflows.

---

## SEO

- Every section heading is an `<h2>` — only one `<h1>` per page (in Hero)
- `<SectionLabel>` renders as `<p>` — never a heading tag
- Structured data lives in `app/layout.tsx` via `<script type="application/ld+json">`
- `next/image` with `alt` text on every meaningful image
- `robots.txt` and `sitemap.xml` are auto-generated routes — do not hardcode them
- Page `<title>` and `<meta description>` are managed via `BASE_METADATA` in `lib/seo.ts`
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` — never use `<div>` when a semantic element fits

---

## Security

- All form inputs validated with Zod at both client (react-hook-form + zodResolver) and server (`"use server"` actions)
- No `dangerouslySetInnerHTML` except for structured data JSON-LD (already locked down in layout)
- Never log or expose PII in client components
- External URLs in `<a>` tags must have `rel="noopener noreferrer"` when `target="_blank"`
- No `eval()`, `Function()`, or dynamic `import()` with user-controlled strings

---

## TypeScript Rules

- Strict mode is on — no `any`, no `@ts-ignore` without a comment explaining why
- Component props: define a named `type` or `interface` above the component — never inline complex types
- Arrays indexed at runtime must use optional chaining or non-null assertion with a comment
- `motion.create(Tag)` inside a render function is **banned** — it creates a new component type every render and breaks refs
- Prefer `const` assertions (`as const`) for data arrays that serve as the source of truth

---

## File & Component Conventions

- **Sections**: named export `function XxxSection()`, file `components/sections/xxx/xxx-section.tsx`, `"use client"` only if needed
- **UI primitives**: named export, file `components/ui/xxx.tsx`, `"use client"` always (they're interactive)
- **Never** import from `components/sections/` inside another section — share data via `lib/constants.ts`
- **Build before shipping**: run `npm run build` and confirm zero TypeScript errors and zero page failures
- One component per file. No barrel `index.ts` files.

---

## Pre-Commit Checklist

Before finalizing any change, verify:

- [ ] `npm run build` passes with zero errors
- [ ] All new sections use `section-x section-y` spacing classes
- [ ] All animated elements use `<AnimateIn>` with `whileInView` (never `animate={isInView ? ...}` pattern)
- [ ] No hardcoded color hex values in JSX — use Tailwind classes or CSS variables
- [ ] Every interactive element has an `aria-label` if it has no visible text
- [ ] Images use `next/image` with `width` + `height` + `alt`
- [ ] New Aceternity components have brand colors applied (no default cyan/violet)
- [ ] `"use client"` is only present where state, effects, or browser APIs are used
- [ ] No `motion.create()` called inside a render function
- [ ] TypeScript strict — no `any`, no suppressed errors without comment
