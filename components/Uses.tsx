import React from "react";

const Uses = ({
  dictionary,
}: {
  dictionary: {
    about: string;
    p1: string;
    p2: string;
  };
}) => {
  return (
    <section className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16 text-textColor">
      <h1 className="text-3xl font-bold">
        Software I use, and other things I recommend.
      </h1>
      <div className="my-12 border-l px-4 grid grid-cols-2 space-x-24">
        <h3 className="text-xl font-semibold">Editor</h3>
        <div className="">
          <a className="hover:underline cursor-pointer">Visual studio code</a>
          <p className="opacity-50">
            Visual Studio Code is a free source-code editor made by Microsoft
            for Windows, Linux and macOS.
          </p>
          <p className="mt-4">Extensions:</p>
          <ul className="pl-6 mt-2 space-y-2 list-disc">
            <li className="hover:underline opacity-50 cursor-pointer hover:opacity-100">
              <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
                Prettier: Code Formatter
              </a>
            </li>
            <li className="hover:underline opacity-50 cursor-pointer hover:opacity-100">
              <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
                ES7+ React Snippets
              </a>
            </li>
            <li className="hover:underline opacity-50 cursor-pointer hover:opacity-100">
              <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
                ESLint
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-12 border-l px-4 grid grid-cols-2 space-x-24 ">
        <h3 className="text-xl font-semibold">Browser</h3>
        <div className="">
          <a className="hover:underline cursor-pointer">Firefox</a>
          <p className="opacity-50">
            I use firefox because of its superb web development features
            compared to other browsers.
          </p>
          <p className="mt-4">Extensions:</p>
          <ul className="pl-6 mt-2 space-y-2 list-disc">
            <li className="hover:underline opacity-50 cursor-pointer hover:opacity-100">
              <a href="https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg">
                Wappalyzer
              </a>
            </li>
            <li className="hover:underline opacity-50 cursor-pointer hover:opacity-100">
              <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">
                React Developer Tools
              </a>
            </li>
            <li className="hover:underline opacity-50 cursor-pointer hover:opacity-100">
              <a href="https://chrome.google.com/webstore/detail/svg-grabber-get-all-the-s/ndakggdliegnegeclmfgodmgemdokdmg">
                svg-grabber
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-12 border-l px-4 grid grid-cols-2 space-x-24 ">
        <h3 className="text-xl font-semibold">Design Inspiration</h3>
        <div className="space-y-4">
          <div>
            <a className="hover:underline cursor-pointer">Dribbble</a>
            <p className="opacity-50">Arguably the home of designers online.</p>
          </div>
          <div>
            <a className="hover:underline cursor-pointer">Pages.xyz</a>
            <p className="opacity-50">
              A hall of fame for simply beautiful websites.
            </p>
          </div>
          <div>
            <a className="hover:underline cursor-pointer">Uplabs</a>
            <p className="opacity-50">
              A great place for designs along with their original files for
              download. Most of them are free.
            </p>
          </div>
        </div>
      </div>
      <div className="my-12 border-l px-4 grid grid-cols-2 space-x-24 ">
        <h3 className="text-xl font-semibold">Workstation</h3>
        <div className="space-y-8">
          <div>
            <a className="hover:underline cursor-pointer">2020 Macbook Pro</a>
            <ul className="pl-6 mt-2 space-y-2 list-disc">
              <li className=" opacity-50 "> M1</li>
              <li className=" opacity-50 ">8GB RAM</li>
            </ul>
          </div>
          <div>
            <a className="hover:underline cursor-pointer">
              Logitech MX Master 3
            </a>
          </div>
          <div>
            <a className="hover:underline cursor-pointer">
              Logitech MX Keys Mini
            </a>
          </div>
        </div>
      </div>
      <div className="my-12 border-l px-4 grid grid-cols-2 space-x-24 ">
        <h3 className="text-xl font-semibold">Site Tech Stack</h3>
        <div className="space-y-8">
          <div>
            <a className="hover:underline cursor-pointer">Next.JS</a>
            <p className="opacity-50">
              A React based static site generator powered by GraphQL.
            </p>
          </div>
          <div>
            <a className="hover:underline cursor-pointer">Tailwind CSS </a>
            <p className="opacity-50">
              A utility-first CSS framework for rapidly building custom designs.
            </p>
          </div>
          <div>
            <a className="hover:underline cursor-pointer">Vercel</a>
            <p className="opacity-50">
              A cloud platform for static sites and Serverless Functions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
