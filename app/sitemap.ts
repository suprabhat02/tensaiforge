import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICE_PAGES } from "@/lib/service-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-22");

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Individual service pages — each targets unique search keywords
    ...SERVICE_PAGES.map((service) => ({
      url: `${SITE.url}/services/${service.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
