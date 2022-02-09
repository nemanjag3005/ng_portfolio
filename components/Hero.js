import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="dark:bg-gray-800 transition duration-500">
      <div className="mx-4 ">
        <div className="max-w-6xl mx-auto py-6 overflow-hidden">
          <div className="w-full bg-blue-300 dark:bg-primary-dark-light mt-16 md:mt-0 lg:mt-12 text-blue-900 dark:text-primary-darker p-6 md:p-12 rounded-xl relative z-10 shadow-xl">
            <div className="grid md:grid-cols-5 w-full">
              <div className="flex flex-col space-y-5 justify-center md:col-span-3">
                <div className="flex items-center">
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mr-2">
                    Nemanja Grujić
                  </h1>
                  <div className="absolute xs:-top-16 right-0 -top-10 shadow-xl rounded-full">
                    <img src='/IMG_1281-modified.png' className="md:hidden w-28 h-28 xs:w-36 xs:h-36">

                    </img>
                  </div>
                </div>
                <p className="text-xl md:text-2xl">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="grid grid-cols-1 gap-2 md:flex md:space-x-3 items-center w-full">
                  <div className="flex w-full items-center space-x-2">
                    <Link href="/portfolio">
                      <button className="w-full text-center dark:bg-primary-darker dark:hover:bg-primary-dark dark:text-primary-dark-light shadow bg-blue-900 hover:bg-blue-500 hover:text-white hover:shadow-lg px-3 py-2 text-blue-300 rounded text-lg md:text-2xl">
                        Portfolio
                      </button>
                    </Link>
                    <Link href="/about">
                      <button className="w-full whitespace-nowrap text-center shadow dark:border-primary-darker dark:bg-primary-dark-light dark:text-primary-darker border-2 border-blue-900 bg-blue-300 hover:shadow-lg px-3 py-2 text-blue-900 rounded text-lg md:text-2xl">
                        O Meni
                      </button>
                    </Link>
                  </div>
                  <div className="flex w-full items-center space-x-2 justify-center md:justify-start">
                    <a target="_blank" rel="noopener noreferrer" href="#">
                      <svg
                        viewBox="0 0 24 24"
                        className="fill-current h-7 w-7 md:h-9 md:w-9 hover:fill-blue-500 dark:hover:fill-primary-dark"
                      >
                        <g>
                          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                        </g>
                      </svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                      <svg
                        viewBox="0 0 34 34"
                        className="fill-current h-7 w-7 md:h-9 md:w-9 hover:fill-blue-500 dark:hover:fill-primary-dark"
                      >
                        <g>
                          <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"></path>
                        </g>
                      </svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="fill-current h-7 w-7 md:h-9 md:w-9 hover:fill-blue-500 dark:hover:fill-primary-dark"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-2 hidden md:flex">
                <img
                  src="/IMG_1281-modified.png"
                  className="align-middle rounded-full shadow-xl object-cover"
                ></img>
              </div>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold my-3 mt-8 text-zinc-800 dark:text-gray-50">
            Poslednji Projekti
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-zinc-800 dark:text-gray-50 mb-12 md:mb-36">
            <a className="group relative" href="#">
              <div className="absolute top-0 left-0 w-full h-full p-5 hidden group-hover:flex flex-col z-20">
                <p className=" font-bold text-xl">LAN Digital</p>
                <p>Zvanicni sajt LAN Digital-a.</p>
              </div>
              <img
                src="/lan.png"
                className="rounded h-48 w-full object-cover group-hover:opacity-25"
              ></img>
            </a>
            <a className="group relative" href="#">
              <div className="absolute top-0 left-0 w-full h-full p-5 hidden group-hover:flex flex-col z-20">
                <p className=" font-bold text-xl">Flex Team</p>
                <p>Zvanicni sajt LAN Digital-a.</p>
              </div>
              <img
                src="/lan.png"
                className="rounded h-48 w-full object-cover group-hover:opacity-25"
              ></img>
            </a>
            <a className="group relative" href="#">
              <div className="absolute top-0 left-0 w-full h-full p-5 hidden group-hover:flex flex-col z-20">
                <p className=" font-bold text-xl">Time to Decide</p>
                <p>Zvanicni sajt LAN Digital-a.</p>
              </div>
              <img
                src="/lan.png"
                className="rounded h-48 w-full object-cover group-hover:opacity-25"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
