import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      // SEO-FIX: Update this date whenever meaningful content changes ship.
      lastModified: new Date("2026-05-22"),
      changeFrequency: "weekly",
      priority: 1,
    },
    // SEO-FIX: Removed /#services and /#projects fragment entries.
    // Search engines cannot crawl or index URL fragments — they are stripped
    // before the crawler fetches the page. Fragment URLs in sitemaps generate
    // GSC warnings and waste the submitted-URL quota.
  ];
}
