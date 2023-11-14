import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = ({
  dictionary,
}: {
  dictionary: {
    desc: string;
    "p1-desc": string;
    "p2-desc": string;
    "p3-desc": string;
    "p4-desc": string;
    "p5-desc": string;
  };
}) => {
  return (
    <div className="flex-1 w-full max-w-6xl text-textPrimary px-4 py-8 mx-auto md:px-8 md:pb-16">
      <div className=" mb-4 max-w-6xl">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="font-light mt-6">{dictionary.desc}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="#">
          <div className="w-full h-full relative mb-3 dutation-500 ease-in-out transition hover:scale-105">
            <div className="bg-bgLight shadow-lg h-full rounded-lg">
              <div className="h-48 w-full relative mb-5">
                <Image
                  src="/obuci1.png"
                  fill
                  alt="Obuci.rs"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5 pb-16">
                <h2 className="text-2xl font-semibold">Obuci.rs</h2>
                <p>{dictionary["p1-desc"]}</p>
                <div className="absolute bottom-0">
                  <div className="flex flex-wrap mb-5 text-xs space-x-2 text-light">
                    <div>NEXT</div>
                    <div>FIREBASE</div>
                    <div>TAILWIND</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="w-full h-full relative mb-3 dutation-500 ease-in-out transition hover:scale-105">
            <div className="bg-bgLight shadow-lg h-full rounded-lg">
              <div className="h-48 w-full relative mb-5">
                <Image
                  src="/lan.png"
                  fill
                  alt="Obuci.rs"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5 pb-16">
                <h2 className="text-2xl font-semibold">LAN Digital</h2>
                <p>{dictionary["p2-desc"]}</p>
                <div className="absolute bottom-0">
                  <div className="flex flex-wrap mb-5 text-xs space-x-2 text-light">
                    <div>REACT</div>

                    <div>TAILWIND</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="w-full h-full relative mb-3 dutation-500 ease-in-out transition hover:scale-105">
            <div className="bg-bgLight shadow-lg h-full rounded-lg">
              <div className="h-48 w-full relative mb-5">
                <Image
                  src="/flex.png"
                  fill
                  alt="Obuci.rs"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5 pb-16">
                <h2 className="text-2xl font-semibold">Flex Team</h2>
                <p>{dictionary["p3-desc"]}</p>
                <div className="absolute bottom-0">
                  <div className="flex flex-wrap mb-5 text-xs space-x-2 text-light">
                    <div>NEXT</div>
                    <div>UX</div>
                    <div>SEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="w-full h-full relative mb-3 dutation-500 ease-in-out transition hover:scale-105">
            <div className="bg-bgLight shadow-lg h-full rounded-lg">
              <div className="h-48 w-full relative mb-5">
                <Image
                  src="/obuci-app.png"
                  fill
                  alt="Obuci.rs"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5 pb-16">
                <h2 className="text-2xl font-semibold">Obuci App</h2>
                <p>{dictionary["p4-desc"]}</p>
                <div className="absolute bottom-0">
                  <div className="flex flex-wrap mb-5 text-xs space-x-2 text-light">
                    <div>REACT NATIVE</div>
                    <div>EXPO</div>
                    <div>FIREBASE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="w-full h-full relative mb-3 dutation-500 ease-in-out transition hover:scale-105">
            <div className="bg-bgLight shadow-lg h-full rounded-lg">
              <div className="h-48 w-full relative mb-5">
                <Image
                  src="/PKS.png"
                  fill
                  alt="Porsche Club Serbia"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5 pb-16">
                <h2 className="text-2xl font-semibold">Porsche Club Serbia</h2>
                <p>{dictionary["p5-desc"]}</p>
                <div className="absolute bottom-0">
                  <div className="flex flex-wrap mb-5 text-xs space-x-2 text-light">
                    <div>CMS</div>
                    <div>SEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
