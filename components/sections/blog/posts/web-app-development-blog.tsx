import Image from "next/image";
import { BlogCTABanner } from "@/components/sections/blog/blog-cta-banner";
import { BlogFAQ } from "@/components/ui/blog-faq";
import type { BlogPost } from "@/lib/blog-posts";

type Props = { post: BlogPost };

export function WebAppDevelopmentBlog({ post }: Props) {
  return (
    <div className="space-y-10">
      {/* Key Takeaways */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-3 font-display text-base font-bold uppercase tracking-widest text-red-400">
          Key Takeaways
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "Web app development costs range from $25,000 (scoped MVP) to $500,000+ (enterprise SaaS) in 2026.",
            "Architecture decisions made in week 1 can cost 10× to fix at month 6 — get the foundation right.",
            "React + Next.js + Node.js + PostgreSQL is the most proven, scalable stack for modern SaaS.",
            "Start with a modular monolith — microservices are only justified above $1M ARR or 10+ teams.",
            "AI-augmented development can deliver higher test coverage and faster iteration cycles.",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 text-[10px] font-bold">
                ✓
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Section 1 */}
      <section
        id="what-is-web-app"
        aria-labelledby="h2-what"
        className="scroll-mt-24"
      >
        <h2
          id="h2-what"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          What Is Web App Development?
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          Web app development is the process of building interactive software
          that runs in the browser — not just displaying content, but enabling
          users to take actions, manage data, collaborate, and transact. Think
          Notion, Figma, Stripe Dashboard, or your company's internal CRM.
        </p>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          The distinction from a "website" is meaningful: websites primarily
          display information; web apps process it. This distinction drives
          different engineering requirements — authentication, real-time
          updates, data persistence, role-based access, and API design all
          become first-class concerns.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "SaaS Platforms",
              eg: "Analytics dashboards, CRM, project management, billing portals",
            },
            {
              title: "Internal Tools",
              eg: "Inventory management, HR portals, compliance trackers, admin panels",
            },
            {
              title: "Marketplaces",
              eg: "Two-sided platforms connecting buyers and sellers with transaction flows",
            },
            {
              title: "E-commerce Web Apps",
              eg: "Complex configurators, B2B wholesale portals, subscription commerce",
            },
          ].map(({ title, eg }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-card/60 p-4"
            >
              <p className="mb-1 font-display text-sm font-semibold text-white">
                {title}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {eg}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="cost-breakdown"
        aria-labelledby="h2-cost"
        className="scroll-mt-24"
      >
        <h2
          id="h2-cost"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Web App Development Cost Breakdown
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Web app development cost depends on scope, team composition, and
          architecture. Here is a realistic breakdown by complexity tier — based
          on market rates in 2026.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {["Tier", "Cost Range", "Timeline", "Typical Scope"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left font-semibold text-white"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "MVP / Prototype",
                  "$25,000 – $70,000",
                  "8–16 weeks",
                  "Auth, core CRUD, basic dashboard, API",
                ],
                [
                  "Growth SaaS",
                  "$70,000 – $180,000",
                  "16–32 weeks",
                  "Multi-tenancy, billing, analytics, integrations",
                ],
                [
                  "Enterprise Platform",
                  "$180,000 – $500,000+",
                  "32–72 weeks",
                  "Complex workflows, compliance, custom reporting",
                ],
              ].map(([tier, cost, time, scope]) => (
                <tr
                  key={tier}
                  className="border-b border-white/5 hover:bg-white/3"
                >
                  <td className="px-4 py-3 font-medium text-white">{tier}</td>
                  <td className="px-4 py-3 font-mono font-semibold text-red-400">
                    {cost}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{time}</td>
                  <td className="px-4 py-3 text-muted-foreground">{scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Inline image */}
      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=75"
          alt="Developer at workstation building a React SaaS web application with multiple screens"
          width={900}
          height={500}
          className="h-56 w-full object-cover sm:h-72"
          loading="lazy"
        />
        <figcaption className="bg-card/60 px-4 py-2 text-xs text-muted-foreground">
          Modern web app development: TypeScript, React, and AI-augmented
          workflows working in harmony.
        </figcaption>
      </figure>

      {/* Section 3 */}
      <section id="types" aria-labelledby="h2-types" className="scroll-mt-24">
        <h2
          id="h2-types"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Types of Web Applications
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Not all web apps are built the same way. The rendering model you
          choose affects performance, SEO, development cost, and long-term
          scalability.
        </p>
        <ol className="space-y-4">
          {[
            {
              n: "1",
              title: "Single Page Application (SPA)",
              body: "Loads once, updates dynamically without full page reloads. Best for highly interactive dashboards and tools where SEO is not a priority (internal apps, authenticated portals).",
            },
            {
              n: "2",
              title: "Server-Side Rendered (SSR)",
              body: "Content is generated on the server for each request. Optimal for pages with personalised data that still need to be discoverable by search engines.",
            },
            {
              n: "3",
              title: "Static Site Generation (SSG)",
              body: "Pre-rendered at build time. Best for marketing pages, documentation, and content sites. Fastest possible delivery, lowest infrastructure cost.",
            },
            {
              n: "4",
              title: "Hybrid (Next.js App Router)",
              body: "Mix SSR, SSG, and client-side rendering per route. The gold standard for modern SaaS — public pages are static, authenticated routes are dynamic.",
            },
          ].map(({ n, title, body }) => (
            <li key={n} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/15 font-mono text-sm font-bold text-red-400">
                {n}
              </span>
              <div>
                <h3 className="mb-1 font-display text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Section 4 */}
      <section
        id="tech-stack"
        aria-labelledby="h2-tech"
        className="scroll-mt-24"
      >
        <h2
          id="h2-tech"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          The Right Tech Stack in 2026
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Technology choices compound over years. The wrong stack creates hiring
          problems, performance ceilings, and expensive rewrites. Here is what
          the data — and production experience — says about the best stack for
          modern SaaS.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              layer: "Frontend",
              choice: "Next.js + TypeScript + Tailwind CSS",
              why: "Hybrid rendering, first-class DX, 20M+ weekly downloads",
            },
            {
              layer: "Backend",
              choice: "Node.js (Hono/Express) + tRPC",
              why: "Full-stack TypeScript, end-to-end type safety, fast iteration",
            },
            {
              layer: "Database",
              choice: "PostgreSQL + Drizzle/Prisma ORM",
              why: "ACID compliance, JSONB for flexibility, proven at any scale",
            },
            {
              layer: "Auth",
              choice: "Auth.js / Clerk / Supabase Auth",
              why: "Battle-tested, OAuth 2.0 compliant, no custom auth surface area",
            },
            {
              layer: "Infra",
              choice: "Vercel (frontend) + AWS/GCP (backend)",
              why: "Zero-config deploys, global CDN, auto-scaling by default",
            },
            {
              layer: "Payments",
              choice: "Stripe",
              why: "Industry standard, excellent docs, covers 135+ currencies",
            },
          ].map(({ layer, choice, why }) => (
            <div
              key={layer}
              className="rounded-xl border border-white/10 bg-card/60 p-4"
            >
              <p className="mb-0.5 font-mono text-xs uppercase tracking-widest text-red-400">
                {layer}
              </p>
              <p className="mb-1 font-display text-sm font-semibold text-white">
                {choice}
              </p>
              <p className="text-xs text-muted-foreground">{why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 */}
      <section
        id="architecture"
        aria-labelledby="h2-arch"
        className="scroll-mt-24"
      >
        <h2
          id="h2-arch"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Architecture Decisions That Scale
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          The most expensive mistakes in web app development are architectural —
          and they are made in the first two weeks. Poor database schema design,
          a tight coupling between modules, or premature microservices
          decomposition can cost 3–5× the original build cost to fix.
        </p>
        <blockquote className="mb-5 rounded-xl border-l-4 border-red-500 bg-red-500/5 py-4 pl-5 pr-4">
          <p className="text-sm italic leading-relaxed text-white/80">
            "The monolith is not the problem. Poorly structured code is the
            problem. A well-organised modular monolith scales to hundreds of
            millions of users — Instagram ran on Django (a monolith) to 100M
            users."
          </p>
        </blockquote>
        <ul className="space-y-2">
          {[
            "Design your database schema before writing a single line of application code",
            "Use a feature-based folder structure, not a layer-based one (not /models, /controllers — instead /features/billing, /features/users)",
            "Abstract external dependencies (email, SMS, payments) behind interfaces from day one — swapping providers later is painless",
            "Write integration tests for your critical paths, not just unit tests",
            "Enforce linting, type checking, and test coverage in CI/CD before any merge",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Mid CTA */}
      <BlogCTABanner
        headline="Building a Web App? Start With the Right Architecture."
        body="TensaiForge engineers SaaS platforms and web apps used by thousands of users daily. We get the foundation right from day one — so you never face a painful rewrite."
        href="/services/web-app-development/"
        cta="Discuss Your Project"
        variant="mid"
      />

      {/* Section 6 */}
      <section id="mvp-first" aria-labelledby="h2-mvp" className="scroll-mt-24">
        <h2
          id="h2-mvp"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Why MVP-First Always Wins
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          Most failed software products fail not because the code was bad, but
          because the wrong thing was built. Building a full-featured platform
          before validating core assumptions is the most common (and costly)
          mistake in web app development.
        </p>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          An MVP (Minimum Viable Product) is not a "cheap version" of your
          product — it's the smallest version that lets you test your most
          important hypothesis with real users. It typically costs
          $25,000–$60,000 and takes 8–14 weeks to build.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: "🎯",
              title: "Define one core user problem",
              body: "Your MVP should solve exactly one problem for one persona, better than anything else available.",
            },
            {
              icon: "⚡",
              title: "Ruthlessly cut scope",
              body: "Every feature that isn't critical to the core user journey is a distraction. Ship without it, add it later.",
            },
            {
              icon: "📊",
              title: "Instrument everything",
              body: "Analytics from day one. Know which features users actually use before building more.",
            },
            {
              icon: "🔄",
              title: "Plan for iteration",
              body: "The best architectures are designed to change. Flexibility is a feature, not an afterthought.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-card/60 p-5"
            >
              <p className="mb-2 text-2xl">{icon}</p>
              <h3 className="mb-1 font-display text-sm font-semibold text-white">
                {title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 */}
      <section
        id="ai-development"
        aria-labelledby="h2-ai"
        className="scroll-mt-24"
      >
        <h2
          id="h2-ai"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          AI-Augmented Web App Development
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          At TensaiForge, AI tools are integrated at every stage of web app
          development — not as experimental features, but as production-grade
          workflow accelerators that measurably improve output quality and
          delivery speed.
        </p>
        <ul className="space-y-3">
          {[
            {
              title: "AI code generation & review",
              body: "GitHub Copilot and Claude Code handle boilerplate, type definitions, and test generation — freeing engineers for complex logic and architecture.",
            },
            {
              title: "Automated test coverage",
              body: "AI-generated test suites achieve 80%+ coverage from the start, including edge cases that human-written tests typically miss.",
            },
            {
              title: "AI-powered performance profiling",
              body: "Automated Core Web Vitals monitoring flags regressions in CI/CD — performance issues are caught before they ship, not after.",
            },
          ].map(({ title, body }) => (
            <li
              key={title}
              className="rounded-xl border border-white/10 bg-card/60 p-5"
            >
              <h3 className="mb-1 font-display text-sm font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 8 */}
      <section
        id="hire-team"
        aria-labelledby="h2-hire"
        className="scroll-mt-24"
      >
        <h2
          id="h2-hire"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          How to Hire a Web App Development Team
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Choosing the right team is the highest-leverage decision in your
          entire project. Ask these questions before signing any contract.
        </p>
        <ul className="space-y-2">
          {[
            "Can you show me a live production app you've built, not just a portfolio screenshot?",
            "What is your approach to database schema design before coding starts?",
            "How do you handle scope changes mid-project — is it included or quoted separately?",
            "What automated tests will you write, and what does coverage look like at handoff?",
            "How do you manage deployment and what does your CI/CD pipeline look like?",
            "What post-launch support do you provide, and what's your SLA for critical bugs?",
          ].map((q) => (
            <li
              key={q}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-[10px]">
                ✓
              </span>
              {q}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="h2-faq" className="scroll-mt-24">
        <h2
          id="h2-faq"
          className="mb-6 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Frequently Asked Questions
        </h2>
        <BlogFAQ items={post.faqs} />
      </section>

      {/* Bottom CTA */}
      <BlogCTABanner
        headline="Build a Web App That Scales to Your Ambitions"
        body="From MVP to enterprise SaaS, TensaiForge designs and engineers web applications that handle millions of users. Get a detailed scoping session — free of charge."
        href="/services/web-app-development/"
        cta="Start Your Web App Project"
        variant="bottom"
      />
    </div>
  );
}
