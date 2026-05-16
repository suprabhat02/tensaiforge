import { AnimateIn } from "@/components/ui/animate-in";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="section-x relative overflow-hidden border-y border-border/30 py-24"
    >
      {/* SEO-FIX: sr-only H2 creates an explicit section heading in the document
           outline without changing the visible layout. Replaces aria-label="Key
           statistics" with the semantically stronger aria-labelledby pattern. */}
      <h2 id="stats-heading" className="sr-only">
        Key Statistics
      </h2>
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-background to-orange-500/5"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-screen-xl grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
        {STATS.map((stat, i) => (
          <AnimateIn
            key={stat.label}
            delay={i * 0.1}
            className="group relative px-8 py-6 text-center"
          >
            {/* Divider lines between items */}
            {i > 0 && (
              <div className="absolute left-0 top-1/4 hidden h-1/2 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent lg:block" />
            )}
            <div className="flex items-end justify-center gap-1">
              <AnimatedNumber
                value={stat.value}
                className="font-display text-5xl font-extrabold text-gradient-forge lg:text-6xl"
              />
              <span className="mb-1 font-display text-3xl font-bold text-red-400">
                {stat.suffix}
              </span>
            </div>
            <p className="mt-3 font-semibold text-foreground">{stat.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {stat.description}
            </p>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
