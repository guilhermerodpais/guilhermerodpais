// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";

import Home from "./Home";
import Header from "../components/Header";

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=PT+Sans"
        ></link>
      </Head>
      <Header />
      <Home />
    </>
  );
};

export default App;
