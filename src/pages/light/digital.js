import React from 'react';
import Image from 'next/image';
import Head from 'next/head'
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import { motion } from 'framer-motion';
import { buttonVarient, leftTransitionVarient, rightTansitionVarient } from '@components/constants/animations';
// import HeroImage from '/public/logo/hero-image.png';
import CountUp from 'react-countup';


// import apapa from '/public/data-centers/apapa-center.png';
// import ikeja from '/public/data-centers/ikeja-center.png';
// import lekki from '/public/data-centers/lekki-center.png';
// import sakat from '/public/data-centers/sakatinubu.jpeg';
// import alanamu from '/public/data-centers/alanamu.png';


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
          <LightNavbar />

          <section className="flex sm:px-36 px-8 my-6 items-center justify-between space-x-16 tablet:flex-col tablet:space-x-0 pt-28">
            <motion.div
              variants={leftTransitionVarient}
              animate="visible"
              initial="hidden" className='max-w-3xl'>
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
            </motion.div>
            <motion.div
              variants={rightTansitionVarient}
              animate="visible"
              initial="hidden" >
              <img
                src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058147/21ctl/logo/hero-image_abp6dp.png"
                width={650}
                height={650}
                className="tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
              />
            </motion.div>
          </section>

          <section className='sm:px-36 px-8 mt-5 mb-20 phone:mb-5'>
            <div className="flex flex-col items-center">
              <div className="text-lg font-semibold pb-5 tablet:text-center phone:text-sm">
                Our statistics reveal more about us.
              </div>
              <div className="figures flex sm:flex-row flex-col sm:space-x-8 space-x-0">
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    <CountUp
                      start={0}
                      end={1000}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                    {/* 200+ */}
                  </p>
                  <span className="font-light">Business Supported</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
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
                  <p className="text-primary-orange text-4xl font-semibold">
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
                  <p className="text-primary-orange text-4xl font-semibold">
                    {/* 100+ */}
                    <CountUp
                      start={0}
                      end={100}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                  </p>
                  <span className="font-light">Mega Projects Completed </span>
                </div>
              </div>
            </div>
          </section>


          {/* <section>
            <div className="flex items-center space-x-10 space-y-0 my-32 tablet:mx-5  largeTablet:flex-col-reverse largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">
              <div className="">
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1672774272/Group_339_ezalse.svg"
                  className="max-w-3xl largeTablet:max-w-md smallPhone:max-w-xs"
                />
              </div>
              <div className="max-w-xl pr-8 mx-10 tablet:pr-0">
                <h1 className="text-5xl font-semibold tracking-medium mb-8 tablet:text-4xl">
                  <span className="text-primary-orange">Connect</span> to all
                  hyperscale Cloud providers
                </h1>
                <p className="leading-8 text-xl">
                  We have recently installed the 1st regional network gateway in
                  Nigeria to support Direct Connectivity to major Data Centres
                  around the globe in partnership with PCCW
                </p>
              </div>
            </div>
          </section> */}
                              <section className='cloud-services mx-20 my-10 phone:mb-0 relative tablet:mx-10'>
                        <div className='w-2/5 mb-20 phone:w-full tablet:mb-5 tablet:w-full'>
                            <p className='text-[#319FD9] font-[14px]'>{"Regional Network Gateway Nigeria".toUpperCase()}</p>
                            <p className='font-bold text-[35px] tablet:text-[25px] '>Connect to every<br /> Hyperscale Cloud Provider</p>
                            <p className='text-[16px]'>We have recently installed the 1st regional network gateway in Nigeria to support direct connectivity to major Data Centres around the globe in partnership with PCCW.</p>
                            {/* <button className="bg-[#319FD9] rounded-xl  text-white py-2 px-6 my-6">
                                Get Started
                            </button> */}
                        </div>
                        <div className='services flex mx-10 flex-col phone:text-center phone:mx-0 '>
                            <div className='number-1  bg-white dark:bg-black p-10  my-5 rounded-lg phone:p-5'>
                                <h3 className='font-extrabold'>5G Readiness</h3>
                                <p>Infrastructure with edge computing capabilities to support 5th generation technology standards</p>
                            </div>
                            <div className='number-1  bg-white dark:bg-black p-10 my-5 rounded-lg  phone:p-5'>
                                <h3 className='font-extrabold'>Data Centers</h3>
                                <p>His defective nor convinced residence own. Connection has put impossible own apartments boisterous.</p>
                            </div>
                            <div className='number-1  mx-auto bg-white dark:bg-black p-10 my-5 rounded-lg  phone:p-5'>
                                <h3 className='font-extrabold'>Towers</h3>
                                <p>Wide range communication infrastructure and managed service to enable wireless connectivity connecting people, devices and networks.</p>
                            </div>
                        </div>
                    </section>
                    <div className='flex justify-center items-center mx-20 my-10 phone:my-5 phone:mx-10'>
                            <img
                                src='https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058149/21ctl/icons/potential-partners_kd9w9q.png'
                               
                                className="w-2/3 tablet:w-full"

                            />
                        </div>

          <section>
            <div className="text-center mx-10 tablet:mx-0">
              {/* <h1 className=" text-5xl font-bold tracking-wide tablet:text-4xl">
                <span className="text-primary-orange">Data </span> Centers
              </h1> */}
              <div className='flex flex-col justify-center items-center text-center w-3/4 mx-auto tablet:mx-10 phone:w-3/3'>
                            <h2 className='text-[42px] text-primary-orange my-4 tablet:text-[16px]'>21st century is a Digital professional service Infrastructure company with 25 years experience </h2>
                            <p className='text-[16px] tablet:text-[12px]'>Combine our capabilities with data Center operational knowledge, within a critical environment, connecting our customers. Our proven track record in delivering value to the customer. Providing sustainable solutions for today and tomorrow.</p>
                        </div>
              {/* <p className="tracking-wider  text-lg py-4 max-w-3xl m-auto">
                Our data center is a secure and reliable infrastructure that
                stores, processes, and manages critical data and applications. It
                enables efficient communication, collaboration, and
                decision-making for businesses
              </p> */}
            </div>

            <div className="data_center_grid mt-5 px-28 tablet:px-10">
              <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
                <div className="p-5 text-black dark:text-black">
                  <h3 className="text-3xl font-medium tracking-wide ">
                    <span className="text-primary-orange">Ikeja </span> Data Center

                  </h3>
                  <p className="py-2 pt-4 tracking-wide text-lg leading text-justify">
                    Our Ikoyi data center is designed to be energy-efficient, maintainable, and secure, with redundant 8MW utility power.
                  </p>
                </div>
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058120/21ctl/data-centers/ikeja-center_ahvecs.png" className="inline-block w-full fit"  width={100} height={100} />
              </div>
              <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
                <div className="p-5 text-black dark:text-black">
                  <h3 className="text-3xl font-medium tracking-wide ">
                    <span className="text-primary-orange">Ikoyi </span> Data Center

                  </h3>
                  <p className="py-2 pt-4 tracking-wide text-lg leading  text-justify">
                    Our six-story data center in Africa is innovative and equipped with a 10MW Turbine system, providing ample power and space for clients to grow.
                  </p>
                </div>
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058121/21ctl/data-centers/lekki-center_ctedxo.png" className="inline-block w-full h-fit"  width={100} height={100} />
              </div>
              <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
                <div className="p-5 text-black dark:text-black">
                  <h3 className="text-3xl font-medium tracking-wide ">
                    <span className="text-primary-orange">Apapa </span>  Data Center

                  </h3>
                  <p className="py-2 pt-4 tracking-wide text-lg leading  text-justify">
                    Our Apapa data center is a large, multi-tenant facility in Africa with multiple carrier and utility feeds and strong electrical and mechanical redundancy.
                  </p>
                </div>
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058119/21ctl/data-centers/apapa-center_mmq3so.png" className="inline-block w-full h-fit"  width={100} height={100} />
              </div>
              <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
                <div className="p-5 text-black dark:text-black">
                  <h3 className="text-3xl font-medium tracking-wide ">
                    <span className="text-primary-orange">Saka-Tinubu </span>  Data Center

                  </h3>
                  <p className="py-2 pt-4 tracking-wide text-lg leading  text-justify">
                    Our Saka-Tinubu data center is a large, multi-tenant facility in Africa with multiple carrier and utility feeds and strong electrical and mechanical redundancy.
                  </p>
                </div>
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058122/21ctl/data-centers/sakatinubu_v5tjln.jpg" className="inline-block w-full h-fit"  width={100} height={100} />
              </div>
              <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
                <div className="p-5 text-black dark:text-black">
                  <h3 className="text-3xl font-medium tracking-wide ">
                    <span className="text-primary-orange">Alanamu </span>  Data Center

                  </h3>
                  <p className="py-2 pt-4 tracking-wide text-lg leading  text-justify ">
                    Our Alanamu data center is a large, multi-tenant facility in Africa with multiple carrier and utility feeds and strong electrical and mechanical redundancy.
                  </p>
                </div>
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058118/21ctl/data-centers/alanamu_ldhtn9.png" width={100} height={100} className="inline-block w-full h-fit rounded-br-2xl rounded-bl-2xl" />
              </div>

            </div>
          </section>

          <section 
           >
            <div className='flex justify-between items-center ml-20 tablet:ml-10 tablet:flex-col tablet:justify-center tablet:py-10'
            >
              <div 
          
               >
                <h4 
                className="text-5xl font-semibold text-left tablet:text-3xl">
                  {' '}
                  <span className="text-primary-orange">5G</span> Readiness
                </h4>
                <p className="text-2xl text-left pt-3 phone:text-sm w-2/3 tablet:w-full ">
                  Our infrastructure with edge computing capabilities supports 5G
                  technology and enables new user experiences, deployment models,
                  and services.
                </p>
              </div>
              <div className="flex sm:justify-start justify-center w-full h-full sm:px-0 px-5">
                <img
                 
                 src='https://res.cloudinary.com/dqsggbqmf/image/upload/v1675161977/21ctl/logo/5G_tower_gt0ilf.svg'
                 
                  className=" w-full sm:rounded-tr-3xl rounded-md sm:rounded-br-3xl "
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

export default Digital;
