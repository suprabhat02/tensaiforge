import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { BlogIndexSection } from "@/components/sections/blog/blog-index-section";
import { FloatingNav } from "@/components/ui/floating-nav";
import { FooterSection } from "@/components/sections/footer/footer-section";

export const metadata: Metadata = {
  title:
    "Blog — Web Development, AI & Cloud Engineering Insights | TensaiForge",
  description:
    "Expert guides on website development costs, web app architecture, mobile app development, cloud infrastructure, and AI chatbot development from the TensaiForge engineering team.",
  keywords: [
    "web development blog",
    "mobile app development guide",
    "AI chatbot development",
    "cloud backend engineering",
    "Next.js tips",
    "React Native guide",
    "software development cost guide",
  ],
  alternates: {
    canonical: `${SITE.url}/blog/`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE.url}/blog/`,
    siteName: SITE.name,
    title:
      "Blog — Web Development, AI & Cloud Engineering Insights | TensaiForge",
    description:
      "Expert guides on website development costs, web app architecture, mobile app development, cloud infrastructure, and AI chatbot development.",
    images: [
      {
        url: BLOG_POSTS[0]!.heroImage,
        width: 1400,
        height: 800,
        alt: BLOG_POSTS[0]!.heroImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Blog — Web Development, AI & Cloud Engineering Insights | TensaiForge",
    description:
      "Expert guides on website development costs, web app architecture, mobile app development, cloud infrastructure, and AI chatbot development.",
    site: "@tensaiforge",
    creator: "@tensaiforge",
  },
};

// ── Blog index structured data ────────────────────────────────

const blogListLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "The TensaiForge Blog",
  description:
    "Expert guides on web development, mobile apps, AI, and cloud architecture from the TensaiForge engineering team.",
  url: `${SITE.url}/blog/`,
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${SITE.url}/blog/${post.slug}/`,
    datePublished: `${post.datePublished}T00:00:00Z`,
    description: post.excerpt,
    image: post.heroImage,
    author: { "@type": "Organization", name: post.author, url: SITE.url },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE.url}/blog/`,
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <FloatingNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <main id="main-content">
        <BlogIndexSection />
      </main>
      <FooterSection />
    </>
  );
}
