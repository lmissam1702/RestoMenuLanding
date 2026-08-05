"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { SPRING_SOFT } from "@/components/motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Mobile drawer — slides in from the side (inline-start; mirrored in RTL)
 * with a spring, listing section anchors plus language + theme controls.
 */
export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const locale = useLocale();
  const t = useTranslations();
  const isRtl = locale === "ar";

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#problem", label: t("problem.eyebrow") },
    { href: "#solution", label: t("solution.eyebrow") },
    { href: "#features", label: t("features.eyebrow") },
    { href: "#templates", label: t("templates.eyebrow") },
    { href: "#how-it-works", label: t("howItWorks.eyebrow") },
    { href: "#pricing", label: t("pricing.eyebrow") },
    { href: "#contact", label: t("contact.eyebrow") },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />
          {/* Drawer */}
          <motion.aside
            initial={{ x: isRtl ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? "-100%" : "100%" }}
            transition={SPRING_SOFT}
            className={`glass fixed inset-y-0 z-50 flex w-[min(85vw,320px)] flex-col gap-2 border-y-0 p-6 ${
              isRtl ? "left-0 rounded-e-2xl" : "right-0 rounded-s-2xl"
            } md:hidden`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="flex items-baseline gap-0.5">
                <span className="text-lg font-bold text-heading">RestoMenu</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <ThemeToggle />
            </div>

            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: isRtl ? -16 : 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...SPRING_SOFT, delay: 0.05 * i }}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-body transition-colors duration-150 hover:bg-line"
                >
                  {l.label}
                  <HiOutlineArrowRight
                    size={14}
                    className="text-gold rtl:-scale-x-100"
                  />
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4 pt-6">
              <LanguageSwitcher />
              <a href="#contact" onClick={onClose} className="btn-gold w-full">
                {t("nav.join")}
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}