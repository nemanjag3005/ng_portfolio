"use client";
import React from "react";
import "animate.css";
import Image from "next/image";

const PersonalProjects = ({
  dictionary,
}: {
  dictionary: {
    my: string;
    desc: string;
    p1: string;
    "p1-2": string;
    button: string;
    p2: string;
    "p2-2": string;
    p3: string;
    "p3-2": string;
    moreprojects: string;
    "mp-1": string;
    "mp-2": string;
    "mp-3": string;
  };
}) => {
  return (
    <div className="">
      <div className="mx-4 relative transition-colors duration-200  ">
        <div className="max-w-4xl mx-auto py-6 md:py-12 overflow-x-hidden lg:overflow-x-visible">
          <div className="w-full space-y-4 mt-20">
            <div className="flex justify-between items-end">
              <div className="flex flex-col animate__animated animate__fadeInUp space-x-1">
                <h1 className="text-4xl md:text-6xl font-bold">
                  {dictionary.my}{" "}
                  <span className="text-primary ">Projects.</span>
                </h1>
                <p className="font-light">{dictionary.desc}</p>
              </div>
            </div>
            <div>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="block lg:hidden  h-20 w-20 opacity-30 transform rotate-180 ml-auto mr-auto"
                viewBox="0 0 380.312 380.312"
              >
                <g>
                  <path
                    className="fill-current"
                    d="M343.832,129.132c-4.896-28.152-13.464-55.08-25.092-81.396C312.62,34.272,300.992,1.224,283.244,0 c-3.061,0-6.12,2.448-6.732,5.508c-13.464,41.616-26.315,82.62-41.004,123.012c-2.447,6.12,5.508,11.628,11.017,8.568 c11.016-7.344,21.42-14.688,31.212-23.256c-6.732,37.944-3.061,77.111-2.448,115.057c0.612,37.332-14.076,183.6-84.456,126.07 c-34.272-28.764-22.032-88.127-20.808-127.906c1.224-37.333,6.732-75.889,0-113.221c-4.896-31.212-17.748-57.528-49.572-69.768 C93.523,33.66,72.104,67.32,64.147,87.516c-28.152,79.56-37.332,181.152-15.912,262.548c1.224,4.896,9.18,3.059,7.956-2.449 c-9.18-46.512-6.12-93.635-1.836-140.147C58.64,163.404,64.147,98.532,95.972,64.26c26.316-28.152,53.244,20.196,58.14,39.168 c5.508,21.42,4.896,44.676,4.896,66.096c-0.612,37.332-3.672,74.052-4.896,111.384c-1.224,36.107,5.508,65.484,34.272,89.352 c26.928,22.031,56.916,4.283,75.276-18.973c22.644-28.15,24.479-70.379,25.704-104.65c1.224-46.513-6.12-94.861,3.06-141.373 c12.24,11.628,25.704,21.42,40.393,30.6C338.936,140.148,344.444,134.64,343.832,129.132z M289.364,96.084 c-1.225-1.224-3.061-1.836-4.896-0.612c-1.836,0.612-3.06,1.224-3.672,2.448c-7.956,6.12-15.912,11.628-24.479,16.524 c11.628-31.824,22.031-64.26,31.823-96.696c8.568,10.404,22.032,43.452,24.48,49.572c6.731,15.3,11.016,31.824,14.688,47.736 c-9.18-6.732-17.747-13.464-25.703-21.42C296.708,89.964,291.2,92.412,289.364,96.084z"
                  ></path>
                </g>
              </svg>
              <svg
                viewBox="0 0 423 372"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block ml-48 h-48 w-64 -mb-32 -mt-8 opacity-30 z-20 relative "
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="swirly-scribbled-arrow"
                    transform="translate(211.500000, 186.000000) rotate(80.000000) translate(-211.500000, -186.000000) translate(56.000000, -1.000000)"
                    className="fill-current"
                    fillRule="nonzero"
                  >
                    <path
                      d="M298.591,0.932 C285.127,7.052 272.276,13.784 259.423,21.128 C247.795,27.248 233.719,33.368 223.927,42.548 C218.419,47.444 223.927,57.848 231.271,55.4 C231.271,55.4 231.883,55.4 231.883,54.788 C233.719,56.012 234.944,57.236 236.779,59.072 C236.779,59.684 237.39,60.908 237.39,61.52 C238.002,62.744 239.226,63.968 240.451,65.192 C222.703,98.24 206.179,131.288 185.371,161.888 C179.251,171.068 172.518,179.636 164.563,187.592 C144.979,156.38 113.154,120.272 74.598,127.004 C23.802,136.184 51.342,190.651 77.658,209.012 C108.87,231.656 135.798,230.432 162.726,209.012 C174.966,229.82 183.535,253.075 182.31,275.72 C180.474,330.188 131.514,339.367 90.51,325.291 C96.63,309.379 98.466,291.02 94.794,275.107 C88.674,246.343 44.61,220.639 18.906,240.835 C-6.186,261.031 40.938,312.439 56.238,322.844 C60.522,325.904 65.418,328.963 70.314,331.411 C69.702,332.023 69.702,332.636 69.09,333.247 C40.938,377.311 25.639452,368.743 8.50345203,337.531 C6.05545203,332.635 -0.676547965,336.919 1.15945203,341.815 C15.235452,374.251 21.966,382.819 60.522,360.787 C69.702,355.279 77.658,347.323 83.166,337.531 C116.826,350.995 155.995,350.995 180.474,320.395 C209.85,283.675 191.491,235.939 171.907,200.443 C172.518,199.831 172.518,199.831 173.131,199.219 C208.015,165.559 229.435,117.823 251.467,74.983 C255.751,78.043 260.648,81.103 264.931,84.163 C267.992,85.999 272.276,85.387 274.723,82.939 C292.471,62.131 305.935,37.039 310.219,9.499 C312.055,2.768 305.324,-2.128 298.591,0.932 Z M139.471,207.787 C116.215,221.251 92.959,204.727 75.823,188.815 C53.179,168.007 59.299,134.347 94.183,141.08 C111.931,144.752 126.007,160.664 137.635,173.516 C143.755,180.248 149.876,188.203 155.384,196.771 C150.488,201.056 144.979,204.728 139.471,207.787 Z M77.047,319.171 C77.047,319.171 76.435,319.171 77.047,319.171 C60.523,310.604 48.283,298.363 38.491,283.064 C34.207,276.332 30.535,268.988 28.699,261.032 C22.579,240.224 55.627,250.628 64.195,254.912 C87.451,267.764 85.615,297.14 77.047,319.171 Z M267.379,67.028 C266.767,67.028 266.767,66.416 266.155,66.416 C266.155,64.58 264.93,62.744 262.483,61.52 C258.199,59.684 253.915,57.236 249.63,54.788 C247.794,53.564 244.122,49.892 244.122,51.116 C244.122,50.504 243.51,49.892 242.898,49.892 C249.629,46.22 256.362,41.324 263.093,37.652 C271.661,32.756 280.841,27.86 290.022,22.964 C285.74,38.264 277.784,53.564 267.379,67.028 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>

            <div className="grid gap-2 animate__animated animate__fadeInUp md:grid-cols-2 lg:-mx-12 xl:-mx-32 md:py-12 ">
              <div className="w-full h-full flex flex-col justify-center p-4 lg:p-6 rounded shadow-md bg-bgLight ">
                <div>
                  <div className="px-2 py-1 rounded-full bg-secondaryLight text-secondaryDark mb-2 inline-block">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-sm">Best Overall Winner</p>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-2">
                  Easy Meal
                </h2>
                <div className="w-full mb-4 font-light">
                  <p>{dictionary.p3}</p>
                  <br />
                  {dictionary["p3-2"]}
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://www.obuci.rs"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:bg-dark text-white px-3 py-2 text-lg rounded"
                  >
                    {dictionary.button}
                  </a>
                  <a
                    href="https://github.com/nemanjag3005/obucirs"
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-textColor text-textColor hover:bg-light px-3 py-2 text-lg rounded"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-4">
                  <div className="w-full h-72 relative">
                    <Image
                      src="/easymeal1.png"
                      fill
                      alt="Obuci.rs home page."
                      className="object-cover w-full h-full rounded shadow-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className=" relative h-32 w-full">
                      <Image
                        alt="Obuci.rs profile page."
                        src="/easymeal2.png"
                        fill
                        className="object-cover object-top w-full h-32 rounded shadow-lg"
                      />
                    </div>
                    <div className=" relative h-32 w-full">
                      <Image
                        alt="Obuci.rs store."
                        src="/victory.jpeg"
                        fill
                        className="object-cover w-full h-32 object-top rounded shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-2 md:grid-cols-2 lg:-mx-12 xl:-mx-32 md:py-12 ">
              <div>
                <div className="flex flex-col space-y-4">
                  <div className="w-full h-72 relative">
                    <Image
                      alt="LAN Digital website"
                      src="/decision.png"
                      fill
                      className="object-cover w-full h-full rounded shadow-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className=" relative h-32 w-full">
                      <Image
                        alt="About Us page."
                        src="/decision-2.png"
                        fill
                        className="object-cover w-full h-32 rounded shadow-lg"
                      />
                    </div>
                    <div className=" relative h-32 w-full">
                      <Image
                        alt="Our team page."
                        src="/decision-3.png"
                        fill
                        className="object-cover w-full h-32 rounded shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex flex-col justify-center p-4 lg:p-6 rounded shadow-md bg-bgLight ">
                <div>
                  <div className="px-2 py-1 rounded-full bg-secondaryLight text-secondaryDark mb-2 inline-block">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-sm">Best Design Winner</p>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-2">
                  Time to Decide
                </h2>
                <div className="w-full mb-4 font-light">
                  <p>{dictionary.p1}</p>
                  <br />
                  {dictionary["p1-2"]}
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://www.lan-digital.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:bg-dark text-white px-3 py-2 text-lg rounded"
                  >
                    {dictionary.button}
                  </a>
                  <a
                    href="https://github.com/nemanjag3005/landigital"
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-textColor text-textColor hover:bg-light px-3 py-2 text-lg rounded"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-2 md:grid-cols-2 lg:-mx-12 xl:-mx-32 md:py-12 mt-12 md:mt-0">
            <div className="md:hidden">
              <div className="flex flex-col space-y-4">
                <div className="w-full h-72">
                  <img
                    src="/decision-2.png"
                    className="object-cover w-full h-full rounded shadow-lg"
                  ></img>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-shrink">
                    <img
                      src="/decision.png"
                      className="object-cover object-left-top w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                  <div className="flex-shrink">
                    <img
                      src="/decision-3.png"
                      className="object-cover object-left-top w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center p-4 lg:p-6 rounded shadow-md bg-bgLight ">
              <div>
                <div className="px-2 py-1 rounded-full bg-secondaryLight text-secondaryDark mb-2 inline-block">
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm">Active Development</p>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-2">
                Nomad Planner
              </h2>
              <div className="w-full mb-4 font-light">
                <p>{dictionary.p2}</p>
                <br />
                {dictionary["p2-2"]}
              </div>
              <div className="flex space-x-2">
                <a
                  href="https://decision-frontend-eight.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary hover:bg-dark text-white px-3 py-2 text-lg rounded"
                >
                  {dictionary.button}
                </a>
                <a
                  href="https://github.com/Tech-Start-UCalgary/decision-frontend"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-textColor text-textColor hover:bg-light px-3 py-2 text-lg rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col space-y-4">
                <div className="w-full h-72">
                  <img
                    src="/decision-2.png"
                    className="object-cover w-full h-full rounded shadow-lg"
                  ></img>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-shrink">
                    <img
                      src="/decision.png"
                      className="object-cover object-left-top w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                  <div className="flex-shrink">
                    <img
                      src="/decision-3.png"
                      className="object-cover object-top w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">
            {dictionary.moreprojects}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="flex space-x-3">
                <div className="h-10 w-10 inline-block p-2 bg-secondaryLight rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 fill-secondaryDark"
                  >
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                      clipRule="evenodd"
                    />
                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                  </svg>
                </div>
                <div className="w-full space-y-2">
                  <a href="https://www.flexteam.rs/">
                    <div className="flex items-center space-x-2 hover:text-secondary">
                      <h2 className="text-xl font-medium">Flex Team</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm">{dictionary["mp-1"]}</p>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex space-x-3">
                <div className="h-10 w-10 inline-block p-2 bg-secondaryLight rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 fill-secondaryDark"
                  >
                    <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                  </svg>
                </div>
                <div className="w-full space-y-2">
                  <a href="https://github.com/nemanjag3005/battleship">
                    <div className="flex items-center space-x-2 hover:text-secondary">
                      <h2 className="text-xl font-medium">Battleship</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm">{dictionary["mp-3"]}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
