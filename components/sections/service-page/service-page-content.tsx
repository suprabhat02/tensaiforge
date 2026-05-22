"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Zap,
  Shield,
  Eye,
  Gauge,
  Globe,
  LayoutDashboard,
  Cloud,
  Smartphone,
  Bot,
  Layers,
} from "@/lib/animated-icons";
import {
  Code,
  TrendingUp,
  Search,
  Monitor,
  CheckCircle,
  Lock,
  Users,
  Settings,
  Rocket,
  Heart,
  MessageCircle,
  Bell,
  Database,
  Wrench,
  FileText,
  BookOpen,
  ChevronDown,
  ChevronUp,
  BarChart,
  Phone,
  GitBranch,
  RefreshCw,
  DollarSign,
  Palette,
  Radio,
  ShoppingCart,
  Building2,
  Wifi,
  WifiOff,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  FADE_UP,
  FADE_LEFT,
  FADE_RIGHT,
  SCALE_IN,
  EASE_OUT_EXPO,
} from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ServicePageData } from "@/lib/service-pages";

// ── Icon Map ─────────────────────────────────────────────────

// Devicon SVGs that ship as black/dark and need inversion on dark backgrounds
const DARK_ICONS = ["nextjs", "vercel", "prisma"];
const needsInvert = (src: string) =>
  DARK_ICONS.some((name) => src.includes(`/${name}/`));
const ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string; size?: number }>
> = {
  Rocket,
  Building2,
  ShoppingCart,
  Palette,
  BookOpen,
  FileText,
  Gauge,
  Search,
  Monitor,
  TrendingUp,
  Zap,
  Eye,
  Cloud,
  LayoutDashboard,
  Users,
  Wrench,
  Radio,
  Shield,
  Code,
  CheckCircle,
  Globe,
  Smartphone,
  Heart,
  MessageCircle,
  Wifi,
  WifiOff,
  GitBranch,
  RefreshCw,
  Bell,
  Store: ShoppingCart,
  Database,
  Settings,
  CloudUpload: Cloud,
  DollarSign,
  Lock,
  FileCode: Code,
  Layers,
  FileCheck: CheckCircle,
  Bot,
  Phone,
  BarChart,
};

function getIcon(name: string) {
  return ICON_MAP[name] ?? Zap;
}

// ── Hero Section ─────────────────────────────────────────────

function ServiceHero({ data }: { data: ServicePageData }) {
  return (
    <section
      id="service-hero"
      aria-labelledby="service-hero-heading"
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-background"
    >
      <BackgroundBeams />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/4 top-1/3 h-[500px] w-[500px] animate-pulse-slow rounded-full bg-red-500/8 blur-[120px]"
        aria-hidden="true"
      />

      <div className="section-x relative z-10 mx-auto max-w-5xl pt-32 pb-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ delay: 0.2 }}
        >
          <SectionLabel>{data.title}</SectionLabel>
        </motion.div>

        <motion.h1
          id="service-hero-heading"
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ ...EASE_OUT_EXPO, delay: 0.3 }}
          className="mt-8 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          {data.headline.split(" ").map((word, i, arr) =>
            i >= arr.length - 2 ? (
              <span key={i} className="text-gradient-forge">
                {word}{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            ),
          )}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ ...EASE_OUT_EXPO, delay: 0.4 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          {data.subheadline}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ ...EASE_OUT_EXPO, delay: 0.5 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#contact"
            className="group btn-primary relative inline-flex items-center justify-center gap-2 overflow-hidden px-8 py-4 text-base"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </Link>
          <Link
            href="/#services"
            className="btn-ghost inline-flex items-center justify-center px-8 py-4 text-base"
          >
            All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ── Stats Bar ────────────────────────────────────────────────

function ServiceStats({ data }: { data: ServicePageData }) {
  return (
    <section
      aria-label="Key metrics"
      className="relative border-y border-border/50 bg-card/30"
    >
      <div className="section-x mx-auto max-w-screen-xl py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {data.stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-3xl font-extrabold text-gradient-forge sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Deliverables Section ─────────────────────────────────────

function ServiceDeliverables({ data }: { data: ServicePageData }) {
  return (
    <section
      id="deliverables"
      aria-labelledby="deliverables-heading"
      className="section-x section-y relative"
    >
      <div className="mx-auto max-w-screen-xl">
        <AnimateIn>
          <SectionLabel>What We Deliver</SectionLabel>
          <h2
            id="deliverables-heading"
            className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl"
          >
            Solutions Tailored to{" "}
            <span className="text-gradient-forge">Your Goals</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {data.description}
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.deliverables.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <AnimateIn key={item.title} delay={i * 0.08}>
                <div className="forge-card group h-full p-6 transition-shadow hover:shadow-lg hover:shadow-red-500/5 hover:border-red-400/20">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">
                    <Icon size={20} className="text-red-400" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Features Section ─────────────────────────────────────────

function ServiceFeatures({ data }: { data: ServicePageData }) {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="section-x section-y relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-screen-xl">
        <AnimateIn>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2
            id="features-heading"
            className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl"
          >
            What Sets Our{" "}
            <span className="text-gradient-forge">Delivery Apart</span>
          </h2>
        </AnimateIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {data.features.map((feature, i) => {
            const Icon = getIcon(feature.icon);
            return (
              <AnimateIn
                key={feature.title}
                variants={i % 2 === 0 ? FADE_LEFT : FADE_RIGHT}
                delay={i * 0.06}
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 ring-1 ring-red-500/20">
                    <Icon size={22} className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Tech Stack Section ───────────────────────────────────────

function ServiceTechStack({ data }: { data: ServicePageData }) {
  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="section-x section-y relative"
    >
      <div className="mx-auto max-w-screen-xl">
        <AnimateIn>
          <SectionLabel>Our Stack</SectionLabel>
          <h2
            id="tech-stack-heading"
            className="mt-4 font-display text-3xl font-bold sm:text-4xl"
          >
            Technologies We Use
          </h2>
        </AnimateIn>

        <div className="mt-10 flex flex-wrap gap-4">
          {data.techStack.map((tech, i) => (
            <AnimateIn key={tech.name} variants={SCALE_IN} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 px-5 py-3 backdrop-blur-sm">
                {tech.icon && (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className={cn(
                      "h-6 w-6",
                      needsInvert(tech.icon) && "invert",
                    )}
                    loading="lazy"
                  />
                )}
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ Section ──────────────────────────────────────────────

function ServiceFAQ({ data }: { data: ServicePageData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-x section-y relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl">
        <AnimateIn className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-3xl font-bold sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
        </AnimateIn>

        <div className="mt-10 space-y-3">
          {data.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateIn key={faq.question} delay={i * 0.06}>
                <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-1 focus:ring-red-400 rounded-xl"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm font-semibold sm:text-base">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={18} className="shrink-0 text-red-400" />
                    ) : (
                      <ChevronDown
                        size={18}
                        className="shrink-0 text-muted-foreground"
                      />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── AI Workflow Section ──────────────────────────────────────

function ServiceAIWorkflow({ data }: { data: ServicePageData }) {
  const { aiWorkflow } = data;

  return (
    <section
      id="ai-workflow"
      aria-labelledby="ai-workflow-heading"
      className="section-x section-y relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <AnimateIn>
          <SectionLabel>AI-Powered Workflow</SectionLabel>
          <h2
            id="ai-workflow-heading"
            className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl"
          >
            How AI <span className="text-gradient-forge">Supercharges</span> Our
            Process
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {aiWorkflow.description}
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Image with overlay */}
          <AnimateIn variants={FADE_LEFT}>
            <div className="relative overflow-hidden rounded-2xl border border-border/50">
              <Image
                src={aiWorkflow.image}
                alt={aiWorkflow.headline}
                width={900}
                height={600}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              {/* Dark overlay with gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <p className="font-display text-xl font-bold text-white sm:text-2xl">
                  {aiWorkflow.headline}
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Steps */}
          <div className="space-y-5">
            {aiWorkflow.steps.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <AnimateIn
                  key={step.title}
                  variants={FADE_RIGHT}
                  delay={i * 0.1}
                >
                  <div className="forge-card group p-5 transition-shadow hover:shadow-lg hover:shadow-red-500/5 hover:border-red-400/20">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 ring-1 ring-red-500/20">
                        <Icon size={20} className="text-red-400" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-semibold">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                        <p className="mt-2 font-mono text-xs text-red-400/80">
                          {step.tool}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Showcase Image Section ───────────────────────────────────

function ServiceShowcase({ data }: { data: ServicePageData }) {
  const { showcaseImage } = data;

  return (
    <section
      aria-label="Project showcase"
      className="section-x section-y relative"
    >
      <div className="mx-auto max-w-screen-xl">
        <AnimateIn variants={SCALE_IN}>
          <div className="relative overflow-hidden rounded-3xl border border-border/50">
            <Image
              src={showcaseImage.src}
              alt={showcaseImage.alt}
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="max-w-xl text-sm leading-relaxed text-neutral-200 sm:text-base">
                {showcaseImage.caption}
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

// ── CTA Section ──────────────────────────────────────────────

function ServiceCTA({ data }: { data: ServicePageData }) {
  return (
    <section
      aria-label="Call to action"
      className="section-x section-y relative"
    >
      <div className="mx-auto max-w-screen-xl">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-red-950/20 via-card to-card p-10 text-center sm:p-16">
            <div
              className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ready to Build Your{" "}
                <span className="text-gradient-forge">
                  {data.title} Project
                </span>
                ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us what you&apos;re building. We&apos;ll tell you how to
                make it extraordinary.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="group btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
                >
                  Start a Project
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <a
                  href="mailto:tensaiforge@gmail.com"
                  className="btn-ghost inline-flex items-center justify-center px-8 py-4 text-base"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

// ── Main Content Orchestrator ────────────────────────────────

export function ServicePageContent({ data }: { data: ServicePageData }) {
  return (
    <>
      <ServiceHero data={data} />
      <ServiceStats data={data} />
      <ServiceDeliverables data={data} />
      <ServiceShowcase data={data} />
      <ServiceFeatures data={data} />
      <ServiceAIWorkflow data={data} />
      <ServiceTechStack data={data} />
      <ServiceFAQ data={data} />
      <ServiceCTA data={data} />
    </>
  );
}
