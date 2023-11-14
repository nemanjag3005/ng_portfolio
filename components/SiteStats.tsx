"use client";
import React, { useEffect, useState } from "react";
import { useReportWebVitals } from "next/web-vitals";
import { statistics } from "../misc/stats";

const SiteStats = ({
  dictionary,
}: {
  dictionary: {
    about: string;
    p1: string;
    p2: string;
  };
}) => {
  const [selected, setSelected] = useState(0);
  const [fcp, setFCP] = useState("Loading...");
  const [lcp, setLCP] = useState("Loading...");
  const [ttfb, setTTFB] = useState("Loading...");
  const [fid, setFID] = useState("Loading...");
  const [cls, setCLS] = useState("Loading...");
  const [inp, setINP] = useState("Loading...");
  const [isReported, setIsReported] = useState(false);

  useReportWebVitals((metric) => {
    if (isReported) return;
    switch (metric.name) {
      case "FCP": {
        setFCP(metric);
        break; // Don't forget to add break statements
      }
      case "LCP": {
        setLCP(metric); // Assuming metric contains the LCP value
        break;
      }
      case "TTFB": {
        setTTFB(metric); // Assuming metric contains the TTFB value

        break;
      }
      case "FID": {
        setFID(metric); // Assuming metric contains the FID value
        break;
      }
      case "CLS": {
        setCLS(metric); // Assuming metric contains the CLS value
        break;
      }
      case "INP": {
        setINP(metric); // Assuming metric contains the INP value
        break;
      }
      default: {
        // Handle any other metrics or cases
      }
    }
    setIsReported(true);
  });

  const getRatingStyle = (metric) => {
    switch (metric.rating) {
      case "good":
        return {
          className: "bg-green-400",
          text: "Good",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        };
      case "needs-improvement":
        return {
          className: "bg-yellow-400",
          text: "Needs Improvement",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          ),
        };
      case "poor":
        return {
          className: "bg-red-400",
          text: "Poor",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          ),
        };
      default:
        return {
          className: "bg-yellow-400",
          text: "Waiting for Reading",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          ),
        };
    }
  };

  useEffect;

  return (
    <div className="bg-bgColor">
      <section className=" md:py-12 w-full max-w-6xl py-8 mx-auto">
        <div className="grid md:grid-cols-6 gap-2">
          <div className="space-y-2">
            <p className="text-sm uppercase">General</p>
            <div className="grid grid-cols-2 gap-2 my-2 md:flex md:flex-col md:space-y-0.5">
              <button
                onClick={() => setSelected(0)}
                className={`w-full border-l-4 px-2 font-medium py-1 rounded flex items-center space-x-1 ${
                  selected == 0
                    ? "text-dark border-l-4 border-l-primary bg-light"
                    : "border-bgColor hover:border-bgLight  hover:bg-bgLight"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>Overview</p>
              </button>
              <button
                onClick={() => setSelected(1)}
                className={`w-full border-l-4 px-2 font-medium py-1 rounded flex items-center space-x-1 ${
                  selected == 1
                    ? "text-dark border-l-4 border-l-primary bg-light"
                    : "border-bgColor hover:border-bgLight  hover:bg-bgLight"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>Code</p>
              </button>
            </div>
            <p className="text-sm uppercase">Experimental</p>
            <div className="grid grid-cols-2 gap-2 my-2 md:flex md:flex-col md:space-y-0.5">
              <button
                onClick={() => setSelected(2)}
                className={`w-full border-l-4 px-2 font-medium py-1 rounded flex items-center space-x-1 ${
                  selected == 2
                    ? "text-dark border-l-4 border-l-primary bg-light"
                    : "border-bgColor hover:border-bgLight  hover:bg-bgLight"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>Web Vitals</p>
              </button>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="flex flex-col space-y-4">
              <div className="space-y-1">
                <div className="md:flex md:justify-between md:items-center">
                  <p className="text-sm uppercase">
                    {selected == 0
                      ? "realtime stats"
                      : selected == 1
                      ? "site lines by language"
                      : "your web vitals"}
                  </p>
                </div>
                {selected == 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded bg-bgLight h-32 relative flex flex-col items-center justify-center">
                      <span className="flex h-3 w-3 absolute top-0 right-0 m-4">
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-light opacity-75"></span>
                      </span>
                      <p className="text-2xl font-bold mb-2">
                        {/*
      // @ts-ignore */}
                        0 Persons{" "}
                      </p>
                      <p>Visiting Right Now!</p>
                    </div>
                    <div className="rounded bg-bgLight h-32 relative flex flex-col px-4 justify-center">
                      <p className="mb-2">Popular pages among visitors</p>
                      <div className="flex flex-col space-y-1 text-xs opacity-50">
                        <div className="rounded bg-bgColor px-2 py-1">/</div>
                        <div className="rounded bg-bgColor px-2 py-1">/cv</div>
                        <div className="rounded bg-bgColor px-2 py-1">
                          /about
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selected == 1 ? (
                  <div className="w-full bg-bgLight rounded p-4 space-y-2">
                    <div className="flex items-center space-x-1">
                      <div
                        className={`rounded-full bg-secondaryLight text-secondaryDark  font-bold px-2`}
                        style={{
                          width: `${
                            (statistics.jsLines / statistics.totalLines) * 100
                          }%`,
                        }}
                      >
                        JavaScript
                      </div>
                      <p className="text-xs md:text-base">
                        {statistics.jsLines}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div
                        className={`rounded-full bg-secondaryLight text-secondaryDark  font-bold px-2`}
                        style={{
                          width: `${
                            (statistics.tsLines / statistics.totalLines) * 100
                          }%`,
                        }}
                      >
                        TypeScript
                      </div>
                      <p className="text-xs md:text-base">
                        {statistics.tsLines}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div
                        className={`rounded-full bg-secondaryLight text-secondaryDark  font-bold px-2`}
                        style={{
                          width: `${
                            (statistics.tsxLines / statistics.totalLines) * 100
                          }%`,
                        }}
                      >
                        TSX
                      </div>
                      <p className="text-xs md:text-base">
                        {statistics.tsxLines}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="rounded-full bg-secondaryLight text-secondaryDark w-[20%] font-bold px-2">
                        JSON
                      </div>
                      <p className="text-xs md:text-base">
                        {statistics.jsonLines}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="rounded-full bg-secondaryLight text-secondaryDark w-[10%] font-bold px-2">
                        CSS
                      </div>
                      <p className="text-xs md:text-base">
                        {statistics.cssLines}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-6 gap-4">
                    <div className="md:col-span-3 rounded bg-bgLight h-32 relative flex flex-col items-center justify-center">
                      <div className="text-center">
                        <p>Cumulative Layout Shift</p>
                        <p className="text-2xl font-bold mb-2">
                          {/*
      // @ts-ignore */}
                          {cls.value ? cls.value + " ms" : "-"}
                        </p>
                        <a
                          href="https://web.dev/cls/"
                          className={`px-2 rounded-full flex items-center text-center text-gray-800 space-x-1 ${
                            getRatingStyle(cls).className
                          }`}
                        >
                          {getRatingStyle(cls).icon}
                          <p>{getRatingStyle(cls).text}</p>
                        </a>
                      </div>
                    </div>
                    <div className="md:col-span-3 rounded bg-bgLight h-32 relative flex flex-col items-center justify-center">
                      <p>First Contentful Paint</p>
                      <p className="text-2xl font-bold mb-2">
                        {/*
      // @ts-ignore */}
                        {fcp.value ? fcp.value + " ms" : "-"}
                      </p>

                      <a
                        href="https://web.dev/fcp/"
                        className={`px-2 rounded-full flex items-center text-center text-gray-800 space-x-1 ${
                          getRatingStyle(fcp).className
                        }`}
                      >
                        {getRatingStyle(fcp).icon}
                        <p>{getRatingStyle(fcp).text}</p>
                      </a>
                    </div>
                    <div className="md:col-span-2 rounded bg-bgLight h-32 relative flex flex-col items-center justify-center">
                      <p>First Input Delay</p>
                      <p className="text-2xl font-bold mb-2">
                        {/*
      // @ts-ignore */}
                        {fid.value ? fid.value + " ms" : "-"}
                      </p>
                      <a
                        href="https://web.dev/fid/"
                        className={`px-2 rounded-full flex items-center text-center text-gray-800 space-x-1 ${
                          getRatingStyle(fid).className
                        }`}
                      >
                        {getRatingStyle(fid).icon}
                        <p>{getRatingStyle(fid).text}</p>
                      </a>
                    </div>
                    <div className="md:col-span-2 rounded bg-bgLight h-32 relative flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center ">
                        <p>Largest Contentful Paint</p>
                        <p className="text-2xl font-bold mb-2">
                          {/*
      // @ts-ignore */}
                          {lcp.value ? lcp.value + " ms" : "-"}
                        </p>
                        <div
                          className={`px-2 rounded-full flex items-center text-center text-gray-800 space-x-1 ${
                            getRatingStyle(lcp).className
                          }`}
                        >
                          {getRatingStyle(lcp).icon}
                          <p>{getRatingStyle(lcp).text}</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 rounded bg-bgLight h-32 relative flex flex-col items-center justify-center">
                      <p>Time to first byte</p>
                      <p className="text-2xl font-bold mb-2">
                        {/*
      // @ts-ignore */}
                        {ttfb.value ? ttfb.value + " ms" : "-"}
                      </p>
                      <a
                        href="https://web.dev/time-to-first-byte/"
                        className={`px-2 rounded-full flex items-center text-center text-gray-800 space-x-1 ${
                          getRatingStyle(ttfb).className
                        }`}
                      >
                        {getRatingStyle(ttfb).icon}
                        <p>{getRatingStyle(ttfb).text}</p>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <div className="md:flex md:justify-between md:items-center">
                  <p className="text-sm uppercase">
                    {selected == 0
                      ? "site stats over time"
                      : selected == 1
                      ? "totals"
                      : "average web vitals"}
                  </p>
                </div>
                {selected == 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded bg-bgLight h-32 relative overflow-x-hidden">
                      <div className="absolute top-0 left-0 p-2 flex w-full justify-between">
                        <p className="text-xs uppercase text-site-text opacity-75">
                          Page Views
                        </p>
                        <p className="text-2xl font-bold text-site-text"></p>
                      </div>
                      <div className="h-full pt-8 -mr-2 -ml-2 opacity-50">
                        <div className="flex items-center justify-center flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                            />
                          </svg>
                          <p>Work In Progress</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded bg-bgLight h-32 relative overflow-x-hidden">
                      <div className="absolute top-0 left-0 p-2 flex w-full justify-between">
                        <p className="text-xs uppercase text-site-text opacity-75">
                          Sessions
                        </p>
                        <p className="text-2xl font-bold text-site-text"></p>
                      </div>
                      <div className="h-full pt-8 -mr-2 -ml-2 opacity-50">
                        <div className="flex items-center justify-center flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                            />
                          </svg>
                          <p>Work In Progress</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded bg-bgLight h-32 relative overflow-x-hidden">
                      <div className="absolute top-0 left-0 p-2 flex w-full justify-between">
                        <p className="text-xs uppercase text-site-text opacity-75">
                          Avg. Duration
                        </p>
                        <p className="text-2xl font-bold text-site-text"></p>
                      </div>
                      <div className="h-full pt-8 -mr-2 -ml-2 opacity-50">
                        <div className="flex items-center justify-center flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                            />
                          </svg>
                          <p>Work In Progress</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded bg-bgLight h-32 relative overflow-x-hidden">
                      <div className="absolute top-0 left-0 p-2 flex w-full justify-between">
                        <p className="text-xs uppercase text-site-text opacity-75">
                          Bounce Rate
                        </p>
                        <p className="text-2xl font-bold text-site-text"></p>
                      </div>
                      <div className="h-full pt-8 -mr-2 -ml-2 opacity-50">
                        <div className="flex items-center justify-center flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                            />
                          </svg>
                          <p>Work In Progress</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selected == 1 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className=" rounded bg-bgLight h-16 relative flex space-x-1 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                      </svg>

                      <p className="text-xl font-bold">
                        {statistics.files} Files
                      </p>
                    </div>
                    <div className=" rounded bg-bgLight h-16 relative flex space-x-1 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-xl font-bold">
                        {statistics.totalLines} Lines of Code
                      </p>
                    </div>
                    <div className=" rounded bg-bgLight h-16 relative flex space-x-1 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-xl font-bold">
                        {statistics.comments} Comments
                      </p>
                    </div>
                    <div className=" rounded bg-bgLight h-16 relative flex space-x-1 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-xl font-bold">
                        {statistics.blankLines} Blank Lines
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-64 rounded bg-bgLight py-4 px-1 opacity-75 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center flex-col">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                        />
                      </svg>
                      <p>Work In Progress</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteStats;
