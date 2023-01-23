import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import { motion } from 'framer-motion';
import { leftTransitionVarient, rightTansitionVarient } from '@components/constants/animations';
import CountUp from 'react-countup';

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
        <div className="w-full min-h-screen flex flex-col z-[1]">
          <LightNavbar />

          <section className="bg-[#E7D7D2] dark:bg-[#565048] sm:px-28 px-8 my-16 sm:py-0 pt-16">
            <div className="flex sm:flex-row flex-col sm:space-x-16 space-x-0 items-center">
              <motion.div
              variants={leftTransitionVarient}
              animate="visible"
              initial="hidden"
              
              className="flex-1">
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
                <a
                  href="https://academy-app-21ctl-blessedmadukoma.koyeb.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-primary-orange rounded text-white py-3 px-6 my-6">
                    Apply now
                  </button>
                </a>
              </motion.div>
              <motion.div
              variants={rightTansitionVarient}
              animate="visible"
              initial="hidden"
               className="flex-1">
                <Image
                  src="/logo/student.png"
                  width={559}
                  height={650}
                  className="tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                />
              </motion.div>
            </div>
          </section>

          <section className='sm:px-36 px-8 my-5'>
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
                      end={50}
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
                      end={100}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                  </p>
                  <span className="">Expert Mentors</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-[40px] font-semibold">
                    {/* 5k+ */}
                    <CountUp
                      start={0}
                      end={5}
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



          
          <section className="sm:px-28 px-8 mt-28">
            <h1 className="text-primary-orange font-bold sm:text-5xl text-3xl">
              Our Courses
            </h1>
            <div className="flex sm:flex-row flex-col justify-between my-3 ">
              <p className="text-xl">
                Explore our top-rated courses in various subjects.
              </p>
              <p className="text-primary-orange">
                {/* See more */}
                </p>
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
            <div className="flex items-center space-x-10 space-y-0 my-10 mx-10 mb-0 tablet:flex-col-reverse largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">
              <div className="flex-1">
                <img src="/logo/smiling.png" className="w-full" />
              </div>
              <div className="flex-1">
                <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                  <span className="text-primary-orange">Customize</span> your
                  teaching and keep all{' '}
                  <span className="text-primary-orange">Students</span>{' '}
                  interested
                </h1>
                <p className="leading-8 text-xl">
                  Our teaching resources and strategies help you make your
                  lessons unique and keep all students interested and engaged.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-10 space-y-0 mx-10 mb-5 largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">
              <div className="flex-1 max-w-xl">
                <h1 className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                  Your <span className="text-primary-orange">Learning</span> has
                  no <span className="text-primary-orange">limit</span>
                </h1>
                <p className="leading-8  text-xl">
                  Our teaching resources and strategies help you make your
                  lessons unique and keep all students interested and engaged.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1673101849/Group_369_sncuca.svg"
                  className="w-full"
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

export default Academy;
