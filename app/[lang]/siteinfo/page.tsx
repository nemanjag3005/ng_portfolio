import Head from "next/head";
import SiteInfoPage from "../../../components/SiteInfoPage";
import React from "react";
import { Locale } from "../../../i8n-config";
import { getDictionary } from "../../../get-dictionary";

export default async function SiteInfo({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Nemanja Grujić | Site Info</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteInfoPage dictionary={dictionary.siteinfo} />
    </div>
  );
}
