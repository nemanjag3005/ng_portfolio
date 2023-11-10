import Image from "next/image";
import React from "react";

const SiteInfoPage = ({
  dictionary,
}: {
  dictionary: {
    about: string;
    p1: string;
    p2: string;
  };
}) => {
  return (
    <div className="bg-bgColor">
      <section className=" flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-left mb-5">
          {dictionary.about}
        </h1>
        <p className="mb-3">{dictionary.p1}</p>
        <p className="mb-3">{dictionary.p2}</p>
        <p className="mb-3">Let's see Paul Allen's portfolio website.</p>
        <div className="shadow-xl rounded relative h-96 w-full">
          <Image
            alt=""
            src="/patrick.png"
            className="object-cover rounded"
            fill
          />
        </div>
        <div className="shadow-xl rounded relative h-96 mt-4 w-full">
          <Image
            alt=""
            src="/bcard.png"
            className="object-cover rounded"
            fill
          />
        </div>
      </section>
    </div>
  );
};

export default SiteInfoPage;
