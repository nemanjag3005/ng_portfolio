"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { i18n } from "../../i8n-config";
import { useTheme } from "../../context/ThemeContext";

const Navbar = ({
  dictionary,
}: {
  dictionary: {
    nav1: string;
    "footer-heading": string;
    "footer-button": string;
    "footer-desc": string;
    "footer-contact": string;
  };
}) => {
  const [selectionMenuOpen, setSelectionMenuOpen] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const { setThemeKey, themeKey } = useTheme();
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <nav
      className={
        "backdrop-blur-xs sticky top-0 z-50 hidden md:block transition duration-200 bg-bgTrans hover:backdrop-blur-none hover:bg-inherit"
      }
    >
      {selectionMenuOpen == 1 ? (
        <div className="container px-4 pt-4 flex flex-nowrap xs:flex-wrap justify-between items-center mx-auto max-w-6xl">
          <div className="space-x-4">
            <button
              onClick={() => setThemeKey("standard")}
              className="bg-standard-light border-2 p-1.5 rounded-full border-standard-secondary group hover:bg-standard-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-standard-dark group-hover:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => setThemeKey("sunset")}
              className="bg-sunset-light border-2 p-1.5 rounded-full border-sunset-secondary group hover:bg-sunset-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-sunset-primary group-hover:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => setThemeKey("lime")}
              className="bg-lime-light border-2 p-1.5 rounded-full border-lime-secondary group hover:bg-lime-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-lime-text group-hover:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => setThemeKey("cosmo")}
              className="bg-cosmo-light border-2 p-1.5 rounded-full border-cosmo-secondary group hover:bg-cosmo-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-cosmo-dark group-hover:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => setThemeKey("split")}
              className="bg-split-light border-2 p-1.5 rounded-full border-split-secondary group hover:bg-split-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-split-dark group-hover:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => setThemeKey("dark-standard")}
              className="bg-dark-standard-light border-2 p-1.5 rounded-full border-dark-standard-secondary group hover:bg-dark-standard-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 fill-dark-standard-secondary-dark group-hover:fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => setThemeKey("dark-sunset")}
              className="bg-dark-sunset-light border-2 p-1.5 rounded-full border-dark-sunset-secondary group hover:bg-dark-sunset-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 fill-dark-sunset-secondary-dark group-hover:fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => setThemeKey("dark-lime")}
              className="bg-dark-lime-light border-2 p-1.5 rounded-full border-dark-lime-secondary group hover:bg-dark-lime-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 fill-dark-lime-secondary-dark group-hover:fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => setThemeKey("dark-cosmo")}
              className="bg-dark-cosmo-light border-2 p-1.5 rounded-full border-dark-cosmo-secondary group hover:bg-dark-cosmo-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 fill-dark-cosmo-secondary-dark group-hover:fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => setThemeKey("dark-split")}
              className="bg-dark-split-light border-2 p-1.5 rounded-full border-dark-split-secondary group hover:bg-dark-split-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 fill-dark-split-secondary-dark group-hover:fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <Link passHref href="/themes">
            <button
              onClick={() => {
                setThemeKey("custom");
              }}
              className="flex h-8 items-center space-x-1 rounded-full bg-primary px-3 text-white hover:bg-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
              <p className="font-light">Custom Theme</p>
            </button>
          </Link>
        </div>
      ) : selectionMenuOpen == 2 ? (
        <div className="container px-4 pt-4 flex flex-nowrap xs:flex-wrap justify-between items-center mx-auto max-w-6xl">
          <div className="space-x-8 flex">
            {i18n.locales.map((locale) => {
              return (
                <div key={locale}>
                  <Link passHref href={redirectedPathName(locale)}>
                    <span className="text-3xl">
                      {locale == "sr"
                        ? "🇷🇸"
                        : locale == "de"
                        ? "🇩🇪"
                        : locale == "en"
                        ? "🇬🇧"
                        : locale == "fr"
                        ? "🇫🇷"
                        : "🇮🇹"}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div
        onMouseLeave={() => setShowDropdown(false)}
        className="container  relative px-4 py-4 flex flex-nowrap xs:flex-wrap justify-between border-b items-center mx-auto max-w-6xl"
      >
        <Link passHref href="/">
          <div className="rounded-lg">
            <div className="relative group rounded-lg">
              <button className="relative transform ease-in-out group transition duration-300 hover:scale-105 rounded-lg leading-none flex items-center ">
                <Image alt="Logo" src="/logo.png" height={40} width={40} />
              </button>
            </div>
          </div>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link passHref href="/about">
                <span className="block cursor-pointer nav dark:nav-dark pr-4 pl-3 border-b border-textPrimary hover:bg-textLight md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 text-base">
                  {dictionary.nav1}
                </span>
              </Link>
            </li>
            <li onMouseEnter={() => setShowDropdown(true)}>
              <span
                className={`flex items-center cursor-pointer pr-4 pl-3 border-b border-textPrimary hover:bg-textLight md:hover:bg-transparent md:border-0 md:p-0 text-base ${
                  showDropdown ? "text-primary" : ""
                }`}
              >
                Projects{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              {showDropdown && (
                <div className="absolute left-0 bottom-0 w-full">
                  <div className="relative w-full">
                    <div className="absolute left-0 top-0 z-50 w-full bg-bgColor border-b-2 border-primary px-4 pb-4">
                      <div className="space-y-2 w-full">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="col-span-2 uppercase opacity-75 text-xs">
                            project collections
                          </div>
                          <div className="uppercase opacity-75 text-xs">
                            helpful resources
                          </div>
                          <div className="col-span-2 row-span-3">
                            <div className="grid grid-cols-2 w-full h-full gap-2">
                              <Link href="/personal-projects">
                                <button className="relative group text-left w-full h-full border-2 border-primary hover:text-white hover:bg-primary text-primary flex flex-col rounded py-2 px-4">
                                  <div className="mb-2 w-full border-b-2 border-primary pb-1 group-hover:border-white">
                                    <p className="font-medium">
                                      Personal Projects
                                    </p>
                                  </div>
                                  <p className="text-sm font-light opacity-80">
                                    The projects I have worked on as part of
                                    competitions and passion projects.
                                  </p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 absolute bottom-0 right-0 m-4 text-white opacity-0 group-hover:opacity-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                    />
                                  </svg>
                                </button>
                              </Link>
                              <Link href="/portfolio">
                                <button className="relative group text-left w-full h-full border-2 border-primary hover:text-white hover:bg-primary text-primary flex flex-col rounded py-2 px-4">
                                  <div className="mb-2 w-full border-b-2 border-primary pb-1 group-hover:border-white">
                                    <p className="font-medium">Portfolio</p>
                                  </div>
                                  <p className="text-sm font-light opacity-80">
                                    Serious projects for clients and business
                                    ideas I've worked on that take months.
                                  </p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 absolute bottom-0 right-0 m-4 text-white opacity-0 group-hover:opacity-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                    />
                                  </svg>
                                </button>
                              </Link>
                            </div>
                          </div>
                          <Link href="/site-stats">
                            <button className="w-full border-2 border-primary hover:bg-primary hover:text-white text-primary flex items-center rounded py-2 px-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                                />
                              </svg>
                              Site Stats
                            </button>
                          </Link>
                          <Link href="/siteinfo">
                            <button className="w-full border-2 border-primary hover:bg-primary hover:text-white text-primary flex items-center rounded py-2 px-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                />
                              </svg>
                              Site Info
                            </button>
                          </Link>
                          <Link href="/uses">
                            <button className="w-full border-2 border-primary hover:bg-primary hover:text-white text-primary flex items-center rounded py-2 px-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                                />
                              </svg>
                              Uses
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link passHref href="/cv">
                <span className="block cursor-pointer nav pr-4 pl-3 border-b border-textPrimary hover:bg-textLight md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 text-base">
                  Curriculum Vitae
                </span>
              </Link>
            </li>
            <li>
              <button
                className="md:inline-flex items-center hidden text-sm  rounded-lg"
                onClick={() =>
                  setSelectionMenuOpen(selectionMenuOpen == 2 ? -1 : 2)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6  hover:stroke-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                className="inline-flex items-center text-sm  rounded-lg "
                onClick={() =>
                  setSelectionMenuOpen(selectionMenuOpen == 1 ? -1 : 1)
                }
              >
                {selectionMenuOpen == 1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 fill-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                      clipRule="evenodd"
                    />
                    <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 hover:stroke-primary `}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
