import type { Transition } from "framer-motion";

const defaultSpring: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 30,
};

export type HoverScaleProps = {
  whileHover: { scale: number };
  whileTap: { scale: number };
  transition: Transition;
};

export const hoverScale: HoverScaleProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: defaultSpring,
};

export function createHoverScale(
  hover = 1.02,
  tap = 0.98,
  transition: Transition = defaultSpring
): HoverScaleProps {
  return {
    whileHover: { scale: hover },
    whileTap: { scale: tap },
    transition,
  };
}
