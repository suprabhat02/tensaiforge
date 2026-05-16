import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
// SEO-FIX: Import SITE so the email matches SITE.email throughout the page.
// Previously "hello@tensaiforge.com" was hardcoded here while SITE.email is
// "tensaiforge@gmail.com" — two different emails = inconsistent NAP signals.
import { SITE } from "@/lib/constants";

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="section-x relative overflow-hidden py-32"
    >
      <BackgroundBeams />
      <DottedGlowBackground
        gap={20}
        radius={1}
        color="rgba(255,255,255,0.08)"
        darkColor="rgba(255,255,255,0.08)"
        glowColor="rgba(249, 4, 4, 0.4)"
        darkGlowColor="rgba(249, 4, 4, 0.4)"
        opacity={0.3}
        speedMin={0.2}
        speedMax={0.6}
        speedScale={0.4}
      />

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse-slow rounded-full bg-red-500/10 blur-[100px]" />
      <div
        className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse-slow rounded-full bg-orange-500/10 blur-[100px]"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimateIn>
          <SectionLabel>Ready to Build?</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2
            id="cta-heading"
            className="mt-6 font-display text-4xl font-extrabold lg:text-6xl"
          >
            Let&apos;s Build{" "}
            <span className="text-gradient-forge">Intelligent</span> Products
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us what you&apos;re building. We&apos;ll tell you how to make
            it extraordinary.
          </p>
        </AnimateIn>
        <AnimateIn
          delay={0.3}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
          >
            Start a Project <ArrowRight size={18} />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
          >
            Schedule a Call <ExternalLink size={16} />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
