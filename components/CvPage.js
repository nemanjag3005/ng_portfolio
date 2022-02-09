import React from "react";

const CvPage = () => {
  return (
      <div className="bg-slate-100 dark:bg-gray-800">
    <div className="mx-4 relative h-full">
      <div className="w-full text-center">
        <button className="bg-blue-500 my-8 rounded py-2 px-4 text-white hover:bg-blue-800 dark:bg-primary-dark dark:hover:bg-primary-darker">
          Preuzmi CV
        </button>
      </div>
      <div className="block md:hidden bg-white text-black p-2 mx-2 mb-12">
        <div class="p-5">
          <h1 class="text-2xl font-bold">Nemanja Grujić</h1>
          <h3 class="text-sm font-semibold">
          www.nemanja-grujic.rs | nemanjag3005@gmail.com
          </h3>
          <p class="text-xs border-light-grey border-b-2 pb-3 mb-3">
            Creative, collaborative and courageous developer with extensive
            experience in web based technologies and UX design. Looking for the
            next challenge to improve customer experience and deepen engagement.
          </p>
          <div class="grid grid-cols-4 gap-4">
            <div class="col-span-4 border-light-grey border-b-2 pb-3 mb-0">
              <h5 class="flex items-center text-xs mb-1 text-blue font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="mr-1 h-3"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                </svg>
                EXPERIENCE
              </h5>
              <div class="m1-b   ">
                <h3 class="text-sm font-bold">Senior Front-End Developer</h3>
                <h5 class="text-xs my-1 font-semibold">
                  Zone Digital, London | 2021 - Present
                </h5>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Building a global real world data analytics platform for the
                    life sciences and healthcare industries.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">Building custom UI libraries for clients.</p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Presenting new technologies to my engineering colleagues at
                    'Breakout Zone.'
                  </p>
                </div>
                <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                  Engineering Management, Design Agency, JS, ReactJS, Jest,
                  TypeScript, NextJS
                </p>
              </div>
              <div class="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                <h3 class="text-sm font-bold">
                  UX Engineer &amp; Product Manager
                </h3>
                <h5 class="text-xs my-1 font-semibold">
                  Behaviour Lab, London | 2021
                </h5>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Responsible for leading UI development of Behaviour Lab's
                    SaaS product targeted at asset managers, private equity
                    firms, insurance companies and executive boards.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Built the company's component library, testing frameworks
                    and setup CI/CD pipelines.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Product managed the company's first commercial product.
                    Planning its features with stake holders, highlighting cross
                    functional dependencies and running agile ceremonies
                  </p>
                </div>
                <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                  Product Management, JS, ReactJS, Jest, TypeScript, GatsbyJS,
                  NextJS, TailwindCSS
                </p>
              </div>
              <div class="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                <h3 class="text-sm font-bold">Front-End Engineer</h3>
                <h5 class="text-xs my-1 font-semibold">
                  American Express, London | 2020 - 2021
                </h5>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Responsible for creating and maintaining performant,
                    acessible ReactJS and JS components used across the
                    organisation's online presence.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Created tools that allow us to measure how our components
                    are being used. Versions, bundle size, accessiblity, best
                    practices and SEO impacts are tracked automatically.
                  </p>
                </div>
                <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                  JS, ReactJS, Jest, Redux, GatsbyJS, Emotion, Styled
                  Components, Sketch, Invision
                </p>
              </div>
              <div class="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                <h3 class="text-sm font-bold">UX Engineer</h3>
                <h5 class="text-xs my-1 font-semibold">
                  American Express, London | 2019 - 2020
                </h5>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Developed a new referral experience that features enhanced
                    referral rewards for platinum and gold card members. It has
                    engaged with 600,000 customers to date.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Created a self-service automation tool for assesing a
                    webpage's performance, accessibilty and generating
                    screenshots of the page for multiple view ports. This has
                    increased the ability for markets to self service, reducing
                    the need to engage engineers to acquire this information.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Facilitated design sprints and lightening decision jams to
                    help the team ideate.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Built web-ready animations, onboarding experiences, faster
                    sites in newer frameworks and chat bots.
                  </p>
                </div>
                <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                  User Experience, JS, Typescript, ReactJS, Redux, GatsbyJS,
                  GraphQL, Node, Electron
                </p>
              </div>
              <div class="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                <h3 class="text-sm font-bold">Graduate UX Engineer</h3>
                <h5 class="text-xs my-1 font-semibold">
                  American Express, Burgess Hill | 2018 - 2019
                </h5>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Designed and built GRAD, a hub for technology onboarding.
                    The collection initially intended for graduates, is being
                    used campus-wide and receives over 250 unique vistors a
                    month and has accumulated over 20,000 views.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Conducted research into how we could improve elements of the
                    referral hub. This included competitor analysis, analysis of
                    existing site, creation of personas, wireframes and mockups.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Built a prototype for a research archive that summarises,
                    tags, intelligently links and prioritises research for
                    better design decisions.
                  </p>
                </div>
                <div class="text-xs flex">
                  <p class="mr-1">-</p>
                  <p class="m-0">
                    Was the only graduate in my cohort to formally manage
                    interns and have gone on to be the youngest engineer to
                    manage graduates
                  </p>
                </div>
                <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                  User Experience, User Research, User Testing, JS, ReactJS,
                  Sketch, Invision, Python
                </p>
              </div>
            </div>
            <div class="col-span-4">
              <h5 class=" mt-0  flex items-center text-xs mb-1 text-blue font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="mr-1 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                TECHNICAL SKILLS
              </h5>
              <div class="grid grid-cols-2 gap-1">
                <div class="pad-0">
                  <p class="text-xs">JavaScript</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">HTML</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Node</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">ReactJS</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Electron</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Websockets</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Redux</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">React Native</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">GatsbyJS</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">NextJS</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Express</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">GraphQL</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Typescript</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Jenkins</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Jest</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Python</p>
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <h5 class="border-light-grey border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="mr-1 h-3"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                </svg>
                DESIGN EXPERTISE
              </h5>
              <div class="grid grid-cols-1 gap-1">
                <div class="pad-0">
                  <p class="text-xs">User Research</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Usability Testing</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Visual Design</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Design Sprints</p>
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <h5 class="border-light-grey border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="mr-1 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                DESIGN TOOLS
              </h5>
              <div class="grid grid-cols-2 gap-1">
                <div class="pad-0">
                  <p class="text-xs">Sketch</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Invision</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Figma</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">After Effects</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Illustrator</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Photoshop</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">Premiere</p>
                </div>
                <div class="pad-0">
                  <p class="text-xs">AdobeXD</p>
                </div>
              </div>
            </div>
            <div class="col-span-4">
              <h5 class="border-light-grey border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="mr-1 h-3"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                </svg>
                EDUCATION
              </h5>
              <div class="">
                <h4 class="text-xs font-bold">
                  Computer Science with Artificial Intelligence BSc - King's
                  College London University
                </h4>
                <p class="text-xs">
                  Dissertation on using visual search engines to combat fake
                  news.
                </p>
              </div>
              <h5 class="border-light-grey border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="mr-1 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                INTERESTS
              </h5>
              <h4 class="text-xs font-bold">Writing</h4>
              <p class="text-xs">
                Author of <i>"Elevating React Web Development with Gatsby"</i>{" "}
                <br />
                Released Jan 2022
              </p>
              <h4 class="text-xs font-bold">Hackathons</h4>
              <p class="text-xs">
                Attended 30+ hacks as an attendee, mentor or sponsor. I enjoy
                teaching the next generation to code and have a bit of a
                reputation for staying up all night.
              </p>
              <p class="text-xs font-semibold text-blue mt-2">
                This CV was coded in ReactJS.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mb-12 mx-auto bg-white hidden md:block text-black">
        <div>
          <div className="p-5">
            <h1 className="text-2xl font-bold">Nemanja Grujić</h1>
            <h3 class="text-sm font-semibold">
              www.nemanja-grujic.rs | nemanjag3005@gmail.com
            </h3>
            <p className="text-xs border-light-grey border-b-2 pb-3 mb-3">
              A front-end developer with five years experience using ReactJS and
              static-site generators to build performant and accessible
              applications. Looking for the next challenge to improve customer
              experience and deepen engagement.
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1">
                <div class="col-span-1">
                  <h5 class=" mt-0  flex items-center text-xs mb-1 text-blue font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="mr-1 h-3"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    TECHNICAL SKILLS
                  </h5>
                  <div class="grid grid-cols-2 gap-1">
                    <div class="pad-0">
                      <p class="text-xs">JavaScript</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">HTML</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Node</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">ReactJS</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Electron</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Websockets</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Redux</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">React Native</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">GatsbyJS</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">NextJS</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Express</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">GraphQL</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Typescript</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Jenkins</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Jest</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Python</p>
                    </div>
                  </div>
                  <h5 class="border-light-grey border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="mr-1 h-3"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                    DESIGN EXPERTISE
                  </h5>
                  <div class="grid grid-cols-1 gap-1">
                    <div class="pad-0">
                      <p class="text-xs">User Research</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Usability Testing</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Visual Design</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Design Sprints</p>
                    </div>
                  </div>
                  <h5 class="border-light-grey border-t-2  mt-2 pt-2  flex items-center text-xs mb-1 text-blue font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="mr-1 h-3"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    DESIGN TOOLS
                  </h5>
                  <div class="grid grid-cols-2 gap-1">
                    <div class="pad-0">
                      <p class="text-xs">Sketch</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Invision</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Figma</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">After Effects</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Illustrator</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Photoshop</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">Premiere</p>
                    </div>
                    <div class="pad-0">
                      <p class="text-xs">AdobeXD</p>
                    </div>
                  </div>
                  <h5 class="border-light-grey border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="mr-1 h-3"
                    >
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                    </svg>
                    EDUCATION
                  </h5>
                  <div class="">
                    <h4 class="text-xs font-bold">
                      Computer Science with Artificial Intelligence BSc - King's
                      College London University
                    </h4>
                    <p class="text-xs">
                      Dissertation on using visual search engines to combat fake
                      news.
                    </p>
                  </div>
                  <h5 class="border-light-grey border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="mr-1 h-3"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    INTERESTS
                  </h5>
                  <h4 class="text-xs font-bold">Writing</h4>
                  <p class="text-xs">
                    Author of{" "}
                    <i>"Elevating React Web Development with Gatsby"</i> <br />
                    Released Jan 2022
                  </p>
                  <h4 class="text-xs font-bold">Hackathons</h4>
                  <p class="text-xs">
                    Attended 30+ hacks as an attendee, mentor or sponsor. I
                    enjoy teaching the next generation to code and have a bit of
                    a reputation for staying up all night.
                  </p>
                  <p class="text-xs font-semibold text-blue mt-2">
                    This CV was coded in ReactJS.
                  </p>
                </div>
              </div>
              <div class="col-span-3">
                <h5 class="flex items-center text-xs mb-1 text-blue font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="mr-1 h-3"
                  >
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                  </svg>
                  EXPERIENCE
                </h5>
                <div class="m1-b   ">
                  <h3 class="text-sm font-bold">Senior Front-End Developer</h3>
                  <h5 class="text-xs my-1 font-semibold">
                    Zone Digital, London | 2021 - Present
                  </h5>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Building a global real world data analytics platform for
                      the life sciences and healthcare industries.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">Building custom UI libraries for clients.</p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Presenting new technologies to my engineering colleagues
                      at 'Breakout Zone.'
                    </p>
                  </div>
                  <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                    Engineering Management, Design Agency, JS, ReactJS, Jest,
                    TypeScript, NextJS
                  </p>
                </div>
                <div class="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                  <h3 class="text-sm font-bold">
                    UX Engineer &amp; Product Manager
                  </h3>
                  <h5 class="text-xs my-1 font-semibold">
                    Behaviour Lab, London | 2021
                  </h5>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Responsible for leading UI development of Behaviour Lab's
                      SaaS product targeted at asset managers, private equity
                      firms, insurance companies and executive boards.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Built the company's component library, testing frameworks
                      and setup CI/CD pipelines.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Product managed the company's first commercial product.
                      Planning its features with stake holders, highlighting
                      cross functional dependencies and running agile ceremonies
                    </p>
                  </div>
                  <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                    Product Management, JS, ReactJS, Jest, TypeScript, GatsbyJS,
                    NextJS, TailwindCSS
                  </p>
                </div>
                <div class="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                  <h3 class="text-sm font-bold">Front-End Engineer</h3>
                  <h5 class="text-xs my-1 font-semibold">
                    American Express, London | 2020 - 2021
                  </h5>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Responsible for creating and maintaining performant,
                      acessible ReactJS and JS components used across the
                      organisation's online presence.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Created tools that allow us to measure how our components
                      are being used. Versions, bundle size, accessiblity, best
                      practices and SEO impacts are tracked automatically.
                    </p>
                  </div>
                  <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                    JS, ReactJS, Jest, Redux, GatsbyJS, Emotion, Styled
                    Components, Sketch, Invision
                  </p>
                </div>
                <div class="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                  <h3 class="text-sm font-bold">UX Engineer</h3>
                  <h5 class="text-xs my-1 font-semibold">
                    American Express, London | 2019 - 2020
                  </h5>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Developed a new referral experience that features enhanced
                      referral rewards for platinum and gold card members. It
                      has engaged with 600,000 customers to date.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Created a self-service automation tool for assesing a
                      webpage's performance, accessibilty and generating
                      screenshots of the page for multiple view ports. This has
                      increased the ability for markets to self service,
                      reducing the need to engage engineers to acquire this
                      information.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Facilitated design sprints and lightening decision jams to
                      help the team ideate.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Built web-ready animations, onboarding experiences, faster
                      sites in newer frameworks and chat bots.
                    </p>
                  </div>
                  <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                    User Experience, JS, Typescript, ReactJS, Redux, GatsbyJS,
                    GraphQL, Node, Electron
                  </p>
                </div>
                <div class="m1-b  border-light-grey border-t-2 mt-2 pt-2 ">
                  <h3 class="text-sm font-bold">Graduate UX Engineer</h3>
                  <h5 class="text-xs my-1 font-semibold">
                    American Express, Burgess Hill | 2018 - 2019
                  </h5>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Designed and built GRAD, a hub for technology onboarding.
                      The collection initially intended for graduates, is being
                      used campus-wide and receives over 250 unique vistors a
                      month and has accumulated over 20,000 views.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Conducted research into how we could improve elements of
                      the referral hub. This included competitor analysis,
                      analysis of existing site, creation of personas,
                      wireframes and mockups.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Built a prototype for a research archive that summarises,
                      tags, intelligently links and prioritises research for
                      better design decisions.
                    </p>
                  </div>
                  <div class="text-xs flex">
                    <p class="mr-1">-</p>
                    <p class="m-0">
                      Was the only graduate in my cohort to formally manage
                      interns and have gone on to be the youngest engineer to
                      manage graduates
                    </p>
                  </div>
                  <p class="text-xs mt-1 ml-2 text-blue font-semibold">
                    User Experience, User Research, User Testing, JS, ReactJS,
                    Sketch, Invision, Python
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
