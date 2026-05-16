"use client";

import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { Carousel } from "@/components/ui/carousel";

const TESTIMONIAL_SLIDES = [
  {
    quote:
      "TENSAIFORGE didn't just build our platform — they engineered it for the future. Our AI pipeline handles 10x the load with zero downtime.",
    author: "Sarah Chen",
    title: "CTO",
    company: "NeuralScale AI",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "The speed and quality are unreal. They delivered in 6 weeks what our previous agency couldn't do in 6 months.",
    author: "Marcus Reid",
    title: "Founder",
    company: "Hypergrowth Labs",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "Their AI-first approach transformed our customer support. Response times dropped 80% and satisfaction is at an all-time high.",
    author: "Priya Sharma",
    title: "VP Engineering",
    company: "DataForge Systems",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    quote:
      "Working with TENSAIFORGE felt like having an elite engineering team in-house. Every commit was production-ready.",
    author: "James Okonkwo",
    title: "Head of Product",
    company: "CloudVerse",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

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

      <Carousel slides={TESTIMONIAL_SLIDES} />
    </section>
  );
}
