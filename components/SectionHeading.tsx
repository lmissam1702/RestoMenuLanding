"use client";

import { motion } from "framer-motion";
import { SPRING_SOFT } from "@/components/motion";

/** Eyebrow + title + expanding gold underline, revealed on scroll. */
export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="relative mb-12 text-center">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={SPRING_SOFT}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold rtl:tracking-normal"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={SPRING_SOFT}
        className="mx-auto max-w-3xl text-3xl font-bold text-heading sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.2 }}
        className="mx-auto mt-4 block h-[3px] w-24 origin-center rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </div>
  );
}