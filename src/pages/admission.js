import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import { motion } from 'framer-motion';
import {
  leftTransitionVarient,
  rightTansitionVarient,
} from '@components/constants/animations';
import CountUp from 'react-countup';

const Academy = () => {
  const courses = [
    'Electrical design and installation',
    'Power management and distribution',
    'Building management systems and energy efficiency',
    'Automation and control systems',
    'Programming and configuration of Schneider Electric products, such as PLCs,  VFDs, and HMIs',
    'Cybersecurity for industrial systems',
    'Industry-specific applications, such as data centers (renewable energy, and critical power systems)',
    'Safety and compliance',
    // 'Database',
  ];
  const [video1, setVideo1] = useState(false);

  return (
    <>
      <Head>
        <title>Admission - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[0]">
          <LightNavbar />

          <section className=" dark:bg-[#565048] sm:px-28 px-8 my-16 sm:py-0 pt-16">
            <div className="flex sm:flex-row flex-col sm:space-x-16 space-x-0 items-center">
              <motion.div
                variants={leftTransitionVarient}
                animate="visible"
                initial="hidden"
                className="flex-1 pt-20"
              >
                <h1 className="text-5xl tracking-normal capitalize font-bold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                  <span className="text-primary-orange leading-8">
                    Admission{' '}
                  </span>
                  and{' '}
                  <span className="text-primary-orange leading-8">
                    Eligibility
                  </span>{' '}
                  Requirements
                </h1>
                <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                  Our Admission process starts with a simple process of online
                  registration, confirmation and application. Applicants are
                  required to fill the form correctly by supplying the correct
                  details into the choice of program and specialization.
                </p>
                <a
                  href="https://21ctl-biodata.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-primary-orange rounded text-white py-3 px-6 my-6">
                    Apply now
                  </button>
                </a>
                {/* <button onClick={() => setVideo1(true)} className="border border-primary-orange rounded text-primary-orange py-3 px-6 my-6 hover:bg-primary-orange hover:text-white">
                  <span className="capitalize">see our training facilities</span>
                </button> */}
              </motion.div>
              <motion.div
                variants={rightTansitionVarient}
                animate="visible"
                initial="hidden"
                className="flex justify-end w-full flex-1 "
              >
                <Image
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675073326/21ctl/Group_56023_d43azv.svg"
                  width={459}
                  height={450}
                  className="pt-20 tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                />
              </motion.div>
            </div>
          </section>

          <section className="sm:px-28 px-8 py-20">
            <div className="flex sm:flex-row flex-col items-center  sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div>
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675074995/21ctl/Group_56024_j0h0qz.svg"
                  className="w-3/4 h-3/4 dark:hidden "
                  alt="communication"
                />
              </div>
              <div className="max-w-3xl">
                <h2 className="font-bold  sm:text-5xl text-2xl">
                 <span className="text-primary-orange">Eligibility</span> Criteria
                </h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-white">
                To be Considered for a Admission, you must
                  <ul className="list-disc mt-4 pl-4 space-y-1">
                    <li className="font-light">Recent graduates looking to start a career in the IT field </li>
                    <li className="font-light">Companies or organizations looking to train their employees in specific IT skills or technologies</li>
                    <li className="font-light">Experienced IT professionals seeking to expand their skills and knowledge</li>
                    <li className="font-light">
                    Individuals looking to make a career change into the IT field 
                    </li>
                    <li className="font-light">Trainees interested in pursuing a specific area of study within the IT field, such as data science or cybersecurity</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>

          <section className="sm:px-28 px-8 py-20">
            <div className="mt-20">
              <h3 className="font-bold sm:text-5xl text-2xl text-primary-orange text-center leading-8">
              Timeline
              </h3>
            </div>
            <div className="mt-4">
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675077984/21ctl/Group_56027_bceb1n.svg" alt="admission processes" />
            </div>
          </section>

          <Footer />
        </div>

        <SocialIcons />
      </div>
    </>
  );
};

export default Academy;
