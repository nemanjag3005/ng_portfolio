import Head from "next/head";
import React from "react";
import { Locale } from "../../../../i8n-config";
import { getDictionary } from "../../../../get-dictionary";
import Project1 from "../../../../components/Projects/Project1";

export default async function Project1Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Project - Obuci.rs</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project1 dictionary={dictionary.project1} />
    </div>
  );
}
