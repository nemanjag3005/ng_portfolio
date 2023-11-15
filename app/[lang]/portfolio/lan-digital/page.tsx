import Head from "next/head";
import React from "react";
import { Locale } from "../../../../i8n-config";
import { getDictionary } from "../../../../get-dictionary";
import Project2 from "../../../../components/Projects/Project2";

export default async function Project2Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Project - LAN Digital</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project2 dictionary={dictionary.project2} />
    </div>
  );
}
