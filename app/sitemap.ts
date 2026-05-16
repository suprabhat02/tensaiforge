import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      // SEO-FIX: Replaced new Date() with a static ISO string.
      // Dynamic dates cause every build to mark the page as "just modified",
      // wasting crawl budget on unchanged pages. Update this date manually
      // only when meaningful content changes are published.
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
    // SEO-FIX: Removed /#services and /#projects fragment entries.
    // Search engines cannot crawl or index URL fragments — they are stripped
    // before the crawler fetches the page. Fragment URLs in sitemaps generate
    // GSC warnings and waste the submitted-URL quota.
  ];
}
