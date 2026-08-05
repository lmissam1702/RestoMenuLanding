"use client";

import { motion } from "framer-motion";

/**
 * Global background — very faint CSS silhouettes: fork, spoon, plate and a
 * steaming cup. Each floats y ±8px over 15s. Opacity comes from theme tokens
 * (--shape / --shape-op / --shape-op-hero) so light mode shows pale gray
 * shapes instead of white ones.
 */
export default function FloatingSilhouettes() {
  const base = "pointer-events-none absolute";
  const shape = (delay: number) => ({
    animate: { y: [0, -8, 0] },
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" as const, delay },
  });

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Fork — handle + four prongs (hero zone, brighter) */}
      <motion.div
        {...shape(0)}
        className={`${base} left-[5%] top-[24%] opacity-[var(--shape-op-hero)]`}
      >
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-7 w-[2px] rounded-full bg-[var(--shape)]" />
          ))}
        </div>
        <div className="h-2 w-[2px] bg-[var(--shape)]" />
        <div className="mt-1 h-16 w-[3px] rounded-full bg-[var(--shape)]" />
      </motion.div>

      {/* Spoon — handle + oval bowl */}
      <motion.div
        {...shape(2.5)}
        className={`${base} bottom-[26%] left-[15%] opacity-[var(--shape-op)]`}
      >
        <div className="h-10 w-7 rounded-[50%] border-2 border-[var(--shape)]" />
        <div className="h-14 w-[3px] rounded-full bg-[var(--shape)]" />
      </motion.div>

      {/* Plate — circle with inner rim */}
      <motion.div
        {...shape(5)}
        className={`${base} bottom-[12%] right-[22%] opacity-[var(--shape-op)]`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--shape)]">
          <div className="h-8 w-8 rounded-full border border-[var(--shape)]/40" />
        </div>
      </motion.div>

      {/* Steaming cup — body + handle + steam (hero zone, brighter) */}
      <motion.div
        {...shape(7.5)}
        className={`${base} right-[6%] top-[30%] opacity-[var(--shape-op-hero)]`}
      >
        <div className="mb-1.5 flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -7, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.9 }}
              className="h-4 w-[2px] rounded-full bg-[var(--shape)]"
            />
          ))}
        </div>
        <div className="flex items-end">
          <div className="h-9 w-8 rounded-b-lg border-2 border-[var(--shape)] border-t-0" />
          <div className="h-5 w-2.5 rounded-r-full border-2 border-l-0 border-[var(--shape)]" />
        </div>
      </motion.div>
    </div>
  );
}