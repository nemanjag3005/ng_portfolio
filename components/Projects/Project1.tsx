import Image from "next/image";
import React from "react";

const Project1 = ({
  dictionary,
}: {
  dictionary: {
    desc: string;
    h1: string;
    desc1: string;
    h2: string;
    desc2: string;
    h3: string;
    desc3: string;
  };
}) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center">
        <div className="w-full h-96 relative object-cover md:max-w-4xl mx-auto md:mt-5 md:rounded">
          <Image
            src="/obuci1.png"
            fill
            alt="Obuci Hero Page"
            className="object-cover md:rounded"
          />
        </div>
      </div>
      <div className="flex-1 w-full text-textLight max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        <h1 className="text-primary text-center text-4xl font-bold">
          Obuci.rs
        </h1>
        <p className="mt-6 mb-16 text-center">{dictionary.desc}</p>
        <article>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="flex flex-col col-xs-12 col-sm-6 justify-center">
              <h3 className="text-primary font-medium text-2xl mb-6">
                {dictionary.h1}
              </h3>
              <p className="">{dictionary.desc1}</p>
            </div>
            <div className="col-xs-12 col-sm-6 h-72 md:h-full w-full relative">
              <Image
                src="/obuci2.png"
                alt=""
                fill
                className="object-cover object-left"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24 mb-5">
            <div className="col-xs-12 col-sm-6 relative h-72 md:h-full w-full">
              <Image
                src="/obuci3.png"
                alt=""
                fill
                className="object-cover object-left"
              />
            </div>
            <div className="flex flex-col col-xs-12 col-sm-6 justify-center">
              <h3 className="text-primary font-medium text-2xl mb-6">
                {dictionary.h2}
              </h3>
              <p className="">{dictionary.desc2}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24 mb-5">
            <div className="flex flex-col col-xs-12 col-sm-6 justify-center">
              <h3 className="text-primary font-medium text-2xl mb-6">
                {dictionary.h3}
              </h3>
              <p className="">{dictionary.desc3}</p>
            </div>
            <div className="col-xs-12 col-sm-6 relative h-72 md:h-full w-full">
              <Image
                src="/obuci-stack.png"
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Project1;
