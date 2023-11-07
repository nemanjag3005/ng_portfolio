import Head from "next/head";
import CustomizeTheme from "../../../components/CustomizeTheme";
import React from "react";

export default function Themes() {
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
      <CustomizeTheme />
    </div>
  );
}
