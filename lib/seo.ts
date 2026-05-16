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
    logo: `${SITE.url}/icon`,
    email: SITE.email,
    // SEO-FIX: Kept sameAs array but links must resolve to real profiles.
    // Replace placeholder slugs with verified URLs or remove entries that 404.
    sameAs: [
      "https://twitter.com/tensaiforge",
      "https://github.com/tensaiforge",
      "https://linkedin.com/company/tensaiforge",
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
    // SEO-FIX: Added potentialAction — enables Google Sitelinks Searchbox eligibility
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
