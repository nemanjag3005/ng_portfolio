import Head from "next/head";
import CvPage from "../../../components/CvPage";
import React from "react";

export default function CV() {
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
      <CvPage />
    </div>
  );
}
