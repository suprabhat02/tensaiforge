import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";
import { FloatingNav } from "@/components/ui/floating-nav";
import { FooterSection } from "@/components/sections/footer/footer-section";
import { BlogPostHero } from "@/components/sections/blog/blog-post-hero";
import { BlogTOC } from "@/components/sections/blog/blog-toc";
import { WebsiteDevelopmentBlog } from "@/components/sections/blog/posts/website-development-blog";
import { WebAppDevelopmentBlog } from "@/components/sections/blog/posts/web-app-development-blog";
import { MobileAppDevelopmentBlog } from "@/components/sections/blog/posts/mobile-app-development-blog";
import { CloudBackendBlog } from "@/components/sections/blog/posts/cloud-backend-blog";
import { AIChatbotBlog } from "@/components/sections/blog/posts/ai-chatbot-blog";

// ── Static Params (output: "export") ─────────────────────────

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

// ── Per-Post Metadata ─────────────────────────────────────────

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `${SITE.url}/blog/${post.slug}/`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [...post.keywords],
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: SITE.name,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      images: [
        {
          url: post.heroImage,
          width: 1400,
          height: 800,
          alt: post.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      site: "@tensaiforge",
      creator: "@tensaiforge",
    },
  };
}

// ── Content component map ─────────────────────────────────────

function PostContent({
  slug,
  post,
}: {
  slug: string;
  post: NonNullable<ReturnType<typeof getBlogPost>>;
}) {
  switch (slug) {
    case "website-development-cost-guide-2026":
      return <WebsiteDevelopmentBlog post={post} />;
    case "web-app-development-guide-2026":
      return <WebAppDevelopmentBlog post={post} />;
    case "mobile-app-development-cost-guide-2026":
      return <MobileAppDevelopmentBlog post={post} />;
    case "cloud-backend-development-guide-2026":
      return <CloudBackendBlog post={post} />;
    case "ai-chatbot-development-cost-guide-2026":
      return <AIChatbotBlog post={post} />;
    default:
      return null;
  }
}

// ── Page ──────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}/`;

  // ── Structured Data ───────────────────────────────────────
  // BlogPosting is more specific than Article and eligible for additional
  // Google rich result types (carousels, top stories, FAQ overlays).
  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: {
      "@type": "ImageObject",
      url: post.heroImage,
      width: 1400,
      height: 800,
    },
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/tensaiforgelogo.svg`,
        width: 201,
        height: 123,
      },
    },
    datePublished: `${post.datePublished}T00:00:00Z`,
    dateModified: `${post.dateModified}T00:00:00Z`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-US",
  };

  // BreadcrumbList — renders breadcrumb trail in SERPs
  const breadcrumbLd = {
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
        name: "Blog",
        item: `${SITE.url}/blog/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  // FAQPage schema — unlocks expandable FAQ rich snippets in SERPs
  const faqLd =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <FloatingNav />

      {/* BlogPosting structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      {/* BreadcrumbList — shows breadcrumbs in Google SERPs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* FAQPage — unlocks expandable FAQ snippets */}
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <main id="main-content">
        {/* Hero */}
        <BlogPostHero post={post} />

        {/* Two-column layout: content + TOC sidebar */}
        <div className="section-x section-y relative mx-auto max-w-screen-xl">
          <div className="flex gap-12">
            {/* Article content */}
            <article className="min-w-0 flex-1" aria-label={post.title}>
              <PostContent slug={slug} post={post} />
            </article>

            {/* Sticky TOC sidebar — hidden on mobile */}
            <aside
              className="hidden lg:block lg:w-72 shrink-0"
              aria-label="Table of contents"
            >
              <div className="sticky top-24">
                <BlogTOC entries={post.toc} />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
