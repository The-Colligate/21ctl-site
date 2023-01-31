import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import MapComponent from '@components/map/googlemap';
import Head from 'next/head';

const SupportCenters = () => {

  
  
    // const { query } = useRouter();

   

    // console.log("Query Location");
    // if (typeof window !== "undefined") {
    // const location =  window.location.hash.split('=')[1];

    // console.log();
    // }



  
  return (
    <>
      <Head>
        <title>Digital Platform - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[1]">
          <LightNavbar />

          <div className="pt-32">
            <h1 className="font-extrabold text-4xl text-center ">
              Support Centers
            </h1>
          </div>

          <div className="support-centers sm:px-28 px-8 py-10 dark:text-black">
            <div className="shadow-md hover:shadow-xl">
              <h2 className="font-bold text-xl">Head Office</h2>
              <p className="text-lg mt-4">
                5 Jeremiah Ugwu Street, <br />
                Off Babatunde Anjous,
                <br />
                Lekki Phase 1, Lagos.
              </p>
              <p>
                <a href="tel:+23412240011">+234 1 224 0011</a>
              </p>
            </div>
            <div className="shadow-md hover:shadow-xl">
              <h2 className="font-bold text-xl">Victoria Island Office</h2>
              <p className="text-lg mt-4">
                No 1A Samuel Adedoyin Street,
                <br />
                Victoria Island,
                <br />
                Lagos.
              </p>
              <p>
                <a href="tel:+01-2701941">+01-2701941</a>
              </p>
              <p>
                <a
                  href="mailto:vi_networks@21ctl.com"
                  className="hover:text-primary-orange"
                >
                  vi_networks@21ctl.com
                </a>
              </p>
            </div>
            <div className="shadow-md hover:shadow-xl">
              <h2 className="font-bold text-xl">Apapa Ofice</h2>
              <p className="text-lg mt-4">
                No 48, Burma road. <br />
                Apapa,
                <br />
                Lagos.
              </p>
              <p>
                <a href="tel:+01-2702901">01-2702901</a>
              </p>
            </div>
            <div className="shadow-md hover:shadow-xl">
              <h2 className="font-bold text-xl">Surulere Office</h2>
              <p className="text-lg mt-4">
                No 1 Akerele Street,
                <br />
                Off Ogunlana drive.
                <br />
                Surulere, Lagos.
              </p>
              <p>
                <a href="tel:+01-2701200-2">01-2701200-2</a>
              </p>
            </div>
            <div className="shadow-md hover:shadow-xl">
              <h2 className="font-bold text-xl">Ikeja Network</h2>
              <p className="text-lg mt-4">
                No 3, Alalamu Close Off Alade Close. <br />
                Allen Bus Stop,
                <br />
                Ikeja.
              </p>
              <p>
                <a href="tel:+01-2702901">01-2702901</a>
              </p>
              <p>
                <a
                  href="mailto:ikejanetwork@21ctl.com"
                  className="hover:text-primary-orange"
                >
                  ikejanetwork@21ctl.com
                </a>
              </p>
            </div>
            
            {/* <div className="shadow-md hover:shadow-xl">
              <h2 className="font-bold text-xl mb-4">Saka Tinubu</h2>
              <p className="text-lg mt-4">
                3, Alalamu Close Off Alade Close. <br />
                Allen Bus Stop,
                <br />
                Ikeja.
              </p>
              <p>
                <a href="tel:+234 1-270 0888">+234 1-270 0888</a>
              </p>
              <p>
                <a
                  href="mailto:saka.noc1@21ctl.com"
                  className="hover:text-primary-orange"
                >
                  saka.noc1@21ctl.com
                </a>
              </p>
            </div> */}
            {/* <div className="shadow-md hover:shadow-xl">
              <h2 className="font-bold text-xl">Maryland Office</h2>
              <p className="text-lg mt-4">
                3, Alalamu Close Off Alade Close. <br />
                Allen Bus Stop,
                <br />
                Ikeja.
              </p>
              <p>
                <a href="tel:+01-2702901">01-2702901</a>
              </p>
              <p>
                <a
                  href="mailto:ikejanetwork@21ctl.com"
                  className="hover:text-primary-orange"
                >
                  ikejanetwork@21ctl.com
                </a>
              </p>
            </div> */}
          </div>
          <div id='map'>
          {/* <MapComponent /> */}
</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SupportCenters;
