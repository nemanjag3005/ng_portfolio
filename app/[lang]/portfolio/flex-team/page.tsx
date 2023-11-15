import Head from "next/head";
import React from "react";
import { Locale } from "../../../../i8n-config";
import { getDictionary } from "../../../../get-dictionary";
import Project3 from "../../../../components/Projects/Project3";

export default async function Project3Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Project - Flex Team</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project3 dictionary={dictionary.project3} />
    </div>
  );
}
