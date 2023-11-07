import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i8n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const PUBLIC_FILE = /\.(.*)$/;

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    // [
    //   "IMG_1265.jpeg",
    //   "IMG_1281-modified.png",
    //   "IMG_1281.jpeg",
    //   "Nemanja.png",
    //   "android-chrome-192x192.png",
    //   "android-chrome-512x512.png",
    //   "apple-touch-icon.png",
    //   "bcard.png",
    //   "browserconfig.xml",
    //   "cv.pdf",
    //   "decision-2.png",
    //   "decision-3.png",
    //   "decision.png",
    //   "easymeal1.png",
    //   "favicon-16x16.png",
    //   "favicon-32x32.png",
    //   "favicon.ico",
    //   "flex.png",
    //   "lan.png",
    //   "lan2.png",
    //   "lan3.png",
    //   "logo.png",
    //   "mstile-144x144.png",
    //   "mstile-150x150.png",
    //   "mstile-310x150.png",
    //   "mstile-310x310.png",
    //   "mstile-70x70.png",
    //   "ng.jpeg",
    //   "obuci1.png",
    //   "obuci2.png",
    //   "obuci3.png",
    //   "patrick.png",
    //   "safari-pinned-tab.svg",
    //   "site.webmanifest",
    //   "speaker.jpeg",
    //   "vercel.svg",
    //   "victory.jpeg",

    //   // Your other files in `public`
    // ].includes(pathname)
    PUBLIC_FILE.test(pathname)
  )
    return;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
