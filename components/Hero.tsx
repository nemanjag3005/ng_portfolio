"use client";
import React from "react";
import Link from "next/link";
import "animate.css";
import Image from "next/image";
import { WorldMap } from "./ui/world-map";

const Hero = ({
  dictionary,
  lang,
}: {
  dictionary: {
    desc: string;
    aboutButton: string;
    competitions: string;
    projects: string;
    furtherwork: string;
    p1: string;
    p2: string;
    p3: string;
    "personal-projects": string;
    "pp-desc": string;
    "port-desc": string;
  };
  lang: "en" | "sr" | "de" | "it" | "fr";
}) => {
  return (
    <div className="transition duration-500">
      <div className="mx-4 ">
        <div className="max-w-6xl mx-auto py-6 overflow-hidden">
          <div className="w-full text-dark bg-light z-40 mt-16 md:mt-0 lg:mt-12 p-6 md:p-12 rounded-t-xl relative">
            <div className="grid md:grid-cols-5 w-full ">
              <div className="flex flex-col space-y-5 md:col-span-3">
                <div className="flex flex-col space-y-5 md:col-span-3">
                  <div className="flex items-center">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mr-2">
                      Nemanja Grujić
                    </h1>
                    <div className="absolute xs:-top-20 xs:right-0 -right-2 -top-16 shadow-xl rounded-full">
                      <div className="md:hidden relative w-28 h-28 xs:w-36 xs:h-36">
                        <Image
                          alt="logo"
                          src="/IMG_9334.jpeg"
                          className="rounded-full align-middle object-cover object-center"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-xl md:text-2xl md:pr-10">
                    {dictionary.desc}
                  </p>
                  <div className="grid grid-cols-1 gap-2 space-y-1 lg:space-y-0 md:flex md:space-x-3 items-center w-full">
                    <div className="flex items-center space-x-2 w-full">
                      <div className="w-full min-w-fit">
                        <Link href={`/${lang}/portfolio`}>
                          <button className="w-full text-center text-light hover:bg-primary hover:text-white bg-dark shadow hover:shadow-lg px-3 py-2 rounded text-lg md:text-2xl">
                            Portfolio
                          </button>
                        </Link>
                      </div>
                      <div className="w-full min-w-fit">
                        <Link href={`/${lang}/about`}>
                          <button className=" whitespace-nowrap border-dark text-dark bg-light text-center shadow border-2 hover:shadow-lg px-6 py-1.5 rounded text-lg md:text-2xl">
                            {dictionary.aboutButton}
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 w-full">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/nemke1031"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="fill-current hover:fill-primary h-7 w-7 md:h-9 md:w-9"
                        >
                          <g>
                            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                          </g>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/nemanja-grujic-5828a1213/"
                      >
                        <svg
                          viewBox="0 0 34 34"
                          className="fill-current hover:fill-primary h-7 w-7 md:h-9 md:w-9"
                        >
                          <g>
                            <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"></path>
                          </g>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/nemanjag3005"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="fill-current hover:fill-primary h-7 w-7 md:h-9 md:w-9"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 hidden md:flex">
                <div className="relative align-middle aspect-square  rounded-full -my-20 shadow-2xl object-cover">
                  <Image
                    alt="Nemanja Grujic"
                    src="/IMG_9334.jpeg"
                    className="rounded-full align-middle object-cover object-center"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>

          <svg
            width="100%"
            viewBox="0 0 900 238"
            version="1.1"
            style={{ transform: "scaleY(-1)" }}
            className="w-full md:-mt-10 md:-mb-32 -mt-2 relative z-30 h-full"
          >
            <defs>
              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="-5"
                  stdDeviation="4"
                  floodColor="#333333"
                  floodOpacity="0.5"
                ></feDropShadow>
              </filter>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M0,123 L21.5,116.2 C43,109.3 86,95.7 128.8,89.3 C171.7,83 214.3,84 257.2,91.2 C300,98.3 343,111.7 385.8,117.5 C428.7,123.3 471.3,121.7 514.2,116 C557,110.3 600,100.7 642.8,96.3 C685.7,92 728.3,93 771.2,93.3 C814,93.7 857,93.3 878.5,93.2 L900,93 L900,238 L878.5,238 C857,238 814,238 771.2,238 C728.3,238 685.7,238 642.8,238 C600,238 557,238 514.2,238 C471.3,238 428.7,238 385.8,238 C343,238 300,238 257.2,238 C214.3,238 171.7,238 128.8,238 C86,238 43,238 21.5,238 L0,238 L0,123 Z"
                id="Path"
                fill="var(--dark)"
                className=" origin-center  "
                //@ts-ignore
                transformOrigin="450px 161.56462860107422px"
              ></path>
              <path
                d="M0,147 L21.5,143.5 C43,140 86,133 128.8,135.7 C171.7,138.3 214.3,150.7 257.2,154.8 C300,159 343,155 385.8,151.3 C428.7,147.7 471.3,144.3 514.2,142.8 C557,141.3 600,141.7 642.8,146.3 C685.7,151 728.3,160 771.2,160.3 C814,160.7 857,152.3 878.5,148.2 L900,144 L900,238 L878.5,238 C857,238 814,238 771.2,238 C728.3,238 685.7,238 642.8,238 C600,238 557,238 514.2,238 C471.3,238 428.7,238 385.8,238 C343,238 300,238 257.2,238 C214.3,238 171.7,238 128.8,238 C86,238 43,238 21.5,238 L0,238 L0,147 Z"
                id="Path"
                fill="var(--primary)"
                className=" origin-center  "
                //@ts-ignore
                transformOrigin="450px 186.54723739624023px"
              ></path>
              <path
                d="M0,198 L21.5,198.8 C43,199.7 86,201.3 128.8,199.5 C171.7,197.7 214.3,192.3 257.2,189.5 C300,186.7 343,186.3 385.8,184.3 C428.7,182.3 471.3,178.7 514.2,180 C557,181.3 600,187.7 642.8,189.5 C685.7,191.3 728.3,188.7 771.2,189 C814,189.3 857,192.7 878.5,194.3 L900,196 L900,238 L878.5,238 C857,238 814,238 771.2,238 C728.3,238 685.7,238 642.8,238 C600,238 557,238 514.2,238 C471.3,238 428.7,238 385.8,238 C343,238 300,238 257.2,238 C214.3,238 171.7,238 128.8,238 C86,238 43,238 21.5,238 L0,238 L0,198 Z"
                id="Path"
                fill="var(--light)"
              ></path>
            </g>
          </svg>

          <div className="relative rounded-b-lg w-full md:h-96 h-32 sm:h-48 -mt-8 xs:-mt-10 md:-mt-32 bg-speaker bg-cover bg-top z-10 mb-12">
            <svg
              viewBox="0 0 900 238"
              version="1.1"
              style={{ transform: "scaleY(-1)" }}
              className="w-full md:-mt-36 -mt-12 absolute z-20"
            >
              <defs>
                <filter id="shadow">
                  <feDropShadow
                    dx="0"
                    dy="-5"
                    stdDeviation="4"
                    floodColor="#333333"
                    floodOpacity="0.5"
                  ></feDropShadow>
                </filter>
              </defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <path
                  d="M0,123 L21.5,116.2 C43,109.3 86,95.7 128.8,89.3 C171.7,83 214.3,84 257.2,91.2 C300,98.3 343,111.7 385.8,117.5 C428.7,123.3 471.3,121.7 514.2,116 C557,110.3 600,100.7 642.8,96.3 C685.7,92 728.3,93 771.2,93.3 C814,93.7 857,93.3 878.5,93.2 L900,93 L900,238 L878.5,238 C857,238 814,238 771.2,238 C728.3,238 685.7,238 642.8,238 C600,238 557,238 514.2,238 C471.3,238 428.7,238 385.8,238 C343,238 300,238 257.2,238 C214.3,238 171.7,238 128.8,238 C86,238 43,238 21.5,238 L0,238 L0,123 Z"
                  id="Path"
                  fill="var(--bg)"
                  //@ts-ignore
                  transformOrigin="450px 161.56462860107422px"
                  style={{ transform: "none" }}
                ></path>
              </g>
            </svg>
            <h1 className="bottom-4 text-xl md:text-3xl text-light hover:text-secondaryLight font-semibold  left-6 absolute">
              <Link href={`/${lang}/personal-projects`}>
                {dictionary.competitions}
              </Link>
            </h1>
          </div>
          <div className="bg-gray-900 border-gray-600 hover:border-primary-dark-light group border-4 h-48 md:h-96 w-full rounded-lg mt-6">
            <a href="https://nomad-planner.com">
              <div className="flex items-center justify-center relative h-full w-full overflow-hidden">
                <WorldMap
                  lineColor="var(--light)"
                  dots={[
                    {
                      start: {
                        lat: 64.2008,
                        lng: -149.4937,
                      }, // Alaska (Fairbanks)
                      end: {
                        lat: 34.0522,
                        lng: -118.2437,
                      }, // Los Angeles
                    },
                    {
                      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    },
                    {
                      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                      start: { lat: 51.5074, lng: -0.1278 }, // London
                      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                  ]}
                />

                <div className="flex flex-col absolute space-y-2 items-center transform transition-transform  group-hover:scale-125 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-primary-dark-light transition-colors duration-500 w-12 md:w-16 group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>

                  <div className="relative font-bold text-3xl md:text-7xl w-full text-center flex">
                    <p className="text-white absolute top-0 z-[5]">
                      NomadPlanner
                    </p>
                    <p className="text-accent-1 absolute top-0 z-[4] left-0 group-hover:left-[2px] transition-all duration-200">
                      NomadPlanner
                    </p>
                    <p className="text-accent-2 absolute top-0 z-[3] left-0 group-hover:left-[3px] transition-all duration-200">
                      NomadPlanner
                    </p>
                    <p className="text-secondary absolute top-0 z-[2] left-0 group-hover:left-[5px] transition-all duration-200">
                      NomadPlanner
                    </p>
                    <p className="text-primary relative left-0 group-hover:left-[7px] transition-all duration-200">
                      NomadPlanner
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold my-3 mt-8 ">
            {dictionary.projects}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mb-12 md:mb-16">
            <a
              className="group relative"
              target="_blank"
              rel="noopener noreferrer"
              href="https://obucirs.vercel.app/"
            >
              <div className="absolute top-0 left-0 w-full h-full p-5 hidden group-hover:flex flex-col z-20">
                <p className=" font-bold text-xl">Obuci.rs</p>
                <p>{dictionary.p1}</p>
              </div>
              <div className="relative rounded h-48 w-full object-cover group-hover:opacity-25">
                <Image
                  alt="Project 1"
                  src="/obuci1.png"
                  className="rounded object-cover"
                  fill
                />
              </div>
            </a>
            <a
              className="group relative"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/feed/update/urn:li:activity:7058573838405550080/?utm_source=share&utm_medium=member_desktop"
            >
              <div className="absolute top-0 left-0 w-full h-full p-5 hidden group-hover:flex flex-col z-20">
                <p className=" font-bold text-xl">EasyMeal</p>
                <p>{dictionary.p3}</p>
              </div>
              <div className="relative rounded h-48 w-full object-cover group-hover:opacity-25">
                <Image
                  alt="Project 2"
                  src="/easymeal1.png"
                  className="rounded object-cover"
                  fill
                />
              </div>
            </a>
            <a
              className="group relative"
              target="_blank"
              rel="noopener noreferrer"
              href="https://flexteam.rs"
            >
              <div className="absolute top-0 left-0 w-full h-full p-5 hidden group-hover:flex flex-col z-20">
                <p className=" font-bold text-xl">Flex Team</p>
                <p>{dictionary.p2}</p>
              </div>
              <div className="relative rounded h-48 w-full object-cover group-hover:opacity-25">
                <Image
                  alt="Project 3"
                  src="/flex.png"
                  className="rounded object-cover"
                  fill
                />
              </div>
            </a>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold my-3 mt-8 ">
            {dictionary.furtherwork}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mb-12 md:mb-16">
            <Link passHref href={`/${lang}/personal-projects`}>
              <div className=" rounded-md px-8 py-8 flex items-center text-colorAccent4Dark bg-colorAccent4Light border-4 border-transparent hover:border-colorAccent4 hover:text-gray-800 cursor-pointer ">
                <div>
                  <h1 className="text-2xl md:text-5xl font-bold">
                    {dictionary["personal-projects"]}
                  </h1>
                  <p>{dictionary["pp-desc"]}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 h-16 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                    clipRule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                </svg>
              </div>
            </Link>
            <Link passHref href={`${lang}/portfolio`}>
              <div className=" rounded-md px-8 py-8 flex items-center text-colorAccent4Dark bg-colorAccent4Light border-4 border-transparent hover:border-colorAccent4 hover:text-gray-800 cursor-pointer ">
                <div>
                  <h1 className="text-2xl md:text-5xl font-bold">Portfolio</h1>
                  <p>{dictionary["port-desc"]}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 h-16 ml-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
              </div>
            </Link>
          </div>
          {/* <svg
            viewBox="0 0 1600 342"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m36.374 255.304 50.377-28.313c50.377-28.313 151.132-84.94 251.887-107.59 100.754-22.65 201.509-11.326 302.264-33.976C741.657 62.775 842.411 6.148 943.166.485c100.754-5.662 201.514 39.639 251.884 62.29l50.38 22.65v169.879H36.374Z"
              className="dark:fill-primary-darker fill-blue-900"
            ></path>
            <path
              d="m-120.804 83.488 55.583-11.839c55.583-11.84 166.749-35.518 277.915-31.572 111.166 3.947 222.332 35.519 333.498 59.197 111.166 23.679 222.333 39.465 333.499 31.572 111.166-7.893 222.329-39.465 277.919-55.25l55.58-15.787v165.753H-120.804V83.488Z"
              className="dark:fill-primary-dark fill-blue-500"
            ></path>
            <path
              d="M-147 300.13h79.917c79.916 0 239.75 0 399.583-22.581 159.833-22.58 319.667-67.741 479.5-118.546 159.833-50.806 319.67-107.257 479.5-101.611 159.83 5.645 319.67 73.385 399.58 107.256l79.92 33.87V334H-147v-33.87Z"
              className="dark:fill-primary-dark-light fill-blue-300"
            ></path>
            <path
              d="m-6.95 69.84 67.169 16.987c67.17 16.988 201.509 50.964 335.849 67.952s268.679 16.988 403.019 28.313c134.339 11.325 268.683 33.976 403.023 28.313 134.34-5.662 268.67-39.638 335.84-56.626l67.17-16.988v203.855H-6.951V69.839Z"
              className="dark:fill-primary-darker fill-blue-900"
            ></path>
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
