"use client";
import React, { useRef, useState } from "react";
import { saveAs } from "file-saver";
import SmallCV from "./SmallCV";
import CV from "./CV";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export interface CVContent {
  button: string;
  intro: string;
  "intro-mobile": string;
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
}

const CvPage = ({
  dictionary,
}: {
  dictionary: {
    button: string;
    intro: string;
    "intro-mobile": string;
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
  };
}) => {
  // const saveFile = () => {
  //   saveAs("https://www.nemanja.grujic.rs/cv.pdf", "NemanjaGrujicCV.pdf");
  // };
  const [customization, setCustomization] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [showHeadshot, setShowHeadshot] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showVisualizations, setShowVisualizations] = useState(false);
  const printRef = useRef();
  const saveFile = () => {
    if (printRef.current) {
      html2canvas(printRef.current, {
        scale: 2, // Increasing the scale factor to enhance resolution; you can increase this value further
        useCORS: true, // This is to handle the loading of images from external domains, if any
        onclone: (document) => {
          // Any specific styles or class changes that need to be applied before rendering the canvas can go here
        },
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
        });
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("CV-Nemanja_Grujic.pdf");
      });
    }
  };

  return (
    <div className="bg-bgColor pt-6">
      <div className="mx-4 relative h-full ">
        <div className="w-full max-w-[210mm] md:mx-auto mx-2">
          <div className="relative w-full overflow-hidden h-16">
            <div className="flex justify-end">
              <div className="flex flex-col mr-3">
                <p className="font-comic text-xl uppercase">Customize my CV</p>
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
              onClick={saveFile}
              className="bg-colorAccent2Light hover:bg-colorAccent2 text-colorAccent2Dark hover:text-white rounded-t flex items-center space-x-1 px-2 py-1 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
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
              <p>Download</p>
            </button>
            <button
              onClick={() => setCustomization(!customization)}
              className="bg-colorAccent4Light hover:bg-colorAccent4 text-colorAccent4Dark hover:text-white rounded-t flex items-center space-x-1 px-2 py-1 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
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
              <p>Customize</p>
            </button>
          </div>
        </div>
        <div
          className={`w-full bg-colorAccent4Light animate__animated animate__fadeIn rounded-t border-b-2 border-colorAccent4 max-w-[210mm] mx-auto ${
            customization ? "block" : "hidden"
          }`}
        >
          <div className="text-colorAccent4Dark w-full p-5 space-y-4 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-4 h-4 accent-colorAccent4Dark bg-white ring-colorAccent4Dark rounded focus:ring-colorAccent4 cursor-pointer"
                  checked={showIcons}
                  onChange={() => setShowIcons(!showIcons)}
                />
                <label htmlFor="checked-checkbox" className="ml-2 text-sm ">
                  Show Section Icons
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
                <label htmlFor="checked-checkbox" className="ml-2 text-sm ">
                  Add A Splash of Color
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
                <label htmlFor="checked-checkbox" className="ml-2 text-sm ">
                  Show My Headshot
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-4 h-4 accent-colorAccent4Dark bg-white ring-colorAccent4Dark rounded focus:ring-colorAccent4 cursor-pointer"
                  checked={showVisualizations}
                  onChange={() => setShowVisualizations(!showVisualizations)}
                />
                <label htmlFor="checked-checkbox" className="ml-2 text-sm ">
                  Visualizations
                </label>
              </div>
              <div className="col-span-2">
                <button
                  onClick={() => {
                    setShowColor(false);
                    setShowHeadshot(false);
                    setShowVisualizations(false);
                    setShowIcons(true);
                  }}
                  className="border-colorAccent4 border-2 rounded w-full px-3 py-1 flex items-center justify-center space-x-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
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
                  <p>Reset</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden shadow-lg">
          <SmallCV dictionary={dictionary} />
        </div>
        <div className="max-w-[210mm] mb-12 mx-auto  hidden md:block shadow-lg">
          <CV
            dictionary={dictionary}
            ref={printRef}
            showIcons={showIcons}
            showColor={showColor}
            showHeadshot={showHeadshot}
            showVisualizations={showVisualizations}
            setShowColor={setShowColor}
            setShowHeadshot={setShowHeadshot}
            setShowIcons={setShowIcons}
            setShowVisualizations={setShowVisualizations}
          />
        </div>
      </div>
    </div>
  );
};

export default CvPage;
