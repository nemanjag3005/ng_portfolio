import Head from "next/head";
import AboutPage from "../../../components/AboutPage";
import React from "react";
import { Locale } from "../../../i8n-config";
import { getDictionary } from "../../../get-dictionary";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Nemanja Grujić | About</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutPage dictionary={dictionary.about} />
    </div>
  );
}
