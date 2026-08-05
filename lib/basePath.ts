/**
 * basePath for GitHub Pages hosting under /RestoMenuLanding.
 * next/image does NOT prefix unoptimized srcs with basePath, so public
 * assets referenced via next/image must carry the prefix explicitly.
 */
export const BASE_PATH = "/RestoMenuLanding";

/** Prefix a public path (e.g. "/phone.png") for use as a next/image src. */
export const pub = (p: string) => `${BASE_PATH}${p}`;