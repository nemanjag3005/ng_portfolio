import Head from "next/head";
import PortfolioPage from "../../../components/PortfolioPage";
import React from "react";

export default function PersonalProjectsPage() {
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
      <PortfolioPage />
    </div>
  );
}
