export const dynamic = "force-static";

/**
 * SEO-FIX: Programmatic Open Graph image via Next.js App Router file convention.
 *
 * Previously lib/seo.ts referenced /og-image.png which did not exist in /public,
 * causing every social share (Twitter, LinkedIn, Slack) to render a blank card.
 *
 * Next.js automatically:
 *  - Generates the image at build time at the route /opengraph-image
 *  - Injects <meta property="og:image"> and <meta name="twitter:image"> tags
 *  - No static file in /public required
 *
 * Note: ImageResponse (Satori) requires explicit `display` on every element
 * that has more than one child node. All containers below are explicit.
 */
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#08080d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Red radial glow */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "250px",
          width: "700px",
          height: "420px",
          background:
            "radial-gradient(ellipse, rgba(249,4,4,0.28) 0%, transparent 70%)",
          borderRadius: "50%",
          display: "flex",
        }}
      />

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "4px",
          background:
            "linear-gradient(90deg, transparent 0%, #F90404 50%, transparent 100%)",
          display: "flex",
        }}
      />

      {/* Logo mark + wordmark row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "18px",
          marginBottom: "36px",
        }}
      >
        {/* Zap icon container */}
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #F90404 0%, #ff6b2a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="black" />
          </svg>
        </div>

        {/* Brand name split into two spans — Satori requires explicit display
              on spans with sibling text nodes */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span
            style={{
              fontSize: "48px",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-1.5px",
              lineHeight: "1",
            }}
          >
            TENSAI
          </span>
          <span
            style={{
              fontSize: "48px",
              fontWeight: "800",
              color: "#F90404",
              letterSpacing: "-1.5px",
              lineHeight: "1",
            }}
          >
            FORGE
          </span>
        </div>
      </div>

      {/* Main headline */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "68px",
            fontWeight: "800",
            color: "#ffffff",
            letterSpacing: "-2.5px",
            lineHeight: "1.05",
          }}
        >
          Engineering
        </span>
        <span
          style={{
            fontSize: "68px",
            fontWeight: "800",
            color: "#F90404",
            letterSpacing: "-2.5px",
            lineHeight: "1.05",
          }}
        >
          Intelligence
        </span>
      </div>

      {/* Sub-description */}
      <div
        style={{
          display: "flex",
          marginTop: "28px",
          fontSize: "22px",
          color: "rgba(255,255,255,0.5)",
          textAlign: "center",
          maxWidth: "720px",
          lineHeight: "1.45",
        }}
      >
        AI-powered web, mobile, cloud and automation for forward-thinking
        companies
      </div>

      {/* URL badge */}
      <div
        style={{
          display: "flex",
          marginTop: "48px",
          padding: "10px 24px",
          borderRadius: "999px",
          border: "1px solid rgba(249,4,4,0.3)",
          background: "rgba(249,4,4,0.06)",
          fontSize: "18px",
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "0.05em",
        }}
      >
        tensaiforge.vercel.app
      </div>
    </div>,
    { ...size },
  );
}
