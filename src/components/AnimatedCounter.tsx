import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue, useInView } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  locale?: string;
}

const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
  className = "text-4xl font-bold",
  locale = "en-US",
}: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from.toLocaleString(locale));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      count.set(from); // Reset before animating
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplay(Math.floor(latest).toLocaleString(locale));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, from, to, duration, count, locale]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default AnimatedCounter;
