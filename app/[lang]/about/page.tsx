import Head from "next/head";
import AboutPage from "../../../components/AboutPage";
import React from "react";

export default function About() {
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
      <AboutPage />
    </div>
  );
}
