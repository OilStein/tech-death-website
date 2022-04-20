import type { NextPage } from "next";
import Opening from "../components/Opening";
import Head from "next/head";
import AboutMe from "../components/About"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage"/>
        <link rel="icon" href="favicon.ico"/>
      </Head>
      <Opening />
      <AboutMe />
    </div>
  );
};

export default Home;
