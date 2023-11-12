"use client";
import React, { useEffect, useState } from "react";
import "animate.css";
import Image from "next/image";
import { animated, config, useSpring } from "@react-spring/web";

const AboutPage = ({
  dictionary,
}: {
  dictionary: {
    biolength: string;
    shortest: string;
    short: string;
    longest: string;
    long: string;
    bio0: string;
    bio1: string;
    bio2: string;
    bio3: string;
    "bio3-2": string;
    "bio3-3": string;
    the: string;
    numbers: string;
    "numbers-desc": string;
    "times-to": string;
    "numbers-desc2": string;
  };
}) => {
  const [length, setLength] = useState(2);
  const [contributions, setContributions] = useState(0);
  const [repositoryCount, setRepositoryCount] = useState(0);

  const springs = useSpring({
    delay: 12,
    from: { x: -30, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  useEffect(() => {
    async function getContributions() {
      const url = "/api/github-contributions";
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({}), // body data type must match "Content-Type" header
      });
      const contributionCount = await response.json();

      setContributions(contributionCount.contributionCount);
    }
    async function getRepositories() {
      const url = "/api/github-repositories";
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({}), // body data type must match "Content-Type" header
      });
      const repositories = await response.json();

      setRepositoryCount(
        repositories.repositories.data.user.repositories.edges.length
      );
    }

    getContributions();
    getRepositories();
  }, []);
  return (
    <div className="bg-bgColor px-4 min-h-subnav">
      <div className="max-w-7xl mx-auto px-2 py-6 md:py-12 overflow-x-hidden lg:px-16 lg:overflow-x-visible space-y-6">
        <section>
          <div className="flex-1 w-full max-w-4xl mx-auto space-y-4">
            <div className=" w-full relative rounded pb-8 grid grid-cols-1 sm:grid-cols-2 mb-24 md:mb-0">
              <div className="bg-secondaryLight opacity-25 rounded h-full w-full absolute top-0 left-0"></div>
              <div className="xs:mx-5 xs:-mb-0 -mb-4 relative flex items-center justify-center w-full h-full">
                <h3 className="text-3xl  md:text-5xl font-bold mt-4 mr-8 md:mr-0 mb-4 md:mb-0">
                  Nemanja Grujić
                </h3>
              </div>
              <div className="relative w-full h-64 -mb-16">
                <animated.div
                  style={springs}
                  className="bg-secondary m-5 rounded h-48 w-48 xs:h-52 xs:w-52 md:h-56 md:w-56 absolute flex items-center justify-center bottom-0 right-0"
                >
                  <div className="w-[90%] h-[90%] relative ">
                    <Image
                      src="/IMG_0056.jpeg"
                      fill
                      className="object-cover object-bottom rounded absolute bottom-0"
                      alt=""
                    />
                  </div>
                </animated.div>
              </div>
            </div>
            <p className="text-sm text-center uppercase font-semibold mb-3 opacity-75 ">
              {dictionary.biolength}
            </p>
            <div className="w-full flex space-x-2 flex-wrap items-center justify-center">
              <p className="text-xl hidden md:block ">{dictionary.shortest}</p>
              <p className="text-base block md:hidden ">{dictionary.short}</p>
              <button
                className="bg-primary  p-1 h-8 md:h-10 w-8 md:w-10 rounded-full transition duration-150"
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
                className="bg-primary  p-1 h-8 md:h-10 w-8 md:w-10 rounded-full transition duration-150"
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
                className="bg-primary  p-1 h-8 md:h-10 w-8 md:w-10 rounded-full transition duration-150"
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
                className="bg-primary  p-1 h-8 md:h-10 w-8 md:w-10 rounded-full transition duration-150"
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
              <p className="text-xl hidden md:block ">{dictionary.longest}</p>
              <p className="text-base block md:hidden ">{dictionary.long}</p>
            </div>
            <div className="flex-1 w-full max-w-4xl pt-8 mx-auto transition duration-500  ">
              <p
                className={`text-lg md:text-3xl font-semibold mb-8 ${
                  length == 0 ? "text-center" : "text-left"
                }`}
              >
                {length == 0 ? (
                  <span>{dictionary.bio0}</span>
                ) : length == 1 ? (
                  <span>{dictionary.bio1}</span>
                ) : length == 2 ? (
                  <span>{dictionary.bio2}</span>
                ) : (
                  <span>
                    {dictionary.bio3}
                    <br />
                    <br />
                    {dictionary["bio3-2"]}
                    <br />
                    <br />
                    {dictionary["bio3-3"]}
                  </span>
                )}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex-1 w-full max-w-4xl mx-auto pb-8 ">
            <div className={`w-full relative rounded p-4 `}>
              <div className="bg-secondaryLight opacity-25 rounded h-full w-full absolute top-0 left-0"></div>
              <p className="uppercase ">
                {dictionary.the}{" "}
                <span className="text-primary">{dictionary.numbers}</span>
              </p>

              <p className="text-lg md:text-3xl font-semibold">
                {dictionary["numbers-desc"]}{" "}
                <span className="text-primary">{contributions}</span>{" "}
                {dictionary["times-to"]}{" "}
                <span className="text-primary">{repositoryCount}</span>{" "}
                {dictionary["numbers-desc2"]}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
