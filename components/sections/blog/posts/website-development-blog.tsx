import Image from "next/image";
import { BlogCTABanner } from "@/components/sections/blog/blog-cta-banner";
import { BlogFAQ } from "@/components/ui/blog-faq";
import type { BlogPost } from "@/lib/blog-posts";

type Props = { post: BlogPost };

export function WebsiteDevelopmentBlog({ post }: Props) {
  return (
    <div className="space-y-10">
      {/* Key Takeaways */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-3 font-display text-base font-bold uppercase tracking-widest text-red-400">
          Key Takeaways
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "Website development costs range from $1,500 (landing page) to $150,000+ (enterprise platform) in 2026.",
            "The three biggest cost drivers are design complexity, custom integrations, and CMS selection.",
            "Next.js with TypeScript is the performance-first standard — sites score 95–100 on PageSpeed vs 40–70 for typical WordPress builds.",
            "AI-augmented development reduces time-to-market by 30–40% without sacrificing code quality.",
            "Budget 15–25% of your build cost annually for hosting, security, and ongoing maintenance.",
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
        id="cost-overview"
        aria-labelledby="h2-cost-overview"
        className="scroll-mt-24"
      >
        <h2
          id="h2-cost-overview"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          What Does Website Development Actually Cost in 2026?
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          Website development in 2026 costs between{" "}
          <strong className="text-white">$1,500 and $150,000+</strong> depending
          on complexity, design requirements, and the technology stack. That
          range is wide because a four-page portfolio site and a 200-page
          e-commerce platform with custom checkout logic are both called
          "websites."
        </p>
        <p className="mb-6 text-base leading-relaxed text-muted-foreground">
          The most practical way to estimate your cost is to map your project to
          one of these categories first — then apply the complexity factors in
          the next section.
        </p>

        {/* Cost table */}
        <div className="mb-6 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-5 py-3 text-left font-semibold text-white">
                  Website Type
                </th>
                <th className="px-5 py-3 text-left font-semibold text-white">
                  Typical Cost
                </th>
                <th className="px-5 py-3 text-left font-semibold text-white">
                  Timeline
                </th>
                <th className="px-5 py-3 text-left font-semibold text-white">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Landing Page",
                  "$1,500 – $5,000",
                  "2–4 weeks",
                  "Product launches, campaigns",
                ],
                [
                  "Business Website",
                  "$5,000 – $20,000",
                  "4–8 weeks",
                  "SMBs, agencies, consultants",
                ],
                [
                  "E-commerce Site",
                  "$15,000 – $50,000",
                  "8–16 weeks",
                  "DTC brands, online retail",
                ],
                [
                  "Marketing Platform",
                  "$25,000 – $60,000",
                  "10–20 weeks",
                  "SaaS marketing sites",
                ],
                [
                  "Enterprise / Corporate",
                  "$50,000 – $150,000+",
                  "16–40 weeks",
                  "Large organisations, IPO-ready",
                ],
              ].map(([type, cost, time, fit]) => (
                <tr
                  key={type}
                  className="border-b border-white/5 hover:bg-white/3"
                >
                  <td className="px-5 py-3 font-medium text-white">{type}</td>
                  <td className="px-5 py-3 text-red-400 font-mono font-semibold">
                    {cost}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{time}</td>
                  <td className="px-5 py-3 text-muted-foreground">{fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="cost-factors"
        aria-labelledby="h2-cost-factors"
        className="scroll-mt-24"
      >
        <h2
          id="h2-cost-factors"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          7 Factors That Drive Your Website Development Cost
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Two projects in the same budget category can have wildly different
          final invoices. These seven factors explain why — and which ones you
          can control.
        </p>
        <ol className="space-y-5">
          {[
            {
              n: "1",
              title: "Design Complexity",
              body: "A custom design built from a brand system with unique micro-interactions costs 2–3× more than adapting an existing template. If you need pixel-perfect Figma fidelity with animations, budget for it explicitly.",
            },
            {
              n: "2",
              title: "Number of Pages and Content Volume",
              body: "More pages means more design, development, and QA time. A 5-page brochure site versus a 50-page enterprise site with rich content types isn't a 10× cost increase, but it's typically 3–4×.",
            },
            {
              n: "3",
              title: "CMS and Backend Requirements",
              body: "A headless CMS (Sanity, Payload, Contentful) adds $2,000–$8,000 to the build but empowers your team to update content without developer involvement. A fully custom admin panel is 3–5× that cost.",
            },
            {
              n: "4",
              title: "Third-Party Integrations",
              body: "CRM, marketing automation, analytics, payments, live chat — each integration adds 8–20 hours of engineering. Poorly documented APIs or legacy systems can triple that estimate.",
            },
            {
              n: "5",
              title: "Performance and SEO Requirements",
              body: "Achieving 95+ on Core Web Vitals requires deliberate engineering choices: proper image handling, font loading strategy, render-blocking resource elimination, and CDN setup. This is built-in with Next.js — retrofitted onto WordPress it adds significant cost.",
            },
            {
              n: "6",
              title: "Accessibility (WCAG 2.1 AA)",
              body: "Accessibility compliance is legally required in the EU, UK, and increasingly in the US. Building it in from the start adds ~10–15% to the budget. Retrofitting it later typically costs 2–3× more.",
            },
            {
              n: "7",
              title: "Ongoing Maintenance Plan",
              body: "Security patches, framework updates, performance monitoring, and content changes don't stop after launch. Budget 15–25% of your build cost annually, or choose an agency that includes a retainer.",
            },
          ].map((item) => (
            <li key={item.n} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/15 font-mono text-sm font-bold text-red-400">
                {item.n}
              </span>
              <div>
                <h3 className="mb-1 font-display text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Inline image */}
      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75"
          alt="Developer reviewing website performance metrics and Core Web Vitals scores on a dual monitor setup"
          width={900}
          height={500}
          className="h-56 w-full object-cover sm:h-72"
          loading="lazy"
        />
        <figcaption className="bg-card/60 px-4 py-2 text-xs text-muted-foreground">
          Core Web Vitals performance monitoring — a non-negotiable for SEO
          success in 2026.
        </figcaption>
      </figure>

      {/* Section 3 */}
      <section
        id="cost-comparison"
        aria-labelledby="h2-cost-comparison"
        className="scroll-mt-24"
      >
        <h2
          id="h2-cost-comparison"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Custom Development vs Template vs Website Builder
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Each option serves a different stage and ambition. The most expensive
          mistake is choosing the wrong one for your goals — either
          over-engineering a brochure site or under-investing in a platform that
          needs to scale.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {[
                  "Option",
                  "Cost Range",
                  "Performance",
                  "Scalability",
                  "Best For",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold text-white"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Website Builder (Wix/Webflow)",
                  "$500 – $3,000",
                  "60–75 / 100",
                  "Limited",
                  "Quick launches, portfolios",
                ],
                [
                  "Premium Template",
                  "$3,000 – $8,000",
                  "70–85 / 100",
                  "Moderate",
                  "SMBs, tight budgets",
                ],
                [
                  "Custom Development",
                  "$8,000 – $150,000+",
                  "90–100 / 100",
                  "High",
                  "Serious brands, growth stage",
                ],
              ].map(([opt, cost, perf, scale, fit]) => (
                <tr
                  key={opt}
                  className="border-b border-white/5 hover:bg-white/3"
                >
                  <td className="px-4 py-3 font-medium text-white">{opt}</td>
                  <td className="px-4 py-3 font-mono text-red-400">{cost}</td>
                  <td className="px-4 py-3 text-muted-foreground">{perf}</td>
                  <td className="px-4 py-3 text-muted-foreground">{scale}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4 */}
      <section
        id="nextjs-advantage"
        aria-labelledby="h2-nextjs"
        className="scroll-mt-24"
      >
        <h2
          id="h2-nextjs"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Why Next.js Is the Right Foundation for Your Website in 2026
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          Next.js with static site generation (SSG) is the dominant framework
          for performance-critical websites in 2026 — and for good reason. Pages
          are pre-rendered as static HTML at build time, served from a global
          CDN, and load in under 500ms globally without any server-side
          computation at request time.
        </p>
        <ul className="mb-5 space-y-3">
          {[
            "PageSpeed scores of 95–100 by default — WordPress typically starts at 40–60 without optimization",
            "Built-in image optimisation, font loading strategy, and code splitting",
            "Zero plugin dependency hell — no security patches for 50 WordPress plugins every month",
            "TypeScript strict mode catches bugs before they reach production",
            "Incremental Static Regeneration (ISR) allows dynamic content without sacrificing performance",
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
        <blockquote className="rounded-xl border-l-4 border-red-500 bg-red-500/5 py-4 pl-5 pr-4">
          <p className="text-sm italic leading-relaxed text-white/80">
            "Google has confirmed that Core Web Vitals are a ranking factor. A
            site that loads in 1.2 seconds consistently outranks an identical
            site loading in 3.5 seconds, all else being equal."
          </p>
        </blockquote>
      </section>

      {/* Section 5 */}
      <section
        id="hidden-costs"
        aria-labelledby="h2-hidden"
        className="scroll-mt-24"
      >
        <h2
          id="h2-hidden"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          The Hidden Cost of a Slow Website
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          The real cost of a poorly performing website isn't the development
          bill — it's the revenue you lose every month it stays slow.
        </p>
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          {[
            { stat: "7%", label: "Drop in conversion rate per 1 second delay" },
            {
              stat: "11%",
              label: "Fewer page views for every 1-second slowdown",
            },
            {
              stat: "16%",
              label: "Decrease in customer satisfaction when load > 3s",
            },
          ].map(({ stat, label }) => (
            <div
              key={stat}
              className="rounded-xl border border-white/10 bg-card/60 p-5 text-center"
            >
              <p className="font-display text-3xl font-extrabold text-red-400">
                {stat}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A one-time investment in a performant Next.js website compounds.
          Better performance means higher search rankings, more organic traffic,
          and better conversion rates — for years.
        </p>
      </section>

      {/* Mid-article CTA */}
      <BlogCTABanner
        headline="Ready to Build a Website That Performs?"
        body="TensaiForge builds Next.js websites that score 95–100 on PageSpeed, rank on page one, and convert visitors into customers. Let's talk about your project."
        href="/services/website-development/"
        cta="Get a Free Consultation"
        variant="mid"
      />

      {/* Section 6 */}
      <section
        id="ai-development"
        aria-labelledby="h2-ai-dev"
        className="scroll-mt-24"
      >
        <h2
          id="h2-ai-dev"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          How AI-Augmented Development Reduces Costs Without Cutting Corners
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          At TensaiForge, every website project is built with AI-assisted
          workflows — not to cut corners, but to spend engineering time where it
          matters most: architecture, UX decisions, and performance
          optimisation.
        </p>
        <ul className="space-y-3">
          {[
            {
              title: "Automated boilerplate generation",
              body: "Component scaffolding, API route setup, and test generation handled by AI pair programmers — saving 8–15 hours per project.",
            },
            {
              title: "AI-powered code review",
              body: "Every pull request is reviewed by automated tools catching accessibility violations, performance regressions, and security issues before a human ever sees it.",
            },
            {
              title: "Intelligent content structuring",
              body: "AI analysis of your target keywords and competitor pages informs heading structure and content architecture from day one — not as an afterthought.",
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

      {/* Inline image 2 */}
      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=75"
          alt="Laptop screen showing clean Next.js TypeScript code with excellent developer tooling setup"
          width={900}
          height={480}
          className="h-52 w-full object-cover sm:h-64"
          loading="lazy"
        />
        <figcaption className="bg-card/60 px-4 py-2 text-xs text-muted-foreground">
          AI-assisted development: clean TypeScript, enforced best practices,
          faster delivery.
        </figcaption>
      </figure>

      {/* Section 7 */}
      <section
        id="timelines"
        aria-labelledby="h2-timelines"
        className="scroll-mt-24"
      >
        <h2
          id="h2-timelines"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          How Long Does Website Development Take?
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Timelines are driven by project scope, how quickly clients provide
          feedback and content, and how many revision rounds are required. Here
          are realistic estimates based on our project history.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {["Project Type", "Typical Timeline", "Key Bottlenecks"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-5 py-3 text-left font-semibold text-white"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ["Landing Page", "2–4 weeks", "Copy approval, image sourcing"],
                [
                  "Business Website",
                  "4–8 weeks",
                  "Content strategy, CMS training",
                ],
                [
                  "E-commerce Site",
                  "8–16 weeks",
                  "Product data migration, payment flow testing",
                ],
                [
                  "Enterprise Platform",
                  "16–40 weeks",
                  "Stakeholder sign-offs, legacy integrations",
                ],
              ].map(([type, time, bottleneck]) => (
                <tr key={type} className="border-b border-white/5">
                  <td className="px-5 py-3 font-medium text-white">{type}</td>
                  <td className="px-5 py-3 font-mono text-red-400">{time}</td>
                  <td className="px-5 py-3 text-muted-foreground">
                    {bottleneck}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8 */}
      <section
        id="choose-agency"
        aria-labelledby="h2-agency"
        className="scroll-mt-24"
      >
        <h2
          id="h2-agency"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          How to Choose the Right Website Development Agency
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          The agency you choose determines not just the website you launch with,
          but the performance trajectory over the next 2–3 years. Use this
          checklist when evaluating partners.
        </p>
        <ul className="space-y-2">
          {[
            "They can show PageSpeed scores of 90+ for live client sites, not just screenshots",
            "They use TypeScript and automated testing — not PHP/jQuery spaghetti",
            "They include post-launch support in their proposal, not just a warranty period",
            "Their portfolio includes businesses in your industry or at your scale",
            "They ask about your business goals before quoting — not just features",
            "They can explain their SEO and Core Web Vitals strategy in plain English",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-[10px]">
                ✓
              </span>
              {item}
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
        headline="Let's Build Your Website the Right Way"
        body="From landing pages to enterprise platforms, TensaiForge delivers Next.js websites that load fast, rank high, and convert. Get a detailed proposal within 48 hours."
        href="/services/website-development/"
        cta="Start Your Website Project"
        variant="bottom"
      />
    </div>
  );
}
