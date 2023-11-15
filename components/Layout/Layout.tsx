"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Locale } from "../../i8n-config";
import { getDictionary } from "../../get-dictionary";
import { useTheme } from "../../context/ThemeContext";
import MobileNav from "./MobileNav";

const Layout = ({
  children,
  dictionary,
  lang,
}: {
  children: React.ReactNode;
  dictionary: {
    nav1: string;
    "footer-heading": string;
    "footer-button": string;
    "footer-desc": string;
    "footer-contact": string;
    projects: string;
    "custom-theme": string;
    settings: string;
    back: string;
    changeLanguage: string;
    pickTheme: string;
    themeMachine: string;
    "personal-projects": string;
    "pp-desc": string;
    "port-desc": string;
    "project-collections": string;
    "helpful-resources": string;
    "site-stats": string;
    "site-info": string;
    uses: string;
    resources: string;
    proj: string;
    "uses-desc": string;
  };
  lang: "en" | "sr" | "de" | "it" | "fr";
}) => {
  return (
    <div className="transition-colors duration-200 bg-bgColor text-textPrimary">
      <Navbar dictionary={dictionary} lang={lang} />
      <MobileNav dictionary={dictionary} lang={lang} />
      <>{children}</>
      <Footer dictionary={dictionary} lang={lang} />
    </div>
  );
};

export default Layout;
