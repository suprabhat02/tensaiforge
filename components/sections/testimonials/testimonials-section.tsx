"use client";

import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { Carousel } from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-x section-y bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
    >
      <AnimateIn className="mb-16 text-center">
        <SectionLabel>Testimonials</SectionLabel>
        <h2
          id="testimonials-heading"
          className="mt-4 font-display text-4xl font-bold lg:text-5xl"
        >
          Trusted by{" "}
          <span className="text-gradient-forge">Engineering Leaders</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Hear from the teams who scaled with TENSAIFORGE.
        </p>
      </AnimateIn>

      <Carousel slides={TESTIMONIALS} />
    </section>
  );
}
