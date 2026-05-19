"use client";

import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { FADE_LEFT, FADE_RIGHT } from "@/lib/animations";

const FOUNDERS = [
  {
    name: "SUPRABHAT",
    role: "Co-Founder & CEO",
    bio: "Visionary technologist driving AI-first engineering solutions. Passionate about building systems that scale globally and solve real-world problems.",
    image: "/suprabhat-image.webp",
  },
  {
    name: "SANDEEP",
    role: "Co-Founder & CTO",
    bio: "Architecture expert with deep expertise in distributed systems and cloud-native platforms. Obsessed with performance, reliability, and elegant code.",
    image: "/suprabhat-image.webp",
  },
] as const;

export function FoundersSection() {
  return (
    <section
      aria-labelledby="founders-heading"
      className="section-x section-y relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,4,4,0.03)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <AnimateIn className="mb-16 text-center">
          <SectionLabel>Leadership</SectionLabel>
          <h2
            id="founders-heading"
            className="mt-4 text-4xl font-display font-bold tracking-tight lg:text-5xl"
          >
            The Minds Behind{" "}
            <span className="text-gradient-forge">TENSAIFORGE</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Two engineers united by a shared obsession — building technology
            that doesn&apos;t just work, but transforms.
          </p>
        </AnimateIn>

        {/* Founders grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {FOUNDERS.map((founder, index) => (
            <AnimateIn
              key={founder.name}
              variants={index === 0 ? FADE_LEFT : FADE_RIGHT}
              delay={index * 0.15}
            >
              <div className="group relative flex flex-col items-center">
                {/* Pixelated Portrait */}
                <div className="relative mb-8 flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06]">
                  <PixelatedCanvas
                    src={founder.image}
                    width={400}
                    height={500}
                    cellSize={4}
                    dotScale={0.85}
                    shape="circle"
                    backgroundColor="#080808"
                    tintColor="#F90404"
                    tintStrength={0.15}
                    dropoutStrength={0.3}
                    interactive={true}
                    distortionMode="swirl"
                    distortionStrength={4}
                    distortionRadius={100}
                    jitterStrength={3}
                    jitterSpeed={3}
                    fadeOnLeave={true}
                    fadeSpeed={0.08}
                    objectFit="cover"
                    className="max-w-full"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold tracking-tight text-foreground">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-red-400">
                    {founder.role}
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
