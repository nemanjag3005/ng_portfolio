import Head from "next/head";
import React from "react";
import { Locale } from "../../../../i8n-config";
import { getDictionary } from "../../../../get-dictionary";
import Project5 from "../../../../components/Projects/Project5";

export default async function Project5Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Project - Porsche Club Serbia</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project5 dictionary={dictionary.project5} />
    </div>
  );
}
