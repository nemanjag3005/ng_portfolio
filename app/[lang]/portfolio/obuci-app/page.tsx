import Head from "next/head";
import React from "react";
import { Locale } from "../../../../i8n-config";
import { getDictionary } from "../../../../get-dictionary";
import Project4 from "../../../../components/Projects/Project4";

export default async function Project4Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Project - Obuci App</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project4 dictionary={dictionary.project4} />
    </div>
  );
}
