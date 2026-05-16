import type { ProcessStep } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/animate-in";
import { FADE_LEFT, FADE_RIGHT } from "@/lib/animations";
import { cn } from "@/lib/utils";

type TimelineProps = Readonly<{
  steps: readonly ProcessStep[];
}>;

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-red-400/50 via-orange-500/30 to-transparent lg:left-1/2 lg:block lg:-translate-x-px" />

      <div className="space-y-12 lg:space-y-24">
        {steps.map((step, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div key={step.step} className="relative">
              {/* Dot on center line */}
              <div className="absolute left-4 top-1 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-red-400 bg-background lg:left-1/2 lg:block" />

              <div
                className={cn(
                  "grid lg:grid-cols-2 lg:gap-16",
                  isEven ? "lg:text-right" : "",
                )}
              >
                {/* Content side */}
                <AnimateIn
                  variants={isEven ? FADE_RIGHT : FADE_LEFT}
                  className={cn(
                    "pl-12 lg:pl-0",
                    isEven
                      ? "lg:col-start-1 lg:pr-16"
                      : "lg:col-start-2 lg:pl-16",
                  )}
                >
                  {/* Step number */}
                  <span className="font-mono text-5xl font-bold text-gradient-forge opacity-40">
                    {step.step}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-2xl font-display font-bold text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details list */}
                  <ul
                    className={cn(
                      "mt-4 space-y-2",
                      isEven ? "lg:ml-auto lg:text-right" : "",
                    )}
                  >
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-red-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </AnimateIn>

                {/* Spacer for alternate side */}
                <div
                  className={cn(
                    "hidden lg:block",
                    isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1",
                  )}
                />
              </div>

              {/* Mobile left line dot */}
              <div className="absolute left-4 top-1 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-red-400 bg-background lg:hidden" />
            </div>
          );
        })}
      </div>

      {/* Mobile left line */}
      <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-red-400/50 via-orange-500/30 to-transparent lg:hidden" />
    </div>
  );
}
