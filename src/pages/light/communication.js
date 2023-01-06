import React from 'react';
import Image from 'next/image';
import Head from 'next/head'
import { LightNavbar, Footer } from '@components/layout/';

import Satalite from '/public/logo/satalite.png';
import Orange from '/public/logo/orange.png';
import MTN from '/public/logo/mtn.png';
import GLO from '/public/logo/glo.png';
import nineMobile from '/public/logo/9mobile.png';
import Airtel from '/public/logo/airtel.png';


const Communication = () => {
  return (
    <>
      <Head>
        <title>Communication - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-screen min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen overflow-y-auto flex flex-col z-[1]">
          <LightNavbar />

          <section className="main-page flex sm:px-36 px-8 my-16 items-center h-1/3 justify-between space-x-16 tablet:flex-col-reverse tablet:pt-10  tablet:space-x-0">

            <div className="flex items-center justify-center">
              <Image
                src={Satalite}
                width={650}
                className="tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
              />
            </div>
            <div className='max-w-3xl'>
              <h1 className="text-7xl tracking-normal font-lato font-medium whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                <span className="text-primary-orange leading-8">Communication</span>

              </h1>
              <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                We prioritize effective communication to ensure that all of our clients and employees are heard and understood.
              </p>
              <button className="bg-primary-orange rounded-xl text-white py-2 px-6 my-6">
                Get Started
              </button>
            </div>
          </section>


          <section className="flex flex-col sm:px-36 px-8">
            <h3 className="text-[#f64e1fbd] font-normal text-2xl my-6">
              Transcending the limits with our partners.
            </h3>
            <marquee behavior="scroll" direction="left">
            <div className="flex justify-between mt-8 px-12 phone:px-0">
              <Image
                src={Orange}
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16 tablet:mr-5"
                width={140}
              />
              <Image
                src={MTN}
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16  tablet:mr-5"
                width={140}

              />
              <Image
                src={GLO}
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16  tablet:mr-5"
              />
              <Image
                src={Airtel}
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16  tablet:mr-5"
              />
              <Image
                src={nineMobile}
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16  tablet:mr-5"
              />
            </div>
            </marquee>
          </section>
          <section>
            <div className="m-20  flex items-center overflow-x-hidden justify-center rounded  tablet:m-5">
              <div className="cableCard  h-[590px] rounded  flex flex-col justify-center  phone:h-[220px]">
                <div className="pl-10 w-2/4  tablet:w-full">
                  <h1 className="text-5xl font-semibold tablet:text-2xl tracking-medium mb-8 text-white tablet:mb-2">
                    <span className="text-primary-orange">Optimized </span>Options from Edge to Center
                  </h1>
                  <p className="leading-8 font-extralight text-xl text-white tablet:text-xs">
                    We provide fast, reliable, and secure transmission of data and our company offers a range of fiber optic products and services to meet the diverse needs of our customers.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="internet-section flex sm:px-36 px-8 my-16 items-center  h-1/3 justify-between space-x-16 tablet:flex-col tablet:flex-col-reverse tablet:space-x-0 tablet:my-0">

            <div className="flex items-start w-2/5 justify-start tablet:w-4/5">
              <Image
                src="/logo/communication-bg.png"
                width={650}
                height={400}
                className="tablet:w-96  tablet:space-x-0 phone:w-64 phone:space-x-0"
              />
            </div>
            <div className='max-w-xl'>
              <h1 className="text-5xl tracking-normal font-lato font-semibold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                <span className="text-primary-orange leading-8">Unleash </span>
                 the full Internet potential with our <span className="text-primary-orange leading-8">broadband</span>
              </h1>
              <p className="text-xl mt-6 largeTablet:text-xl smallTablet:text-lg">
              We offer a range of broadband solutions that can help you unleash the full potential of the Internet and take your business or personal endeavors to the next level.
              </p>
              
            </div>
          </section>
          <section>
            <div className="flex items-center space-x-10 space-y-0 my-52 largeTablet:flex-col overflow-x-hidden largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0 tablet:my-10">

              <div className="max-w-xl ml-20 tablet:ml-0 tablet:mx-10 tablet:flex tablet:flex-col tablet:items-center tablet:text-center tablet-justify-center ">
                <h1 className="text-4xl font-semibold tracking-medium mb-8">
                  <span className="text-primary-orange">Connecting </span>the world from above
                </h1>
                <p className="leading-8 font-extralight text-xl">
                  Our satellite solutions offer reliable coverage and high-quality services using the latest technologies and partnerships with leading operators.
                </p>
              </div>
              <div className="">
                <img
                  src="logo/communication-bg3.png"
                  className="max-w-3xl largeTablet:max-w-md smallPhone:max-w-xs"
                />
              </div>
            </div>
          </section>


          <Footer />
        </div>
      </div>
    </>
  );
};

export default Communication;
