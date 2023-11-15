import Head from "next/head";
import CustomizeTheme from "../../../components/CustomizeTheme";
import React from "react";
import { Locale } from "../../../i8n-config";
import { getDictionary } from "../../../get-dictionary";

export default async function Themes({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Nemanja Grujić | Customize Theme</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomizeTheme dictionary={dictionary.themes} />
    </div>
  );
}
