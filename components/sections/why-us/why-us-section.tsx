"use client";

import Image from "next/image";
import { Zap, Gauge, Layers, Code2, Shield, Eye } from "@/lib/animated-icons";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { GlowingEffect } from "@/components/ui/glowing-effect";

type FeatureItem = {
  id: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  image?: string;
  className: string;
};

const FEATURES: FeatureItem[] = [
  {
    id: 1,
    icon: Zap,
    title: "AI-First Engineering",
    description:
      "Every system we build has AI integration baked in from day one — LLMs, embeddings, and agents as core infrastructure, not afterthoughts.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=60",
    className: "sm:col-span-2 lg:col-span-2",
  },
  {
    id: 2,
    icon: Gauge,
    title: "Performance Obsessed",
    description:
      "Core Web Vitals in the top 5%. Every millisecond matters — we profile, benchmark, and optimize until your product is blazingly fast.",
    className: "lg:col-span-1",
  },
  {
    id: 3,
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Systems designed to handle 100x your current load without re-architecting. Built for your Series A before you even close your seed.",
    className: "lg:col-span-1",
  },
  {
    id: 4,
    icon: Shield,
    title: "Security by Design",
    description:
      "OWASP Top 10 hardening, zero-trust architecture, automated vulnerability scanning — security is a feature, not a checklist.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=60",
    className: "sm:col-span-2 lg:col-span-2",
  },
  {
    id: 5,
    icon: Code2,
    title: "Clean, Maintainable Code",
    description:
      "Every line is production-ready: typed, tested, documented. Your future engineers will thank us.",
    className: "lg:col-span-1",
  },
  {
    id: 6,
    icon: Eye,
    title: "Full Transparency",
    description:
      "Daily standups, weekly demos, real-time progress tracking. You always know exactly what's happening and why.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=60",
    className: "sm:col-span-2 lg:col-span-2",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  image,
  className,
  delay,
}: FeatureItem & { delay: number }) {
  return (
    <AnimateIn delay={delay} className={className}>
      <div className="group relative h-full rounded-2xl border border-white/10 p-[1px]">
        <GlowingEffect
          spread={50}
          glow={false}
          disabled={false}
          proximity={80}
          inactiveZone={0.05}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl bg-card/60 p-6 backdrop-blur-sm transition-colors duration-300 group-hover:bg-card/80 lg:p-8">
          {/* Optional background image for wide cards */}
          {image && (
            <>
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 800px"
                className="object-cover opacity-[0.12] transition-opacity duration-500 group-hover:opacity-[0.18]"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-card/70 via-transparent to-transparent" />
            </>
          )}
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 transition-colors group-hover:border-red-500/40 group-hover:bg-red-500/20">
            <Icon className="text-red-400" size={22} />
          </div>
          <div className="relative z-10 flex-1">
            <h3 className="mb-2 font-display text-xl font-bold tracking-tight">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="section-x section-y relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <AnimateIn className="mb-16 text-center">
          <SectionLabel>Why TENSAIFORGE</SectionLabel>
          <h2
            id="why-us-heading"
            className="mt-4 font-display text-4xl font-bold lg:text-5xl"
          >
            Built <span className="text-gradient-forge">Different</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Six principles that define how we engineer every system.
          </p>
        </AnimateIn>

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} {...feature} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
