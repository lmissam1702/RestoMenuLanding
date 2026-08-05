import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./i18n";

// Shared pathnames navigation: keeps the current path when switching locale.
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });