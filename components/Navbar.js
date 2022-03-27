import Link from "next/link";
import React, { useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const Navbar = ({ toggle, isOpen }) => {
  let router = useRouter();
  let { t } = useTranslation();
  const lang =
    router.locale === "en-US" ? "eng" : router.locale === "sr-RS" ? "srb" : "";
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav className="bg-gray-50 dark:bg-slate-800 transition duration-500">
      <div className="container px-4 py-4 md:py-6 flex flex-nowrap xs:flex-wrap justify-between border-b items-center mx-auto max-w-6xl">
        <Link href="/">
          <div className="rounded-lg">
            <div className="relative group rounded-lg">
              <button className="relative transform ease-in-out group transition duration-300 hover:scale-105 rounded-lg leading-none flex items-center ">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  className="w-8 h-8 fill-zinc-800 dark:fill-gray-200 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-500 ease-in-out"
                  enable-background="new 0 0 1000 1000"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M683.8,71.3L377.5,377.5H193.8L10,622.5c0,0,194.7-54.2,308.2-28.8L10,990l403.8-314c56.3,128.9-36.3,314-36.3,314l245-183.8V622.5l306.3-306.3L990,10L683.8,71.3z" />
                    </g>
                  </g>
                </svg>
                <span className="font-bold text-zinc-800 dark:text-gray-200">
                  NG
                </span>
              </button>
            </div>
          </div>
        </Link>
        <Link
          href={router.asPath}
          locale={lang == "eng" ? "sr-RS" : lang == "srb" ? "en-US" : "en-US"}
        >
          <button className="inline-flex hover:bg-gray-100 dark:hover:bg-slate-700 p-1 xxs:p-2 items-center ml-auto md:hidden text-sm text-zinc-800 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200  dark:focus:ring-gray-600">
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
        </Link>
        <button
          className="inline-flex hover:bg-gray-100 dark:hover:bg-slate-700 xxs:p-2 p-1 items-center  md:hidden text-sm text-zinc-800 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200  dark:focus:ring-gray-600"
          onClick={() => setTheme(colorTheme)}
        >
          {colorTheme == "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 hover:stroke-primary-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 hover:stroke-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          onClick={toggle}
          className="inline-flex items-center xxs:p-2 p-1 text-sm text-zinc-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              <Link href="/about">
                <span className="block py-2 cursor-pointer nav dark:nav-dark pr-4 pl-3 text-zinc-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:primary-dark dark:hover:bg-slate-500 dark:hover:primary-dark md:dark:hover:bg-transparent dark:border-slate-500 text-lg">
                  {t("common:nav1")}
                </span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <span className="block py-2 cursor-pointer nav dark:nav-dark pr-4 pl-3 text-zinc-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:primary-dark dark:hover:bg-slate-500 dark:hover:primary-dark md:dark:hover:bg-transparent dark:border-slate-500 text-lg">
                  Portfolio
                </span>
              </Link>
            </li>
            <li>
              <Link href="/cv">
                <span className="block py-2 cursor-pointer nav dark:nav-dark pr-4 pl-3 text-zinc-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:primary-dark dark:hover:bg-slate-500 dark:hover:primary-dark md:dark:hover:bg-transparent dark:border-slate-500 text-lg">
                  Curriculum Vitae
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={router.asPath}
                locale={
                  lang == "eng" ? "sr-RS" : lang == "srb" ? "en-US" : "en-US"
                }
              >
                <button className="md:inline-flex items-center hidden text-sm text-zinc-800 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200  dark:focus:ring-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 dark:hover:stroke-primary-dark hover:stroke-blue-500"
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
              </Link>
            </li>
            <li>
              <button
                className="inline-flex items-center text-sm text-zinc-800 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200  dark:focus:ring-gray-600"
                onClick={() => setTheme(colorTheme)}
              >
                {colorTheme == "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:stroke-primary-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:stroke-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
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
