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
}: {
  children: React.ReactNode;
  dictionary: {
    nav1: string;
    "footer-heading": string;
    "footer-button": string;
    "footer-desc": string;
    "footer-contact": string;
  };
}) => {
  return (
    <div className="transition-colors duration-200 bg-bgColor text-textPrimary">
      <Navbar dictionary={dictionary} />
      <MobileNav dictionary={dictionary} />
      <>{children}</>
      <Footer dictionary={dictionary} />
    </div>
  );
};

export default Layout;
