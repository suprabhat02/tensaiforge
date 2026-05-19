import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import {
  BASE_METADATA,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateServiceListSchema,
} from "@/lib/seo";
import "@/styles/globals.css";

// SEO-FIX: Removed duplicate Space_Grotesk instance. Previously two identical
// calls were made (for --font-display and --font-body), which caused the browser
// to request the same font twice. Now a single instance covers --font-display;
// --font-body is aliased to var(--font-display) in styles/globals.css.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  // Weight 300 (light) is unused across the entire codebase — removed to
  // eliminate one font file download and shave ~15 KB from FCP critical path.
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = BASE_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      {/*
       * SEO-FIX: JSON-LD moved from <body> to <head>.
       * Google accepts both locations, but <head> placement ensures structured
       * data is available before any partial rendering and is the recommended
       * position per schema.org best practices.
       *
       * SEO-FIX: Added <link rel="preconnect"> for Unsplash and jsDelivr CDN.
       * These are the two external origins that serve images and dev-icons across
       * every section. Preconnect eliminates DNS + TLS round-trips (~200–500 ms)
       * for the first resource fetched from each host, directly improving LCP.
       */}
      <head>
        <link rel="icon" href="/tensaiforgelogo.ico" sizes="32x32" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
        {/* SEO-FIX: Service ItemList schema — enables rich results for service queries */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceListSchema()),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "hsl(222 47% 7%)",
              border: "1px solid hsl(217 33% 18%)",
              color: "hsl(210 40% 98%)",
            },
          }}
        />
      </body>
    </html>
  );
}
