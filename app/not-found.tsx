/**
 * SEO-FIX: Converted to a Server Component so it can export `metadata`.
 *
 * Previously this was "use client", which prevented exporting metadata.
 * Without robots: { index: false }, Google would crawl and potentially index
 * the 404 page, wasting crawl budget and diluting the site's page quality signals.
 *
 * All animation / interactivity lives in NotFoundContent (client component).
 */
import type { Metadata } from "next";
import { NotFoundContent } from "@/components/ui/not-found-content";

// SEO-FIX: noindex prevents Google from indexing 404 pages.
// nofollow prevents link equity from leaking through any links on the page.
export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundContent />;
}
