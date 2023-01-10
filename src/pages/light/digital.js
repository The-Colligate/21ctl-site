import React from 'react';
import Image from 'next/image';
import Head from 'next/head'
import { LightNavbar, Footer } from '@components/layout/';
import { ArrowRight } from '@icons/index';
import { Popover } from 'evergreen-ui';
import { links } from '../../components/constants/NavbarLinks';
import SiemensEnergy from '/public/logo/Siemens Energy.svg';
import SchneiderElectric from '/public/logo/Schneider Electric.svg';
import PCCWGlobal from '/public/logo/PCCW Global.svg';
import polygon from '/public/logo/Polygon.png';
import HeroImage from '/public/logo/hero-image.png';

import connectLogo from '/public/logo/connect21ctl.png';

import apapa from '/public/data-centers/apapa-center.png';
import ikeja from '/public/data-centers/ikeja-center.png';
import lekki from '/public/data-centers/lekki-center.png';

import fiveG from '/public/logo/5g main.svg';

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

const Digital = () => {
  return (
    <>
    <Head>
      <title>Digital Infrastructure - 21 CTL</title>
      <meta name="description" content="" />
    </Head>
    <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
      <div className="absolute w-full h-full flex justify-between items-center">
        <div className="w-full min-h-[50%] bg_gradient_l"></div>
        <div className="w-full min-h-[50%] bg_gradient_r"></div>
      </div>
      <div className="w-full min-h-screen flex flex-col z-[1]">
      <LightNavbar menuProp={links()}/>

        <section className="flex sm:px-36 px-8 my-16 items-center justify-between space-x-16 tablet:flex-col tablet:space-x-0 pt-28">
          <div className='max-w-3xl'>
            <h1 className="text-7xl tracking-normal font-lato font-medium whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
              <span className="text-primary-orange leading-8">Digital </span>
              Infrastructure
            </h1>
            <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
              We provide reliability, security, and high traffic handling for a
              seamless customer experience
            </p>
            {/* <button className="bg-primary-orange rounded-xl text-white py-2 px-6 my-6">
              Reach Us
            </button> */}
          </div>
          <div>
            <Image
              src={HeroImage}
              width={650}
              className="tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
            />
          </div>
        </section>

        <section className='sm:px-36 px-8 my-10'>
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

        <section className="flex flex-col sm:px-36 px-8">
          <h3 className="text-[#f64e1fbd] font-normal text-2xl my-6">
            Transcending the limits with our partners.
          </h3>
          <div className="flex justify-between mt-8 px-12 phone:px-0">
            <Image
              src={SiemensEnergy}
              className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
            />
            <Image
              src={SchneiderElectric}
              className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
            />
            <Image
              src={PCCWGlobal}
              className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
            />
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-10 space-y-0 my-52 largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">
            <div className="">
              <img
                src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1672774272/Group_339_ezalse.svg"
                className="max-w-3xl largeTablet:max-w-md smallPhone:max-w-xs"
              />
            </div>
            <div className="max-w-xl pr-8">
              <h1 className="text-5xl font-semibold tracking-medium mb-8">
                <span className="text-primary-orange">Connect</span> to all
                hyperscale Cloud providers
              </h1>
              <p className="leading-8 font-extralight text-xl">
                We have recently installed the 1st regional network gateway in
                Nigeria to support Direct Connectivity to major Data Centres
                around the globe in partnership with PCCW
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h1 className=" text-5xl font-bold tracking-wide">
              <span className="text-primary-orange">Data </span> Centers
            </h1>
            <p className="tracking-wider font-light text-lg py-4 max-w-3xl m-auto">
              Our data center is a secure and reliable infrastructure that
              stores, processes, and manages critical data and applications. It
              enables efficient communication, collaboration, and
              decision-making for businesses
            </p>
          </div>

          <div className="flex sm:flex-row flex-col justify-center sm:space-x-10 space-x-0 mt-5 px-5">
            <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
              <div className="p-5 text-black dark:text-black">
                <h3 className="text-3xl font-medium tracking-wide ">
                  Ikeja Data Center
                </h3>
                <p className="py-2 pt-4 tracking-wide text-lg font-light leading">
                Our Ikoyi data center is designed to be energy-efficient, maintainable, and secure, with redundant 8MW utility power.
                </p>
              </div>
              <Image src={ikeja} className="inline-block w-full fit" />
            </div>
            <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
              <div className="p-5 text-black dark:text-black">
                <h3 className="text-3xl font-medium tracking-wide ">
                  Ikoyi Data Center
                </h3>
                <p className="py-2 pt-4 tracking-wide text-lg font-light leading">
                Our six-story data center in Africa is innovative and equipped with a 10MW Turbine system, providing ample power and space for clients to grow.
                </p>
              </div>
              <Image src={lekki} className="inline-block w-full h-fit" />
            </div>
            <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
              <div className="p-5 text-black dark:text-black">
                <h3 className="text-3xl font-medium tracking-wide ">
                  Apapa Data Center
                </h3>
                <p className="py-2 pt-4 tracking-wide text-xl font-light leading">
                Our Apapa data center is a large, multi-tenant facility in Africa with multiple carrier and utility feeds and strong electrical and mechanical redundancy.
                </p>
              </div>
              <Image src={apapa} className="inline-block w-full h-fit" />
            </div>
          </div>
        </section>

        <section className="five-gr py-32 sm:mt-0 mt-32">
          <div className="max-w-6xl flex sm:flex-row flex-col w-full rounded-3xl items-center m-auto sm:h-full h-full bg-white ">
            <div className="px-5 sm:py-0 py-10 text-black dark:text-black">
              <h4 className="text-5xl font-semibold text-center">
                {' '}
                <span className="text-primary-orange">5G</span> Readiness
              </h4>
              <p className="text-xl font-light text-center pt-3">
                Our infrastructure with edge computing capabilities supports 5G
                technology and enables new user experiences, deployment models,
                and services.
              </p>
            </div>
            <div className="w-full h-full sm:px-0 px-5">
              <img
                src='https://res.cloudinary.com/dqsggbqmf/image/upload/v1673020843/Screenshot_2023-01-06_at_16.59.58_aphsxb.png'
                className="object-cover h-full w-full sm:rounded-tr-3xl rounded-md sm:rounded-br-3xl "
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

export default Digital;
