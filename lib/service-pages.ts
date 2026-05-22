// ── Types ────────────────────────────────────────────────────

export type ServiceDeliverable = {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
};

export type ServiceFeature = {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
};

export type ServiceFAQ = {
  readonly question: string;
  readonly answer: string;
};

export type ServiceStat = {
  readonly value: string;
  readonly label: string;
};

export type AIWorkflowStep = {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly tool: string;
};

export type ServicePageData = {
  readonly slug: string;
  readonly serviceId: string;
  readonly title: string;
  readonly headline: string;
  readonly subheadline: string;
  readonly description: string;
  readonly heroImage: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly keywords: readonly string[];
  readonly deliverables: readonly ServiceDeliverable[];
  readonly features: readonly ServiceFeature[];
  readonly techStack: readonly { name: string; icon?: string }[];
  readonly stats: readonly ServiceStat[];
  readonly faqs: readonly ServiceFAQ[];
  readonly aiWorkflow: {
    readonly headline: string;
    readonly description: string;
    readonly image: string;
    readonly steps: readonly AIWorkflowStep[];
  };
  readonly showcaseImage: {
    readonly src: string;
    readonly alt: string;
    readonly caption: string;
  };
};

// ── Devicon CDN base ─────────────────────────────────────────
const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// ── Service Pages Data ───────────────────────────────────────

export const SERVICE_PAGES: readonly ServicePageData[] = [
  // ─── Website Development ───────────────────────────────────
  {
    slug: "website-development",
    serviceId: "web-dev",
    title: "Website Development",
    headline: "Websites That Convert Visitors Into Customers",
    subheadline:
      "We don't just build websites — we engineer high-performance digital experiences that rank on Google, load in under a second, and turn clicks into revenue.",
    description:
      "From startup landing pages to complex corporate platforms, every site we ship is built with Next.js, optimized for Core Web Vitals, and designed to outperform your competition in search and speed.",
    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=60",
    metaTitle:
      "Website Development Services — Fast, SEO-Optimized Websites | TENSAIFORGE",
    metaDescription:
      "Custom website development with Next.js & TypeScript. Core Web Vitals in the top 5%, SEO-first architecture, and conversion-optimized design. Get a free quote.",
    keywords: [
      "website development",
      "custom website development",
      "Next.js website",
      "SEO-optimized website",
      "fast website development",
      "responsive web design",
      "website development agency",
      "professional website development",
    ],
    deliverables: [
      {
        title: "Startup & SaaS Landing Pages",
        description:
          "High-converting landing pages with bold visuals, clear CTAs, and A/B-tested layouts that turn traffic into signups.",
        icon: "Rocket",
      },
      {
        title: "Corporate & Enterprise Sites",
        description:
          "Multi-page websites with content management, localization support, and enterprise-grade security built from the ground up.",
        icon: "Building2",
      },
      {
        title: "E-Commerce Storefronts",
        description:
          "Lightning-fast online stores with headless CMS integration, real-time inventory, and seamless checkout flows.",
        icon: "ShoppingCart",
      },
      {
        title: "Portfolio & Agency Sites",
        description:
          "Visually stunning showcase sites with smooth animations, image galleries, and case study templates that win clients.",
        icon: "Palette",
      },
      {
        title: "Documentation & Knowledge Bases",
        description:
          "Developer-friendly documentation sites with search, versioning, and API reference generation — all statically generated.",
        icon: "BookOpen",
      },
      {
        title: "Blog & Content Platforms",
        description:
          "SEO-first content platforms with MDX support, automatic sitemap generation, and structured data for rich Google results.",
        icon: "FileText",
      },
    ],
    features: [
      {
        title: "Core Web Vitals Optimized",
        description:
          "Every site ships with LCP under 1.5s, CLS near zero, and INP below 200ms. We profile, benchmark, and optimize relentlessly until your scores are green across the board.",
        icon: "Gauge",
      },
      {
        title: "SEO-First Architecture",
        description:
          "Semantic HTML, structured data, proper heading hierarchy, canonical URLs, sitemap generation, and meta tags — all baked into the architecture, not bolted on after.",
        icon: "Search",
      },
      {
        title: "Responsive Across Every Device",
        description:
          "Mobile-first design that looks and works perfectly from a 320px phone to a 4K monitor. Touch-optimized, keyboard-navigable, and screen-reader friendly.",
        icon: "Monitor",
      },
      {
        title: "Conversion-Driven Design",
        description:
          "Strategic CTAs, trust signals, social proof placement, and user flow optimization. Every design decision is backed by data and intent.",
        icon: "TrendingUp",
      },
      {
        title: "Blazing-Fast Load Times",
        description:
          "Static generation, edge caching, image optimization, code splitting, and lazy loading. Your site loads before visitors even finish blinking.",
        icon: "Zap",
      },
      {
        title: "Accessible by Default",
        description:
          "WCAG 2.1 AA compliant with proper ARIA attributes, focus management, color contrast, and keyboard navigation. Inclusivity isn't optional — it's standard.",
        icon: "Eye",
      },
    ],
    techStack: [
      { name: "Next.js", icon: `${DI}/nextjs/nextjs-plain.svg` },
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      {
        name: "Tailwind CSS",
        icon: `${DI}/tailwindcss/tailwindcss-original.svg`,
      },
      { name: "Framer Motion" },
      { name: "Vercel", icon: `${DI}/vercel/vercel-original.svg` },
    ],
    stats: [
      { value: "<1.5s", label: "Average LCP" },
      { value: "100%", label: "Lighthouse SEO Score" },
      { value: "50+", label: "Websites Shipped" },
      { value: "3x", label: "Avg. Conversion Lift" },
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "A typical marketing website takes 2-4 weeks from kickoff to launch. Complex multi-page sites with CMS integration can take 4-8 weeks. We provide a detailed timeline during our discovery call.",
      },
      {
        question: "Do you build WordPress websites?",
        answer:
          "We specialize in Next.js and React-based websites because they deliver significantly better performance, security, and SEO compared to WordPress. If you need CMS functionality, we integrate headless CMS solutions like Sanity or Contentful.",
      },
      {
        question: "Will my website be SEO-friendly?",
        answer:
          "Absolutely. SEO is built into our development process from day one — semantic HTML, structured data, proper heading hierarchy, sitemap generation, meta tags, and Core Web Vitals optimization are all standard.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We regularly rebuild and modernize existing websites. We'll audit your current site, identify performance and SEO gaps, and deliver a modern, optimized version that outperforms the original.",
      },
      {
        question: "What does website development cost?",
        answer:
          "Pricing depends on complexity, number of pages, and required features. A startup landing page starts around $2,000, while a full corporate site with CMS ranges from $5,000-$15,000. We provide detailed quotes after understanding your requirements.",
      },
    ],
    aiWorkflow: {
      headline: "AI-Powered Website Development",
      description:
        "We leverage cutting-edge AI tools and intelligent workflows to ship websites faster, with fewer bugs, and optimized from day one — without sacrificing quality or creativity.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=70",
      steps: [
        {
          title: "AI-Assisted Design Generation",
          description:
            "We use AI to generate design variations, color palettes, and layout options in minutes — then our designers refine the best concepts into pixel-perfect mockups.",
          icon: "Palette",
          tool: "Figma AI · Midjourney · v0",
        },
        {
          title: "Intelligent Code Generation",
          description:
            "AI pair-programming accelerates development by generating boilerplate, suggesting optimizations, and catching bugs before they reach production.",
          icon: "Code",
          tool: "GitHub Copilot · Claude Code · Cursor",
        },
        {
          title: "Automated SEO Analysis",
          description:
            "AI crawlers analyze your content structure, heading hierarchy, and keyword density in real-time — ensuring every page is optimized before deployment.",
          icon: "Search",
          tool: "Screaming Frog · Surfer SEO · Semrush AI",
        },
        {
          title: "AI Performance Optimization",
          description:
            "Machine learning models analyze your Core Web Vitals, identify bottlenecks, and suggest image compression, code splitting, and caching strategies automatically.",
          icon: "Gauge",
          tool: "Lighthouse CI · WebPageTest · SpeedCurve",
        },
      ],
    },
    showcaseImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=70",
      alt: "Modern website displayed on multiple devices showing responsive design",
      caption:
        "Every website we build is responsive, accessible, and optimized for every screen size — from mobile to ultrawide.",
    },
  },

  // ─── Web App Development ───────────────────────────────────
  {
    slug: "web-app-development",
    serviceId: "web-app",
    title: "Web App Development",
    headline: "Web Applications Built to Scale With Your Ambition",
    subheadline:
      "From MVP to millions of users — we engineer web applications that handle real-world complexity without breaking a sweat. Built for today, architected for tomorrow.",
    description:
      "We build SaaS platforms, admin dashboards, customer portals, and internal tools that scale reliably. Every app ships with real-time capabilities, role-based access, and rock-solid architecture.",
    heroImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=60",
    metaTitle:
      "Web App Development Services — Scalable SaaS & Custom Apps | TENSAIFORGE",
    metaDescription:
      "Custom web application development for startups and enterprises. SaaS platforms, admin dashboards, and customer portals built with React, Node.js & PostgreSQL.",
    keywords: [
      "web app development",
      "custom web application",
      "SaaS development",
      "web application development company",
      "React web app",
      "enterprise web application",
      "web app development agency",
      "full-stack web development",
    ],
    deliverables: [
      {
        title: "SaaS Platforms",
        description:
          "Multi-tenant SaaS applications with subscription billing, user management, analytics dashboards, and API access — ready for your first 10 or first 10,000 customers.",
        icon: "Cloud",
      },
      {
        title: "Admin Dashboards",
        description:
          "Data-rich dashboards with real-time charts, filterable tables, export capabilities, and role-based views that make operations effortless.",
        icon: "LayoutDashboard",
      },
      {
        title: "Customer Portals",
        description:
          "Self-service portals where your customers manage accounts, track orders, submit tickets, and access resources — reducing support load by up to 60%.",
        icon: "Users",
      },
      {
        title: "Internal Business Tools",
        description:
          "Custom CRMs, project trackers, inventory systems, and workflow automation tools tailored exactly to how your team works.",
        icon: "Wrench",
      },
      {
        title: "MVP & Prototype Development",
        description:
          "Validate your idea with a production-quality MVP in 4-8 weeks. Built with real architecture so you can iterate and scale without rebuilding.",
        icon: "Rocket",
      },
      {
        title: "Real-Time Collaboration Apps",
        description:
          "Applications with live updates, collaborative editing, presence indicators, and WebSocket-powered instant messaging.",
        icon: "Radio",
      },
    ],
    features: [
      {
        title: "Scalable From Day One",
        description:
          "Microservices-ready architecture with horizontal scaling, database sharding strategies, and caching layers. Handle 100x your current load without re-architecting.",
        icon: "TrendingUp",
      },
      {
        title: "Real-Time Capabilities",
        description:
          "WebSocket connections, server-sent events, and optimistic UI updates. Your users see changes the moment they happen — no refresh required.",
        icon: "Zap",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Granular permissions with team management, SSO integration, and audit logging. Control exactly who sees what, down to individual fields.",
        icon: "Shield",
      },
      {
        title: "API-First Design",
        description:
          "RESTful and GraphQL APIs with comprehensive documentation, rate limiting, and versioning. Your web app becomes a platform others can build on.",
        icon: "Code",
      },
      {
        title: "Automated Testing & CI/CD",
        description:
          "95%+ test coverage with unit, integration, and E2E tests. Every commit triggers automated builds, tests, and preview deployments.",
        icon: "CheckCircle",
      },
      {
        title: "Performance Profiled",
        description:
          "Database query optimization, N+1 detection, bundle analysis, and runtime profiling. We don't ship until the performance budget is met.",
        icon: "Gauge",
      },
    ],
    techStack: [
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Next.js", icon: `${DI}/nextjs/nextjs-plain.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      {
        name: "PostgreSQL",
        icon: `${DI}/postgresql/postgresql-original.svg`,
      },
      { name: "Redis", icon: `${DI}/redis/redis-original.svg` },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      { name: "Prisma", icon: `${DI}/prisma/prisma-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
    ],
    stats: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "<200ms", label: "API Response Time" },
      { value: "30+", label: "Web Apps Shipped" },
      { value: "10M+", label: "Events Processed Daily" },
    ],
    faqs: [
      {
        question: "How is a web app different from a website?",
        answer:
          "A website primarily displays information, while a web application lets users interact, create data, and perform tasks — think Gmail, Notion, or Stripe. Web apps have user authentication, dynamic data, and complex business logic.",
      },
      {
        question: "Can you build an MVP first and scale later?",
        answer:
          "Absolutely — that's our recommended approach. We build MVPs with real production architecture (not throwaway code), so when you're ready to scale, we extend the existing foundation rather than starting over.",
      },
      {
        question: "What databases do you work with?",
        answer:
          "PostgreSQL is our primary choice for relational data. We also use Redis for caching and real-time features, MongoDB for document storage, and ClickHouse for analytics workloads.",
      },
      {
        question: "Do you provide ongoing maintenance after launch?",
        answer:
          "Yes. We offer ongoing maintenance plans that include bug fixes, performance monitoring, security updates, and feature development. Most clients continue working with us after launch.",
      },
      {
        question: "How do you handle security for web applications?",
        answer:
          "Security is built into every layer: OWASP Top 10 hardening, input validation with Zod, parameterized queries, JWT/session-based auth, RBAC, rate limiting, and regular dependency audits.",
      },
    ],
    aiWorkflow: {
      headline: "AI-Accelerated App Engineering",
      description:
        "Our AI-first development pipeline catches bugs before they happen, generates test suites automatically, and optimizes database queries — letting our engineers focus on building features, not boilerplate.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=70",
      steps: [
        {
          title: "AI Code Review & Bug Detection",
          description:
            "Every pull request is analyzed by AI reviewers that catch security vulnerabilities, performance anti-patterns, and logic errors before human review begins.",
          icon: "Shield",
          tool: "CodeRabbit · SonarQube · Snyk AI",
        },
        {
          title: "Automated Test Generation",
          description:
            "AI generates comprehensive unit tests, integration tests, and edge case scenarios from your codebase — achieving 95%+ coverage with minimal manual effort.",
          icon: "CheckCircle",
          tool: "Copilot · Codium AI · Playwright",
        },
        {
          title: "Smart Database Optimization",
          description:
            "AI analyzes query patterns, suggests indexing strategies, and detects N+1 queries in real-time during development — not after production complaints.",
          icon: "Database",
          tool: "PgHero · AI Query Analyzer · Datadog APM",
        },
        {
          title: "Predictive Scaling & Monitoring",
          description:
            "ML models predict traffic patterns and auto-scale infrastructure before demand spikes. Anomaly detection alerts your team to issues before users notice.",
          icon: "TrendingUp",
          tool: "Datadog · Grafana ML · PagerDuty AIOps",
        },
      ],
    },
    showcaseImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=70",
      alt: "Complex web application dashboard with data visualizations and analytics",
      caption:
        "Our web applications handle millions of events with real-time dashboards, role-based access, and enterprise-grade reliability.",
    },
  },

  // ─── Mobile App Development ────────────────────────────────
  {
    slug: "mobile-app-development",
    serviceId: "mobile",
    title: "Mobile App Development",
    headline: "One Codebase. Every Device. Zero Compromise.",
    subheadline:
      "We build cross-platform mobile apps that feel native on both iOS and Android — with a single TypeScript codebase that ships faster and costs less than building twice.",
    description:
      "Using React Native and Expo, we deliver mobile applications with native performance, platform-specific UI polish, and seamless app store deployment.",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=60",
    metaTitle:
      "Mobile App Development — Cross-Platform iOS & Android Apps | TENSAIFORGE",
    metaDescription:
      "Cross-platform mobile app development with React Native & Expo. Native performance on iOS & Android from a single codebase. Get your app to market faster.",
    keywords: [
      "mobile app development",
      "React Native development",
      "cross-platform app development",
      "iOS app development",
      "Android app development",
      "mobile app development company",
      "Expo app development",
      "custom mobile app",
    ],
    deliverables: [
      {
        title: "Consumer-Facing Apps",
        description:
          "Polished mobile experiences for your customers — onboarding flows, push notifications, in-app purchases, and smooth animations that feel native.",
        icon: "Smartphone",
      },
      {
        title: "Enterprise Mobile Apps",
        description:
          "Secure internal apps with biometric auth, MDM compatibility, offline data sync, and integration with your existing enterprise systems.",
        icon: "Building2",
      },
      {
        title: "Marketplace & On-Demand Apps",
        description:
          "Two-sided marketplace apps with real-time matching, payment processing, rating systems, and location-based features.",
        icon: "ShoppingCart",
      },
      {
        title: "Health & Fitness Apps",
        description:
          "HIPAA-aware health apps with wearable integration, activity tracking, telemedicine features, and secure data handling.",
        icon: "Heart",
      },
      {
        title: "Social & Communication Apps",
        description:
          "Real-time messaging, media sharing, stories, feeds, and community features built for engagement and retention.",
        icon: "MessageCircle",
      },
      {
        title: "IoT Companion Apps",
        description:
          "Mobile apps that connect to hardware devices via Bluetooth, Wi-Fi, or cloud APIs — with real-time monitoring and control interfaces.",
        icon: "Wifi",
      },
    ],
    features: [
      {
        title: "True Native Performance",
        description:
          "React Native renders actual native UI components — not web views in a wrapper. Your app performs identically to Swift/Kotlin apps on both platforms.",
        icon: "Zap",
      },
      {
        title: "Single Codebase, Dual Platforms",
        description:
          "One TypeScript codebase targets both iOS and Android. Ship features to both platforms simultaneously — halving development time and cost.",
        icon: "GitBranch",
      },
      {
        title: "Offline-First Architecture",
        description:
          "Local data persistence with background sync. Your app works reliably in subway tunnels, airplanes, and areas with poor connectivity.",
        icon: "WifiOff",
      },
      {
        title: "Over-The-Air Updates",
        description:
          "Push bug fixes and minor updates instantly without app store review cycles. Critical patches reach users in minutes, not days.",
        icon: "RefreshCw",
      },
      {
        title: "Push Notifications That Convert",
        description:
          "Segmented, personalized notifications with deep linking. Trigger based on user behavior, location, or time — with full analytics on open and conversion rates.",
        icon: "Bell",
      },
      {
        title: "App Store Optimization",
        description:
          "Optimized listings, screenshots, descriptions, and keywords for both App Store and Google Play. We handle the submission process end-to-end.",
        icon: "Store",
      },
    ],
    techStack: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Firebase", icon: `${DI}/firebase/firebase-original.svg` },
      { name: "Redux" },
    ],
    stats: [
      { value: "60fps", label: "Animation Performance" },
      { value: "50%", label: "Faster Than Native (dev time)" },
      { value: "20+", label: "Apps Published" },
      { value: "4.8★", label: "Avg. App Store Rating" },
    ],
    faqs: [
      {
        question: "Why React Native instead of native Swift/Kotlin?",
        answer:
          "React Native lets us build for both iOS and Android with a single codebase — cutting development time and cost roughly in half. The performance difference is negligible for 95% of apps, and you get faster feature delivery across both platforms.",
      },
      {
        question: "Can you publish to both App Store and Google Play?",
        answer:
          "Yes. We handle the entire submission process — app signing, store listing optimization, screenshot generation, compliance requirements, and post-submission follow-up for both stores.",
      },
      {
        question: "Do cross-platform apps feel like native apps?",
        answer:
          "Yes. React Native renders actual native components, not web views. Platform-specific design patterns (iOS navigation, Android Material) are respected so your app feels right at home on each platform.",
      },
      {
        question: "Can you integrate with device hardware?",
        answer:
          "Absolutely. Camera, GPS, Bluetooth, biometrics, accelerometer, NFC — React Native has mature libraries for all device APIs, and Expo simplifies access to most of them.",
      },
      {
        question: "What about app performance?",
        answer:
          "Our apps run at 60fps. We use Hermes engine for faster startup, optimize re-renders with React compiler, and profile with Flipper to catch jank before it reaches users.",
      },
    ],
    aiWorkflow: {
      headline: "AI-Enhanced Mobile Development",
      description:
        "From automated UI testing across 100+ device configurations to AI-powered crash analysis, our mobile development pipeline is supercharged with intelligent tooling.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=70",
      steps: [
        {
          title: "AI Visual Testing",
          description:
            "AI compares screenshots across 100+ device sizes and OS versions to catch visual regressions that manual testing would miss — in seconds, not hours.",
          icon: "Eye",
          tool: "Applitools · Percy · Detox",
        },
        {
          title: "Intelligent Crash Analysis",
          description:
            "AI groups crash reports by root cause, identifies affected user segments, and suggests fixes — reducing mean time to resolution by 70%.",
          icon: "Wrench",
          tool: "Firebase Crashlytics · Sentry AI · Instabug",
        },
        {
          title: "AI-Driven UX Optimization",
          description:
            "Heatmaps and session recordings analyzed by AI reveal UX friction points, drop-off patterns, and conversion opportunities you can't see in aggregate analytics.",
          icon: "BarChart",
          tool: "Hotjar AI · Mixpanel · Amplitude",
        },
        {
          title: "Automated App Store Optimization",
          description:
            "AI generates and A/B tests app store screenshots, descriptions, and keywords — continuously improving visibility and download conversion rates.",
          icon: "TrendingUp",
          tool: "AppTweak · SplitMetrics · Sensor Tower",
        },
      ],
    },
    showcaseImage: {
      src: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=70",
      alt: "Mobile app interface displayed on a smartphone with clean modern design",
      caption:
        "Cross-platform apps that feel native on every device — built with React Native and delivered with enterprise-grade quality.",
    },
  },

  // ─── Cloud & Backend Solutions ─────────────────────────────
  {
    slug: "cloud-backend-solutions",
    serviceId: "cloud",
    title: "Cloud & Backend Solutions",
    headline: "Infrastructure That Scales While You Sleep",
    subheadline:
      "We architect and deploy cloud-native backend systems that handle millions of requests, auto-scale on demand, and cost a fraction of traditional infrastructure.",
    description:
      "From serverless APIs to Kubernetes clusters, we design backend architectures that give your product a rock-solid foundation. Security hardened, cost-optimized, and built for 99.99% uptime.",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=60",
    metaTitle:
      "Cloud & Backend Solutions — Scalable Infrastructure | TENSAIFORGE",
    metaDescription:
      "Cloud-native backend development with AWS, GCP & Kubernetes. Serverless APIs, microservices architecture, and DevOps automation. 99.99% uptime guaranteed.",
    keywords: [
      "cloud backend solutions",
      "backend development",
      "cloud architecture",
      "serverless development",
      "microservices architecture",
      "DevOps services",
      "cloud migration",
      "Kubernetes deployment",
      "API development",
    ],
    deliverables: [
      {
        title: "API Development",
        description:
          "RESTful and GraphQL APIs with authentication, rate limiting, versioning, and comprehensive OpenAPI documentation — ready for third-party integrations.",
        icon: "Code",
      },
      {
        title: "Microservices Architecture",
        description:
          "Decompose monoliths into independently deployable services with message queues, service discovery, and distributed tracing.",
        icon: "GitBranch",
      },
      {
        title: "Cloud Migration",
        description:
          "Migrate on-premise systems to AWS or GCP with zero downtime. We assess, plan, execute, and optimize — typically reducing infrastructure costs by 30-50%.",
        icon: "CloudUpload",
      },
      {
        title: "DevOps & CI/CD Setup",
        description:
          "Automated build pipelines, container orchestration, infrastructure-as-code, and monitoring dashboards that make deployments boring (in the best way).",
        icon: "Settings",
      },
      {
        title: "Database Architecture",
        description:
          "Schema design, query optimization, replication setup, and migration strategies. PostgreSQL, Redis, MongoDB, ClickHouse — the right tool for each workload.",
        icon: "Database",
      },
      {
        title: "Serverless Solutions",
        description:
          "Event-driven functions that scale to zero when idle and handle millions of invocations without infrastructure management. Pay only for what you use.",
        icon: "Zap",
      },
    ],
    features: [
      {
        title: "Auto-Scaling Infrastructure",
        description:
          "Systems that automatically scale up during traffic spikes and scale down during quiet hours. Your infrastructure cost matches your actual usage, not your peak capacity.",
        icon: "TrendingUp",
      },
      {
        title: "99.99% Uptime Architecture",
        description:
          "Multi-region deployments with automatic failover, health checks, and circuit breakers. Your backend stays up even when individual components fail.",
        icon: "Shield",
      },
      {
        title: "Cost Optimization",
        description:
          "Right-sized instances, spot/preemptible nodes, reserved capacity planning, and continuous cost monitoring. Clients typically see 30-50% reduction in cloud spend.",
        icon: "DollarSign",
      },
      {
        title: "Security Hardened",
        description:
          "Zero-trust networking, encrypted data at rest and in transit, IAM policies with least privilege, and automated vulnerability scanning.",
        icon: "Lock",
      },
      {
        title: "Observability Built-In",
        description:
          "Structured logging, distributed tracing, custom metrics, and alerting dashboards. Know exactly what's happening in your system at all times.",
        icon: "Eye",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Every server, database, and network rule defined in version-controlled Terraform or Pulumi. Reproduce your entire infrastructure in minutes.",
        icon: "FileCode",
      },
    ],
    techStack: [
      {
        name: "GCP",
        icon: `${DI}/googlecloud/googlecloud-original.svg`,
      },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      {
        name: "Kubernetes",
        icon: `${DI}/kubernetes/kubernetes-plain.svg`,
      },
      { name: "Terraform", icon: `${DI}/terraform/terraform-original.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      {
        name: "PostgreSQL",
        icon: `${DI}/postgresql/postgresql-original.svg`,
      },
      { name: "Redis", icon: `${DI}/redis/redis-original.svg` },
      { name: "Nginx", icon: `${DI}/nginx/nginx-original.svg` },
    ],
    stats: [
      { value: "99.99%", label: "Uptime Delivered" },
      { value: "40%", label: "Avg. Cost Reduction" },
      { value: "<50ms", label: "API Latency P95" },
      { value: "10M+", label: "Daily Requests Handled" },
    ],
    faqs: [
      {
        question: "AWS or GCP — which should I choose?",
        answer:
          "It depends on your needs. GCP excels at data/AI workloads and Kubernetes. AWS has the broadest service catalog. We're experienced with both and will recommend the best fit during our discovery call.",
      },
      {
        question: "Can you migrate our existing backend to the cloud?",
        answer:
          "Yes. We've migrated dozens of on-premise and legacy systems to cloud infrastructure with zero downtime. We assess dependencies, create a migration plan, and execute in phases.",
      },
      {
        question: "How do you ensure security?",
        answer:
          "Zero-trust networking, encrypted storage, IAM least-privilege policies, automated vulnerability scanning, and regular penetration testing. Security is baked into every architecture decision.",
      },
      {
        question: "Will cloud infrastructure be expensive?",
        answer:
          "Not when architected correctly. Clients typically see 30-50% reduction in infrastructure costs after our optimization. We use auto-scaling, spot instances, and right-sizing to keep costs predictable.",
      },
      {
        question: "Do you set up monitoring and alerting?",
        answer:
          "Always. Every deployment includes structured logging, health-check endpoints, uptime monitoring, and PagerDuty/Slack alerting. You'll know about issues before your users do.",
      },
    ],
    aiWorkflow: {
      headline: "AI-Driven Cloud Operations",
      description:
        "Our cloud infrastructure is managed by AI-powered observability, intelligent auto-scaling, and predictive maintenance — so your systems stay fast, secure, and cost-efficient around the clock.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=70",
      steps: [
        {
          title: "AIOps — Intelligent Monitoring",
          description:
            "AI correlates logs, metrics, and traces across services to pinpoint root causes in seconds — not hours of manual log-diving.",
          icon: "Eye",
          tool: "Datadog AIOps · New Relic AI · Grafana ML",
        },
        {
          title: "Predictive Auto-Scaling",
          description:
            "ML models learn your traffic patterns and pre-scale infrastructure before demand spikes — eliminating cold starts and over-provisioning.",
          icon: "TrendingUp",
          tool: "AWS Auto Scaling · GCP Recommender · KEDA",
        },
        {
          title: "AI-Powered Cost Optimization",
          description:
            "AI continuously analyzes resource usage, recommends right-sizing, and automatically shifts workloads to spot instances — saving 30-50% on cloud spend.",
          icon: "DollarSign",
          tool: "AWS Cost Explorer · Kubecost · Infracost",
        },
        {
          title: "Automated Security Scanning",
          description:
            "AI scans your infrastructure-as-code, container images, and live deployments for vulnerabilities and misconfigurations — before attackers find them.",
          icon: "Shield",
          tool: "Snyk · Trivy · Prisma Cloud",
        },
      ],
    },
    showcaseImage: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=70",
      alt: "Server room with modern cloud infrastructure and networking equipment",
      caption:
        "Enterprise-grade cloud architecture that auto-scales, self-heals, and costs a fraction of traditional infrastructure.",
    },
  },

  // ─── AI Chatbots & Assistants ──────────────────────────────
  {
    slug: "ai-chatbot-development",
    serviceId: "ai",
    title: "AI Chatbots & Assistants",
    headline: "AI That Actually Understands Your Business",
    subheadline:
      "We build production-grade AI assistants that go beyond generic chatbots — trained on your data, integrated into your product, and designed to handle real conversations with real customers.",
    description:
      "From customer support automation to internal knowledge assistants, our AI solutions use the latest LLMs (GPT-4, Claude, open-source models) with RAG pipelines, fine-tuning, and agent workflows.",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=60",
    metaTitle:
      "AI Chatbot Development — Custom AI Assistants & LLM Integration | TENSAIFORGE",
    metaDescription:
      "Custom AI chatbot development with GPT-4, Claude & open-source LLMs. RAG pipelines, fine-tuning, and AI agent workflows for customer support & internal tools.",
    keywords: [
      "AI chatbot development",
      "AI assistant development",
      "LLM integration",
      "custom AI chatbot",
      "RAG pipeline development",
      "GPT-4 integration",
      "AI agent development",
      "chatbot development company",
    ],
    deliverables: [
      {
        title: "Customer Support Chatbots",
        description:
          "AI assistants that resolve 70%+ of support tickets automatically — with context-aware responses, ticket escalation, and multilingual support.",
        icon: "MessageCircle",
      },
      {
        title: "Internal Knowledge Assistants",
        description:
          "Company-wide AI that answers questions from your docs, wikis, and Slack history. Like having a senior engineer available 24/7 to answer any question.",
        icon: "BookOpen",
      },
      {
        title: "RAG-Powered Search Systems",
        description:
          "Retrieval-augmented generation pipelines that search your proprietary data and generate accurate, cited answers — not hallucinations.",
        icon: "Search",
      },
      {
        title: "AI Agent Workflows",
        description:
          "Autonomous agents that execute multi-step tasks: research, data extraction, report generation, and API calls — all orchestrated with human-in-the-loop controls.",
        icon: "Bot",
      },
      {
        title: "Voice AI & Phone Agents",
        description:
          "Conversational AI that handles phone calls, schedules appointments, and processes orders with natural speech — integrating with your CRM and calendar.",
        icon: "Phone",
      },
      {
        title: "AI-Powered Analytics",
        description:
          "Natural language interfaces to your data. Ask questions in plain English and get charts, reports, and insights without writing SQL.",
        icon: "BarChart",
      },
    ],
    features: [
      {
        title: "Multi-Model Architecture",
        description:
          "We don't lock you into one provider. GPT-4 for reasoning, Claude for long documents, open-source models for cost-sensitive workloads. The right model for each task.",
        icon: "Layers",
      },
      {
        title: "RAG With Source Citations",
        description:
          "Every answer includes sources from your knowledge base. Users can verify claims, building trust and reducing hallucination risk to near zero.",
        icon: "FileCheck",
      },
      {
        title: "Custom Fine-Tuning",
        description:
          "Train models on your domain-specific data for better accuracy and lower latency. Your AI speaks your industry's language fluently.",
        icon: "Settings",
      },
      {
        title: "Human Handoff & Escalation",
        description:
          "Seamless escalation to human agents when the AI detects complex or sensitive queries. Full conversation context is transferred — no repetition required.",
        icon: "Users",
      },
      {
        title: "Usage Analytics & Optimization",
        description:
          "Track resolution rates, user satisfaction, topic clustering, and cost per conversation. Continuously improve your AI with real usage data.",
        icon: "BarChart",
      },
      {
        title: "Enterprise Security & Privacy",
        description:
          "On-premise deployment options, data encryption, PII detection, and SOC 2 compliance-ready architecture. Your data never leaves your control.",
        icon: "Shield",
      },
    ],
    techStack: [
      { name: "OpenAI" },
      { name: "Claude" },
      { name: "LangChain" },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      {
        name: "PostgreSQL",
        icon: `${DI}/postgresql/postgresql-original.svg`,
      },
      { name: "Redis", icon: `${DI}/redis/redis-original.svg` },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
    ],
    stats: [
      { value: "70%+", label: "Ticket Deflection Rate" },
      { value: "<2s", label: "Avg. Response Time" },
      { value: "95%", label: "Answer Accuracy (RAG)" },
      { value: "24/7", label: "Availability" },
    ],
    faqs: [
      {
        question: "Which AI model should we use?",
        answer:
          "It depends on your use case. GPT-4o is excellent for general reasoning, Claude for long documents and nuanced conversation, and open-source models (Llama, Mistral) for cost-sensitive or privacy-critical deployments. We typically use a multi-model approach.",
      },
      {
        question: "How do you prevent AI hallucinations?",
        answer:
          "We use RAG (Retrieval-Augmented Generation) to ground every response in your actual data. Combined with confidence scoring, source citations, and fallback-to-human logic, hallucination risk drops to near zero.",
      },
      {
        question: "Can the AI be trained on our company's data?",
        answer:
          "Yes. We ingest your documents, knowledge bases, support tickets, and internal wikis into a vector database. The AI retrieves relevant context before generating responses, ensuring accuracy.",
      },
      {
        question: "Is our data safe with AI integration?",
        answer:
          "Absolutely. We offer on-premise deployment, data encryption at rest and in transit, PII detection and redaction, and enterprise-grade access controls. Your data stays under your control.",
      },
      {
        question: "How long does it take to build an AI chatbot?",
        answer:
          "A basic customer support chatbot with RAG takes 3-4 weeks. Complex agent workflows with multi-model architecture and custom fine-tuning take 6-12 weeks. We provide a detailed scope during discovery.",
      },
    ],
    aiWorkflow: {
      headline: "AI Building AI — Our Meta-Workflow",
      description:
        "We use AI to build better AI. From automated prompt engineering to continuous model evaluation, our development workflow ensures your AI assistant gets smarter with every iteration.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=70",
      steps: [
        {
          title: "Automated Prompt Engineering",
          description:
            "AI evaluates thousands of prompt variations to find the optimal instructions for your use case — achieving higher accuracy than manual prompt tuning.",
          icon: "Settings",
          tool: "DSPy · PromptFoo · LangSmith",
        },
        {
          title: "Continuous Model Evaluation",
          description:
            "Automated test suites evaluate your AI against real conversation scenarios, measuring accuracy, hallucination rate, and response quality across model versions.",
          icon: "BarChart",
          tool: "Braintrust · Ragas · Custom Eval Suite",
        },
        {
          title: "AI-Powered Knowledge Ingestion",
          description:
            "Intelligent document parsers extract, chunk, and embed your knowledge base — handling PDFs, websites, Slack exports, and databases with smart deduplication.",
          icon: "BookOpen",
          tool: "LlamaIndex · Unstructured · Pinecone",
        },
        {
          title: "Real-Time Quality Monitoring",
          description:
            "AI monitors live conversations for quality, detects when the model struggles, and automatically triggers retraining on weak areas — creating a continuous improvement loop.",
          icon: "Eye",
          tool: "LangFuse · Helicone · Custom Dashboard",
        },
      ],
    },
    showcaseImage: {
      src: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200&q=70",
      alt: "AI chatbot interface showing intelligent conversation with citations and context",
      caption:
        "Production-grade AI assistants that understand context, cite sources, and seamlessly escalate to human agents when needed.",
    },
  },
] as const;

// ── Helper ───────────────────────────────────────────────────

export function getServicePage(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_PAGES.map((s) => s.slug);
}
