import type { Variants } from "framer-motion";

/** Calm, professional spring used across the page (no bouncing). */
export const SPRING_SOFT = { type: "spring", stiffness: 100, damping: 20 } as const;

/** Standard fade-up entrance for staggered children. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: SPRING_SOFT },
};