"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  HiOutlineColorSwatch,
  HiOutlineDesktopComputer,
  HiOutlineLightningBolt,
  HiOutlineLink,
  HiOutlinePlus,
  HiOutlineTranslate,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/components/motion";

const ICONS: IconType[] = [
  HiOutlineLightningBolt,
  HiOutlineDesktopComputer,
  HiOutlineColorSwatch,
  HiOutlineTranslate,
  HiOutlinePlus,
  HiOutlineLink,
];

/** Features — responsive grid (1 col mobile → 3×2 on desktop). */
export default function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section id="features" className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((f, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="glass card-lift rounded-2xl p-6 hover:border-gold/40"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-gold/30 bg-gold/10">
                <Icon size={20} className="text-gold" />
              </div>
              <h3 className="mb-1.5 text-base font-bold text-heading">{f.title}</h3>
              <p className="text-sm leading-relaxed text-body">{f.body}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}