"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pub } from "@/lib/basePath";

/** One floating background icon: real PNG from public/bg-images/. */
type IconSpec = {
  src: string;
  size: number; // display width/height in px (40–60)
  className: string; // absolute position near edges/corners
  duration: number; // float cycle (20–30 s)
  delay: number; // phase offset for organic motion
};

// 10 instances hugging the viewport edges and corners, far away from the
// centered text, headings and CTAs. Positions use logical start/end so the
// composition mirrors correctly in RTL.
const ICONS: IconSpec[] = [
  { src: pub("/bg-images/fork.png"), size: 60, className: "start-[5%] top-[10%]", duration: 24, delay: 0 },
  { src: pub("/bg-images/coffee-cup.png"), size: 48, className: "end-[7%] top-[18%]", duration: 28, delay: 1.1 },
  { src: pub("/bg-images/food-and-restaurant.png"), size: 60, className: "start-[8%] top-[38%]", duration: 21, delay: 2.3 },
  { src: pub("/bg-images/cooking.png"), size: 52, className: "end-[10%] top-[46%]", duration: 26, delay: 0.6 },
  { src: pub("/bg-images/juce.png"), size: 54, className: "start-[4%] top-[62%]", duration: 23, delay: 1.8 },
  { src: pub("/bg-images/coffee-machine.png"), size: 60, className: "end-[6%] top-[74%]", duration: 29, delay: 3 },
  { src: pub("/bg-images/fork.png"), size: 46, className: "end-[16%] top-[30%]", duration: 22, delay: 2.8 },
  { src: pub("/bg-images/coffee-cup.png"), size: 42, className: "start-[12%] top-[84%]", duration: 25, delay: 0.9 },
  { src: pub("/bg-images/food-and-restaurant.png"), size: 48, className: "end-[4%] top-[88%]", duration: 27, delay: 2.1 },
  { src: pub("/bg-images/juce.png"), size: 40, className: "start-[22%] top-[26%]", duration: 30, delay: 4 },
];

/**
 * Global background decoration — real restaurant icon PNGs (fork, cup,
 * machine, cooking, juice, plate) drifting very slowly near the viewport
 * edges. Kept out of the way of text and CTAs:
 * - pointer-events-none on the wrapper and every item
 * - blur(4px) + low opacity (--shape-op token: 0.08 light / 0.05 dark)
 * - inverted to white in dark mode so the black strokes stay visible
 * - gentle float (±8px over 20–30 s) with a subtle ±2.5° rotation
 */
export default function FloatingIcons() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {ICONS.map(({ src, size, className, duration, delay }, i) => (
        <motion.div
          key={i}
          animate={{ y: [-8, 8], rotate: [0, 2.5, 0, -2.5, 0] }}
          transition={{
            y: { duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay },
            rotate: { duration: duration * 2, repeat: Infinity, ease: "easeInOut", delay: delay + 1 },
          }}
          className={`pointer-events-none absolute opacity-[var(--shape-op)] ${className}`}
        >
          <Image
            src={src}
            alt=""
            width={size}
            height={size}
            className="blur-[2px] dark:invert"
          />
        </motion.div>
      ))}
    </div>
  );
}
