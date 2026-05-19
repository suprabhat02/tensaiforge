import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // SEO-FIX: Explicitly disallow /api/ routes. Server Actions respond
      // with 405 to GET requests so they are not indexable, but an explicit
      // Disallow rule prevents crawl-budget waste and clarifies crawl scope.
      disallow: ["/api/"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
