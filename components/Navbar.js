import Link from "next/link";
import React, { useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = ({ toggle, isOpen }) => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav className="bg-white border-b border-w-4xl px-4 py-4 md:py-6 rounded dark:bg-gray-800 transition duration-500">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-6xl">
        <Link href="/">
          <span
            className={`self-center cursor-pointer text-xl font-semibold whitespace-nowrap dark:text-white text-zinc-800`}
          >
            <span className="dark:text-primary-dark text-blue-500">N</span>
            EMANJA{" "}
            <span className="dark:text-primary-dark text-blue-500">G</span>
            RUJIĆ
          </span>
        </Link>
        <button
          className="inline-flex hover:bg-gray-100 dark:hover:bg-gray-700 p-2 items-center ml-auto md:hidden text-sm text-zinc-800 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200  dark:focus:ring-gray-600"
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
          className="inline-flex items-center p-2 text-sm text-zinc-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-8 h-8"
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
                <span className="block py-2 cursor-pointer pr-4 pl-3 text-zinc-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:text-pink-600 dark:hover:bg-gray-500 dark:hover:text-pink-600 md:dark:hover:bg-transparent dark:border-gray-500 text-lg">
                  O Meni
                </span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <span className="block py-2 cursor-pointer pr-4 pl-3 text-zinc-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:text-pink-600 dark:hover:bg-gray-500 dark:hover:text-pink-600 md:dark:hover:bg-transparent dark:border-gray-500 text-lg">
                  Portfolio
                </span>
              </Link>
            </li>
            <li>
              <Link href="/cv">
                <span className="block py-2 cursor-pointer pr-4 pl-3 text-zinc-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:text-pink-600 dark:hover:bg-gray-500 dark:hover:text-pink-600 md:dark:hover:bg-transparent dark:border-gray-500 text-lg">
                  Curriculum Vitae
                </span>
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
