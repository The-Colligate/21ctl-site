import React from "react";
import Head from "next/head";
import { LightNavbar, Footer, SocialIcons } from "@components/layout/";

const Konet = () => {
  return (
    <>
      <Head>
        <title>Konet</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicons/dea_favicon.ico" /> */}
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative ">
        <div className="w-full min-h-screen flex flex-col z-[0] ">
          <LightNavbar />

          <section className="px-28"></section>
        </div>
      </div>
    </>
  );
};

export default Konet;
