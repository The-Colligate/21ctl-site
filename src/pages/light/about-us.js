import React from "react";
import Head from "next/head";
import { LightNavbar, Footer, SocialIcons } from "@components/layout/";
import { motion } from "framer-motion";
import {
  buttonVarient,
  leftTransitionVarient,
  rightTansitionVarient,
} from "@components/constants/animations";
import CountUp from "react-countup";
const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[1]">
          <LightNavbar />

          <section className="about-us sm:px-36 px-8 my-16 ">
            <div className="flex items-center justify-center h-full">
              <div className="max-w-3xl">
                <h1 className="text-7xl font-bold tracking-normal text-center font-lato text-white whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                  About{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] leading-8">
                    Us{" "}
                  </span>
                </h1>
                <p className="text-2xl text-white text-center mt-6 largeTablet:text-xl smallTablet:text-lg">
                  We provide reliability, security, and high traffic handling
                  for a seamless customer experience
                </p>
              </div>
            </div>
          </section>

          <section className="sm:px-36 px-8 my-10">
            <div className="flex flex-col items-center">
              <div className="text-lg font-semibold pb-5">
                Our statistics reveal more about us.
              </div>
              <div className="figures flex sm:flex-row flex-col sm:space-x-8 space-x-0">
                <div className="text-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold">
                    <CountUp
                      start={0}
                      end={200}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                    {/* 200+ */}
                  </p>
                  <span className="font-light">Businesses Supported</span>
                </div>
                <div className="text-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold">
                    {/* 25+ */}
                    <CountUp
                      start={0}
                      end={25}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                  </p>
                  <span className="font-light">Years Experience</span>
                </div>
                <div className="text-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold">
                    {/* 14M+ */}
                    <CountUp
                      start={0}
                      end={45}
                      duration={2.75}
                      prefix=""
                      suffix="M+"
                    />
                  </p>
                  <span className="font-light">Satisfied Customers</span>
                </div>
                <div className="text-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold">
                    {/* 100+ */}
                    <CountUp
                      start={0}
                      end={100}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                  </p>
                  <span className="font-light">Completed Projects</span>
                </div>
              </div>
            </div>
          </section>

          <section className="sm:px-28 px-8">
            <div className="m-auto max-w-5xl">
              <h2 className="text-[36px] font-semibold tablet:text-[26px] mb-4">
                About the Company
              </h2>
              <p className="text-[26px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[16px]">
                21st Century Technologies is a licensed information
                communications and technology provider in Nigeria, with a
                19-year history. The company owns and operates the most
                extensive optical fibre cable networks in Nigeria, with
                high-speed internet access and international subsea fibre
                capacity.
                <br />
                <br />
                21st Century Technologies is also the leading commercial data
                centre service provider in Nigeria, specializing in the
                protection of off-site data and server hosting in its
                state-of-the-art, secure facilities. The company offers bespoke
                service solutions to government, businesses, and homes with a
                redundant and multi-homed network backbone. 21st Century
                Technologies has its head office in Lagos and branches
                throughout Nigeria.
              </p>
            </div>
          </section>
          <section className="vision-mission-section">
            <div className="m-20 mr-0 flex justify-between items-center  tablet:m-10 tablet:flex-col">
              <div className="w-[50%] tablet:w-full">
                <h2 className="text-5xl font-semibold tablet:text-[24px] mb-4">
                  Vision and Mission
                </h2>
                <div className="tablet:my-5 mb-4">
                  <h3 className="text-[26px] font-semibold opacity-40 tablet:text-[20px] mb-2">
                    MISSION
                  </h3>
                  <p className="text-[24px] text-[#2e2e2c] dark:text-white  text-justify tablet:text-[18px] mb-4">
                    &quot;To use State of the Art Infrastructure to provide
                    world-class solutions to our valued customers through highly
                    motivated talent and strategic alliances.&quot;{" "}
                  </p>
                </div>
                <div>
                  <h3 className=" text-[26px] font-semibold opacity-40 tablet:text-[20px] mb-2">
                    VISION
                  </h3>
                  <p className="text-[24px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[18px]">
                    &quot;To be the foremost integrated ICT solutions provider
                    in Africa.&quot;
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end w-[50%] tablet:w-full">
                <img
                  src="/logo/vision-mission.png"
                  className=""
                  height={734}
                  width={914}
                />
              </div>
            </div>
            <div className="relative flex sm:flex-row flex-col justify-center items-center mb-28 sm:px-0 px-8">
              <div className="">
                <div className="w-[640px] px-10 pr-30 py-20 bg-[#E7D2CD] dark:text-black rounded-2xl tablet:w-full tablet:pr-10 tablet:py-8">
                  <h2 className="text-[36px] font-semibold mb-10 tablet:text-[26px]">
                    The Network
                  </h2>
                  <p className="text-[20px] w-3/4 text-justify dark:text-black tablet:w-full tablet:text-[16px]">
                    21st Century Technologies has a world-class fibre optic
                    network in conjunction with Siemens AG, with extensive
                    coverage in the Lagos metropolis. The company&apos;s voice
                    network is powered by the EWSD switching platform, which is
                    used by 350 operators in over 150 countries. The company can
                    offer scalable bandwidth solutions up to 622 Mbps on its
                    metropolitan network.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/logo/network.png"
                  className="sm:-ml-16 -ml-0"
                  height={430}
                  width={530}
                />
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-[36px] font-semibold text-center mb-4">
              Core Values
            </h2>
            <div className="values_grid m-auto ">
              <div className="flex justify-center items-center tablet:my-5">
                <img
                  src="./icons/innovation.svg"
                  className=" w-50 pr-2 "
                  height={50}
                  width={50}
                />
                <p>Innovation</p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="./icons/partnership.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Partnership</p>
              </div>
              <div className="flex justify-center items-center tablet:my-5">
                <img
                  src="./icons/integrity.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Integrity</p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="./icons/inspiring.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Inspiring</p>
              </div>
              <div className="flex justify-center items-center tablet:my-5 sm:ml-0 ml-5">
                <img
                  src="./icons/commitment.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Commitment</p>
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

export default AboutUs;
