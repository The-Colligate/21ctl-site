import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LightNavbar, Footer } from '@components/layout/';
import { links } from '../../components/constants/NavbarLinks';
import Satalite from '/public/logo/satalite.png';
import Orange from '/public/logo/orange.png';
import MTN from '/public/logo/MTN.png';
import GLO from '/public/logo/glo.png';
import nineMobile from '/public/logo/9mobile.png';
import Airtel from '/public/logo/airtel.png';

const DigitalPlatform = () => {
  return (
    <>
      <Head>
        <title>Digital Platform - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-screen min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[1]">
        <LightNavbar />

          <section className="main-page flex sm:px-36 px-8 my-16 items-center h-1/3 justify-between space-x-16 tablet:flex-col-reverse tablet:pt-10  tablet:space-x-0">
            <div className="flex items-center justify-center">
              <Image
                src={Satalite}
                width={1250}
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
              {/* <button className="bg-primary-orange rounded-xl text-white py-2 px-6 my-6">
                Get Started
              </button> */}
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

export default DigitalPlatform;
