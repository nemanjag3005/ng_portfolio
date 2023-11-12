import React from "react";
import type { Metadata } from "next";
import GoogleAnalytics from "../../components/GoogleAnalytics";
import "../../styles/globals.css";
import { ThemeProvider } from "../../context/ThemeContext";
import { Locale, i18n } from "../../i8n-config";
import ServerLayout from "../../components/Layout/ServerLayout";
import localFont from "next/font/local";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const comicNew = localFont({
  src: "./fonts/comic.woff2",
  display: "swap",
  weight: "300",
  variable: "--font-comic",
});

export const metadata: Metadata = {
  title: "Nemanja Grujic Portfolio",
  description: "The portfolio website of Nemanja Grujic",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <ThemeProvider>
          <ServerLayout params={params}>{children}</ServerLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
