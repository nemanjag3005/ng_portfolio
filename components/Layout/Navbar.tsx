"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { i18n } from "../../i8n-config";
import { useTheme } from "../../context/ThemeContext";

const Navbar = ({
  toggle,
  isOpen,
  dictionary,
}: {
  toggle: () => void;
  isOpen: boolean;
  dictionary: {
    nav1: string;
    "footer-heading": string;
    "footer-button": string;
    "footer-desc": string;
    "footer-contact": string;
  };
}) => {
  const [selectionMenuOpen, setSelectionMenuOpen] = useState(-1);
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
        "backdrop-blur-xs sticky top-0 z-50  transition duration-200 bg-bgTrans hover:backdrop-blur-none hover:bg-inherit"
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
      <div className="container px-4 py-4 md:py-6 flex flex-nowrap xs:flex-wrap justify-between border-b items-center mx-auto max-w-6xl">
        <Link passHref href="/">
          <div className="rounded-lg">
            <div className="relative group rounded-lg">
              <button className="relative transform ease-in-out group transition duration-300 hover:scale-105 rounded-lg leading-none flex items-center ">
                <Image alt="Logo" src="/logo.png" height={40} width={40} />
              </button>
            </div>
          </div>
        </Link>

        <button className="inline-flex  p-1 xxs:p-2 items-center ml-auto md:hidden text-sm  rounded-lg  focus:outline-none focus:ring-2 focus:ring-textPrimary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          onClick={toggle}
          className="inline-flex items-center xxs:p-2 p-1 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-textPrimary  "
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="xxs:w-8 xxs:h-8 w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link passHref href="/about">
                <span className="block py-2 cursor-pointer nav dark:nav-dark pr-4 pl-3 border-b border-textPrimary hover:bg-textLight md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0       text-lg">
                  {dictionary.nav1}
                </span>
              </Link>
            </li>
            <li>
              <Link passHref href="/portfolio">
                <span className="block py-2 cursor-pointer nav pr-4 pl-3 border-b border-textPrimary hover:bg-textLight md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0       text-lg">
                  Portfolio
                </span>
              </Link>
            </li>
            <li>
              <Link passHref href="/cv">
                <span className="block py-2 cursor-pointer nav pr-4 pl-3 border-b border-textPrimary hover:bg-textLight md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0       text-lg">
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
