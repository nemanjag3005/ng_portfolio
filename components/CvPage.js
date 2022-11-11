import React from "react";
import useTranslation from "next-translate/useTranslation";
import { saveAs } from "file-saver";

const CvPage = () => {
  let { t } = useTranslation();
  const saveFile = () => {
    saveAs("https://www.nemanja.grujic.rs/cv.pdf", "NemanjaGrujicCV.pdf");
  };
  return (
    <div className="bg-gray-50 dark:bg-slate-800">
      <div className="mx-4 relative h-full">
        <div className="w-full text-center">
          <button
            onClick={saveFile}
            className="bg-blue-500 my-8 rounded py-2 px-4 text-white hover:bg-blue-800 dark:bg-primary-dark dark:hover:bg-primary-darker"
          >
            {t("cv:button")}
          </button>
        </div>
        <div className="block md:hidden bg-white text-black p-2 mx-2 mb-12">
          <div className="p-5">
            <h1 className="text-2xl font-bold">Nemanja Grujić</h1>
            <h3 className="text-sm font-semibold">
              www.nemanja-grujic.rs | nemanjag3005@gmail.com
            </h3>
            <p className="text-xs border-light-grey border-b-2 pb-3 mb-3">
              {t("cv:intro-mobile")}
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-4 border-light-grey border-b-2 pb-3 mb-0">
                <h5 className="flex uppercase items-center text-xs mb-1 text-blue font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-3"
                  >
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                  </svg>
                  {t("cv:experience")}
                </h5>
                <div className="m1-b   ">
                  <h3 className="text-sm font-bold">{t("cv:exp1-header")}</h3>
                  <h5 className="text-xs my-1 font-semibold">
                    TechStart UCalgary, Calgary | 2021 - {t("cv:present")}
                  </h5>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp1-1")}</p>
                  </div>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp1-2")}</p>
                  </div>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp1-3")}</p>
                  </div>
                  <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                    {t("cv:exp1-skills")}
                  </p>
                </div>
                <div className="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                  <h3 className="text-sm font-bold">{t("cv:exp2-header")}</h3>
                  <h5 className="text-xs my-1 font-semibold">
                    LAN Digital, Belgrade | 2021 - Present
                  </h5>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp2-1")}</p>
                  </div>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp2-2")}</p>
                  </div>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp2-3")}</p>
                  </div>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp2-4")}</p>
                  </div>
                  <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                    {t("cv:exp2-skills")}
                  </p>
                </div>
                <div className="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                  <h3 className="text-sm font-bold">{t("cv:exp3-header")}</h3>
                  <h5 className="text-xs my-1 font-semibold">
                    XYZ Communications, Belgrade | 2019
                  </h5>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp3-1")}</p>
                  </div>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp3-2")}</p>
                  </div>
                  <div className="text-xs flex">
                    <p className="mr-1">-</p>
                    <p className="m-0">{t("cv:exp3-3")}</p>
                  </div>
                  <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                    {t("cv:exp3-skills")}
                  </p>
                </div>
              </div>
              <div className="col-span-4">
                <h5 className=" mt-0 uppercase flex items-center text-xs mb-1 text-blue font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {t("cv:technical-skills")}
                </h5>
                <div className="grid grid-cols-2 gap-1">
                  <div className="pad-0">
                    <p className="text-xs">JavaScript</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">HTML</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">CSS</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">Node</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">ReactJS</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">Redux</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">NextJS</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">GraphQL</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">Typescript</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">Java</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">TailwindCSS</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">Python</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">React Native</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">Gatsby</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <h5 className="border-light-grey uppercase border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-3"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                  {t("cv:skills")}
                </h5>
                <div className="grid grid-cols-1 gap-1">
                  <div className="pad-0">
                    <p className="text-xs">{t("cv:skill1")}</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">{t("cv:skill2")}</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">{t("cv:skill4")}</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">{t("cv:skill5")}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <h5 className="border-light-grey uppercase border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  {t("cv:languages")}
                </h5>
                <div className="grid grid-cols-2 gap-1">
                  <div className="pad-0">
                    <p className="text-xs">{t("cv:lang1")}</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">C1 Advanced (CAE)</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">{t("cv:lang2")}</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">B2</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">{t("cv:lang3")}</p>
                  </div>
                  <div className="pad-0">
                    <p className="text-xs">{t("cv:native")}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <h5 className="border-light-grey uppercase border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-3"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                  </svg>
                  {t("cv:education")}
                </h5>
                <div className="">
                  <h4 className="text-xs font-bold">
                    BHSC Honors - Bioinformatics major, Computer Science Minor -
                    University of Calgary
                  </h4>
                  <p className="text-xs">2020-2024</p>
                  <p className="text-xs">- Dean's List Year One</p>
                </div>
                <div className="mt-1">
                  <h4 className="text-xs font-bold">{t("cv:high-school")}</h4>
                  <p className="text-xs">2016-2020</p>
                </div>
                {/* <h5 className="border-light-grey border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  INTERESTS
                </h5>
                <h4 className="text-xs font-bold">Writing</h4>
                <p className="text-xs">
                  Author of <i>"Elevating React Web Development with Gatsby"</i>{" "}
                  <br />
                  Released Jan 2022
                </p>
                <h4 className="text-xs font-bold">Hackathons</h4>
                <p className="text-xs">
                  Attended 30+ hacks as an attendee, mentor or sponsor. I enjoy
                  teaching the next generation to code and have a bit of a
                  reputation for staying up all night.
                </p> */}
                <p className="text-xs font-semibold text-blue mt-2">
                  {t("cv:codedin")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mb-12 mx-auto bg-white hidden md:block text-black">
          <div>
            <div className="p-5">
              <h1 className="text-2xl font-bold">Nemanja Grujić</h1>
              <h3 className="text-sm font-semibold">
                www.nemanja-grujic.rs | nemanjag3005@gmail.com
              </h3>
              <p className="text-xs border-light-grey border-b-2 pb-3 mb-3">
                {t("cv:intro")}
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                  <div className="col-span-1">
                    <h5 className=" mt-0 uppercase flex items-center text-xs mb-1 text-blue font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="mr-1 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {t("cv:technical-skills")}
                    </h5>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="pad-0">
                        <p className="text-xs">JavaScript</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">HTML</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">CSS</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">Node</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">ReactJS</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">Redux</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">NextJS</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">Assembly</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">Typescript</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">Java</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">TailwindCSS</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">Python</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">React Native</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">Gatsby</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">C</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">SQL</p>
                      </div>
                    </div>
                    <h5 className="border-light-grey uppercase border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="mr-1 h-3"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                      </svg>
                      {t("cv:skills")}
                    </h5>
                    <div className="grid grid-cols-1 gap-1">
                      <div className="pad-0">
                        <p className="text-xs">{t("cv:skill1")}</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">{t("cv:skill2")}</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">{t("cv:skill4")}</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">{t("cv:skill5")}</p>
                      </div>
                    </div>
                    <h5 className="border-light-grey uppercase border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                      {t("cv:languages")}
                    </h5>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="pad-0">
                        <p className="text-xs">{t("cv:lang1")}</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">C1 Advanced</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">{t("cv:lang2")}</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">B2</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">{t("cv:lang3")}</p>
                      </div>
                      <div className="pad-0">
                        <p className="text-xs">{t("cv:native")}</p>
                      </div>
                    </div>
                    <h5 className="border-light-grey uppercase border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="mr-1 h-3"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                      </svg>
                      {t("cv:education")}
                    </h5>
                    <div className="">
                      <h4 className="text-xs font-bold">
                        BHSC Honors - Bioinformatics Major, Computer Science
                        Minor - University of Calgary
                      </h4>
                      <p className="text-xs">2020-2024</p>
                      <p className="text-xs">- Dean's List Year One</p>
                    </div>
                    <div className="mt-1">
                      <h4 className="text-xs font-bold">
                        {t("cv:high-school")}
                      </h4>
                      <p className="text-xs">2016-2020</p>
                    </div>
                    {/* <h5 className="border-light-grey border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="mr-1 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      INTERESTS
                    </h5>
                    <h4 className="text-xs font-bold">Writing</h4>
                    <p className="text-xs">
                      Author of{" "}
                      <i>"Elevating React Web Development with Gatsby"</i>{" "}
                      <br />
                      Released Jan 2022
                    </p>
                    <h4 className="text-xs font-bold">Hackathons</h4>
                    <p className="text-xs">
                      Attended 30+ hacks as an attendee, mentor or sponsor. I
                      enjoy teaching the next generation to code and have a bit
                      of a reputation for staying up all night.
                    </p> */}
                    <p className="text-xs font-semibold text-blue mt-6">
                      {t("cv:codedin")}
                    </p>
                  </div>
                </div>
                <div className="col-span-3">
                  <h5 className="flex items-center uppercase text-xs mb-1 text-blue font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="mr-1 h-3"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                    </svg>
                    {t("cv:experience")}
                  </h5>

                  <div className="mb-1">
                    <h3 className="text-sm font-bold">{t("cv:exp4-header")}</h3>
                    <h5 className="text-xs my-1 font-semibold">
                      TechStart UCalgary, Calgary | 2022 - {t("cv:present")}
                    </h5>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp4-1")}</p>
                    </div>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp4-2")}</p>
                    </div>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp4-3")}</p>
                    </div>
                    <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                      {t("cv:exp4-skills")}
                    </p>
                  </div>
                  <div className="mb-1 border-light-grey border-t-2 mt-2 pt-2">
                    <h3 className="text-sm font-bold">{t("cv:exp1-header")}</h3>
                    <h5 className="text-xs my-1 font-semibold">
                      TechStart UCalgary, Calgary | 2021 - 2022
                    </h5>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp1-1")}</p>
                    </div>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp1-2")}</p>
                    </div>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp1-3")}</p>
                    </div>
                    <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                      {t("cv:exp1-skills")}
                    </p>
                  </div>
                  <div className="mb-1  border-light-grey border-t-2 mt-2 pt-2 ">
                    <h3 className="text-sm font-bold">{t("cv:exp2-header")}</h3>
                    <h5 className="text-xs my-1 font-semibold">
                      LAN Digital, Belgrade | 2021 - {t("cv:present")}
                    </h5>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp2-1")}</p>
                    </div>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp2-2")}</p>
                    </div>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp2-3")}</p>
                    </div>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp2-4")}</p>
                    </div>
                    <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                      {t("cv:exp2-skills")}
                    </p>
                  </div>
                  <div className="mb-1  border-light-grey border-t-2 mt-2 pt-2 ">
                    <h3 className="text-sm font-bold">{t("cv:exp3-header")}</h3>
                    <h5 className="text-xs my-1 font-semibold">
                      XYZ Communications, Belgrade | 2019
                    </h5>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp3-1")}</p>
                    </div>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp3-2")}</p>
                    </div>
                    <div className="text-xs flex">
                      <p className="mr-1">-</p>
                      <p className="m-0">{t("cv:exp3-3")}</p>
                    </div>
                    <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                      {t("cv:exp3-skills")}
                    </p>
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

export default CvPage;
