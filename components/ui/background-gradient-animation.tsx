import { cn } from "@/lib/utils";

type BackgroundGradientAnimationProps = Readonly<{
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}>;

export function BackgroundGradientAnimation({
  className,
  containerClassName,
  children,
}: BackgroundGradientAnimationProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <div
        className={cn("pointer-events-none absolute inset-0", className)}
        aria-hidden="true"
      >
        {/* Cyan blob */}
        <div
          className="absolute inset-0 animate-aurora opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(0,245,255,0.3), transparent 70%)",
            backgroundSize: "200% 200%",
          }}
        />
        {/* Blue blob */}
        <div
          className="absolute inset-0 animate-aurora opacity-25 [animation-delay:-15s]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 20% 30%, rgba(0,102,255,0.35), transparent 70%)",
            backgroundSize: "200% 200%",
          }}
        />
        {/* Violet blob */}
        <div
          className="absolute inset-0 animate-aurora opacity-20 [animation-delay:-30s]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 60% 80%, rgba(124,58,237,0.3), transparent 70%)",
            backgroundSize: "200% 200%",
          }}
        />
        {/* Small cyan accent */}
        <div
          className="absolute inset-0 animate-aurora opacity-15 [animation-delay:-45s]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 40% 40% at 40% 20%, rgba(0,245,255,0.25), transparent 60%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
