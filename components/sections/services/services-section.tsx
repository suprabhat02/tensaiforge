"use client";

import Image from "next/image";
import { Globe, Layers, Smartphone, Cloud, Bot } from "@/lib/animated-icons";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const SERVICES = [
  {
    id: 1,
    icon: Globe,
    title: "Website Development",
    description:
      "Blazing-fast, conversion-optimized websites built with Next.js, TypeScript & Tailwind CSS. Core Web Vitals in the top 5%.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=60",
    className: "sm:col-span-2 lg:col-span-2",
  },
  {
    id: 2,
    icon: Layers,
    title: "Web App Development",
    description:
      "Complex SaaS platforms and enterprise apps engineered for millions of users. From MVP to IPO-ready.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=60",
    className: "lg:col-span-1",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform apps with native performance. One codebase, every device, zero compromise.",
    tags: ["React Native", "Expo", "iOS/Android"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=60",
    className: "lg:col-span-1",
  },
  {
    id: 4,
    icon: Cloud,
    title: "Cloud & Backend Solutions",
    description:
      "Serverless architectures, microservices, and cloud-native infrastructure that scales infinitely.",
    tags: ["AWS", "GCP", "Kubernetes"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=60",
    className: "lg:col-span-1",
  },
  {
    id: 5,
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description:
      "Production-grade AI integrations with GPT-4, Claude, and custom fine-tuned models embedded into your product.",
    tags: ["OpenAI", "LangChain", "RAG"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=60",
    className: "lg:col-span-1",
  },
];

type ServiceItem = {
  id: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  tags: string[];
  image: string;
  className: string;
};

function ServiceCard({
  icon: Icon,
  title,
  description,
  tags,
  image,
  className,
  delay,
}: ServiceItem & { delay: number }) {
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
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card/60 backdrop-blur-sm transition-colors duration-300 group-hover:bg-card/80">
          {/* Card image */}
          <div className="relative h-44 shrink-0 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-card/90" />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col gap-4 p-6 lg:p-8">
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
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}

export function ServicesSection() {
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
          <SectionLabel>What We Do</SectionLabel>
          <h2
            id="services-heading"
            className="mt-4 font-display text-4xl font-bold lg:text-5xl"
          >
            Services Built for{" "}
            <span className="text-gradient-forge">Scale</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            End-to-end engineering solutions from prototype to production.
          </p>
        </AnimateIn>

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} {...service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
