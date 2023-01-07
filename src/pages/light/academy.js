import React from 'react';
import Image from 'next/image';
import Head from 'next/head'
import { LightNavbar, Footer } from '@components/layout/';

import SiemensEnergy from '/public/logo/Siemens Energy.svg';
import SchneiderElectric from '/public/logo/Schneider Electric.svg';
import PCCWGlobal from '/public/logo/PCCW Global.svg';
import HeroImage from '/public/logo/hero-image.png';


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

const Academy = () => {

  const courses = [
    "Graphic Design",
    "Deep Learning",
    "Devops",
    "Cyber Security",
    "Power BI",
    "Business Data Analysis",
    "Data Science",
    "Digital Marketing"
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
        <div className="w-full min-h-screen overflow-y-auto flex flex-col z-[1]">
          <LightNavbar />

          <section className="flex sm:px-36 px-8 my-16 items-center justify-between space-x-16 tablet:flex-col tablet:space-x-0 pt-28">
            <div className='max-w-3xl'>
              <h1 className="text-7xl tracking-normal font-lato font-medium whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                <span className="text-primary-orange leading-8">Unlock </span>
                Your potential with our <span className="text-primary-orange leading-8">Academy.</span>
              </h1>
              <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                Our top-rated academy offers expert-led courses to help you unlock your potential and advance your career.
              </p>
              {/* <button className="bg-primary-orange rounded-xl text-white py-2 px-6 my-6">
              Reach Us
            </button> */}
            </div>
            <div>
              <Image
                src="/logo/student.png"
                width={559}
                height={665}
                className="tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
              />
            </div>
          </section>

          <section className='sm:px-36 px-8 my-10'>
            <div className="flex sm:flex-row flex-col sm:space-x-40 space-x-0 ">
              <div className="text-2xl pb-5 tablet:text-center">
                Our statistics reveal <br /> more about us.
              </div>
              <div className="figures flex sm:flex-row flex-col justify-between sm:space-x-8 space-x-0">
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    50+
                  </p>
                  <span className="font-light">Total courses</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    100+
                  </p>
                  <span className="font-light">Expert Mentors</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    5k+
                  </p>
                  <span className="font-light">Students</span>
                </div>

              </div>
            </div>
          </section>

          <section className="flex flex-col sm:px-36 px-8">
            <h3 className="text-[#f64e1fbd] font-normal text-2xl my-6">
              Transcending the limits with our partners.
            </h3>
            <marquee behavior="scroll" direction="left">
            <div className="flex justify-between mt-8 px-12 phone:px-0">
              <Image
                src={SchneiderElectric}
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
              />
              <Image
                src="/logo/VMware - png 0.png"
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                width={166}
                height={99}
              />

              <Image
                src="/logo/Microsoft Azure.png"
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                width={166}
                height={99}
              />
              <Image
                src="/logo/Oracle.png"
                className="w-54 largeTablet:w-44 tablet:w-20 phone:w-24 smallPhone:w-16"
                width={166}
                height={99}
              />
            </div>
            </marquee>
          </section>
          <section className='mx-10'>
            <h1 className="text-primary-orange text-[36px]">Our Courses</h1>
            <div className="flex justify-between my-3 ">
              <p>Explore our top-rated courses in various subjects.</p>
              <p className="text-primary-orange">see more</p>
            </div>
            
            <div className="grid grid-cols-4 gap-10 tablet:grid-cols-1">
          {courses.map((course)=>  <div key={course} className="bg-white w-[270px] px-2 py-3 h-[120px] rounded-xl ">
              <div key={course} className="flex items-center justify-center">
               <div key={course} className="pr-5 h-full">
                <Image
                  src="/logo/courses.svg"
                  // src="/logo/courses.png"
                  className="w-24 largeTablet:w-44 tablet:w-20 phone:w-24 z-50 smallPhone:w-16"
                  width={166}
                  height={99}
                />
                </div>
                <div className="flex flex-col  justify-center" >
                  <h2 className="text-[16px] font-bold w-2/3 ">{course}</h2>
                  <p  className="text-[14px]">Duration: 12 weeks</p>
                </div>
              </div>
            </div>
            )
          }
          </div>
          </section>

          <section>
            <div className="flex items-center space-x-10 space-y-0 my-10 mx-10 mb-0 tablet:flex-col-reverse largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">
              <div className="">
                <img
                  src="/logo/smiling.png"
                  className="max-w-xl largeTablet:max-w-md smallPhone:max-w-xs"
                />
              </div>
              <div className="max-w-xl">
                <h1 className="text-4xl font-semibold tracking-medium mb-8">
                  <span className="text-primary-orange">Customize</span> your teaching and keep all <span className="text-primary-orange">Students</span> interested
                </h1>
                <p className="leading-8 font-extralight text-xl">
                  Our teaching resources and strategies help you make your lessons unique and keep all students interested and engaged.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center space-x-10 space-y-0 mx-10 mb-5 largeTablet:flex-col largeTablet:text-center largeTablet:space-y-10 largeTablet:space-x-0">

              <div className="max-w-sm">
                <h1 className="text-5xl font-semibold tracking-medium mb-8">
                  Your <span className="text-primary-orange">Learning</span> has no <span className="text-primary-orange">limit</span>
                </h1>
                <p className="leading-8 font-extralight text-xl">
                  Our teaching resources and strategies help you make your lessons unique and keep all students interested and engaged.
                </p>
              </div>
              <div className="">
                <img
                  src="/logo/face-laughing.png"
                  className="max-w-xl largeTablet:max-w-md smallPhone:max-w-xs"
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
      </div>
    </>
  );
};

export default Academy;
