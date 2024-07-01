import Image from "next/image";
import React, { Dispatch, SetStateAction, forwardRef } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Pie,
  PieChart,
  Legend,
  Cell,
} from "recharts";
import { animated, useSpring, useTransition, config } from "@react-spring/web";

const data = [
  {
    technology: "React",
    value: 100, // Most skilled
  },
  {
    technology: "NextJS",
    value: 90, // Most skilled
  },
  {
    technology: "Python",
    value: 60, // Most skilled
  },
  {
    technology: "ReactNative",
    value: 80, // Coming next
  },
  {
    technology: "JavaScript",
    value: 80, // Coming next
  },
  {
    technology: "Java",
    value: 60, // Least skilled
  },
  {
    technology: "TypeScript",
    value: 75, // Least skilled
  },
];

function getRandomColor() {
  const colors = ["#ec4899", "#16a34a", "#3b82f6"]; // Replace with your preferred colors
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const pieData = [
  { name: "Front-End", value: 400 },
  { name: "Back-End", value: 300 },
  { name: "UX", value: 50 },
];

const COLORS = [
  "var(--color-accent-1-light)",
  "var(--color-accent-2-light)",
  "var(--color-accent-3-light)",
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = outerRadius + 15; // Position the label outside of the pie
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      fontSize="12px"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {pieData[index].name}
    </text>
  );
};

interface CVProps {
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
  showIcons: boolean;
  showHeadshot: boolean;
  showColor: boolean;
  showVisualizations: boolean;
  setShowColor: Dispatch<SetStateAction<boolean>>;
  setShowHeadshot: Dispatch<SetStateAction<boolean>>;
  setShowVisualizations: Dispatch<SetStateAction<boolean>>;
  setShowIcons: Dispatch<SetStateAction<boolean>>;
  sliderValue: Number;
}

const CV = forwardRef<HTMLDivElement, CVProps>((props, ref) => {
  const { dictionary } = props;
  const {
    showIcons,
    showHeadshot,
    showColor,
    showVisualizations,
    sliderValue,
    setShowColor,
    setShowHeadshot,
    setShowVisualizations,
    setShowIcons,
  } = props;
  const transition = useTransition(showHeadshot, {
    config: { tension: 300, friction: 20 },
    from: { width: 0, height: 0, opacity: 0 },
    enter: {
      width: 115,
      height: 115,
      opacity: 1,
    },
    leave: {
      width: 0,
      height: 0,
      opacity: 0,
    },
  });

  const transitionIcons = useTransition(showIcons, {
    config: { tension: 200, friction: 14 },
    from: { width: 0, opacity: 0 },
    enter: {
      width: 12,

      opacity: 1,
    },
    leave: {
      width: 0,

      opacity: 0,
    },
  });

  return (
    <div className="bg-white text-black font-light z-50" ref={ref}>
      <div className="p-5">
        <div className="flex border-light-grey border-b-2 pb-3 mb-3">
          {transition(
            (style, item) =>
              item && (
                <animated.div
                  style={style}
                  className="relative h-28 w-28 aspect-square object-cover rounded-md mr-2"
                >
                  <Image
                    alt="Nemanja"
                    src="/IMG_9334.jpeg"
                    className="rounded-md object-top object-cover"
                    fill
                  />
                </animated.div>
              )
          )}
          <div className="flex-grow">
            <h1 className="text-2xl font-bold">Nemanja Grujić</h1>
            <h3 className="text-sm font-semibold">
              www.nemanja.grujic.rs | nemanjag3005@gmail.com
            </h3>
            <p
              style={{ color: `${showColor ? getRandomColor() : "black"}` }}
              className={`text-xs `}
            >
              {sliderValue == 0
                ? dictionary["intro"]
                : dictionary["intro-binf"]}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="col-span-1">
              <h5 className=" mt-0 uppercase flex items-center text-xs mb-1 text-blue font-semibold">
                {transitionIcons(
                  (style, item) =>
                    item && (
                      <animated.div className="mr-1" style={style}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className=" h-3 w-3 "
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </animated.div>
                    )
                )}
                {dictionary["technical-skills"]}
              </h5>
              <div className="grid grid-cols-2 gap-1">
                <div className="pad-0">
                  <p
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                    className={`text-xs`}
                  >
                    JavaScript
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    HTML
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    CSS
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    Node
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    ReactJS
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    Redux
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    NextJS
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    Assembly
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    Typescript
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    Java
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    TailwindCSS
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    Python
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    React Native
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    R
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    C/C++
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    SQL
                  </p>
                </div>
              </div>
              <h5 className="border-light-grey uppercase border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                {transitionIcons(
                  (style, item) =>
                    item && (
                      <animated.div className="mr-1" style={style}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-3 h-3 
                    "
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
                      </animated.div>
                    )
                )}

                {dictionary.skills}
              </h5>
              <div className="grid grid-cols-1 gap-1">
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    {dictionary.skill1}
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    {dictionary.skill2}
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    {dictionary.skill4}
                  </p>
                </div>
                <div className="pad-0">
                  <p
                    className={`text-xs `}
                    style={{
                      color: `${showColor ? getRandomColor() : "black"}`,
                    }}
                  >
                    {dictionary.skill5}
                  </p>
                </div>
              </div>
              <h5 className="border-light-grey uppercase border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                {transitionIcons(
                  (style, item) =>
                    item && (
                      <animated.div className="mr-1" style={style}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      </animated.div>
                    )
                )}
                {dictionary.languages}
              </h5>
              <div className="grid grid-cols-2 gap-1">
                <div className="pad-0">
                  <p className="text-xs">{dictionary.lang1}</p>
                </div>
                <div className="pad-0">
                  <p className="text-xs">C1 Advanced</p>
                </div>
                <div className="pad-0">
                  <p className="text-xs">{dictionary.lang2}</p>
                </div>
                <div className="pad-0">
                  <p className="text-xs">B2</p>
                </div>
                <div className="pad-0">
                  <p className="text-xs">{dictionary.lang3}</p>
                </div>
                <div className="pad-0">
                  <p className="text-xs">{dictionary.native}</p>
                </div>
              </div>
              <h5 className="border-light-grey uppercase border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                {transitionIcons(
                  (style, item) =>
                    item && (
                      <animated.div className="mr-1" style={style}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                        </svg>
                      </animated.div>
                    )
                )}
                {dictionary.education}
              </h5>
              <div className="">
                <h4
                  className={`text-xs font-bold ${
                    showColor && "text-pink-500 font-semibold"
                  }`}
                >
                  MSc in Bioinformatics - Imperial College London
                </h4>
                <p className="text-xs">2024-2025</p>
              </div>
              <div className="mt-1">
                <h4
                  className={`text-xs font-bold ${
                    showColor && "text-pink-500 font-semibold"
                  }`}
                >
                  BHSC Honors (With Distinction) - Bioinformatics Major,
                  Computer Science Minor - University of Calgary
                </h4>
                <p className="text-xs">2020-2024</p>
                <p className="text-xs">- Dean's List 2020 - 2024</p>
              </div>
              <div className="mt-1">
                <h4 className="text-xs font-bold">
                  {dictionary["high-school"]}
                </h4>
                <p className="text-xs">2016-2020</p>
              </div>
              {/* <h5 className="border-light-grey border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                      {showIcons && ( 
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="mr-1 h-3"
                      >
                        <path
                          fillRule="evenodd animate__animated animate__fadeIn"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      )}
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
                {dictionary.codedin}
              </p>
            </div>
          </div>
          <div className="col-span-3">
            {showVisualizations && (
              <div>
                <h5 className="flex items-center uppercase text-xs mb-1 text-blue font-semibold">
                  {transitionIcons(
                    (style, item) =>
                      item && (
                        <animated.div className="mr-1" style={style}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className=" h-3 w-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                              clipRule="evenodd"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </animated.div>
                      )
                  )}
                  {dictionary.visualizations}
                </h5>
                <div className="grid sm:grid-cols-2 gap-4 py-2">
                  <ResponsiveContainer width="100%" height={200}>
                    <RadarChart cx="50%" cy="50%" data={data}>
                      <PolarGrid polarRadius={[0, 30, 75]} />
                      <PolarAngleAxis
                        dataKey="technology"
                        tick={{ fill: "#333", fontSize: "12px" }}
                      />
                      <Radar
                        name="Nemanja"
                        dataKey="value"
                        stroke="var(--primary)"
                        fill="var(--primary)"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={69}
                        fill="#8884d8"
                        dataKey="value"
                        label={renderCustomizedLabel}
                        labelLine={false}
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
            <h5 className="flex items-center uppercase text-xs mb-1 text-blue font-semibold">
              {transitionIcons(
                (style, item) =>
                  item && (
                    <animated.div className="mr-1" style={style}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className=" h-3 w-3"
                      >
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                      </svg>
                    </animated.div>
                  )
              )}
              {dictionary.experience}
            </h5>

            <div className="mb-1">
              <h3 className="text-sm font-bold">
                {sliderValue == 0
                  ? dictionary["exp2-header"]
                  : dictionary["exp1-binf-header"]}
              </h3>
              <h5
                style={{
                  color: `${showColor ? getRandomColor() : "black"}`,
                }}
                className={`text-xs my-1 font-semibold ${
                  showColor && " font-base"
                }`}
              >
                {sliderValue == 0
                  ? `LAN Digital, Belgrade | 2021 - ${dictionary.present}`
                  : `Riabowol Lab, Calgary | 2023 - ${dictionary.present}`}
              </h5>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">
                  {sliderValue == 0
                    ? dictionary["exp2-1"]
                    : dictionary["exp1-binf-1"]}
                </p>
              </div>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">
                  {sliderValue == 0
                    ? dictionary["exp2-2"]
                    : dictionary["exp1-binf-2"]}
                </p>
              </div>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">
                  {sliderValue == 0
                    ? dictionary["exp2-3"]
                    : dictionary["exp1-binf-3"]}
                </p>
              </div>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">
                  {sliderValue == 0
                    ? dictionary["exp2-4"]
                    : dictionary["exp1-binf-4"]}
                </p>
              </div>
              <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                {sliderValue == 0
                  ? dictionary["exp2-skills"]
                  : dictionary["exp1-binf-skills"]}
              </p>
            </div>
            <div className="mb-1 border-light-grey border-t-2 mt-2 pt-2">
              <h3 className="text-sm font-bold">{dictionary["exp4-header"]}</h3>
              <h5
                style={{
                  color: `${showColor ? getRandomColor() : "black"}`,
                }}
                className={`text-xs my-1 font-semibold ${
                  showColor && " font-base"
                }`}
              >
                TechStart UCalgary, Calgary | 2022 - 2023
              </h5>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">{dictionary["exp4-1"]}</p>
              </div>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">{dictionary["exp4-2"]}</p>
              </div>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">{dictionary["exp4-3"]}</p>
              </div>
              <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                {dictionary["exp4-skills"]}
              </p>
            </div>
            <div className="mb-1  border-light-grey border-t-2 mt-2 pt-2 ">
              <h3 className="text-sm font-bold">{dictionary["exp3-header"]}</h3>
              <h5
                style={{
                  color: `${showColor ? getRandomColor() : "black"}`,
                }}
                className={`text-xs my-1 font-semibold ${
                  showColor && " font-base"
                }`}
              >
                Replai Inc., Lisbon | 2022
              </h5>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">{dictionary["exp3-1"]}</p>
              </div>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">{dictionary["exp3-2"]}</p>
              </div>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">{dictionary["exp3-3"]}</p>
              </div>

              <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                {dictionary["exp3-skills"]}
              </p>
            </div>
            <div className="mb-1  border-light-grey border-t-2 mt-2 pt-2 ">
              <h3 className="text-sm font-bold">{dictionary["exp1-header"]}</h3>
              <h5
                style={{
                  color: `${showColor ? getRandomColor() : "black"}`,
                }}
                className={`text-xs my-1 font-semibold ${
                  showColor && " font-base"
                }`}
              >
                TechStart UCalgary, Calgary | 2021 - 2022
              </h5>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">{dictionary["exp1-1"]}</p>
              </div>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">{dictionary["exp1-2"]}</p>
              </div>
              <div className="text-xs flex">
                <p className="mr-1">-</p>
                <p className="m-0">{dictionary["exp1-3"]}</p>
              </div>
              <p className="text-xs mt-1 ml-2 text-blue font-semibold">
                {dictionary["exp1-skills"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

CV.displayName = "CV";

export default CV;
