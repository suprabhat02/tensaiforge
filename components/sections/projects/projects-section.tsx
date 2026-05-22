import Image from "next/image";
import { ArrowRight } from "@/lib/animated-icons";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { Card3D } from "@/components/ui/card-3d";
import { PROJECTS } from "@/lib/constants";
import { FADE_UP } from "@/lib/animations";

const PROJECT_IMAGES: Record<string, string> = {
  "nexus-ai":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "fleet-ops":
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
  "synapse-bank":
    "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-x section-y relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <AnimateIn className="mb-16 text-center">
          <SectionLabel>Our Work</SectionLabel>
          <h2
            id="projects-heading"
            className="mt-4 font-display text-4xl font-bold lg:text-5xl"
          >
            Products That <span className="text-gradient-forge">Perform</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            From AI platforms to core banking systems — we build what others
            consider impossible.
          </p>
        </AnimateIn>

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <AnimateIn key={project.id} variants={FADE_UP} delay={i * 0.1}>
              <Card3D className="h-full">
                <article
                  className="forge-card flex h-full flex-col overflow-hidden p-0"
                  aria-label={project.title}
                >
                  {/* Cover image */}
                  {PROJECT_IMAGES[project.id] && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={PROJECT_IMAGES[project.id] as string}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    {/* Gradient top bar */}
                    <div
                      className={`mb-6 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}
                    />

                    {/* Category badge */}
                    <span className="mb-3 font-mono text-xs text-muted-foreground">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="mb-3 font-display text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Metrics row */}
                    <div className="mt-6 grid grid-cols-3 gap-3 border-y border-border/50 py-4">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="font-mono text-lg font-bold text-gradient-cyan">
                            {m.value}
                          </div>
                          <div className="mt-0.5 text-xs text-muted-foreground">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* <a
                      href={project.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-400 transition-colors hover:text-red-300"
                      aria-label={`View ${project.title} case study`}
                    >
                      View Case Study <ArrowRight size={14} />
                    </a> */}
                  </div>
                </article>
              </Card3D>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
