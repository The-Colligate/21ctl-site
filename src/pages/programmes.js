import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { LightNavbar, Footer, SocialIcons } from "@components/layout/";
import { courses } from "../components/constants/courses";
import { Button } from "evergreen-ui";
// const Video = dynamic(() => import('../../components/Video'));

const src1 = "https://res.cloudinary.com/dqsggbqmf/video/upload/v1675030374/Digital%20Expert%20Academy%20Video/Digital_Expert_Academy-1_wptior.mp4";

const Programmes = () => {
  const [searchValue, updateSearchValue] = useState("");

  return (
    <>
      <Head>
        <title>Programmes - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[1] ">
          <LightNavbar />

          <section>
            <div className="mt-[20vh] flex flex-col items-center">
              <h2 className="text-primary-orange text-4xl tracking-normal capitalize font-bold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl"> Browse Courses</h2>
              <input type="text" value={searchValue} onChange={(e) => updateSearchValue(e.target.value)} className="w-2/3 border border-black p-3" />
              <Button>Search</Button>

              <div className="grid gap-10 grid-cols-3 largeTablet:grid-cols-2 tablet:grid-cols-2 mt-10 phone:grid-cols-1">
                {courses
                  .filter((course) => course.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((course) => (
                    <div key={course} className="bg-white sm:w-[350px] w-full px-2 py-3 h-[150px] rounded-xl">
                      <div key={course} className="flex items-center sm:justify-center justify-start">
                        <div key={course} className="pr-5 w-[100px] h-[99px]">
                          <Image
                            src="/logo/courses.svg"
                            // src="/logo/courses.png"
                            className=" w-[100px] h-[99px]  largeTablet:w-44 tablet:w-20 phone:w-24 z-50 smallPhone:w-16"
                            width={166}
                            height={99}
                          />
                          {/* <div className='w-[120px] h-[99px] bg-primary-orange'></div> */}
                        </div>
                        <div className="flex flex-col  justify-center">
                          <h2 className="text-base text-black font-bold w-full ">{course}</h2>
                          <p className="text-sm text-black">Mode:Hybrid</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {/* <p>{searchValue}</p> */}
            </div>
          </section>
          <Footer />
        </div>

        <SocialIcons />
      </div>
    </>
  );
};

export default Programmes;
