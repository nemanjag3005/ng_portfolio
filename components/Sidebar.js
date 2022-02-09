import Link from "next/link";
import React from "react";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`h-full w-4/5 bg-gray-200 dark:bg-gray-700 z-40 fixed top-0 left-0 shadow-xl transition ease-in duration-500 ${
        isOpen == true ? "block" : "hidden"
      }`}
    >
      <nav className="bg-white border-b border-w-4xl px-4 py-4 md:py-6 dark:border-primary-dark dark:bg-gray-800 transition duration-500">
        <div className="container flex flex-wrap justify-between items-center mx-auto max-w-6xl">
          <Link
            href="/"
          >
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
            data-collapse-toggle="mobile-menu"
            type="button"
            onClick={toggle}
            className="inline-flex items-center p-2 ml-3 text-sm text-zinc-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
        <ul>
          <li>
            <Link
              href="/about"
      
            >
              <span className="flex py-2 cursor-pointer pr-4 pl-3 text-zinc-800  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:text-pink-600 dark:hover:bg-gray-500 dark:hover:text-pink-600 md:dark:hover:bg-transparent dark:border-gray-500 text-lg">
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
              O Meni
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
            >
              <span className="flex py-2 cursor-pointer pr-4 pl-3 text-zinc-800  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:text-pink-600 dark:hover:bg-gray-500 dark:hover:text-pink-600 md:dark:hover:bg-transparent dark:border-gray-500 text-lg">
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
            <Link
              href="/cv"
              
            >
              <span className="flex py-2 cursor-pointer pr-4 pl-3 text-zinc-800  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 dark:text-gray-200 md:dark:hover:text-pink-600 dark:hover:bg-gray-500 dark:hover:text-pink-600 md:dark:hover:bg-transparent dark:border-gray-500 text-lg">
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
