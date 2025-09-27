"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { useInView } from "react-intersection-observer";

type AnimationType =
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "fade"
  | "scale"
  | "blur";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: AnimationType;
  threshold?: number;
  triggerOnce?: boolean;
  distance?: number;
  scale?: number;
  staggerChildren?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
  };
};

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.8,
  animation = "slideUp",
  threshold = 0.1,
  triggerOnce = true,
  distance = 40,
  scale = 0.95,
  staggerChildren,
  viewport,
}: RevealOnScrollProps) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
    rootMargin: viewport?.margin || "0px",
  });

  const variants: Variants = useMemo(() => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing curve
    };

    const animations = {
      slideUp: {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0, transition: baseTransition },
      },
      slideDown: {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0, transition: baseTransition },
      },
      slideLeft: {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0, transition: baseTransition },
      },
      slideRight: {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0, transition: baseTransition },
      },
      fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: baseTransition },
      },
      scale: {
        hidden: { opacity: 0, scale },
        visible: { opacity: 1, scale: 1, transition: baseTransition },
      },
      blur: {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          transition: baseTransition,
        },
      },
    };

    const baseVariant = animations[animation];

    // Add stagger support for container elements
    if (staggerChildren) {
      return {
        ...baseVariant,
        visible: {
          ...baseVariant.visible,
          transition: {
            ...baseVariant.visible.transition,
            staggerChildren,
          },
        },
      };
    }

    return baseVariant;
  }, [animation, delay, duration, distance, scale, staggerChildren]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Optional: Export a higher-order component for easy staggered animations
export function RevealStaggerContainer({
  children,
  staggerDelay = 0.1,
  ...props
}: RevealOnScrollProps & { staggerDelay?: number }) {
  return (
    <RevealOnScroll staggerChildren={staggerDelay} {...props}>
      {children}
    </RevealOnScroll>
  );
}

// Optional: Export individual stagger item component
export function RevealStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
