import React from "react";
import Head from "next/head";
import GitHubCalendar from "react-github-calendar";
import Layout from "@/components/Layout";
import { darkMode } from "../../tailwind.config";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

export const GithubContributions = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <GitHubCalendar
      style={{
        maxWidth: "100% !important",
        alignItems: "center",
      }}
      username="suyashagrahari"
      colorScheme={mode === "dark" ? "dark" : "light"}
    />
  );
};

const stats = () => {
  return (
    <>
      <Head>
        <title>SA | Stats</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="mx-7">
          <h2 className="font-bold text-3xl mt-8 w-full text-center md:text-xl md:mt-8">
            Github Contributions
          </h2>
          <p className="my-4 text-gray-700 w-full text-center dark:text-gray-300 mb-8 sm:text-xs">
            Here is my GitHub contribution graph, illustrating my coding
            activity and productivity on the platform.
          </p>

          <div className=" flex items-center justify-center w-full">
            <GithubContributions />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default stats;
