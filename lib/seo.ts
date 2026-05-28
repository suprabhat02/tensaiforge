import type { Metadata } from "next";
import { SERVICES, SITE } from "@/lib/constants";

export const BASE_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  // SEO-FIX: Replaced brand/tech keywords with intent-driven search phrases
  keywords: [
    "AI engineering agency",
    "hire AI development team",
    "custom AI software development",
    "AI chatbot development company",
    "Next.js development agency",
    "SaaS development company",
    "web app development agency",
    "React development agency",
    "mobile app development company",
    "cloud backend solutions",
    "automation engineering",
    "AI startup development",
    "AI-powered software engineering",
    "TENSAIFORGE",
  ],
  // SEO-FIX: Explicit canonical prevents duplicate-content split between
  // tensaiforge.com (if ever pointed) and the Vercel deployment URL.
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    // SEO-FIX: OG image is now served by app/opengraph-image.tsx via the
    // Next.js App Router file convention; no static file needed in /public.
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    // SEO-FIX: Added site + creator handles; update when social accounts are live.
    // Providing these fields unlocks richer Twitter Cards attribution.
    site: "@tensaiforge",
    creator: "@tensaiforge",
    // SEO-FIX: Twitter image auto-injected by app/opengraph-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // SEO-FIX: Icons removed — auto-injected by app/icon.tsx and app/apple-icon.tsx.
  // SEO-FIX: Manifest removed — auto-injected by app/manifest.ts.
  category: "Technology",
};

// ── Structured Data Generators ────────────────────────────────────────────────

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/tensaiforgelogo.svg`,
      width: 201,
      height: 123,
    },
    image: `${SITE.url}/tensaiforgelogo.svg`,
    email: SITE.email,
    // SEO-FIX: Kept sameAs array but links must resolve to real profiles.
    // Replace placeholder slugs with verified URLs or remove entries that 404.
    sameAs: [
      "https://twitter.com/tensaiforge",
      "https://github.com/tensaiforge",
      "https://linkedin.com/company/tensaiforge",
    ],
    founders: [
      {
        "@type": "Person",
        name: "Suprabhat",
        jobTitle: "Co-Founder & CEO",
      },
      {
        "@type": "Person",
        name: "Sandeep",
        jobTitle: "Co-Founder & CTO",
      },
    ],
    offers: SERVICES.map((service) => ({
      "@type": "Offer",
      name: service.title,
      description: service.description,
    })),
  } as const;
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    // SearchAction removed — no on-site search exists; invalid markup
    // triggers GSC warnings and can hurt trust signals.
  } as const;
}

// SEO-FIX: New Service schema for each service offering.
// Adds structured data that Google uses for service-based rich results.
export function generateServiceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Services offered by ${SITE.name}`,
    url: SITE.url,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
      },
    })),
  } as const;
}

// ── FAQ Schema — unlocks rich-result FAQ snippets in SERPs ────────────────────
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does TENSAIFORGE offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TENSAIFORGE offers website development, web app development, mobile app development, cloud & backend solutions, and AI chatbot & assistant development. We specialize in Next.js, React, TypeScript, and AI-first engineering.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines vary based on complexity. A marketing website typically takes 2-4 weeks, a web application 6-12 weeks, and enterprise-scale platforms 3-6 months. We follow an agile process with weekly demos so you see progress continuously.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does TENSAIFORGE use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our core stack includes Next.js, React, TypeScript, Node.js, PostgreSQL, Redis, Docker, Kubernetes, and cloud platforms (AWS, GCP). For AI, we integrate OpenAI, Claude, LangChain, and custom fine-tuned models.",
        },
      },
      {
        "@type": "Question",
        name: "Does TENSAIFORGE work with startups or enterprises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. We build MVPs for early-stage startups and scale enterprise systems handling millions of users. Our architecture is designed to grow from seed stage to IPO-ready without re-architecting.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get a quote from TENSAIFORGE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach us at tensaiforge@gmail.com or call +91-7892008290. We respond to all inquiries within 24 hours. Fill out our contact form with project details for a faster estimate.",
        },
      },
    ],
  } as const;
}

// ── LocalBusiness Schema — boosts local/branded search & Knowledge Panel ──────
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/tensaiforgelogo.svg`,
      width: 201,
      height: 123,
    },
    image: `${SITE.url}/tensaiforgelogo.svg`,
    email: SITE.email,
    telephone: SITE.phone[0],
    priceRange: "$$",
    currenciesAccepted: "USD, INR",
    paymentAccepted: "Bank Transfer, Crypto, Card",
    // Remote-first studio — serves worldwide
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://twitter.com/tensaiforge",
      "https://github.com/tensaiforge",
      "https://linkedin.com/company/tensaiforge",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  } as const;
}

// ── ProfessionalService Schema — enables Knowledge Panel for branded searches ─
export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/tensaiforgelogo.svg`,
    image: `${SITE.url}/tensaiforgelogo.svg`,
    email: SITE.email,
    telephone: SITE.phone[0],
    priceRange: "$$",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "AI Development",
      "Cloud Solutions",
      "SaaS Development",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "AI Engineering",
      "Cloud Architecture",
    ],
    sameAs: [
      "https://twitter.com/tensaiforge",
      "https://github.com/tensaiforge",
      "https://linkedin.com/company/tensaiforge",
    ],
  } as const;
}
