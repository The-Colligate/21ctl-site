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
import dynamic from 'next/dynamic';
import Video from '../../components/Video'
// const Video = dynamic(() => import('../../components/Video'));

const src1 =
  'https://res.cloudinary.com/dqsggbqmf/video/upload/v1675030374/Digital%20Expert%20Academy%20Video/Digital_Expert_Academy-1_wptior.mp4';

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
        <title>Academy - 21 CTL</title>
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
                className="flex-1"
              >
                <h1 className="text-6xl tracking-normal capitalize font-bold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                  <span className="text-primary-orange leading-8">Unlock </span>
                  Your potential with our{' '}
                  <span className="text-primary-orange leading-8">
                    Academy.
                  </span>
                </h1>
                <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                  Our top-rated academy offers expert-led courses to help you
                  unlock your potential and advance your career.
                </p>
                {/* <a
                  href="https://21ctl-biodata.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-primary-orange rounded text-white py-3 px-6 my-6">
                    Apply now
                  </button>
                </a> */}
                <button onClick={() => setVideo1(true)} className="border border-primary-orange rounded text-primary-orange py-3 px-6 my-6 hover:bg-primary-orange hover:text-white">
                  <span className="capitalize">see our training facilities</span>
                </button>
              </motion.div>
              <motion.div
                variants={rightTansitionVarient}
                animate="visible"
                initial="hidden"
                className="flex-1"
              >
                <Image
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058120/21ctl/logo/student_qg1xrf.png"
                  width={459}
                  height={450}
                  className="pt-20 tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                />
              </motion.div>
            </div>
          </section>
          <div className="z-50">

            {video1 && (
              <Video
                modalIsOpen={video1}
                closeModal={() => setVideo1(false)}
                video_src={src1}
              />
            )}
          </div>
          <section className="z-10">
            <div className=" flex justify-center items-center mx-20 w-full tablet:mx-0 sm:px-0 px-5 tablet:flex-col">
              <div className="w-2/3 tablet:w-full">
                <p className="sm:text-5xl text-xl font-bold">
                  In the last{' '}
                  <span className="text-primary-orange">25 years</span>, we have
                  been <span className="text-primary-orange">investing</span> in
                  compelling{' '}
                  <span className="text-primary-orange">Digital</span>{' '}
                  Infrastructure in five{' '}
                  <span className="text-primary-orange">key areas</span>:
                </p>
                <ul className="list-disc ml-5 mt-4 sm:text-[24px] text-base ">
                  <li>
                    Technology: As we all know poverty is a bigger indicator of
                    lack of access to Technologies than geography.
                  </li>
                  <li>Power: Renewable energy / Turbine power plant</li>
                  <li>Payment.</li>
                  <li>Security</li>
                  <li>People.</li>
                </ul>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058158/21ctl/logo/21ctl-infographics_jiaas4.png" className="w-2/3" />
              </div>
            </div>
          </section>

          {/* <section className='mx-20 my-20  w-full tablet:mx-10'>
          <img src='/logo/people-info.svg' className='relative ' />
            <div className='absolute flex justify-center items-center w-full h-full'>
              <p className=' '> </p>
            </div>
           
          </section> */}
          <div class="relative w-full flex flex-col justify-center items-center">
        <img src='https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058180/21ctl/logo/people-info_k35pf5.svg' className='flex justify-center items-center' />
        <h1 class="absolute text-5xl font-bold text-center w-2/5 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tablet:w-3/5 tablet:text-xl">
        we provide world-class services to the top 1000 companies in Nigeria and key residential areas.</h1>
    </div>

          {/* <section className='flex flex-col justify-center items-center w-full'>
            <div className='font-bold sm:text-5xl text-3xl text-center'>
              <h4>The <span className="text-primary-orange">7 Pillars</span> of Digital Training Center <br /> Model</h4>
            </div>
            <div className='w-full flex justify-center items-center ml-20'>
              <img src='/logo/academy-importance.svg' className=' w-2/4' />
            </div>
          </section> */}

          <section className="sm:px-36 px-8 my-20">
            <div className="flex flex-col items-center">
              <div className="text-lg font-semibold pb-5">
                Our statistics reveal more about us.
              </div>
              <div className="figures flex sm:flex-row flex-row sm:space-x-8 space-x-0 space-y-0 sm:space-y-0  w-full justify-around items-center">
                <div className="text-center">
                  <p className="text-primary-orange text-[40px] font-semibold">
                    {/* 50+ */}
                    <CountUp
                      start={0}
                      end={450}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                  </p>
                  <span className="">Total Courses</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-[40px] font-semibold">
                    {/* 100+ */}
                    <CountUp
                      start={0}
                      end={250}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                  </p>
                  <span className="">Industry Mentors</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-[40px] font-semibold">
                    {/* 5k+ */}
                    <CountUp
                      start={0}
                      end={250}
                      duration={2.75}
                      prefix=""
                      suffix="k+"
                    />
                  </p>
                  <span className="">Students</span>
                </div>
              </div>
            </div>
          </section>

          <section className="text-3xl  w-full flex flex-col justify-between items-center">
            <h4 className="font-bold">
              {' '}
              Skill <span className="text-primary-orange">Gap</span>
            </h4>
            <div className="flex justify-between items-center tablet:flex-col  ">
              <div className="text-primary-orange w-full flex flex-col justify-between items-center tablet:my-10">
                <CountUp
                  start={0}
                  end={41}
                  duration={2.75}
                  prefix=""
                  suffix="%"
                  className="font-extrabold"
                />
                <hr />
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058149/21ctl/logo/people-33_rbql12.svg" className="w-2/4" />
                <p className="p-5 bg-primary-orange text-white text-[18px] w-[350px] flex justify-center items-center">
                  Labour Force in Nigeria
                </p>
              </div>
              <div className="text-primary-orange  w-full flex flex-col justify-between items-center">
                <CountUp
                  start={0}
                  end={60}
                  duration={2.75}
                  prefix=""
                  suffix="%"
                  className="font-extrabold"
                />
                <hr />
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058146/21ctl/logo/people-41_s7olts.svg" className="w-2/4" />
                <p className="p-5 bg-primary-orange text-white text-[18px] w-[350px] flex justify-center items-center">
                  Unemployed Labour Force in Nigeria
                </p>
              </div>
            </div>
            <div className=" w-full flex flex-col justify-center items-center">
              <p className="text-center text-[18px] w-2/3 flex justify-center items-center my-10">
                This means that about one in three young people in the labor
                force who are actively <br /> seeking employment are unemployed
              </p>
              {/* <h4 className="font-bold">
                {' '}
                 <span className="text-primary-orange">Targeted Number </span>
              </h4> */}
              <div>
                <p className="p-5 bg-primary-orange text-white text-[18px] w-[400px] flex justify-center items-center">
                  Targeted Number of Trainees 2033{' '}
                </p>
                <p className="p-5 bg-white text-black text-[18px] w-[400px] flex justify-center items-center">
                  10,000,000{' '}
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center w-full py-20 mt-20 pillar-bg">
            <div className="font-bold sm:text-5xl text-3xl text-center tablet:text-xl">
              <h4>
                The <span className="text-primary-orange">7 Pillars</span> of
                Digital Training Center <br /> Model
              </h4>
            </div>
            <div className="w-full flex justify-center items-center">
              <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058164/21ctl/7-pillars_cuapya.svg" className="w-3/5 tablet:w-4/5 " />
            </div>
          </section>

          <section className="flex flex-col justify-center items-center w-full py-20 pillar-bg ">
            <div className="font-bold sm:text-5xl text-3xl text-center">
              <h4 className="text-primary-orange">Target of the Academy</h4>
            </div>
            <div className="w-full flex justify-center items-center ml-20 tablet:flex-col ">
              <img
                src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058162/21ctl/logo/academy-importance_fxamod.svg"
                className=" w-2/4  tablet:w-4/5 "
              />
              <img
                src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058158/21ctl/logo/academy-importance1_vq55hr.svg"
                className="w-2/4 tablet:pt-10  tablet:w-4/5 "
              />
            </div>
          </section>

          <section className="sm:px-28 px-8 mt-28">
            <h1 className="text-primary-orange font-bold sm:text-5xl text-3xl">
              Our Courses
            </h1>
            <div className="flex sm:flex-row flex-col justify-between my-3 ">
              <p className="text-xl">
                Explore our top-rated courses in various subjects.
              </p>
              <p className="text-primary-orange">{/* See more */}</p>
            </div>

            <div className="grid gap-10 grid-cols-3 largeTablet:grid-cols-2 tablet:grid-cols-2 mt-10 phone:grid-cols-1">
              {courses.map((course) => (
                <div
                  key={course}
                  className="bg-white sm:w-[350px] w-full px-2 py-3 h-[150px] rounded-xl"
                >
                  <div
                    key={course}
                    className="flex items-center sm:justify-center justify-start"
                  >
                    <div key={course} className="pr-5 w-[100px] h-[99px]">
                      <Image
                        src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058139/21ctl/logo/courses_z4srsc.svg"
                        // src="/logo/courses.png"
                        className=" w-[100px] h-[99px]  largeTablet:w-44 tablet:w-20 phone:w-24 z-50 smallPhone:w-16"
                        width={166}
                        height={99}
                      />
                      {/* <div className='w-[120px] h-[99px] bg-primary-orange'></div> */}
                    </div>
                    <div className="flex flex-col  justify-center">
                      <h2 className="text-base text-black font-bold w-full ">
                        {course}
                      </h2>
                      {/* <p className="text-sm text-black">Duration: 12 weeks</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="sm:mb-0 mb-16">
            <div className="flex items-center space-x-10 space-y-0 my-20 py-16 px-10 rounded-xl mx-40 mb-0 tablet:flex-col-reverse largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0 tablet:mx-5 customize-bg">
              <div className="flex-1">
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058151/21ctl/logo/smiling_snvt89.png" className="w-2/3 h-2/5 sm:block hidden" />
              </div>
              <div className="flex-1">
                <h1 className="sm:text-5xl text-3xl text-left sm:text-center font-semibold tracking-medium mb-8">
                  <span className="text-primary-orange">Customize</span> your
                  teaching and keep all{' '}
                  <span className="text-primary-orange">Students</span>{' '}
                  interested
                </h1>
                <p className="leading-8 text-xl text-left sm:text-center">
                  Our teaching resources and strategies help you make your
                  lessons unique and keep all students interested and engaged.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className=" w-full flex justify-between items-center ml-10 space-y-0 mx-10 mb-5 largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0 tablet:ml-0 tablet:mx-10">
              <div className="w-full ">
                <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                  Your <span className="text-primary-orange">Learning</span> has
                  no <span className="text-primary-orange">limit</span>
                </h1>
                <p className="leading-8  text-xl">
                  Our teaching resources and strategies help you make your
                  lessons unique and keep all students interested and engaged.
                </p>
              </div>
              <div className="w-full">
                <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058155/21ctl/logo/face-laughing_kbqju2.png" className="sm:w-2/3 w-full" />
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

export default Academy;
