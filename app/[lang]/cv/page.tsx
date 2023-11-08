import Head from "next/head";
import CvPage from "../../../components/CV/CvPage";
import React from "react";
import { Locale } from "../../../i8n-config";
import { getDictionary } from "../../../get-dictionary";

export default async function CVPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Nemanja Grujić | CV/Resume</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CvPage dictionary={dictionary.cv} />
    </div>
  );
}
