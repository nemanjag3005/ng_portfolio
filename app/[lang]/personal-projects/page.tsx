import Head from "next/head";
import React from "react";
import PersonalProjects from "../../../components/Projects/PersonalProjects";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i8n-config";

export default async function PersonalProjectsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Head>
        <title>Nemanja Grujić | Personal Projects</title>
        <meta
          name="description"
          content="The official portfolio page of Nemanja Grujić"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PersonalProjects dictionary={dictionary.projects} />
    </div>
  );
}
