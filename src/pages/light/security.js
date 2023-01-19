import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import { motion } from 'framer-motion';
import { leftTransitionVarient, rightTansitionVarient } from '@components/constants/animations';


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

          <section className=" sm:px-36  my-5">
            {/* <div className="flex items-center h-full">
              <div className="max-w-3xl">
                <h1 className="text-7xl font-bold tracking-normal font-lato text-white whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                
                  <span className="text-primary-orange leading-8">Elevate</span> Your Business{"'"}s Cybersecurity
                </h1>
                <p className="text-2xl text-white opacity-60 mt-6 largeTablet:text-xl smallTablet:text-lg">
                Stay protected in the digital world with our cutting-edge cybersecurity solutions
                </p>
                <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                Reach Us
              </button>
              </div>
  </div> */}
            <div className='flex px-22  my-0 items-center justify-between space-x-16 tablet:px-10 tablet:flex-col tablet:space-x-0 pt-28'>
            <motion.div
              variants={leftTransitionVarient}
              animate="visible"
              initial="hidden"
               
              
              className='w-full'>
                <h1 className="text-7xl font-bold tracking-normal font-lato text-black dark:text-white whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">

                  <span className="text-primary-orange leading-8">Elevate</span> Your Business{"'"}s Cybersecurity
                </h1>
                <p className="text-2xl text-black dark:text-white opacity-60 mt-6 largeTablet:text-xl smallTablet:text-lg">
                  Stay protected in the digital world with our cutting-edge cybersecurity solutions
                </p>
                <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                  Reach Us
                </button>
              </motion.div>
              <motion.div
              variants={rightTansitionVarient}
              animate="visible"
              initial="hidden" className='w-[100%]'>
                <Image
                  src='/logo/security.svg'
                  width={2000}
                  height={2000}
                  className=" tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                />
              </motion.div>

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


          <section className="sm:mb-0 mb-16 py-20 px-10">
            <div className="flex items-center space-x-10 space-y-0  tablet:flex-col-reverse">
              <div className="flex-1">
                <img
                  src="/logo/public-key.png"
                  className="rounded-2xl"
                />
              </div>
              <div className="flex-1 mb-5">
                <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                  <span className="text-primary-orange">21st Century</span>{' '}
                  Public Key Infrastructure
                </h1>

                <p className="leading-8 text-xl max-w-md">
                  PKI technology is used as the foundation for access control systems in the proliferation of devices and cloud services, and we provide PKI products and services with a focus on security
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className=" flex items-center overflow-x-hidden justify-around rounded tablet:flex-col  tablet:m-5">
              {/* <div className="cableCard  rounded relative flex justify-center  phone:h-[220px]"> */}

              <div className="pl-10 w-2/5  flex flex-col h-full justify-center  tablet:w-full">
                <h1 className="text-5xl font-semibold tablet:text-2xl tracking-medium mb-8  tablet:mb-2">
                  <span className="text-primary-orange">Endpoint </span>
                  Threat Protection
                </h1>
                <p className="leading-8 text-xl  tablet:text-lg">
                  Stay protected against cyber threats with 21st Century{"'"}s integrated threat prevention, firewall, web, email, and device control defenses.
                </p>
                <button className="bg-primary-orange w-32 rounded-xl font-semibold text-white py-3 px-6 my-6">
                  Reach Us
                </button>    </div>
              <div>
                <img
                  src="/logo/threat-protection.png"
                  className='rounded-2xl'
                />
              </div>
              {/* </div> */}
            </div>
          </section>

          <section className="px-20 mt-20 vision-mission-section tablet:px-10">
            <div className=" mr-0 flex justify-around items-center  tablet:m-10 tablet:flex-col">
              <div className="w-2/5 tablet:w-full">

                <div className="tablet:my-5 mb-4">
                  <h1 className="text-5xl font-semibold tablet:text-2xl tracking-medium mb-8  tablet:mb-2">
                    <span className="text-primary-orange">DDoS </span>
                    Protection
                  </h1>
                  <p className="text-[18px] text-[#2e2e2c] dark:text-white  text-justify tablet:text-[18px] mb-4">
                    Our platform provides comprehensive protection against rising frequency and strength of DDoS attacks, protecting brands, customers and earning potential, and ensuring availability through a global network that prevents downtime and protects apps.
                  </p>
                  <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                    Read more
                  </button>
                </div>

              </div>

              <div className="flex items-center justify-end w-[50%] tablet:w-full">
                <Image
                  src="/logo/ddos-protection.png"
                  className=""
                  height={581}
                  width={444}
                />
              </div>
            </div>
            <div className=" mr-0 mt-20 flex justify-center items-center  tablet:m-10  tablet:flex-col-reverse">
              <div className="flex items-center  w-[50%] tablet:w-full">
                <Image
                  src="/logo/security-towers.png"
                  className=""
                  height={581}
                  width={444}
                />
              </div>
              <div className="w-[40%] tablet:w-full">

                <div className="tablet:my-5 mb-4">
                  <h1 className="text-4xl font-semibold tablet:text-2xl tracking-medium mb-8  tablet:mb-2">
                    <span className="text-primary-orange">Managed Security Operations Center Services </span>

                  </h1>
                  <p className="text-[18px] text-[#2e2e2c] dark:text-white  text-justify tablet:text-[18px] mb-4">
                    21CTL Managed SOC Services offers real-time threat intelligence, data processing and incident response for cost-effective enterprise security
                  </p>
                  <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                    Read more
                  </button>
                </div>

              </div>


            </div>
          </section>
          <section className="mx-20 my-20 tablet:mx-10 tablet:my-10">
            <div className=" mr-0 flex justify-between items-center  tablet:m-10 tablet:flex-col">
              <div className="w-[50%] tablet:w-full">

                <div className="tablet:my-5 mb-4">
                  <h1 className="text-5xl font-semibold tablet:text-2xl tracking-medium mb-8  tablet:mb-2 ">
                    <span className="text-primary-orange">SmartBackup </span>

                  </h1>
                  <p className="text-[18px] text-[#2e2e2c] dark:text-white  text-justify tablet:text-[18px] mb-4">
                    SmartBackup is an automated configuration backup solution that schedules automatic backups, monitors them from a dashboard interface, performs automatic network configuration backup procedures, verifies that they{"'"}ve been completed correctly, and provides easy management of devices for compliance.
                  </p>
                  <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                    Read more
                  </button>
                </div>

              </div>

              <div className="flex items-center justify-end w-[50%] tablet:w-full">
                <Image
                  src="/logo/smartbackup.png"
                  className=""
                  height={581}
                  width={444}
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

export default Security;
