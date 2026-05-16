"use client";

import dynamic from "next/dynamic";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  { ssr: false },
);

const GLOBE_CONFIG = {
  pointSize: 4,
  globeColor: "#1a0000",
  showAtmosphere: true,
  atmosphereColor: "#F90404",
  atmosphereAltitude: 0.15,
  emissive: "#1a0000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#ff6b6b",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const GLOBE_ARCS = [
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.3,
    color: "#F90404",
  },
  {
    order: 2,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.25,
    color: "#ff4d2a",
  },
  {
    order: 3,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.35,
    color: "#F90404",
  },
  {
    order: 4,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.3,
    color: "#ff6b4a",
  },
  {
    order: 5,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.25,
    color: "#ff4d2a",
  },
  {
    order: 6,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.2,
    color: "#F90404",
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.22,
    color: "#ff6b4a",
  },
  {
    order: 8,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.18,
    color: "#ff4d2a",
  },
];

const STATS = [
  { value: "12+", label: "Countries Served" },
  { value: "5", label: "Time Zones Covered" },
  { value: "24/7", label: "Development Cycle" },
  { value: "99.9%", label: "Delivery Rate" },
];

export function GlobalReachSection() {
  return (
    <section
      id="global"
      aria-labelledby="global-heading"
      className="section-x section-y relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Text + Stats */}
          <AnimateIn className="flex-1 text-center lg:text-left">
            <SectionLabel>Global Presence</SectionLabel>
            <h2
              id="global-heading"
              className="mt-4 font-display text-4xl font-bold lg:text-5xl"
            >
              Engineering{" "}
              <span className="text-gradient-forge">Without Borders</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground mx-auto lg:mx-0">
              Delivering world-class solutions to clients across every
              continent. Our distributed team works across time zones to keep
              your project moving 24/7.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm"
                >
                  <div className="font-display text-2xl font-bold text-gradient-forge">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Right: Globe */}
          <AnimateIn delay={0.2} className="w-full flex-1">
            <div className="relative mx-auto aspect-square w-full max-w-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 via-transparent to-transparent blur-3xl" />
              <World globeConfig={GLOBE_CONFIG} data={GLOBE_ARCS} />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
