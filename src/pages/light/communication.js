import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import { links } from '../../components/constants/NavbarLinks';
import Satalite from '/public/logo/satalite.png';
import Orange from '/public/logo/orange.png';
import MTN from '/public/logo/MTN.png';
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
        <div className="w-full min-h-screen flex flex-col z-[1]">
        <LightNavbar />

          {/* <section className="main-page flex sm:px-36  my-16 items-center h-1/3 justify-between space-x-16 tablet:flex-col-reverse tablet:pt-10  tablet:space-x-0">
            <div className="flex justify-start items-start">
              <Image
                src={Satalite}
                width={743}
                className="tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
              />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-7xl tracking-normal font-lato font-bold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                <span className="text-primary-orange leading-8">
                Digital Platform
                </span>
              </h1>
              <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                We prioritize effective communication to ensure that all of our
                clients and employees are heard and understood.
              </p>
            </div>
          </section> */}

           {/* top-section */}
           <section className="comm-top-section h-[80vh] px-8 ">
            <div className="flex flex-col items-center justify-center w-full h-full leading-10">
              <h1 className="font-extrabold sm:text-6xl text-4xl text-white text-center">
               Communication
              </h1>
              <p className="sm:text-2xl text-xl mt-4 text-white text-center">
              We prioritize effective communication to ensure that all of our
                clients and employees are heard and understood.
              </p>
            </div>
          </section>

         
          <section className="internet-section sm:mb-0 mb-16">
            <div className="flex sm:flex-row flex-col sm:px-36 px-8 my-16 sm:space-x-16 space-x-0 items-center justify-between">
              <div className="flex flex-1 items-start  justify-start">
                <img src="/logo/communication-bg.png" className="w-[600px]" />
              </div>
              <div className="flex-1 max-w-xl">
                <h1 className="text-5xl tracking-normal font-lato font-semibold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                  <span className="text-primary-orange leading-8">
                    Unleash{' '}
                  </span>
                  the full Internet potential with our{' '}
                  <span className="text-primary-orange leading-8">
                    broadband
                  </span>
                </h1>
                <p className="text-xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                  We offer a range of broadband solutions that can help you
                  unleash the full potential of the Internet and take your
                  business or personal endeavors to the next level.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-32">
            <div className="m-20  flex items-center overflow-x-hidden justify-center rounded  tablet:m-5">
              <div className="cableCard  rounded relative flex justify-center  phone:h-[220px]">
               
                <div className="pl-10 w-2/4 absolute left-0 flex flex-col h-full justify-center  tablet:w-full">
                  <h1 className="text-5xl font-semibold tablet:text-2xl tracking-medium mb-8 text-white tablet:mb-2">
                    <span className="text-primary-orange">Optimized </span>
                    Options from Edge to Center
                  </h1>
                  <p className="leading-8 text-xl text-white tablet:text-xs">
                    We provide fast, reliable, and secure transmission of data
                    and our company offers a range of fiber optic products and
                    services to meet the diverse needs of our customers.
                  </p>
                </div>
                <div>
                  <img
                    src="/logo/communication-bg1.png"
                    className=''
                    />
                </div>
              </div>
            </div>
          </section>

          <section className='my-32 sm:px-28 px-8'>
            <div className="flex sm:flex-row flex-col-reverse items-center sm:space-x-16 space-x-0">
              <div className="flex-1 sm:mt-0 mt-8">
                <h1 className="sm:text-5xl text-3xl font-bold tracking-medium sm:mb-8 mb-2">
                  <span className="text-primary-orange">Connecting </span>the
                  world from above
                </h1>
                <p className="leading-8 font-normal text-xl">
                  Our satellite solutions offer reliable coverage and
                  high-quality services using the latest technologies and
                  partnerships with leading operators.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="logo/communication-bg3.png"
                  className=""
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

export default Communication;
