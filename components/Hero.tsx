"use client";
import React from "react";
import Link from "next/link";
import "animate.css";
import Image from "next/image";

const Hero = ({
  dictionary,
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
  };
}) => {
  return (
    <div className="transition duration-500">
      <div className="mx-4 ">
        <div className="max-w-6xl mx-auto py-6 overflow-hidden">
          <div className="w-full text-dark bg-light z-40  mt-16 md:mt-0 lg:mt-12  p-6 md:p-12 rounded-xl relative">
            <div className="grid md:grid-cols-5 w-full ">
              <div className="flex flex-col space-y-5 animate__animated animate__fadeInUp justify-center md:col-span-3">
                <div className="flex items-center">
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mr-2">
                    Nemanja Grujić
                  </h1>
                  <div className="absolute xs:-top-24 xs:right-0 -right-12 -top-16 shadow-xl rounded-full">
                    <div className="md:hidden relative w-28 h-28 xs:w-36 xs:h-36">
                      <Image alt="logo" src="/IMG_1281-modified.png" fill />
                    </div>
                  </div>
                </div>
                <p className="text-xl md:text-2xl md:pr-10">
                  {dictionary.desc}
                </p>
                <div className="grid grid-cols-1 gap-2 md:flex md:space-x-3 items-center w-full">
                  <div className="flex items-center space-x-2">
                    <Link passHref href="/portfolio">
                      <button className="w-full text-center text-light hover:bg-primary hover:text-white bg-dark shadow hover:shadow-lg px-3 py-2 rounded text-lg md:text-2xl">
                        Portfolio
                      </button>
                    </Link>
                    <Link passHref href="/about">
                      <button className="w-full whitespace-nowrap border-dark text-dark bg-light text-center shadow border-2 hover:shadow-lg px-3 py-2 rounded text-lg md:text-2xl">
                        {dictionary.aboutButton}
                      </button>
                    </Link>
                  </div>
                  <div className="flex w-full items-center space-x-2 justify-center md:justify-start">
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
              <div className="col-span-2 hidden md:flex">
                <div className="relative align-middle aspect-square  rounded-full -my-20 shadow-2xl object-cover">
                  <Image
                    alt="Nemanja Grujic"
                    src="/IMG_1281-modified.png"
                    className="rounded-full align-middle object-cover"
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
            className="w-full md:-mt-10 -mt-2 relative z-30 h-full"
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
          <div className="relative rounded-b-lg w-full md:h-96 h-32 -mt-10 md:-mt-32 bg-speaker bg-cover bg-top z-10 mb-12">
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
              <Link href="/portfolio">{dictionary.competitions}</Link>
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold my-3 mt-8 ">
            {dictionary.projects}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mb-12 md:mb-16">
            <a
              className="group relative"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.obuci.rs"
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
            <Link passHref href="/portfolio">
              <div className=" rounded-md px-8 py-8 flex items-center text-colorAccent4Dark bg-colorAccent4Light border-4 border-transparent hover:border-colorAccent4 hover:text-gray-800 cursor-pointer ">
                <div>
                  <h1 className="text-2xl md:text-5xl font-bold">
                    Personal Projects
                  </h1>
                  <p>
                    The projects I've worked on as part of Competitions and
                    Passion Projects
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
            </Link>
            <Link passHref href="/portfolio">
              <div className=" rounded-md px-8 py-8 flex items-center text-colorAccent4Dark bg-colorAccent4Light border-4 border-transparent hover:border-colorAccent4 hover:text-gray-800 cursor-pointer ">
                <div>
                  <h1 className="text-2xl md:text-5xl font-bold">Startups</h1>
                  <p>
                    Serious projects for clients and business ideas I've worked
                    on that take months.
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
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
