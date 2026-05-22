"use client";

import { useEffect, useRef } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BadgeAlertIcon,
  BotIcon,
  BrainIcon,
  CircleCheckIcon,
  CloudUploadIcon,
  ClockIcon,
  EarthIcon,
  EyeIcon,
  FolderCodeIcon,
  GaugeIcon,
  LayersIcon,
  LayoutPanelTopIcon,
  LinkIcon,
  LoaderPinwheelIcon,
  MailCheckIcon,
  MenuIcon,
  ShieldCheckIcon,
  SmartphoneChargingIcon,
  SmartphoneNfcIcon,
  SparklesIcon,
  XIcon,
  ZapIcon,
} from "lucide-animated";

type AnimatedHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

type AnimatedIconComponent = React.ComponentType<{
  ref?: React.Ref<AnimatedHandle>;
  size?: number;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}>;

type IconProps = {
  size?: number;
  className?: string;
};

const LOOP_INTERVAL_MS = 2200;
const ACTIVE_MS = 900;

function createInfiniteIcon(IconComponent: AnimatedIconComponent) {
  return function InfiniteIcon({ size = 20, className }: IconProps) {
    const iconRef = useRef<AnimatedHandle | null>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      const runCycle = () => {
        iconRef.current?.startAnimation();
        window.setTimeout(() => {
          iconRef.current?.stopAnimation();
        }, ACTIVE_MS);
      };

      runCycle();
      const intervalId = window.setInterval(runCycle, LOOP_INTERVAL_MS);

      return () => {
        window.clearInterval(intervalId);
      };
    }, []);

    return <IconComponent ref={iconRef} size={size} className={className} />;
  };
}

export const Menu = createInfiniteIcon(MenuIcon);
export const X = createInfiniteIcon(XIcon);
export const Mail = createInfiniteIcon(MailCheckIcon);
export const Phone = createInfiniteIcon(SmartphoneChargingIcon);
export const ArrowRight = createInfiniteIcon(ArrowRightIcon);
export const ExternalLink = createInfiniteIcon(LinkIcon);
export const Zap = createInfiniteIcon(ZapIcon);
export const Sparkles = createInfiniteIcon(SparklesIcon);
export const Globe = createInfiniteIcon(EarthIcon);
export const Layers = createInfiniteIcon(LayersIcon);
export const Smartphone = createInfiniteIcon(SmartphoneNfcIcon);
export const Cloud = createInfiniteIcon(CloudUploadIcon);
export const Bot = createInfiniteIcon(BotIcon);
export const Brain = createInfiniteIcon(BrainIcon);
export const LayoutDashboard = createInfiniteIcon(LayoutPanelTopIcon);
export const Gauge = createInfiniteIcon(GaugeIcon);
export const Code2 = createInfiniteIcon(FolderCodeIcon);
export const Shield = createInfiniteIcon(ShieldCheckIcon);
export const Eye = createInfiniteIcon(EyeIcon);
export const Clock = createInfiniteIcon(ClockIcon);
export const Loader2 = createInfiniteIcon(LoaderPinwheelIcon);
export const CheckCircle2 = createInfiniteIcon(CircleCheckIcon);
export const AlertCircle = createInfiniteIcon(BadgeAlertIcon);

// Tabler-compatible aliases used in carousel.
export const IconArrowLeft = createInfiniteIcon(ArrowLeftIcon);
export const IconArrowRight = createInfiniteIcon(ArrowRightIcon);
