import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LightNavbar, Footer } from '@components/layout/';

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

          <section className="about-us sm:px-36 px-8 my-16  bg-[linear-gradient(180deg, rgba(0, 0, 0, 0.25) 21.4%, #E5E1DB 100%)]">
            <div className="flex items-center justify-center h-full">
              <div className="max-w-3xl">
                <h1 className="text-7xl font-bold tracking-normal text-center font-lato text-white whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                  About{' '}
                  <span className="text-primary-orange leading-8">Us </span>
                </h1>
                <p className="text-2xl text-white text-center mt-6 largeTablet:text-xl smallTablet:text-lg">
                  We provide reliability, security, and high traffic handling
                  for a seamless customer experience
                </p>
              </div>
            </div>
          </section>

          <section className="sm:px-36 px-8 my-10">
            <div className="flex sm:flex-row flex-col justify-between sm:space-x-40 space-x-0 ">
              <div className="text-2xl pb-5">
                Our statistics reveal <br /> more about us.
              </div>
              <div className="figures flex sm:flex-row flex-col sm:space-x-8 space-x-0">
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    200+
                  </p>
                  <span className="font-light">Business Supported</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    25+
                  </p>
                  <span className="font-light">Years Experience</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    14M+
                  </p>
                  <span className="font-light">Satisfied Customers</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    100+
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
                    motivated talent and strategic alliances.&quot;{' '}
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
                <Image
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
                <Image
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
                <Image
                  src="./icons/innovation.svg"
                  className=" w-50 pr-2 "
                  height={50}
                  width={50}
                />
                <p>Innovation</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="./icons/partnership.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Partnership</p>
              </div>
              <div className="flex justify-center items-center tablet:my-5">
                <Image
                  src="./icons/integrity.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Integrity</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="./icons/inspiring.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Inspiring</p>
              </div>
              <div className="flex justify-center items-center tablet:my-5 sm:ml-0 ml-5">
                <Image
                  src="./icons/commitment.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Commitment</p>
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
        <div className="flex flex-col fixed z-[1] p-2 right-0 space-y-4 top-1/3 rounded-r bg-white tablet:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="Black"
            className="bi bi-whatsapp cursor-pointer w-6"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          <img className="cursor-pointer w-6" src="/icons/home/instagram.svg" />
          <img className="cursor-pointer w-6" src="/icons/home/phone.svg" />
          <img className="cursor-pointer w-6" src="/icons/home/linkedin.svg" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
