/**
 * SEO-FIX: Programmatic Apple Touch Icon via Next.js App Router convention.
 *
 * Previously lib/seo.ts declared icons: { apple: "/apple-touch-icon.png" }
 * but the file didn't exist in /public, causing a 404 on iOS bookmark/PWA.
 *
 * Next.js auto-detects this file and injects <link rel="apple-touch-icon">
 * in <head>. Correct 180x180 size is the iOS standard for home-screen icons.
 */
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "180px",
        height: "180px",
        backgroundColor: "#08080d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "128px",
          height: "128px",
          borderRadius: "28px",
          background: "linear-gradient(135deg, #F90404 0%, #ff6b2a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 48px rgba(249,4,4,0.45)",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="black" />
        </svg>
      </div>
    </div>,
    { ...size },
  );
}
