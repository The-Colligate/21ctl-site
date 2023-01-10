import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LightNavbar, Footer } from '@components/layout/';

import SiemensEnergy from '/public/logo/Siemens Energy.svg';
import SchneiderElectric from '/public/logo/Schneider Electric.svg';
import PCCWGlobal from '/public/logo/PCCW Global.svg';
import HeroImage from '/public/logo/hero-image.png';

import Power from '/public/logo/Power.png';

import accesslogo from 'public/logo/partners/Access Bank - png 0.png';
import aws from 'public/logo/partners/Amazon Web Services - png 0.png';
import british from 'public/logo/partners/British Airways - png 0.png';
import chevron from 'public/logo/partners/Chevron - png 0.png';
import fbn from 'public/logo/partners/First Bank of Nigeria - png 0.png';
import multichoice from 'public/logo/partners/MultiChoice Group - png 0.png';
import niginterbank from 'public/logo/partners/Nigeria Inter-Bank Settlement System - png 0.png';
import orange from 'public/logo/partners/Orange - png 0.png';
import usembassy from 'public/logo/partners/The U.S. Embassy - png 0.png';
import vmware from 'public/logo/partners/VMware - png 0.png';

const Security = () => {
  return (
    <>
      <Head>
        <title>Security - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[1]">
          <LightNavbar />

          <section className="sm:px-28 px-8 my-16 sm:py-0 pt-16">
            <div className="flex sm:flex-row flex-col sm:space-x-16 space-x-0 items-center">
              <div className="max-w-lg">
                <h1 className="text-6xl tracking-normal capitalize font-bold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                  <span className="text-primary-orange leading-8">
                    Embrace{' '}
                  </span>
                  A Better Energy{' '}
                  <span className="text-primary-orange leading-8">Future.</span>
                </h1>
                <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                  Optimize your data center&apos;s energy efficiency with our
                  sustainable power solutions.
                </p>
              </div>
              <div className="">
                <Image
                  src={Power}
                  width={800}
                  className="tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                />
              </div>
            </div>
          </section>

          <section className="flex flex-col sm:px-28 px-8">
            <h3 className="text-[#f64e1fbd] font-normal sm:text-4xl text-2xl my-6">
              Transcending the limits with our partners.
            </h3>
            {/* <marquee behavior="scroll" direction="left"> */}
            <div className="flex justify-between mt-8 px-12 phone:px-0">
              <Image
                src={SchneiderElectric}
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
              />
              <Image
                src={SiemensEnergy}
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                width={166}
                height={99}
              />

              <Image
                src="/logo/Oracle.png"
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                width={166}
                height={99}
              />
            </div>
            {/* </marquee> */}
          </section>

          <section className="sm:mb-0 mb-16 py-20">
            <div className="flex items-center space-x-10 space-y-0 my-10 mx-10 mb-0 tablet:flex-col-reverse largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">
              <div className="flex-1">
                <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                  <span className="text-primary-orange">
                    Sustainable Solutions
                  </span>
                </h1>
                <p className="leading-8 text-xl">
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


          <section className="sm:mb-0 mb-16 py-20 px-10">
            <div className="flex items-center space-x-10 space-y-0">
              <div className="flex-1">
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1673291336/Group_1_g9wnmq.webp"
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                  <span className="text-primary-orange">Grid Connections</span>{' '}
                  & Substations
                </h1>
                <p className="leading-8 text-xl max-w-md">
                  Our advanced grid connections and substations ensure a stable,
                  reliable power supply, with our expert team and
                  state-of-the-art technology.
                </p>
              </div>
            </div>
          </section>

          <section className="sm:mb-0 mb-16 py-20">
            <div className="flex items-center space-x-10 space-y-0 my-10 mx-10 mb-0 tablet:flex-col-reverse largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">
              <div className="flex-1">
                <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                  <span className="text-primary-orange">Brighten</span> the
                  Future <span className="text-primary-orange">Solar</span>{' '}
                </h1>
                <p className="leading-8 text-xl">
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

          <section className="partners py-20 sm:px-20 px-8">
            <div>
              <p className="text-4xl text-primary-orange font-semibold">
                Say hello to our other partners.
              </p>
            </div>

            <div>
              <marquee behavior="scroll" direction="left">
                <div className="flex items-center sm:space-x-10 space-x-5 py-16 largeTablet:text-center">
                  <Image
                    src={accesslogo}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                  <Image
                    src={aws}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                  <Image
                    src={british}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                  <Image
                    src={chevron}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                  <Image
                    src={fbn}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                  <Image
                    src={multichoice}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                  <Image
                    src={niginterbank}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                  <Image
                    src={orange}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                  <Image
                    src={usembassy}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                  <Image
                    src={vmware}
                    className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                  />
                </div>
              </marquee>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Security;
