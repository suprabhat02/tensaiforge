import { FloatingNav } from "@/components/ui/floating-nav";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { StatsSection } from "@/components/sections/stats/stats-section";
import { ProcessSection } from "@/components/sections/process/process-section";
import { ToolsSection } from "@/components/sections/tools/tools-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { WhyUsSection } from "@/components/sections/why-us/why-us-section";
import { GlobalReachSection } from "@/components/sections/global/global-reach-section";
import { CtaSection } from "@/components/sections/cta/cta-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { FooterSection } from "@/components/sections/footer/footer-section";

export { BASE_METADATA as metadata } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:btn-primary"
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
        <CtaSection />
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}
