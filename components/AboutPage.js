import React, { useState } from "react";

const AboutPage = () => {
  const [length, setLength] = useState(1);
  return (
    <div className="dark:bg-gray-800">
    <div className="max-w-7xl px-2 mx-auto py-6 md:py-12 overflow-x-hidden lg:px-16 lg:overflow-x-visible space-y-6">
      <section>
        <div className="flex-1 w-full max-w-4xl mx-auto space-y-4">
          <div className="text-zinc-800 dark:text-gray-50 w-full relative rounded pb-8 grid grid-cols-1 md:grid-cols-2 mb-24 md:mb-0">
            <div className="bg-blue-200 dark:bg-slate-700 rounded h-full w-full absolute top-0 left-0"></div>
            <div className="mx-5 relative flex items-center justify-center w-full h-full">
              <h3 className="text-xl md:text-4xl font-bold mt-4">Nemanja Grujić</h3>
            </div>
            <div className="relative w-full h-64 -mb-16">
              <div className="bg-blue-600 dark:bg-primary-dark m-5 rounded h-56 w-56 absolute bottom-0 right-0">
                <div className="w-full h-full relative">
                <div className="h-64 w-64  rounded absolute left-4 top-4">
                    <img src='/IMG_1265.jpeg' className="object-cover h-64 w-64 rounded">

                    </img>
                  </div>
                  <div className="absolute top-0 left-0 w-12 h-12 mt-12 -ml-10 md:-ml-20">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      fillOpacity="0"
                      strokeWidth="10"
                      width="336.591px"
                      height="336.592px"
                      viewBox="0 0 336.591 336.592"
                      className="w-24 h-24 md:w-32 md:h-32 transform rotate-12 stroke-current"
                    >
                      <g>
                        <path
                          d="M278.217,21.171c-50.184-11.016-105.876,9.792-153,41.616C90.945,46.263,55.449,34.635,24.237,27.903 c-4.896-1.224-6.732,6.12-1.836,7.344c29.988,9.792,61.2,21.42,90.576,36.72c-28.152,20.808-52.02,45.288-69.156,68.544 c-23.868,32.435-41.616,70.379-33.048,111.383c8.568,44.064,50.796,68.544,90.576,78.336 c44.676,11.017,99.756,9.181,138.925-17.136c38.556-26.316,41.004-80.784,25.092-120.564 c-20.196-51.407-69.156-92.411-123.625-121.787c41.004-26.316,88.128-42.84,132.192-35.496 C283.725,37.083,288.009,23.007,278.217,21.171z M235.99,171.723c24.479,34.884,34.884,88.128,3.06,121.788 c-31.212,33.66-93.024,30.6-134.028,21.42c-38.556-8.568-72.216-31.212-80.172-72.216c-7.956-39.168,18.972-79.56,42.84-107.1 c16.524-18.972,37.332-38.556,60.588-55.692C170.505,103.791,209.061,133.779,235.99,171.723z"
                          opacity="1"
                          strokeDashoffset="0px"
                          strokeDasharray="2073.232666015625px 2073.232666015625px"
                        ></path>
                        <path
                          d="M324.118,24.843c-7.956-5.508-15.3-11.016-22.645-16.524c-5.508-4.284-10.403-9.792-17.748-7.956 c-2.447,0.612-4.283,3.06-4.283,5.508c0,7.344,6.731,10.404,12.239,14.688c4.896,3.672,10.404,7.344,15.301,11.016 c-11.017,7.344-24.48,11.628-34.885,20.808c-5.508,4.896,1.225,11.628,7.345,9.18c7.956-3.672,15.911-7.344,23.256-11.016 c7.344-3.672,16.523-7.344,22.644-13.464C329.625,33.411,328.402,27.291,324.118,24.843z"
                          opacity="1"
                          strokeDashoffset="0px"
                          strokeDasharray="219.1214141845703px 219.1214141845703px"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 mt-4 -ml-24 md:-ml-32 transform">
                    <p className="text-2xl transform font-semibold -rotate-45">
                      Web Dev
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-center font-semibold mb-3 opacity-75 dark:text-gray-50">
            DUŽINA BIOGRAFIJE
          </p>
          <div className="w-full flex space-x-2 flex-wrap items-center justify-center">
            <p className="text-xl hidden md:block dark:text-gray-50">Najkraće</p>
            <p className="text-base block md:hidden dark:text-gray-50">Kraće</p>
            <button
              className="bg-blue-600 dark:bg-primary-dark text-white p-1 h-8 md:h-10 w-8 md:w-10 rounded-full transition duration-150"
              onClick={() => setLength(0)}
            >
              {length == 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              )}
            </button>
            <button
              className="bg-blue-600 dark:bg-primary-dark text-white p-1 h-8 md:h-10 w-8 md:w-10 rounded-full transition duration-150"
              onClick={() => setLength(1)}
            >
              {length == 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              )}
            </button>
            <button
              className="bg-blue-600 dark:bg-primary-dark text-white p-1 h-8 md:h-10 w-8 md:w-10 rounded-full transition duration-150"
              onClick={() => setLength(2)}
            >
              {length == 2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              )}
            </button>
            <button
              className="bg-blue-600 dark:bg-primary-dark text-white p-1 h-8 md:h-10 w-8 md:w-10 rounded-full transition duration-150"
              onClick={() => setLength(3)}
            >
              {length == 3 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              )}
            </button>
            <p className="text-xl hidden md:block dark:text-gray-50">Najduže</p>
            <p className="text-base block md:hidden dark:text-gray-50">Duže</p>
          </div>
          <div className="flex-1 w-full max-w-4xl pt-8 mx-auto transition duration-500 dark:text-gray-50 text-zinc-800">
            <p className="md:text-justify text-lg md:text-3xl font-semibold text-left mb-8 px-4">
              {length == 0 ? (
                <span>
                  Nemanja je frontend developer. Voli svoju profesiju.
                </span>
              ) : length == 1 ? (
                <span>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              ) : length == 2 ? (
                <span>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </span>
              ) : (
                <span>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </span>
              )}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex-1 w-full max-w-4xl mx-auto pb-8">
          <div className="w-full bg-blue-200 dark:bg-slate-700 dark:text-gray-50 text-zinc-800 rounded p-4">
            <p>
              Moje <span className='text-blue-500 dark:text-primary-dark'>Brojke</span>
            </p>
            <p className="text-lg md:text-3xl font-semibold">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutPage;
