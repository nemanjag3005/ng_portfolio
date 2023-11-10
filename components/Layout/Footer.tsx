"use client";
import React from "react";
import Link from "next/link";

const Footer = ({
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
  return (
    <div className="mx-0 relative z-20   transition duration-500">
      <div className="mx-4">
        <footer className="max-w-6xl mx-auto py-2 border-t">
          <div className="py-4 ">
            <div className="container px-2 mx-auto">
              <div className="-mx-4 flex flex-wrap justify-between">
                <div className="px-2 my-4 w-full sm:w-auto max-w-md">
                  <h1 className="text-xl mb-3 font-bold">
                    {dictionary["footer-heading"]}
                  </h1>
                  <p className="text-sm mb-3">{dictionary["footer-desc"]}</p>
                  <Link passHref href="/siteinfo">
                    <button className="bg-primary text-white rounded px-3 py-2">
                      {dictionary["footer-button"]}
                    </button>
                  </Link>
                </div>
                <div className="px-2 my-4 w-full sm:w-auto">
                  <h4 className="text-xl mb-1 font-bold">
                    {dictionary["footer-contact"]}
                  </h4>
                  <div className="flex space-x-2 my-2 items-center  ">
                    <a
                      href="https://twitter.com/nemke1031"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="fill-current h-6 w-6 hover:text-primary "
                      >
                        <g>
                          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                        </g>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nemanja-grujic-5828a1213/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        viewBox="0 0 34 34"
                        className="fill-current h-6 w-6 hover:text-primary "
                      >
                        <g>
                          <path
                            d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <a
                    href="mailto:nemanjag3005@gmail.com"
                    className="text-sm hover:text-primary "
                  >
                    nemanjag3005@gmail.com
                  </a>
                  <p className="text-sm">+1 825 733 6311</p>
                  <p className="text-sm">+381 63 203 012</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4  ">
            <div className="mx-auto px-2">
              <div className="-mx-4 flex flex-wrap justify-between items-center space-y-2 md:space-y-0">
                <div className="px-2 flex flex-col w-full text-center sm:w-auto sm:text-left text-sm opacity-75">
                  <span>
                    Copyright © 2023 Nemanja Grujić. All Rights Reserved.
                  </span>
                  <span>Next.js v14.0.1 | TailwindCSS v3.0.18</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
