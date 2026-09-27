import { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right" | "none" = "up",
  delay: number = 0,
  duration: number = 0.6
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
      x: direction === "left" ? 28 : direction === "right" ? -28 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay,
        duration,
      },
    },
  };
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleUp: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
