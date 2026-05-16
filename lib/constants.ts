// ── Types ────────────────────────────────────────────────────

export type Service = {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly gradient: string;
};

export type Stat = {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
  readonly description: string;
};

export type ProcessStep = {
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly details: readonly string[];
};

export type TechItem = {
  readonly name: string;
  readonly category: string;
  readonly devicon?: string;
};

export type Project = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly tags: readonly string[];
  readonly gradient: string;
  readonly metrics: readonly {
    readonly label: string;
    readonly value: string;
  }[];
  readonly href: string;
};

export type Testimonial = {
  readonly id: string;
  readonly quote: string;
  readonly author: string;
  readonly title: string;
  readonly company: string;
  readonly rating: number;
};

export type BentoFeature = {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly size: "sm" | "md" | "lg";
  readonly gradient: string;
};

export type NavItem = {
  readonly label: string;
  readonly href: string;
};

// ── Site ─────────────────────────────────────────────────────

export const SITE = {
  name: "TENSAIFORGE",
  tagline: "Engineering Intelligence",
  description:
    "TENSAIFORGE is an AI-first engineering startup building premium web, mobile, cloud, and automation solutions for forward-thinking companies.",
  url: "https://tensaiforge.com",
  email: "tensaiforge@gmail.com",
  phone: ["+91-7892008290", "+91-8799756909"],
} as const;

// ── Services ─────────────────────────────────────────────────

export const SERVICES: readonly Service[] = [
  {
    id: "web-dev",
    icon: "Globe",
    title: "Website Development",
    description:
      "Blazing-fast, conversion-optimized websites built with modern stacks. Every pixel perfected, every byte optimized.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    id: "web-app",
    icon: "LayoutDashboard",
    title: "Web App Development",
    description:
      "Complex SaaS platforms and enterprise apps engineered for scale, reliability, and exceptional UX.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-blue-500/10 to-violet-500/10",
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with native performance. iOS and Android from a single, type-safe codebase.",
    tags: ["React Native", "Expo", "TypeScript"],
    gradient: "from-violet-500/10 to-pink-500/10",
  },
  {
    id: "cloud",
    icon: "Cloud",
    title: "Cloud & Backend Solutions",
    description:
      "Serverless architectures, microservices, and cloud-native infrastructure that scales infinitely under load.",
    tags: ["AWS", "GCP", "Kubernetes"],
    gradient: "from-emerald-500/10 to-cyan-500/10",
  },
  {
    id: "ai",
    icon: "Brain",
    title: "AI Chatbots & Assistants",
    description:
      "Production-grade AI integrations with OpenAI, Anthropic, and custom LLMs. RAG, fine-tuning, agents.",
    tags: ["OpenAI", "Claude", "LangChain"],
    gradient: "from-amber-500/10 to-orange-500/10",
  },
] as const;

// ── Stats ────────────────────────────────────────────────────

export const STATS: readonly Stat[] = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across 20+ industries worldwide",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on post-project surveys",
  },
  {
    value: 3,
    suffix: "x",
    label: "Performance Gains",
    description: "Average speed improvement delivered",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Automation Hours Saved",
    description: "For our clients, annually",
  },
] as const;

// ── Process ──────────────────────────────────────────────────

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Discover & Strategize",
    description:
      "Deep discovery sessions to understand your business goals, technical constraints, and user needs.",
    details: [
      "Stakeholder interviews",
      "Technical audit",
      "Architecture planning",
      "Timeline & milestone definition",
    ],
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "High-fidelity design systems and interactive prototypes that validate the solution before a single line of code is written.",
    details: [
      "Design system creation",
      "Interactive prototypes",
      "User testing",
      "Accessibility audit",
    ],
  },
  {
    step: "03",
    title: "Build & Optimize",
    description:
      "Agile development with weekly demos. CI/CD from day one. Every PR reviewed, every component tested.",
    details: [
      "Agile sprints",
      "Code reviews",
      "Performance optimization",
      "Continuous integration",
    ],
  },
  {
    step: "04",
    title: "Deploy & Scale",
    description:
      "Zero-downtime deployments to production infrastructure. Monitoring, alerting, and ongoing optimization as you grow.",
    details: [
      "Infrastructure as code",
      "Monitoring & alerting",
      "Post-launch support",
      "Growth optimization",
    ],
  },
] as const;

// ── Tech Stack ───────────────────────────────────────────────

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const TECH_ITEMS: readonly TechItem[] = [
  {
    name: "Next.js",
    category: "Frontend",
    devicon: `${DEVICON}/nextjs/nextjs-plain.svg`,
  },
  {
    name: "React",
    category: "Frontend",
    devicon: `${DEVICON}/react/react-original.svg`,
  },
  {
    name: "TypeScript",
    category: "Language",
    devicon: `${DEVICON}/typescript/typescript-original.svg`,
  },
  {
    name: "Node.js",
    category: "Backend",
    devicon: `${DEVICON}/nodejs/nodejs-original.svg`,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    devicon: `${DEVICON}/postgresql/postgresql-original.svg`,
  },
  {
    name: "Redis",
    category: "Cache",
    devicon: `${DEVICON}/redis/redis-original.svg`,
  },
  // {
  //   name: "AWS",
  //   category: "Cloud",
  //   devicon: `${DEVICON}/amazonwebservices/amazonwebservices-original.svg`,
  // },
  {
    name: "GCP",
    category: "Cloud",
    devicon: `${DEVICON}/googlecloud/googlecloud-original.svg`,
  },
  {
    name: "Docker",
    category: "DevOps",
    devicon: `${DEVICON}/docker/docker-original.svg`,
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    devicon: `${DEVICON}/kubernetes/kubernetes-plain.svg`,
  },
  { name: "OpenAI", category: "AI" },
  { name: "Claude", category: "AI" },
  {
    name: "Prisma",
    category: "ORM",
    devicon: `${DEVICON}/prisma/prisma-original.svg`,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    devicon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  },
  { name: "Framer Motion", category: "Animation" },
  {
    name: "Vercel",
    category: "Deploy",
    devicon: `${DEVICON}/vercel/vercel-original.svg`,
  },
] as const;

// ── Projects ─────────────────────────────────────────────────

export const PROJECTS: readonly Project[] = [
  {
    id: "nexus-ai",
    title: "Nexus AI Platform",
    description:
      "Multi-tenant AI analytics platform processing 10M+ events daily with real-time dashboards and LLM-powered insights.",
    category: "AI / SaaS",
    tags: ["Next.js", "OpenAI", "ClickHouse", "Kubernetes"],
    gradient: "from-cyan-500 to-blue-600",
    metrics: [
      { label: "DAU", value: "50K+" },
      { label: "Latency", value: "<120ms" },
      { label: "Uptime", value: "99.99%" },
    ],
    href: "#",
  },
  {
    id: "fleet-ops",
    title: "FleetOps Command",
    description:
      "Real-time fleet management system with AI-driven route optimization, predictive maintenance, and live telemetry.",
    category: "Enterprise / Mobile",
    tags: ["React Native", "Node.js", "Redis", "AWS"],
    gradient: "from-violet-500 to-purple-600",
    metrics: [
      { label: "Fleet Size", value: "10K+" },
      { label: "Fuel Saved", value: "23%" },
      { label: "Response", value: "<50ms" },
    ],
    href: "#",
  },
  {
    id: "synapse-bank",
    title: "Synapse Banking",
    description:
      "Core banking platform rebuild with real-time fraud detection, PSD2 compliance, and sub-second transaction processing.",
    category: "FinTech",
    tags: ["Next.js", "PostgreSQL", "Kafka", "GCP"],
    gradient: "from-emerald-500 to-teal-600",
    metrics: [
      { label: "Transactions/s", value: "50K" },
      { label: "Fraud Blocked", value: "99.7%" },
      { label: "Uptime", value: "99.999%" },
    ],
    href: "#",
  },
] as const;

// ── Testimonials ─────────────────────────────────────────────

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "t1",
    quote:
      "TENSAIFORGE transformed our aging monolith into a cloud-native platform in 6 months. The engineering quality is unmatched — they think in systems, not just features.",
    author: "Sarah Chen",
    title: "CTO",
    company: "Meridian Labs",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Our AI chatbot now handles 80% of support tickets autonomously. The RAG implementation they built is genuinely state-of-the-art. Exceptional technical depth.",
    author: "Marcus Johnson",
    title: "VP Engineering",
    company: "Ather Analytics",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "From wireframes to production in 8 weeks. The team's attention to performance and accessibility set a new bar for what I expect from engineering partners.",
    author: "Priya Nair",
    title: "Product Director",
    company: "Velox Commerce",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Three re-architects failed before TENSAIFORGE. They diagnosed root causes in week one and delivered a stable, scalable system that's been running flawlessly for 18 months.",
    author: "David Park",
    title: "Founder & CEO",
    company: "Orbital Finance",
    rating: 5,
  },
] as const;

// ── Bento Features (Why Us) ─────────────────────────────────

export const BENTO_FEATURES: readonly BentoFeature[] = [
  {
    id: "ai-first",
    icon: "Zap",
    title: "AI-First Engineering",
    description:
      "Every system we build has AI integration baked in from day one — not bolted on afterward. LLMs, embeddings, and agents as core infrastructure.",
    size: "lg",
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
  },
  {
    id: "performance",
    icon: "Gauge",
    title: "Performance Obsessed",
    description:
      "Core Web Vitals scores in the top 5%. Every millisecond matters.",
    size: "sm",
    gradient: "from-emerald-500/10 to-transparent",
  },
  {
    id: "architecture",
    icon: "Layers",
    title: "Scalable Architecture",
    description:
      "Systems designed to handle 100x your current load without re-architecting. Event-driven, cloud-native, resilient by default.",
    size: "md",
    gradient: "from-violet-500/10 to-transparent",
  },
  {
    id: "code-quality",
    icon: "Code2",
    title: "Clean, Maintainable Code",
    description:
      "Type-safe, well-documented, thoroughly tested codebases your future team will thank us for.",
    size: "sm",
    gradient: "from-amber-500/10 to-transparent",
  },
  {
    id: "security",
    icon: "Shield",
    title: "Security by Design",
    description:
      "OWASP Top 10 hardening, zero-trust architecture, automated vulnerability scanning in every CI pipeline.",
    size: "md",
    gradient: "from-rose-500/10 to-transparent",
  },
  {
    id: "transparency",
    icon: "Eye",
    title: "Full Transparency",
    description:
      "Weekly demos, public GitHub boards, and real-time dashboards. You'll always know exactly where your project stands.",
    size: "sm",
    gradient: "from-sky-500/10 to-transparent",
  },
] as const;

// ── Navigation ───────────────────────────────────────────────

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
] as const;
