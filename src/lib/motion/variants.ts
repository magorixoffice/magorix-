import type { Variants } from "framer-motion";

export const motionEaseOut = [0.22, 1, 0.36, 1] as const;

const fadeUpTransition = {
  duration: 0.52,
  ease: motionEaseOut,
} as const;

/** Fade in + slide up (`hidden` / `visible`). */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: fadeUpTransition,
  },
};

/** Parent: `staggerChildren` + `delayChildren`. Pair with `staggerItem`. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

/** Child of `staggerContainer` (fade + slide up). */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: motionEaseOut,
    },
  },
};
