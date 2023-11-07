"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Locale } from "../../i8n-config";
import { getDictionary } from "../../get-dictionary";
import { useTheme } from "../../context/ThemeContext";

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
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-colors duration-200 bg-bgColor text-textPrimary">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} dictionary={dictionary} />
      <>{children}</>
      <Footer dictionary={dictionary} />
    </div>
  );
};

export default Layout;
