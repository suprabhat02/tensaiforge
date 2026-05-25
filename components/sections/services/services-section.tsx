"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Globe, Layers, Smartphone, Cloud, Bot } from "@/lib/animated-icons";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import WebsiteDevelopmentIllustration from "@/components/ui/illustrations/website-development-illustration";
import WebAppDevelopmentIllustration from "@/components/ui/illustrations/web-app-development-illustration";
import MobileAppDevelopmentIllustration from "@/components/ui/illustrations/mobile-app-development-illustration";
import CloudBackendSolutionIllustration from "@/components/ui/illustrations/cloud-backend-solution-illustration";
import AIChatbotAssistantIllustration from "@/components/ui/illustrations/ai-chatbot-assistant-illustration";
import { cn } from "@/lib/utils";
import { FADE_UP } from "@/lib/animations";

type ServiceItem = {
  readonly id: number;
  readonly icon: React.ComponentType<{ className?: string; size?: number }>;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly href: string;
  readonly Illustration: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  readonly wide?: boolean;
};

const SERVICES: readonly ServiceItem[] = [
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform apps with native performance. One codebase, every device, zero compromise.",
    tags: ["React Native", "Expo", "iOS/Android"],
    href: "/services/mobile-app-development/",
    Illustration: MobileAppDevelopmentIllustration,
  },
  {
    id: 1,
    icon: Globe,
    title: "Website Development",
    description:
      "Blazing-fast, conversion-optimized websites built with Next.js, TypeScript & Tailwind CSS. Core Web Vitals in the top 5%.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "/services/website-development/",
    Illustration: WebsiteDevelopmentIllustration,
    wide: true,
  },
  {
    id: 2,
    icon: Layers,
    title: "Web App Development",
    description:
      "Complex SaaS platforms and enterprise apps engineered for millions of users. From MVP to IPO-ready.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "/services/web-app-development/",
    Illustration: WebAppDevelopmentIllustration,
  },
  {
    id: 4,
    icon: Cloud,
    title: "Cloud & Backend Solutions",
    description:
      "Serverless architectures, microservices, and cloud-native infrastructure that scales infinitely.",
    tags: ["AWS", "GCP", "Kubernetes"],
    href: "/services/cloud-backend-solutions/",
    Illustration: CloudBackendSolutionIllustration,
  },
  {
    id: 5,
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description:
      "Production-grade AI integrations with GPT-4, Claude, and custom fine-tuned models embedded into your product.",
    tags: ["OpenAI", "LangChain", "RAG"],
    href: "/services/ai-chatbot-development/",
    Illustration: AIChatbotAssistantIllustration,
  },
] as const;

// ── Wide Card (Website Dev — spans 2 cols, horizontal on desktop) ─────────────

function WideServiceCard({
  service,
  delay,
}: {
  service: ServiceItem;
  delay: number;
}) {
  const { icon: Icon, title, description, tags, href, Illustration } = service;
  return (
    <AnimateIn
      delay={delay}
      variants={FADE_UP}
      className="sm:col-span-2 lg:col-span-2"
    >
      <div className="group relative h-full rounded-2xl border border-white/10 p-[1px]">
        <GlowingEffect
          spread={60}
          glow={false}
          disabled={false}
          proximity={100}
          inactiveZone={0.05}
          borderWidth={2}
        />
        <Link
          href={href}
          className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card/60 backdrop-blur-sm transition-colors duration-300 group-hover:bg-card/80 focus:outline-none focus:ring-1 focus:ring-red-400 lg:flex-row"
          aria-label={`Learn more about ${title}`}
        >
          {/* Illustration — left half on desktop, top on mobile */}
          <div className="relative flex h-52 items-center justify-center overflow-hidden lg:h-auto lg:flex-1">
            <Illustration className="h-full w-auto max-w-full lg:h-auto lg:w-full" />
            {/* Bottom fade on mobile */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/90 to-transparent lg:hidden"
              aria-hidden="true"
            />
            {/* Right fade on desktop */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-gradient-to-l from-card/90 to-transparent lg:block"
              aria-hidden="true"
            />
          </div>

          {/* Content — right half on desktop, bottom on mobile */}
          <div className="flex flex-col justify-center gap-5 p-8 lg:w-[44%] lg:shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 transition-colors group-hover:border-red-500/40 group-hover:bg-red-500/20">
                <Icon className="text-red-400" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight">
                {title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors group-hover:text-red-300">
              Explore Service{" "}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </Link>
      </div>
    </AnimateIn>
  );
}

// ── Standard Card (vertical layout) ──────────────────────────────────────────

function ServiceCard({
  service,
  delay,
}: {
  service: ServiceItem;
  delay: number;
}) {
  const { icon: Icon, title, description, tags, href, Illustration } = service;
  return (
    <AnimateIn delay={delay} variants={FADE_UP}>
      <div className="group relative h-full rounded-2xl border border-white/10 p-[1px]">
        <GlowingEffect
          spread={50}
          glow={false}
          disabled={false}
          proximity={80}
          inactiveZone={0.05}
          borderWidth={2}
        />
        <Link
          href={href}
          className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card/60 backdrop-blur-sm transition-colors duration-300 group-hover:bg-card/80 focus:outline-none focus:ring-1 focus:ring-red-400"
          aria-label={`Learn more about ${title}`}
        >
          {/* Illustration */}
          <div className="relative flex h-44 items-center justify-center overflow-hidden">
            <Illustration className="h-full w-auto max-w-full" />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-card/90 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-4 p-6 lg:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 transition-colors group-hover:border-red-500/40 group-hover:bg-red-500/20">
                <Icon className="text-red-400" size={20} />
              </div>
              <h3 className="font-display text-lg font-bold tracking-tight">
                {title}
              </h3>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors group-hover:text-red-300">
              Explore Service{" "}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </Link>
      </div>
    </AnimateIn>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function ServicesSection() {
  // SERVICES is a non-empty const tuple — first element is always defined
  const wideService = SERVICES[0] as ServiceItem;
  const restServices = SERVICES.slice(1);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-x section-y relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <AnimateIn className="mb-16 text-center">
          <SectionLabel>What We Build For You</SectionLabel>
          <h2
            id="services-heading"
            className={cn("mt-4 font-display text-4xl font-bold lg:text-5xl")}
          >
            Services Built for{" "}
            <span className="text-gradient-forge">Scale</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            End-to-end engineering solutions from prototype to production.
          </p>
        </AnimateIn>

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Wide featured card */}
          <WideServiceCard service={wideService} delay={0} />

          {/* Remaining service cards */}
          {restServices.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={(i + 1) * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
