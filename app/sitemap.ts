import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date("2026-05-27");

  return [
    {
      url: SITE.url,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Individual service pages — each targets unique search keywords
    ...SERVICE_PAGES.map((service) => ({
      url: `${SITE.url}/services/${service.slug}/`,
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Blog index
    {
      url: `${SITE.url}/blog/`,
      lastModified: siteLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    // Individual blog posts — high-value long-form content
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}/`,
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
