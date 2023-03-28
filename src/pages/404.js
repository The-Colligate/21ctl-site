import React from "react";
import Head from "next/head";
import Link from "next/link";

const FourOhFourPage = () => {
  return (
    <>
      <Head>
        <title>404 - 21 CTL</title>
        <meta name="description" content="" />

        <link rel="icon" href="/favicons/logo_update.ico" />
      </Head>
      <div>
        <div className="bg-404 flex flex-col justify-end items-center pb-12">
          <p className="text-white text-3xl font-bold">Opps!!</p>
          <p className="text-white text-md py-3">It seems you are lost</p>
<Link href="/" >
          <div className="flex bg-[#6D3618] p-3 rounded-3xl">
          <img src="/icons/home/Arrow 2.svg" />
            <p className="text-white text-xl pl-3">Go back</p>
            
          </div>
          </Link>
        </div>
        
        <marquee>
          <div className="flex justify-between items-center">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <>
                  <div key={i} className="flex justify-center items-center pr-10">
                    <p>Page Not Found </p>
                    <div className="h-2 w-2 rounded-full bg-red-700 ml-1"></div>
                  </div>
                  <div className="flex justify-center items-center  pr-10">
                    <p>Error 404 </p>
                    <div className="h-2 w-2 rounded-full bg-red-700 ml-1"></div>
                  </div>
                </>
              ))}
          </div>
        </marquee>
      </div>
    </>
  );
};

export default FourOhFourPage;
