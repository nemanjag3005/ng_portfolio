import React from "react";
import type { Metadata } from "next";
import Layout from "../../components/Layout/Layout";
import "../../styles/globals.css";
import { ThemeProvider } from "../../context/ThemeContext";
import { Locale, i18n } from "../../i8n-config";
import ServerLayout from "../../components/Layout/ServerLayout";
import { Comic_Neue } from "next/font/google";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const comic = Comic_Neue({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
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
    <html lang={params.lang} className={`${comic.variable} `}>
      <body>
        <ThemeProvider>
          <ServerLayout params={params}>{children}</ServerLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
