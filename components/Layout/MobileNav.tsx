import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import { i18n } from "../../i8n-config";
import { usePathname } from "next/navigation";
import { animated, useSpring, useTransition } from "@react-spring/web";

const MobileNav = ({
  dictionary,
  lang,
}: {
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
  const { setThemeKey, themeKey } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [menuSelection, setMenuSelection] = useState(0);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const transitionSidebar = useTransition(isOpen, {
    config: { tension: 100, friction: 14 },
    from: { opacity: 0 },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });
  const transitionMenus = useSpring({
    config: { tension: 100, friction: 14 },
    from: { x: -30, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  return (
    <nav
      className={
        "backdrop-blur-xs w-full sticky top-0 z-50 block md:hidden transition duration-200 bg-bgTrans hover:backdrop-blur-none hover:bg-inherit"
      }
    >
      <div className="max-w-6xl mx-auto py-3 border-b px-4">
        <div className="flex justify-between items-center">
          <Link passHref href={`/${lang}/`}>
            <div className="rounded-lg">
              <div className="relative group rounded-lg">
                <button className="relative transform ease-in-out group transition duration-300 hover:scale-105 rounded-lg leading-none flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 504.4 442.25"
                    className="h-6 w-6 fill-textPrimary"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M411.09,286.67c-14.34,0-27.82,0-41.31,0-6.15,0-6.73-.52-6.73-6.42,0-27.33.17-54.66,0-82,0-4.38,1.31-5.61,5.7-5.59,42.66.18,85.33.13,128,.15,5.78,0,7.06,1.17,7.06,7q0,86.25-.18,172.5c0,2.93-2,6.3-4,8.71a171.08,171.08,0,0,1-59.17,46.44c-60.51,28.76-139.66,14.8-185.93-35-15.44-16.63-28.48-35.59-41.76-54.11C173,282.84,133.65,227.05,94.1,171.39a10.38,10.38,0,0,0-4-3.6V174Q90,302.5,90,431c0,8.47-1.28,9.73-9.86,9.73H10.6c-9,0-10.6-1.62-10.6-10.33q0-210,.1-420c0-7.16,1.3-8.54,8.33-8.54,25,0,50,.1,75-.08,3.84,0,6,1.32,8.17,4.31q47.7,67.27,95.54,134.43Q242,217.73,296.73,295a286.81,286.81,0,0,0,19.77,25.09c17.29,19.26,39.06,29.33,65.07,28.26,9-.37,17.89-3.33,26.78-5.33,1.07-.24,2.61-1.83,2.62-2.81C411.13,322.58,411.09,305,411.09,286.67Z" />
                        <path d="M455.61,128.19c-6.14-5.65-11.71-11.64-18.12-16.54-47.62-36.41-105-10.94-123.84,30.55-12.29,27.09-14.2,54.82-3.9,83,.39,1.09.68,2.21,1,3.32,0,.12-.13.3-.42.9-5-7.3-9.73-14.47-14.68-21.5Q263.27,162,230.78,116.19c-1.95-2.75-2.3-5-1-8.13C252,55,289.38,17.93,346,4.82c60.59-14,113.17,2.71,155.9,48.62,3.18,3.42,3.34,5.66.43,9.62-15,20.4-29.51,41.11-44.21,61.71C457.27,126,456.38,127.14,455.61,128.19Z" />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            onClick={toggle}
            className="inline-flex items-center  p-1 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-textPrimary  "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-8 w-8"
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
          </button>
        </div>
        {transitionSidebar(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className={`fixed left-0 top-0 z-50 inset-0 w-full h-screen overflow-hidden bg-secondaryDark text-white 
          }`}
              >
                <div className="flex justify-between items-center py-3 px-4">
                  <Link passHref href={`/${lang}/`}>
                    <div className="rounded-lg">
                      <div className="relative group rounded-lg">
                        <button
                          onClick={toggle}
                          className="relative transform ease-in-out group transition duration-300 hover:scale-105 rounded-lg leading-none flex items-center "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 504.4 442.25"
                            className="h-6 w-6 fill-white"
                          >
                            <g id="Layer_2" data-name="Layer 2">
                              <g id="Layer_1-2" data-name="Layer 1">
                                <path d="M411.09,286.67c-14.34,0-27.82,0-41.31,0-6.15,0-6.73-.52-6.73-6.42,0-27.33.17-54.66,0-82,0-4.38,1.31-5.61,5.7-5.59,42.66.18,85.33.13,128,.15,5.78,0,7.06,1.17,7.06,7q0,86.25-.18,172.5c0,2.93-2,6.3-4,8.71a171.08,171.08,0,0,1-59.17,46.44c-60.51,28.76-139.66,14.8-185.93-35-15.44-16.63-28.48-35.59-41.76-54.11C173,282.84,133.65,227.05,94.1,171.39a10.38,10.38,0,0,0-4-3.6V174Q90,302.5,90,431c0,8.47-1.28,9.73-9.86,9.73H10.6c-9,0-10.6-1.62-10.6-10.33q0-210,.1-420c0-7.16,1.3-8.54,8.33-8.54,25,0,50,.1,75-.08,3.84,0,6,1.32,8.17,4.31q47.7,67.27,95.54,134.43Q242,217.73,296.73,295a286.81,286.81,0,0,0,19.77,25.09c17.29,19.26,39.06,29.33,65.07,28.26,9-.37,17.89-3.33,26.78-5.33,1.07-.24,2.61-1.83,2.62-2.81C411.13,322.58,411.09,305,411.09,286.67Z" />
                                <path d="M455.61,128.19c-6.14-5.65-11.71-11.64-18.12-16.54-47.62-36.41-105-10.94-123.84,30.55-12.29,27.09-14.2,54.82-3.9,83,.39,1.09.68,2.21,1,3.32,0,.12-.13.3-.42.9-5-7.3-9.73-14.47-14.68-21.5Q263.27,162,230.78,116.19c-1.95-2.75-2.3-5-1-8.13C252,55,289.38,17.93,346,4.82c60.59-14,113.17,2.71,155.9,48.62,3.18,3.42,3.34,5.66.43,9.62-15,20.4-29.51,41.11-44.21,61.71C457.27,126,456.38,127.14,455.61,128.19Z" />
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </Link>
                  <button
                    data-collapse-toggle="mobile-menu"
                    type="button"
                    onClick={toggle}
                    className="inline-flex items-center  p-1 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-textPrimary  "
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Close main menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="px-4 py-3">
                  <div className="relative grid grid-cols-2 gap-2">
                    {menuSelection == 0 ? (
                      <>
                        <div className="col-span-2">
                          <Link href={`/${lang}/about`} className="w-full">
                            <button
                              onClick={toggle}
                              className=" justify-between w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4"
                            >
                              {dictionary.nav1}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                />
                              </svg>
                            </button>
                          </Link>
                        </div>
                        <button
                          onClick={() => setMenuSelection(1)}
                          className=" justify-between w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4 col-span-2"
                        >
                          {dictionary.proj}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => setMenuSelection(3)}
                          className=" justify-between w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4 col-span-2"
                        >
                          {dictionary.resources}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </button>
                        <div className="col-span-2">
                          <Link href={`/${lang}/cv`} className="w-full">
                            <button
                              onClick={toggle}
                              className=" justify-between w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4"
                            >
                              CV
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                />
                              </svg>
                            </button>
                          </Link>
                        </div>
                        <button
                          onClick={() => setMenuSelection(2)}
                          className=" justify-between w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4 col-span-2"
                        >
                          {dictionary.settings}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </button>
                      </>
                    ) : menuSelection == 1 ? (
                      <>
                        <button
                          onClick={() => setMenuSelection(0)}
                          className="col-span-2 flex items-center"
                        >
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
                              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                          </svg>
                          {dictionary.back}
                        </button>
                        <div className="col-span-2">
                          <Link href={`/${lang}/personal-projects`}>
                            <button
                              onClick={toggle}
                              className="w-full border-2 border-white text-left text-white flex items-center space-x-4 rounded py-2 px-4 h-full"
                            >
                              <div className="h-6 w-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium">
                                  {dictionary["personal-projects"]}
                                </p>
                                <p className="text-xs font-light">
                                  {dictionary["pp-desc"]}
                                </p>
                              </div>
                            </button>
                          </Link>
                        </div>
                        <div className="col-span-2">
                          <Link href={`/${lang}/portfolio`}>
                            <button
                              onClick={toggle}
                              className="w-full border-2 border-white text-left text-white flex items-center space-x-4 rounded py-2 px-4 h-full"
                            >
                              <div className="h-6 w-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium">Portfolio</p>
                                <p className="text-xs font-light">
                                  {dictionary["port-desc"]}
                                </p>
                              </div>
                            </button>
                          </Link>
                        </div>
                      </>
                    ) : menuSelection == 2 ? (
                      <>
                        <button
                          onClick={() => setMenuSelection(0)}
                          className="col-span-2 flex items-center"
                        >
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
                              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                          </svg>
                          {dictionary.back}
                        </button>
                        <div className="col-span-2">
                          <div className="w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4 mx-auto">
                            <div className="flex flex-col w-full">
                              <p className="font-medium">
                                {dictionary.changeLanguage}
                              </p>
                              <div className="max-w-6xl w-full relative mx-auto pt-3">
                                <div className="flex w-full items-center justify-between ">
                                  {i18n.locales.map((locale) => {
                                    return (
                                      <div key={locale}>
                                        <Link
                                          passHref
                                          href={redirectedPathName(locale)}
                                        >
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
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4 mx-auto">
                            <div className="flex flex-col">
                              <p className="font-medium">
                                {dictionary.pickTheme}
                              </p>
                              <div className="max-w-6xl relative mx-auto pt-3">
                                <div className="flex w-full items-center justify-between">
                                  <div className="flex flex-wrap justify-center md:justify-start md:space-x-4">
                                    <button
                                      onClick={() => setThemeKey("standard")}
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-standard-secondary bg-standard-light p-1 text-standard-secondary-dark hover:bg-primary hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="2"
                                          stroke="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                          ></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => setThemeKey("sunset")}
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-sunset-secondary bg-sunset-light p-1 text-sunset-secondary-dark hover:bg-primary hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="2"
                                          stroke="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                          ></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => setThemeKey("lime")}
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-lime-secondary bg-lime-light p-1 text-lime-secondary-dark hover:bg-lime hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="2"
                                          stroke="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                          ></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => setThemeKey("cosmo")}
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-cosmo-secondary bg-cosmo-light p-1 text-cosmo-secondary-dark hover:bg-cosmo-primary hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="2"
                                          stroke="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                          ></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => setThemeKey("split")}
                                      data-theme="split"
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-split-secondary bg-split-light p-1 text-split-secondary-dark hover:bg-split-primary hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="2"
                                          stroke="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                          ></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <button
                                      onClick={() =>
                                        setThemeKey("dark-standard")
                                      }
                                      data-theme="sub-standard"
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-dark-standard-secondary bg-dark-standard-light p-1 text-dark-standard-secondary-dark hover:bg-primary hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => setThemeKey("dark-sunset")}
                                      data-theme="sub-sunset"
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-dark-sunset-secondary bg-dark-sunset-light p-1 text-dark-sunset-secondary-dark hover:bg-dark-sunset-primary hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => setThemeKey("dark-lime")}
                                      data-theme="sub-lemon"
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-dark-lime-secondary bg-dark-lime-light p-1 text-dark-lime-secondary-dark hover:bg-dark-lime-primary hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => setThemeKey("dark-cosmo")}
                                      data-theme="sub-cosmo"
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-dark-cosmo-secondary bg-dark-cosmo-light p-1 text-dark-cosmo-secondary-dark hover:bg-dark-cosmo-primary hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                        </svg>
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => setThemeKey("dark-split")}
                                      data-theme="sub-split"
                                      className="mr-2 mb-2 md:mr-0 md:mb-0"
                                    >
                                      <div className="h-8 w-8 rounded-full border-2 border-dark-split-secondary bg-dark-split-light p-1 text-dark-split-secondary-dark hover:bg-dark-split-primary hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                        </svg>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-2">
                          <Link href={`/${lang}/themes`}>
                            <button
                              onClick={() => {
                                setThemeKey("custom");
                                toggle();
                              }}
                              className="w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4 h-full"
                            >
                              <div className="h-6 w-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                  ></path>
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium">
                                  {dictionary.themeMachine}
                                </p>
                              </div>
                            </button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setMenuSelection(0)}
                          className="col-span-2 flex items-center"
                        >
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
                              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                          </svg>
                          {dictionary.back}
                        </button>
                        <div className="col-span-2">
                          <Link href={`/${lang}/uses`} className="w-full">
                            <button
                              onClick={toggle}
                              className="w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4 h-full text-left"
                            >
                              <div className="h-6 w-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium">{dictionary.uses}</p>
                                <p className="text-xs font-light">
                                  {dictionary["uses-desc"]}
                                </p>
                              </div>
                            </button>
                          </Link>
                        </div>
                        <div className="col-span-1">
                          <Link href={`/${lang}/site-stats`} className="w-full">
                            <button
                              onClick={toggle}
                              className="w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4 h-full"
                            >
                              <div className="h-6 w-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium">
                                  {dictionary["site-stats"]}
                                </p>
                                <p className="text-xs"></p>
                              </div>
                            </button>
                          </Link>
                        </div>
                        <div className="col-span-1">
                          <Link href={`/${lang}/siteinfo`} className="w-full">
                            <button
                              onClick={toggle}
                              className="w-full border-2 border-white text-white flex items-center space-x-4 rounded py-2 px-4 h-full"
                            >
                              <div className="h-6 w-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium">
                                  {dictionary["site-info"]}
                                </p>
                                <p className="text-xs"></p>
                              </div>
                            </button>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </animated.div>
            )
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
