import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { Header } from "../components/local/header";
import { Div } from "../components/shared/atomicUI/atoms";

const Home: NextPage = () => {
  return (
    <Div colorize highlight>
      <Head>
        <title>JP Portfolio Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main></main>
    </Div>
  );
};

export default Home;
