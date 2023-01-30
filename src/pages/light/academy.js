import React, {useState} from 'react';
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
    'Graphic Design',
    'Deep Learning',
    'Devops',
    'Cyber Security',
    'Power BI',
    'Business Data Analysis',
    'Data Science',
    'Digital Marketing',
    'Database',
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
        <div className="w-full min-h-screen flex flex-col z-[1] ">
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
                  src="/logo/student.png"
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
          <section>
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
                <img src="/logo/21ctl-infographics.png" className="w-2/3" />
              </div>
            </div>
          </section>

          <section className="px-10 my-20 w-full tablet:px-10">
            <div className=" flex justify-between items-center  w-full tablet:flex-col">
              <div className="w-3/5 tablet:w-full">
                <p className="sm:text-5xl text-xl font-bold text-center">
                  {' '}
                  <span className="text-primary-orange">
                    we provide world-class services to the top 1000 companies{' '}
                  </span>
                  in Nigeria and key residential areas.
                </p>
              </div>

              <div>
                <img src="/logo/" className="w-full h-1/5" />
              </div>
            </div>
          </section>
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
                <img src="/logo/people-41.svg" className="w-2/4" />
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
                <img src="/logo/people-33.svg" className="w-2/4" />
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
              <h4 className="font-bold">
                {' '}
                Our <span className="text-primary-orange">Target</span>
              </h4>
              <div>
                <p className="p-5 bg-primary-orange text-white text-[18px] w-[350px] flex justify-center items-center">
                  Number of People Trained by 2033{' '}
                </p>
                <p className="p-5 bg-white text-black text-[18px] w-[350px] flex justify-center items-center">
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
              <img src="/logo/7-pillars.svg" className="w-3/5 tablet:w-4/5 " />
            </div>
          </section>

          <section className="flex flex-col justify-center items-center w-full py-20 pillar-bg ">
            <div className="font-bold sm:text-5xl text-3xl text-center">
              <h4 className="text-primary-orange">Target of the Academy</h4>
            </div>
            <div className="w-full flex justify-center items-center ml-20 tablet:flex-col ">
              <img
                src="/logo/academy-importance.svg"
                className=" w-2/4  tablet:w-4/5 "
              />
              <img
                src="/logo/academy-importance1.svg"
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
                  className="bg-white sm:w-[270px] w-full px-2 py-3 h-[120px] rounded-xl"
                >
                  <div
                    key={course}
                    className="flex items-center sm:justify-center justify-start"
                  >
                    <div key={course} className="pr-5 h-full">
                      <Image
                        src="/logo/courses.svg"
                        // src="/logo/courses.png"
                        className="w-full h-[99px]  largeTablet:w-44 tablet:w-20 phone:w-24 z-50 smallPhone:w-16"
                        width={166}
                        height={99}
                      />
                      {/* <div className='w-[120px] h-[99px] bg-primary-orange'></div> */}
                    </div>
                    <div className="flex flex-col  justify-center">
                      <h2 className="text-base text-black font-bold w-2/3 ">
                        {course}
                      </h2>
                      <p className="text-sm text-black">Duration: 12 weeks</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="sm:mb-0 mb-16">
            <div className="flex items-center space-x-10 space-y-0 my-20 py-16 px-10 rounded-xl mx-40 mb-0 tablet:flex-col-reverse largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0 tablet:mx-5 customize-bg">
              <div className="flex-1">
                <img src="/logo/smiling.png" className="w-2/3 h-2/5 sm:block hidden" />
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
                <img src="/logo/face-laughing.png" className="sm:w-2/3 w-full" />
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
