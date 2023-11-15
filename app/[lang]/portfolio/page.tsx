import Head from "next/head";
import Portfolio from "../../../components/Projects/Portfolio";
import React from "react";
import { Locale } from "../../../i8n-config";
import { getDictionary } from "../../../get-dictionary";

export default async function PortfolioPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Nemanja Grujić | Portfolio</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio dictionary={dictionary.portfolio} lang={lang} />
    </div>
  );
}
