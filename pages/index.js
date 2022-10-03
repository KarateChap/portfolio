import Head from "next/head";
import Navbar from "@components/navbar";
import Hero from "@components/hero";
import Links from "@components/links";
import Works from "@components/works";
import Stack from "@components/stack";
import Footer from "@components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gab.Dev</title>
        <meta name="description" content="Portfolio of Gabriel Mariano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className=" w-full h-[auto] flex justify-center">
        <div className="flex w-full max-w-[1240px] gap-[100px] flex-col text-white">
          <Hero />
          <Works/>
          <Stack/>
        </div>
        <Links />
      </div>
      <Footer/>
    </div>
  );
}
