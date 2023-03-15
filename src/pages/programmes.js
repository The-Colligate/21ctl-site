import React, { useState } from "react";
import Head from "next/head";
import { LightNavbar, Footer, SocialIcons } from "@components/layout/";
import { courses } from "../components/constants/courses";
import { Modal, Button } from "@nextui-org/react";
// const Video = dynamic(() => import('../../components/Video'));

const src1 =
  "https://res.cloudinary.com/dqsggbqmf/video/upload/v1675030374/Digital%20Expert%20Academy%20Video/Digital_Expert_Academy-1_wptior.mp4";

const Programmes = () => {
  const [searchValue, updateSearchValue] = useState("");
  const [displayPopup, setDisplayPopup] = useState([false, -1]);

  const sch = courses[0].courses;
  const ora = courses[1].courses;
  

  const spreadCourse = [...sch, ...ora];

  const searchCourses = spreadCourse.filter((course) =>
    course.title
      .toString()
      .trim()
      .toLowerCase()
      .includes(searchValue.toString().trim().toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Programmes - 21 CTL</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicons/dea_favicon.ico" />
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
              <h2 className="text-primary-orange text-4xl tracking-normal capitalize font-bold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                {" "}
                Browse Courses
              </h2>
              <div className="flex w-4/5 justify-center">
                <input
                  type="text"
                  value={searchValue}
                  placeholder="Enter keyword"
                  onChange={(e) => {
                    // console.log(`${typeof searchValue}`);
                    updateSearchValue(e.target.value);
                  }}
                  className="w-2/3 border border-black p-3"
                />
                <button className="p-3 bg-primary-orange text-white">
                  Search
                </button>
              </div>
              <div className="grid gap-10 grid-cols-3 largeTablet:grid-cols-2 tablet:grid-cols-2 mt-10 phone:grid-cols-1">
                {searchCourses.map((course, index) => {
                  return (
                    <>
                      <div
                        onClick={(e) => setDisplayPopup([true, index])}
                        key={`${course.title} ${index}`}
                        className="bg-white sm:w-[350px] cursor-pointer w-full px-2 py-3 h-[150px] rounded-xl"
                      >
                        <div
                          key={course}
                          className="flex items-center sm:justify-center justify-start"
                        >
                          <div key={course} className="pr-5 w-[100px] h-[99px]">
                            <img
                              src="/logo/courses.svg"
                              className=" w-[100px] h-[99px]  largeTablet:w-44 tablet:w-20 phone:w-24 z-50 smallPhone:w-16"
                              width={166}
                              height={99}
                            />
                          </div>
                          <div className="flex flex-col  justify-center">
                            <h2 className="text-base text-black font-bold w-full ">
                              {course.title}
                            </h2>
                            <p className="text-sm text-black">{course.mode}</p>
                          </div>
                        </div>
                      </div>

                      <Modal
                        toggle={() => setDisplayPopup([false, index])}
                        open={displayPopup[0] && displayPopup[1] === index}
                      >
                        <div className="modal-header p-3 flex justify-between">
                          <h5 className="font-bold" id="exampleModalLabel">
                            {course.title}
                          </h5>
                        </div>
                        <Modal.Body>{course.description}</Modal.Body>
                        <Modal.Footer justify="space-between">
                          <p className="bg-primary-orange bg-opacity-20 text-primary-orange rounded px-5 py-2 ">
                            {course.mode}
                          </p>
                          <button
                            className="bg-primary-orange text-white py-3 px-7 rounded-xl"
                            type="button"
                            onClick={() => setDisplayPopup([false, index])}
                          >
                            Close
                          </button>
                        </Modal.Footer>
                      </Modal>
                    </>
                  );
                })}
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

export default Programmes;
