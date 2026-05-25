import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/floating-nav";
import { HeroSection } from "@/components/sections/hero/hero-section";
// Server Components — no "use client", not in the JS bundle, keep as static imports.
import { StatsSection } from "@/components/sections/stats/stats-section";
import { ToolsSection } from "@/components/sections/tools/tools-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { CtaSection } from "@/components/sections/cta/cta-section";
import { FooterSection } from "@/components/sections/footer/footer-section";

// "use client" sections — dynamically imported so their JS (Framer Motion, Three.js,
// EmailJS, etc.) is code-split into separate lazy chunks instead of the initial bundle.
// SSR remains on (default) so HTML is pre-rendered at build time — zero SEO impact.
const ServicesSection = dynamic(() =>
  import("@/components/sections/services/services-section").then((m) => ({
    default: m.ServicesSection,
  })),
);
const ProcessSection = dynamic(() =>
  import("@/components/sections/process/process-section").then((m) => ({
    default: m.ProcessSection,
  })),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/testimonials/testimonials-section").then(
    (m) => ({ default: m.TestimonialsSection }),
  ),
);
const WhyUsSection = dynamic(() =>
  import("@/components/sections/why-us/why-us-section").then((m) => ({
    default: m.WhyUsSection,
  })),
);
// GlobalReachSection hosts the Three.js globe — the biggest JS chunk on the page.
// Code-splitting this alone removes ~500 KB from the initial parse budget.
const GlobalReachSection = dynamic(() =>
  import("@/components/sections/global/global-reach-section").then((m) => ({
    default: m.GlobalReachSection,
  })),
);
const FoundersSection = dynamic(() =>
  import("@/components/sections/founders/founders-section").then((m) => ({
    default: m.FoundersSection,
  })),
);
const ContactSection = dynamic(() =>
  import("@/components/sections/contact/contact-section").then((m) => ({
    default: m.ContactSection,
  })),
);

export { BASE_METADATA as metadata } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[200] focus-visible:btn-primary"
      >
        Skip to main content
      </a>

      <FloatingNav />

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <ProcessSection />
        <ToolsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <WhyUsSection />
        <GlobalReachSection />
        {/* <FoundersSection /> */}
        <CtaSection />
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}
