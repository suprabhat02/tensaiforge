"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { Timeline } from "@/components/ui/aceternity-timeline";

const TIMELINE_DATA = [
  {
    title: "Discovery",
    content: (
      <div>
        <p className="mb-6 text-sm leading-relaxed text-neutral-300 md:text-base">
          We deep-dive into your vision, market, and technical constraints.
          AI-powered research helps us map the competitive landscape and
          identify opportunities.
        </p>
        <ul className="mb-8 space-y-3">
          {[
            "Stakeholder interviews & requirement mapping",
            "AI-driven market & competitor analysis",
            "Technical feasibility assessment",
            "Project roadmap & milestone planning",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  className="h-3 w-3"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-neutral-300 md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/process/software-discovery.jpg"
            alt="Startup founder studying a research wall covered with wireframes, user personas, and market analysis during product discovery"
            width={800}
            height={450}
            className="h-44 w-full rounded-lg object-cover md:h-64 lg:h-72"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-forge-500/20 via-transparent to-forge-900/30"
            aria-hidden="true"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Architecture",
    content: (
      <div>
        <p className="mb-6 text-sm leading-relaxed text-neutral-300 md:text-base">
          We architect systems that scale to millions. Every decision is
          informed by AI-simulated load patterns and predictive modeling.
        </p>
        <ul className="mb-8 space-y-3">
          {[
            "System design & microservices architecture",
            "AI-optimized database schema design",
            "Infrastructure-as-code blueprints",
            "Security threat modeling & mitigation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  className="h-3 w-3"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-neutral-300 md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/process/software-architecture.jpg"
            alt="Multi-monitor workstation with design tools open, planning system architecture and UI components for a scalable product"
            width={800}
            height={450}
            className="h-44 w-full rounded-lg object-cover md:h-64 lg:h-72"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-forge-500/20 via-transparent to-forge-900/30"
            aria-hidden="true"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Build & Ship",
    content: (
      <div>
        <p className="mb-6 text-sm leading-relaxed text-neutral-300 md:text-base">
          AI-augmented development with pair programming assistants, automated
          code review, and CI/CD pipelines that deploy with confidence.
        </p>
        <ul className="mb-8 space-y-3">
          {[
            "AI pair programming & code generation",
            "Automated testing with 95%+ coverage",
            "Zero-downtime deployments",
            "Performance profiling & optimization",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  className="h-3 w-3"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-neutral-300 md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/process/software-build-and-ship.jpg"
            alt="Development team collaborating with laptops during an agile sprint, building and shipping production code"
            width={800}
            height={450}
            className="h-44 w-full rounded-lg object-cover md:h-64 lg:h-72"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-forge-500/20 via-transparent to-forge-900/30"
            aria-hidden="true"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Scale & Evolve",
    content: (
      <div>
        <p className="mb-6 text-sm leading-relaxed text-neutral-300 md:text-base">
          Post-launch, AI monitors your systems 24/7 â€” predicting failures
          before they happen and auto-scaling to meet demand.
        </p>
        <ul className="mb-8 space-y-3">
          {[
            "AI-powered monitoring & anomaly detection",
            "Predictive auto-scaling",
            "Continuous optimization & A/B testing",
            "Feature evolution roadmap",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  className="h-3 w-3"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-neutral-300 md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/process/software-scale-and-evolve.jpg"
            alt="Professional color grading and monitoring dashboard representing continuous system optimization and performance evolution"
            width={800}
            height={450}
            className="h-44 w-full rounded-lg object-cover md:h-64 lg:h-72"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-forge-500/20 via-transparent to-forge-900/30"
            aria-hidden="true"
          />
        </div>
      </div>
    ),
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-x section-y overflow-hidden"
    >
      <AnimateIn className="mb-8 text-center">
        <SectionLabel>How We Work</SectionLabel>
        <h2
          id="process-heading"
          className="mt-4 font-display text-4xl font-bold lg:text-5xl"
        >
          From Idea to <span className="text-gradient-forge">Impact</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A proven four-phase process powered by AI at every step.
        </p>
      </AnimateIn>
      <Timeline data={TIMELINE_DATA} />
    </section>
  );
}
