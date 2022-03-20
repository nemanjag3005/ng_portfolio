import React from "react";
import useTranslation from 'next-translate/useTranslation';
import 'animate.css';

const PortfolioPage = () => {
  let {t} = useTranslation();
  return (
    <div className="dark:bg-slate-800 bg-gray-50">
    <div className="mx-4 relative transition-colors duration-100 text-zinc-800 dark:text-gray-50">
      <div className="max-w-4xl mx-auto py-6 md:py-12 overflow-x-hidden lg:overflow-x-visible">
        <div className="w-full space-y-4 mt-20">
          <div className="flex justify-between items-end">
            <div className="flex flex-col animate__animated animate__fadeInUp space-x-1">
              <h1 className="text-4xl md:text-6xl font-bold">
              {t("portfolio:my")} <span className="text-blue-500 dark:text-primary-dark">Portfolio.</span>
              </h1>
              <p>
              {t("portfolio:desc")}
              </p>
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
          <div className="grid gap-2 md:grid-cols-2 lg:-mx-12 xl:-mx-32 md:py-12 ">
            <div>
              <div className="flex flex-col space-y-4">
                <div className="w-full h-72">
                  <img
                    src="/lan.png"
                    className="object-cover w-full h-full rounded shadow-lg"
                  ></img>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-shrink">
                    <img
                      src="/lan2.png"
                      className="object-cover w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                  <div className="flex-shrink">
                    <img
                      src="/lan3.png"
                      className="object-cover w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center p-4 lg:p-6 rounded shadow-md bg-blue-100 dark:bg-slate-700">
              <h2 className="text-3xl lg:text-5xl font-bold mb-2">
                LAN Digital
              </h2>
              <div className="w-full mb-4">
                <p>
                {t("portfolio:p1")}
                </p>
                <br />
                {t("portfolio:p1-2")}
              </div>
              <div className="flex space-x-2">
                  <a href='https://www.lan-digital.com' target='_blank' rel="noreferrer" className="bg-blue-500 dark:bg-primary-dark dark:hover:bg-primary-darker hover:bg-blue-900 text-white px-3 py-2 text-lg rounded">{t("portfolio:button")}</a>
                  <a href='https://github.com/nemanjag3005/landigital' target='_blank' rel="noreferrer" className="border-2 border-black dark:border-gray-50 dark:hover:bg-primary-dark-light dark:text-gray-50 hover:bg-blue-300 text-black px-3 py-2 text-lg rounded">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-2 lg:-mx-12 xl:-mx-32 md:py-12 mt-12 md:mt-0">
        <div className="md:hidden">
              <div className="flex flex-col space-y-4">
                <div className="w-full h-72">
                  <img
                    src="/decision.png"
                    className="object-cover w-full h-full rounded shadow-lg"
                  ></img>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-shrink">
                    <img
                      src="/lan.png"
                      className="object-cover w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                  <div className="flex-shrink">
                    <img
                      src="/lan.png"
                      className="object-cover w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center p-4 lg:p-6 rounded shadow-md bg-blue-100 dark:bg-slate-700">
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
                Time to Decide
              </h2>
              <div className="w-full mb-4">
                <p>
                {t("portfolio:p2")}
                </p>
                <br />
                {t("portfolio:p2-2")}
              </div>
              <div className="flex space-x-2">
                  <a href='#' target='_blank' rel="noreferrer" className="bg-blue-500 dark:bg-primary-dark dark:hover:bg-primary-darker hover:bg-blue-900 text-white px-3 py-2 text-lg rounded">{t("portfolio:button")}</a>
                  <a href='https://github.com/Tech-Start-UCalgary/decision-frontend' target='_blank' rel="noreferrer" className="border-2 border-black hover:bg-blue-300 dark:border-gray-50 dark:hover:bg-primary-dark-light dark:text-gray-50 text-black px-3 py-2 text-lg rounded">GitHub</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col space-y-4">
                <div className="w-full h-72">
                  <img
                    src="/decision.png"
                    className="object-cover w-full h-full rounded shadow-lg"
                  ></img>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-shrink">
                    <img
                      src="/lan.png"
                      className="object-cover w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                  <div className="flex-shrink">
                    <img
                      src="/lan.png"
                      className="object-cover w-full h-32 rounded shadow-lg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PortfolioPage;
