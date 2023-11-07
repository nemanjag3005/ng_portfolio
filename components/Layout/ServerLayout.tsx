import React from "react";
import { Locale } from "../../i8n-config";
import { getDictionary } from "../../get-dictionary";
import Layout from "./Layout";

const ServerLayout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  const dictionary = await getDictionary(lang);
  return <Layout dictionary={dictionary.common}>{children}</Layout>;
};

export default ServerLayout;
