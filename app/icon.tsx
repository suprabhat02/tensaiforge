/**
 * SEO-FIX: Programmatic favicon via Next.js App Router file convention.
 *
 * Previously lib/seo.ts declared icons: { icon: "/favicon.ico" } but no
 * favicon.ico existed in /public, causing a 404 on every page load and
 * missing the favicon in browser tabs and Google search results.
 *
 * Next.js auto-detects this file and injects <link rel="icon"> in <head>.
 * No static file in /public required.
 */
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "7px",
        background: "linear-gradient(135deg, #F90404 0%, #ff6b2a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Zap icon — matches the brand mark used in the nav and footer */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="black" />
      </svg>
    </div>,
    { ...size },
  );
}
