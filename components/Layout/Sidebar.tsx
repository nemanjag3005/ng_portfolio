"use client";
import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import "animate.css";

const Sidebar = ({ isOpen, toggle }) => {
  let { t } = useTranslation();
  return (
    <div
      className={`h-full w-4/5 bg-gray-200 animate__animated animate__fadeInLeft animate__faster dark:bg-slate-700 z-50 fixed top-0 left-0 shadow-xl transition-all ease-in-out transform duration-300 ${
        isOpen == true ? "block translate-x-0" : "hidden -translate-x-full"
      }`}
    >
      <nav className="bg-white border-b border-w-4xl px-4 py-4 md:py-6 dark:border-primary-dark dark:bg-slate-800 transition duration-500">
        <div className="container flex xs:flex-wrap flex-nowrap justify-between items-center mx-auto max-w-6xl">
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
                    className="w-8 h-8 fill-blue-600 dark:fill-primary-dark group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-500 ease-in-out"
                    enableBackground="new 0 0 1000 1000"
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
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            onClick={toggle}
            className="inline-flex items-center p-2 ml-3 text-sm text-zinc-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Close main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xs:h-8 xs:w-8 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="justify-center flex flex-col mt-32">
        <ul className="space-y-2">
          <li>
            <Link href="/about">
              <span className="flex py-2 cursor-pointer pr-4 pl-3 text-zinc-800  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:text-primary-dark dark:hover:bg-gray-500 dark:hover:text-primary-dark md:dark:hover:bg-transparent dark:border-gray-500 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t("common:nav1")}
              </span>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <span className="flex py-2 cursor-pointer pr-4 pl-3 text-zinc-800  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:text-primary-dark dark:hover:bg-gray-500 dark:hover:text-primary-dark md:dark:hover:bg-transparent dark:border-gray-500 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                Portfolio
              </span>
            </Link>
          </li>
          <li>
            <Link href="/cv">
              <span className="flex py-2 cursor-pointer pr-4 pl-3 text-zinc-800  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:text-primary-dark dark:hover:bg-gray-500 dark:hover:text-primary-dark md:dark:hover:bg-transparent dark:border-gray-500 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                Curriculum Vitae
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
