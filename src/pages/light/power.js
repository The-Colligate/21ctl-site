import React from 'react';
import Head from 'next/head';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import { motion } from 'framer-motion';
import {
  leftTransitionVarient,
  rightTansitionVarient,
} from '@components/constants/animations';

// import power from '/public/logo/Power.png';

const Power = () => {
  return (
    <>
      <Head>
        <title>Power - 21 CTL</title>
        <meta name="description" content="" />
      
    <link rel="icon" href="/favicons/power_favicon.ico" />

      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[1]">
          <LightNavbar />

          <section className="sm:px-28 px-8 my-16 sm:py-0 pt-16">
            <div className="flex sm:flex-row flex-col sm:space-x-16 space-x-0 items-center max-w-fit m-auto">
              <motion.div
                variants={leftTransitionVarient}
                animate="visible"
                initial="hidden"
                className="max-w-lg"
              >
                <h1 className="text-6xl tracking-normal capitalize font-bold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                  creating{' '}
                  <span className="text-primary-green leading-8">energy</span>{' '}
                  for the
                  <span className="text-primary-green leading-8"> future</span>{' '}
                </h1>
                <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                  We are investing in sustainable clean energy in Africa to
                  power the future across industries and communities creating
                  possibilities.
                </p>
              </motion.div>
              <motion.div
                variants={rightTansitionVarient}
                animate="visible"
                initial="hidden"
                className=""
              >
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058119/21ctl/logo/Power_m6awqs.png"
                  width={800}
                  height={800}
                  className="tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                />
              </motion.div>
            </div>
          </section>

          <section className="energy">
            <section className="sm:mb-0 mb-16 py-20 mx-20 tablet:mx-0">
              <div className="flex items-center space-x-10 space-y-0 my-10 mx-10 mb-0 tablet:flex-col largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">
                <div className="flex-1">
                  <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                    <span className="text-primary-green">
                      Sustainable Solutions
                    </span>
                  </h1>
                  <p className="leading-8 sm:text-xl text-lg">
                    Elevate your energy with our sustainable solutions that
                    provide clean, reliable power while reducing your carbon
                    footprint and energy costs.
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1673290646/image_1_rmjwqv.webp"
                    className="w-full"
                  />
                </div>
              </div>
            </section>

            <section className="sm:mb-0 mb-16 py-20   mx-20 tablet:mx-0">
              <div className="flex items-center space-x-10 space-y-0 tablet:flex-col-reverse">
                <div className="flex-1 tablet:mt-10 tablet:px-10">
                  <img
                    src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1673291336/Group_1_g9wnmq.webp"
                    className="w-full"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                    <span className="text-primary-green">
                      Grid Connections
                    </span>{' '}
                    & Substations
                  </h1>
                  <p className="leading-8 sm:text-xl text-lg max-w-md sm:px-0 px-5">
                    Our advanced grid connections and substations ensure a
                    stable, reliable power supply, with our expert team and
                    state-of-the-art technology.
                  </p>
                </div>
              </div>
            </section>
          </section>
          <section className="sm:mb-0 mb-16 py-20  mx-20 tablet:mx-10">
            <div className="flex items-center space-x-10 space-y-0 my-10  mb-0 tablet:flex-col largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">
              <div className="flex-1">
                <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                  <span className="text-primary-green">Brighten</span> the
                  Future <span className="text-primary-green">Solar</span>{' '}
                </h1>
                <p className="leading-8 sm:text-xl text-lg">
                  Our solar panels harness the power of the sun to generate
                  clean, renewable energy for your home or business. Save money
                  on energy costs and reduce your carbon footprint with our
                  efficient and reliable solar power options.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1673290885/Rectangle_442_n4lp5g.png"
                  className="w-full"
                />
              </div>
            </div>
          </section>

          <Footer />
        </div>
        <SocialIcons />
      </div>
    </>
  );
};

export default Power;
