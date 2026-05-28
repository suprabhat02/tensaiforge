import { VideoText } from "@/components/ui/video-text";
import { AnimateIn } from "@/components/ui/animate-in";

export function VideoShowcaseSection() {
  return (
    <section
      id="video-showcase"
      aria-labelledby="video-showcase-heading"
      className="relative overflow-hidden"
    >
      {/* Accessible heading — sr-only so it doesn't clash with the visual text,
          but fully crawlable by Google and announced by screen readers. */}
      <h2 id="video-showcase-heading" className="sr-only">
        Forge Intelligence — AI-First Software Engineering Studio
      </h2>

      {/* ── Video text hero — edge-to-edge, no side padding ── */}
      <VideoText
        src="/forge-reel.webm"
        fallbackSrc="/forge-reel.mp4"
        className="h-[45vh] md:h-[55vh] lg:h-[60vh]"
        secondLine="INTELLIGENCE"
      >
        FORGE
      </VideoText>

      {/* ── Supporting micro-copy — crawlable SEO body text ── */}
      <AnimateIn className="mx-auto max-w-2xl px-6 pb-14 pt-6 text-center md:pb-20 md:pt-10">
        <p className="font-display text-sm font-medium leading-relaxed tracking-wide text-muted-foreground md:text-base">
          We engineer AI-powered software that turns bold ideas into
          production-grade reality&nbsp;— shipped fast, built to scale.
        </p>
      </AnimateIn>
    </section>
  );
}
