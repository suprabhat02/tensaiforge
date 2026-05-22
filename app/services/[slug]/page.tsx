import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { SITE } from "@/lib/constants";
import { SERVICE_PAGES, getServicePage } from "@/lib/service-pages";
import { FloatingNav } from "@/components/ui/floating-nav";
import { FooterSection } from "@/components/sections/footer/footer-section";

// Code-split the client-heavy service page content & contact form
const ServicePageContent = dynamic(() =>
  import("@/components/sections/service-page/service-page-content").then(
    (m) => ({ default: m.ServicePageContent }),
  ),
);
const ContactSection = dynamic(() =>
  import("@/components/sections/contact/contact-section").then((m) => ({
    default: m.ContactSection,
  })),
);

// ── Static Params (for output: "export") ─────────────────────

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

// ── Dynamic Metadata per Service ─────────────────────────────

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getServicePage(slug);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: [...data.keywords],
    alternates: { canonical: `${SITE.url}/services/${data.slug}/` },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${SITE.url}/services/${data.slug}/`,
      siteName: SITE.name,
      title: data.metaTitle,
      description: data.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      site: "@tensaiforge",
      creator: "@tensaiforge",
    },
  };
}

// ── Page Component ───────────────────────────────────────────

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getServicePage(slug);
  if (!data) notFound();

  // Per-page FAQ schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  // BreadcrumbList schema for breadcrumb rich results
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE.url}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title,
        item: `${SITE.url}/services/${data.slug}/`,
      },
    ],
  };

  // Service schema for this specific service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.metaDescription,
    url: `${SITE.url}/services/${data.slug}/`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:btn-primary"
      >
        Skip to main content
      </a>

      <FloatingNav />

      <main id="main-content">
        <ServicePageContent data={data} />
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}
