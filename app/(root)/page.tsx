"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Static-GitHub-Pages root: the app lives under /[locale] (en/fr/ar) with
 * localePrefix "always", so the bare "/" has no content. Middleware normally
 * redirected it, but static export disables middleware — so this page
 * client-side redirects "/" to the default locale. basePath is handled
 * automatically by next/navigation.
 */
export default function RedirectToDefaultLocale() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/en");
  }, [router]);

  return null;
}