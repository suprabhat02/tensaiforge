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
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
            alt="AI Discovery Phase"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(249,4,4,0.1)] md:h-44 lg:h-60"
          />
          <Image
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
            alt="Research & Planning"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(249,4,4,0.1)] md:h-44 lg:h-60"
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
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
            alt="Cloud Architecture"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(249,4,4,0.1)] md:h-44 lg:h-60"
          />
          <Image
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80"
            alt="System Design"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(249,4,4,0.1)] md:h-44 lg:h-60"
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
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
            alt="AI Development"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(249,4,4,0.1)] md:h-44 lg:h-60"
          />
          <Image
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80"
            alt="Code & Deploy"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(249,4,4,0.1)] md:h-44 lg:h-60"
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
          Post-launch, AI monitors your systems 24/7 — predicting failures
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
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=80"
            alt="AI Monitoring"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(249,4,4,0.1)] md:h-44 lg:h-60"
          />
          <Image
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80"
            alt="Scale & Growth"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(249,4,4,0.1)] md:h-44 lg:h-60"
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
