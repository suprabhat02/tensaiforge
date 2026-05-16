import type { Metadata } from "next";
import { SERVICES, SITE } from "@/lib/constants";

export const BASE_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "AI engineering",
    "web development",
    "mobile development",
    "cloud solutions",
    "SaaS development",
    "Next.js agency",
    "TypeScript",
    "React",
    "AI chatbots",
    "automation",
    "TENSAIFORGE",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "Technology",
};

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    email: SITE.email,
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
  } as const;
}
