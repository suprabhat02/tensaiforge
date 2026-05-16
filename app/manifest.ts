/**
 * SEO-FIX: Web App Manifest via Next.js App Router route convention.
 *
 * Previously lib/seo.ts declared manifest: "/site.webmanifest" but the file
 * didn't exist in /public, causing a 404 and missing PWA installability signals.
 *
 * Next.js auto-detects this file and injects <link rel="manifest"> in <head>.
 * The manifest provides theme_color (used by Chrome for the address bar tint),
 * icons, and display mode — all mobile UX / PWA ranking signals.
 */
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "TENSAIFORGE",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    // Brand background matches --background CSS variable (hsl 0 0% 3%)
    background_color: "#080808",
    // Brand red — shown in Chrome's address bar on Android
    theme_color: "#F90404",
    icons: [
      {
        // App Router generates this route from app/icon.tsx
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        // App Router generates this route from app/apple-icon.tsx
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        // "any maskable" is a space-separated string valid per the Web Manifest
        // spec but Next.js v16 types only accept single values; use "maskable".
        purpose: "maskable",
      },
    ],
  };
}
