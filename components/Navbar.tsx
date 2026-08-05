"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Magnetic from "@/components/Magnetic";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";

/**
 * Sticky glass navbar. Desktop: section links, theme toggle, language
 * switcher and "Contact". Mobile: logo, theme toggle + hamburger opening a
 * spring-animated drawer (MobileMenu).
 */
export default function Navbar() {
  const t = useTranslations("nav");
  const ts = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Section links — same list as the mobile drawer.
  const links = [
    { href: "#problem", label: ts("problem.eyebrow") },
    { href: "#solution", label: ts("solution.eyebrow") },
    { href: "#features", label: ts("features.eyebrow") },
    { href: "#templates", label: ts("templates.eyebrow") },
    { href: "#how-it-works", label: ts("howItWorks.eyebrow") },
    { href: "#pricing", label: ts("pricing.eyebrow") },
    { href: "#contact", label: ts("contact.eyebrow") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-x-0 border-t-0" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo — gold dot after "Menu" */}
        <a href="#top" className="flex items-baseline gap-0.5">
          <span className="text-xl font-bold tracking-tight text-heading">RestoMenu</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </a>

        {/* Desktop section links */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-body transition-colors duration-200 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop controls */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <Magnetic>
            <a href="#contact" className="btn-ghost !px-4 !py-2 text-sm sm:!px-6">
              {t("join")}
            </a>
          </Magnetic>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="glass grid h-9 w-9 place-items-center rounded-full text-body transition-colors duration-300 hover:border-gold/40"
          >
            {menuOpen ? (
              <HiOutlineX size={18} className="text-gold" />
            ) : (
              <HiOutlineMenu size={18} className="text-gold" />
            )}
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.header>
  );
}