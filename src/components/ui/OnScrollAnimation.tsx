import {
  AnimationProps,
  motion,
  TargetAndTransition,
  useInView,
} from "framer-motion";
import { useRef, ReactNode } from "react";

type VariantKey =
  | "fadeUp"
  | "fadeLeft"
  | "scaleIn"
  | "fadeIn"
  | "fadeInLeft"
  | "fadeInRight";

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  variant?: VariantKey;
}

const variantsMap: Record<
  VariantKey,
  { initial: AnimationProps["initial"]; animate: TargetAndTransition }
> = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  fadeIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
};

export default function OnScrollAnimation({
  children,
  delay = 0,
  variant = "fadeIn",
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });
  const motionVariant = variantsMap[variant];

  return (
    <motion.div
      ref={ref}
      initial={motionVariant.initial}
      animate={isInView ? motionVariant.animate : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
