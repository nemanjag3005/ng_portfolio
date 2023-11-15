import React from "react";

const Uses = ({
  dictionary,
}: {
  dictionary: {
    h1: string;
    editor: string;
    vscode: string;
    browser: string;
    firefox: string;
    "design-inspiration": string;
    dribble: string;
    pages: string;
    uplabs: string;
    workstation: string;
    "site-stack": string;
    next: string;
    tailwind: string;
    vercel: string;
  };
}) => {
  return (
    <section className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16 text-textColor">
      <h1 className="text-3xl font-bold">{dictionary.h1}</h1>
      <div className="my-16 md:border-l px-4 grid grid-cols-1 md:grid-cols-2 md:space-x-24">
        <h3 className="text-xl font-semibold mb-6 md:mb-0">
          {dictionary.editor}
        </h3>
        <div className="">
          <a className="hover:underline cursor-pointer">Visual studio code</a>
          <p className="opacity-50">{dictionary.vscode}</p>
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
      <div className="my-16 md:border-l px-4 grid md:grid-cols-2 grid-cols-1 md:space-x-24 ">
        <h3 className="text-xl font-semibold mb-6 md:mb-0">
          {dictionary.browser}
        </h3>
        <div className="">
          <a
            href="https://www.mozilla.org/en-GB/firefox/new/"
            className="hover:underline cursor-pointer"
          >
            Firefox
          </a>
          <p className="opacity-50">{dictionary.firefox}</p>
          <p className="mt-4">Extensions:</p>
          <ul className="pl-6 mt-2 space-y-2 list-disc">
            <li className="hover:underline opacity-50 cursor-pointer hover:opacity-100">
              <a href="https://addons.mozilla.org/en-GB/firefox/addon/wappalyzer/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search">
                Wappalyzer
              </a>
            </li>
            <li className="hover:underline opacity-50 cursor-pointer hover:opacity-100">
              <a href="https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search">
                React Developer Tools
              </a>
            </li>
            <li className="hover:underline opacity-50 cursor-pointer hover:opacity-100">
              <a href="https://addons.mozilla.org/en-GB/firefox/addon/svg-export/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search">
                svg-grabber
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-16 md:border-l px-4 grid grid-cols-1 md:grid-cols-2 md:space-x-24 ">
        <h3 className="text-xl font-semibold mb-6 md:mb-0">
          {dictionary["design-inspiration"]}
        </h3>
        <div className="space-y-4">
          <div>
            <a
              href="https://dribbble.com/"
              className="hover:underline cursor-pointer"
            >
              Dribbble
            </a>
            <p className="opacity-50">{dictionary.dribble}</p>
          </div>
          <div>
            <a
              href="https://pages.xyz/"
              className="hover:underline cursor-pointer"
            >
              Pages.xyz
            </a>
            <p className="opacity-50">{dictionary.pages}</p>
          </div>
          <div>
            <a
              href="https://www.uplabs.com/"
              className="hover:underline cursor-pointer"
            >
              Uplabs
            </a>
            <p className="opacity-50">{dictionary.uplabs}</p>
          </div>
        </div>
      </div>
      <div className="my-16 md:border-l px-4 grid grid-cols-1 md:grid-cols-2 md:space-x-24 ">
        <h3 className="text-xl font-semibold mb-6 md:mb-0">
          {dictionary.workstation}
        </h3>
        <div className="space-y-8">
          <div>
            <p className="">2020 Macbook Pro</p>
            <ul className="pl-6 mt-2 space-y-2 list-disc">
              <li className=" opacity-50 "> M1</li>
              <li className=" opacity-50 ">8GB RAM</li>
            </ul>
          </div>
          <div>
            <a
              href="https://www.amazon.ca/Logitech-Master-Advanced-Wireless-Mouse/dp/B07XC2FWD1/ref=sr_1_6?crid=2W2Q3Z89TTFS3&keywords=logitech+mx+master+3&qid=1700021224&sprefix=logitech+mx+master+3%2Caps%2C130&sr=8-6&ufe=app_do%3Aamzn1.fos.d0e27fc4-6417-4b26-97cb-f959a9930752"
              className="hover:underline cursor-pointer"
            >
              Logitech MX Master 3
            </a>
          </div>
          <div>
            <a
              href="https://www.amazon.ca/LogitechMX-Keys-Mini-Wireless-Keyboard/dp/B09MPQ3632/ref=sr_1_4?crid=1MDXLTI1642CD&keywords=logitech+mx+keys+mini&qid=1700021250&sprefix=logitech+mx+keys+mini%2Caps%2C115&sr=8-4&ufe=app_do%3Aamzn1.fos.b06bdbbe-20fd-4ebc-88cf-fa04f1ca0da8"
              className="hover:underline cursor-pointer"
            >
              Logitech MX Keys Mini
            </a>
          </div>
        </div>
      </div>
      <div className="my-16 md:border-l px-4 grid grid-cols-1 md:grid-cols-2 md:space-x-24 ">
        <h3 className="text-xl font-semibold mb-6 md:mb-0">
          {dictionary["site-stack"]}
        </h3>
        <div className="space-y-8">
          <div>
            <a
              href="https://nextjs.org/"
              className="hover:underline cursor-pointer"
            >
              Next.JS
            </a>
            <p className="opacity-50">{dictionary.next}</p>
          </div>
          <div>
            <a
              href="https://tailwindcss.com/"
              className="hover:underline cursor-pointer"
            >
              Tailwind CSS{" "}
            </a>
            <p className="opacity-50">{dictionary.tailwind}</p>
          </div>
          <div>
            <a
              href="https://vercel.com/"
              className="hover:underline cursor-pointer"
            >
              Vercel
            </a>
            <p className="opacity-50">{dictionary.vercel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
