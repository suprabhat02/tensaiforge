import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TECH_ITEMS } from "@/lib/constants";

export function ToolsSection() {
  return (
    <section
      aria-labelledby="tools-heading"
      className="section-y overflow-hidden"
    >
      <AnimateIn className="section-x mb-12 text-center">
        <SectionLabel>Our Stack</SectionLabel>
        <h2 id="tools-heading" className="mt-4 font-display text-4xl font-bold">
          Built With the Best Tools
        </h2>
      </AnimateIn>
      <InfiniteMovingCards items={TECH_ITEMS} />
    </section>
  );
}
