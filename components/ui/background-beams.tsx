import { cn } from "@/lib/utils";

type BackgroundBeamsProps = Readonly<{
  className?: string;
}>;

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {BEAMS.map((beam) => (
          <line
            key={beam.id}
            x1={beam.x1}
            y1={beam.y1}
            x2={beam.x2}
            y2={beam.y2}
            stroke={beam.color}
            strokeWidth={beam.width}
            strokeOpacity={beam.opacity}
          >
            <animate
              attributeName="stroke-opacity"
              values={`${beam.opacity};${beam.opacity * 2.5};${beam.opacity}`}
              dur={`${beam.dur}s`}
              repeatCount="indefinite"
              begin={`${beam.delay}s`}
            />
          </line>
        ))}
      </svg>
    </div>
  );
}

const BEAMS = [
  {
    id: 1,
    x1: 0,
    y1: 0,
    x2: 900,
    y2: 800,
    color: "#00f5ff",
    width: 0.5,
    opacity: 0.08,
    dur: 7,
    delay: 0,
  },
  {
    id: 2,
    x1: 100,
    y1: 0,
    x2: 1000,
    y2: 800,
    color: "#0066ff",
    width: 0.8,
    opacity: 0.06,
    dur: 9,
    delay: 1,
  },
  {
    id: 3,
    x1: 200,
    y1: 0,
    x2: 1100,
    y2: 800,
    color: "#00f5ff",
    width: 0.3,
    opacity: 0.1,
    dur: 6,
    delay: 2,
  },
  {
    id: 4,
    x1: 400,
    y1: 0,
    x2: 1200,
    y2: 800,
    color: "#0066ff",
    width: 0.6,
    opacity: 0.05,
    dur: 8,
    delay: 0.5,
  },
  {
    id: 5,
    x1: 600,
    y1: 0,
    x2: 800,
    y2: 800,
    color: "#00f5ff",
    width: 0.4,
    opacity: 0.07,
    dur: 10,
    delay: 3,
  },
  {
    id: 6,
    x1: 800,
    y1: 0,
    x2: 400,
    y2: 800,
    color: "#0066ff",
    width: 0.5,
    opacity: 0.06,
    dur: 7.5,
    delay: 1.5,
  },
  {
    id: 7,
    x1: 1000,
    y1: 0,
    x2: 200,
    y2: 800,
    color: "#00f5ff",
    width: 0.3,
    opacity: 0.09,
    dur: 8.5,
    delay: 2.5,
  },
  {
    id: 8,
    x1: 1200,
    y1: 0,
    x2: 0,
    y2: 800,
    color: "#0066ff",
    width: 0.7,
    opacity: 0.04,
    dur: 11,
    delay: 0,
  },
  {
    id: 9,
    x1: 300,
    y1: 0,
    x2: 700,
    y2: 800,
    color: "#7c3aed",
    width: 0.4,
    opacity: 0.05,
    dur: 9.5,
    delay: 4,
  },
  {
    id: 10,
    x1: 700,
    y1: 0,
    x2: 300,
    y2: 800,
    color: "#7c3aed",
    width: 0.3,
    opacity: 0.04,
    dur: 12,
    delay: 2,
  },
] as const;
