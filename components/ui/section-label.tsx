import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <span className={cn("section-label", className)}>{children}</span>;
}
