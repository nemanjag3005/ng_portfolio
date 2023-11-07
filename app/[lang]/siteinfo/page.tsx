import Head from "next/head";
import SiteInfoPage from "../../../components/SiteInfoPage";
import React from "react";

export default function SiteInfo() {
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
      <SiteInfoPage />
    </div>
  );
}
