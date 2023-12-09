"use client";
import React, { useRef, useState } from "react";
import SmallCV from "./SmallCV";
import CV from "./CV";
import { animated, useSpring, useTransition, config } from "@react-spring/web";
import { useReactToPrint } from "react-to-print";
import { useWindowSize } from "../../hooks/useWindowSize";

const CvPage = ({
  dictionary,
}: {
  dictionary: {
    button: string;
    intro: string;
    "intro-binf": string;
    "technical-skills": string;
    skills: string;
    skill1: string;
    skill2: string;
    skill4: string;
    skill5: string;
    experience: string;
    education: string;
    "high-school": string;
    codedin: string;
    interests: string;
    languages: string;
    lang1: string;
    lang2: string;
    lang3: string;
    native: string;
    "exp1-header": string;
    present: string;
    "exp1-1": string;
    "exp1-2": string;
    "exp1-3": string;
    "exp1-skills": string;
    "exp1-binf-1": string;
    "exp1-binf-2": string;
    "exp1-binf-3": string;
    "exp1-binf-4": string;
    "exp1-binf-skills": string;
    "exp2-header": string;
    "exp2-1": string;
    "exp2-2": string;
    "exp2-3": string;
    "exp2-4": string;
    "exp2-skills": string;
    "exp3-header": string;
    "exp3-1": string;
    "exp3-2": string;
    "exp3-3": string;
    "exp3-skills": string;
    "exp4-header": string;
    "exp4-1": string;
    "exp4-2": string;
    "exp4-3": string;
    "exp4-skills": string;
    "customize-cv": string;
    customize: string;
    "show-icons": string;
    "show-color": string;
    "show-headshot": string;
    visualizations: string;
    reset: string;
  };
}) => {
  const [customization, setCustomization] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [showHeadshot, setShowHeadshot] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showVisualizations, setShowVisualizations] = useState(false);

  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    // removeAfterPrint: true,
    // print: async (printIframe: HTMLIFrameElement) => {
    //   const document = printIframe.contentDocument;
    //   if (document) {
    //     const html = document.getElementsByTagName("html")[0];
    //     console.log(html);
    //     let options = { format: "A4" };
    //     let file = { content: html };
    //     html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
    //       console.log("PDF Buffer:-", pdfBuffer);
    //     });
    //   }
    // },
  });

  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);

    // Snap logic: if the slider is moved past the midpoint (50), it snaps to 100, otherwise to 0
    setSliderValue(value > 50 ? 100 : 0);
  };

  const [width] = useWindowSize();

  const transitionHeight = width > 640 ? 150 : 250;

  const transition = useTransition(customization, {
    config: { tension: 300, friction: 20 },
    from: { height: 0 },
    enter: {
      height: transitionHeight,
    },
    leave: {
      height: 0,
      border: 0,
    },
  });
  return (
    <div className="bg-bgColor pt-6">
      <div className="mx-4 relative h-full ">
        <div className="w-full max-w-[210mm] md:mx-auto mx-2">
          <div className="relative w-full overflow-hidden h-16">
            <div className="flex justify-end">
              <div className="flex flex-col mr-3">
                <p
                  style={{ fontFamily: "__comicNew_e75989" }}
                  className=" text-2xl uppercase"
                >
                  {dictionary["customize-cv"]}
                </p>
              </div>
              <svg
                version="1.1"
                viewBox="0 0 329.455 329.455"
                className="w-16 text-colorAccent4 transform -scale-x-100 rotate-180 mr-12"
              >
                <g>
                  <g>
                    <path
                      d="M284.507,122.731c-1.225-6.12-11.628-6.12-12.853,0c-4.284,28.152-1.224,58.752-1.224,87.516    c0,23.256,6.731,45.288-20.808,50.185c-81.396,15.3-162.181-0.612-244.801,2.447c-6.732,0-6.12,9.793,0,9.793    c85.068,4.896,178.092,24.479,261.937-0.612c16.523-4.896,18.359-20.196,18.972-34.884    C286.955,199.844,290.015,159.451,284.507,122.731z"
                      className="fill-current"
                    ></path>
                    <path
                      d="M249.011,120.895c0-9.18-14.076-9.18-14.076,0c0,33.048,0,66.096,0,99.144c-38.556,1.836-77.112,3.061-115.668,3.672    c-36.72,0.612-78.336-3.672-114.444,4.896c-2.448,0.612-2.448,4.284,0,4.284c33.048,7.956,70.38,3.672,104.04,3.672    c44.676,0,88.741-1.224,133.417-3.061c3.672,0,6.732-3.06,6.732-6.731C249.011,191.275,249.011,155.779,249.011,120.895z"
                      className="fill-current"
                    ></path>
                    <path
                      d="M329.183,135.583c-7.956-31.824-38.556-61.2-56.916-87.516c-2.448-3.672-7.344-4.284-11.016-1.224    c-25.704,21.42-49.572,44.064-68.544,71.604c-3.061,4.896,4.283,10.404,7.955,6.12c18.973-23.868,41.005-43.452,64.261-62.424    c17.136,26.316,33.66,56.304,54.468,79.56C323.063,146.599,331.019,141.091,329.183,135.583z"
                      className="fill-current"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-1 justify-end px-4 md:px-2">
            <button
              onClick={handlePrint}
              className="bg-colorAccent2Light hover:bg-colorAccent2 text-colorAccent2Dark hover:text-white rounded-t flex items-center space-x-1 px-2 py-1 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              <p>{dictionary.button}</p>
            </button>
            <button
              onClick={() => setCustomization(!customization)}
              className="bg-colorAccent4Light hover:bg-colorAccent4 text-colorAccent4Dark hover:text-white rounded-t flex items-center space-x-1 px-2 py-1 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                ></path>
              </svg>
              <p>{dictionary.customize}</p>
            </button>
          </div>
        </div>
        {transition(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className="w-full  bg-colorAccent4Light overflow-hidden rounded-t border-b-2 border-colorAccent4 max-w-[210mm] mx-auto"
              >
                <div className="text-colorAccent4Dark w-full px-5 py-2 sm:space-y-4 overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                  <div className="flex items-center justify-center flex-col">
                    <div className="flex items-center">
                      <h3 className="ml-2 text-sm ">Technical Focus</h3>
                    </div>
                    <div className="w-full flex items-center my-3 justify-center">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderValue}
                        className="w-[90%] h-2 rounded-full bg-gray-200 appearance-none cursor-pointer"
                        onChange={handleSliderChange}
                      />
                    </div>
                    <div className="w-full flex items-center text-xs justify-between">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                          />
                        </svg>
                        <p className="ml-1">CPSC</p>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="currentColor"
                          className="w-5 h-5"
                          version="1.1"
                          strokeWidth={1.5}
                          fillRule="evenodd"
                          clipRule="evenodd"
                          viewBox="0 0 513.89 512.41"
                        >
                          <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer" />
                            <path
                              fill="black"
                              fillRule="nonzero"
                              d="M115.82 496.61c16.08,-21.9 23.85,-41.68 27.08,-62.84 2.24,-14.62 2.4,-30.2 1.65,-47.69l8.78 0.45 0 -0.05c5.71,0.41 11.56,0.59 17.29,0.88l0.53 0.02c0.7,18.07 0.42,34.48 -2.02,50.43 -3.88,25.36 -13.04,48.86 -31.93,74.59l-21.38 -15.79zm-46.9 -123.72l59.4 59.4 -5.01 23.84 -76.66 -76.66c-10.51,4.1 -20.72,9.65 -30.56,17.11l-16.09 -21.08c49.36,-37.43 102.43,-34.69 155.59,-31.95 6,0.31 12,0.62 16.82,0.83 21.05,0.9 41.94,1.07 61.99,-2.26l-52.97 -52.97 5 -23.85 71.12 71.11c14.12,-4.75 27.91,-11.99 41.25,-22.85l-99.68 -99.67c-17.99,19.58 -26.37,41.02 -29.83,63.81 -2.41,15.85 -2.49,32.61 -1.73,49.96l-10.21 -0.52c-0.58,-0.06 -1.16,-0.09 -1.76,-0.09 -4.88,-0.25 -9.75,-0.5 -14.63,-0.72 -0.72,-17.93 -0.51,-35.48 2.1,-52.67 4.3,-28.35 15.02,-55.1 38.41,-79.69 24.96,-26.25 51.67,-39.99 79.32,-46.87 21.97,-5.47 44.11,-6.51 66.29,-6.09 0.31,5.24 0.67,10.62 1.06,16.17 0.25,3.49 0.49,6.96 0.72,10.42 -16.87,-0.4 -33.55,0.02 -49.68,2.74l54.11 54.11 -5.01 23.84 -72.21 -72.21c-14.44,4.9 -28.55,12.41 -42.17,23.74l99.82 99.82c18.71,-19.89 27.35,-41.71 30.88,-64.93 3.72,-24.46 1.9,-51.11 -0.04,-78.72 -2.19,-31.17 -3.56,-56.83 0.2,-81.4 3.88,-25.35 13.04,-48.86 31.93,-74.59l21.37 15.8c-16.07,21.9 -23.84,41.68 -27.08,62.83 -3.35,21.93 -2.04,46.04 0.02,75.45 2.05,29.19 3.97,57.37 -0.17,84.67 -4.31,28.35 -15.02,55.09 -38.41,79.69 -24.96,26.25 -51.67,39.99 -79.32,46.87 -27.09,6.74 -54.43,6.76 -81.79,5.59 -6.48,-0.28 -11.8,-0.55 -17.11,-0.83 -28.93,-1.49 -57.83,-2.98 -85.28,2.82zm373.73 -232.9l-57.36 -57.36 5.01 -23.84 74.92 74.92c11.21,-4.17 22.11,-9.95 32.58,-17.89l16.09 21.09c-39.99,30.31 -82.39,34.28 -125.31,33.23 -0.36,-5.72 -0.76,-11.46 -1.16,-17.25 -0.23,-3.19 -0.44,-6.31 -0.64,-9.38 18.96,0.52 37.72,0.04 55.87,-3.52z"
                            />
                          </g>
                        </svg>
                        <p className="ml-1">BINF</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        className="w-4 h-4 accent-colorAccent4Dark bg-white ring-colorAccent4Dark rounded focus:ring-colorAccent4 cursor-pointer"
                        checked={showIcons}
                        onChange={() => setShowIcons(!showIcons)}
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-2 text-sm "
                      >
                        {dictionary["show-icons"]}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        className="w-4 h-4 accent-colorAccent4Dark bg-white ring-colorAccent4Dark rounded focus:ring-colorAccent4 cursor-pointer"
                        checked={showColor}
                        onChange={() => setShowColor(!showColor)}
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-2 text-sm "
                      >
                        {dictionary["show-color"]}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        className="w-4 h-4 accent-colorAccent4Dark bg-white ring-colorAccent4Dark rounded focus:ring-colorAccent4 cursor-pointer"
                        checked={showHeadshot}
                        onChange={() => setShowHeadshot(!showHeadshot)}
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-2 text-sm "
                      >
                        {dictionary["show-headshot"]}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        className="w-4 h-4 accent-colorAccent4Dark bg-white ring-colorAccent4Dark rounded focus:ring-colorAccent4 cursor-pointer"
                        checked={showVisualizations}
                        onChange={() =>
                          setShowVisualizations(!showVisualizations)
                        }
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-2 text-sm "
                      >
                        {dictionary.visualizations}
                      </label>
                    </div>
                    <div className="col-span-2">
                      <button
                        onClick={() => {
                          setShowColor(false);
                          setShowHeadshot(false);
                          setShowVisualizations(false);
                          setShowIcons(true);
                          setSliderValue(0);
                        }}
                        className="border-colorAccent4 border-2 rounded w-full px-3 py-1 flex items-center justify-center space-x-2"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            ></path>
                          </svg>
                        </div>
                        <p>{dictionary.reset}</p>
                      </button>
                    </div>
                  </div>
                </div>
              </animated.div>
            )
        )}

        <div className="block md:hidden shadow-lg">
          <SmallCV
            dictionary={dictionary}
            showIcons={showIcons}
            showColor={showColor}
            showHeadshot={showHeadshot}
            showVisualizations={showVisualizations}
            setShowColor={setShowColor}
            setShowHeadshot={setShowHeadshot}
            setShowIcons={setShowIcons}
            setShowVisualizations={setShowVisualizations}
            sliderValue={sliderValue}
          />
        </div>
        <div className="max-w-[210mm] mb-12 mx-auto z-30 hidden md:block shadow-lg">
          <CV
            ref={printRef}
            dictionary={dictionary}
            showIcons={showIcons}
            showColor={showColor}
            showHeadshot={showHeadshot}
            showVisualizations={showVisualizations}
            setShowColor={setShowColor}
            setShowHeadshot={setShowHeadshot}
            setShowIcons={setShowIcons}
            setShowVisualizations={setShowVisualizations}
            sliderValue={sliderValue}
          />
        </div>
      </div>
    </div>
  );
};

export default CvPage;
