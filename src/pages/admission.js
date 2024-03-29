import React, { useState } from "react";
import Head from "next/head";
import { LightNavbar, Footer, SocialIcons } from "@components/layout/";
import { motion } from "framer-motion";
import {
  leftTransitionVarient,
  rightTansitionVarient,
} from "@components/constants/animations";
import CountUp from "react-countup";
import { Link } from "evergreen-ui";

const Academy = () => {
  const courses = [
    "Electrical design and installation",
    "Power management and distribution",
    "Building management systems and energy efficiency",
    "Automation and control systems",
    "Programming and configuration of Schneider Electric products, such as PLCs,  VFDs, and HMIs",
    "Cybersecurity for industrial systems",
    "Industry-specific applications, such as data centers (renewable energy, and critical power systems)",
    "Safety and compliance",
    // 'Database',
  ];
  const [video1, setVideo1] = useState(false);

  return (
    <>
      <Head>
        <title>Academy - 21 CTL</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicons/dea_favicon.ico" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[0]">
          <LightNavbar />

          <section className=" dark:bg-[#565048] sm:px-28 px-8 my-16 sm:py-0 pt-16 tablet:my-5">
            <div className="flex sm:flex-row flex-col sm:space-x-16 space-x-0 items-center">
              <motion.div
                variants={leftTransitionVarient}
                animate="visible"
                initial="hidden"
                className="flex-1 pt-20"
              >
                <h1 className="text-5xl tracking-normal capitalize font-bold whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                  <span className="text-primary-orange leading-8">
                    Admission{" "}
                  </span>
                  and{" "}
                  <span className="text-primary-orange leading-8">
                    Eligibility
                  </span>{" "}
                  Requirements
                </h1>
                <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                  Our Admission process starts with a simple process of online
                  registration, confirmation and application. Applicants are
                  required to fill the form correctly by supplying the correct
                  details into the choice of program and specialization.
                </p>
                <a
                  href="http://application.21ctldea.com/"
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
                className="flex sm:justify-end justify-center w-full flex-1 "
              >
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675073326/21ctl/Group_56023_d43azv.svg"
                  width={459}
                  height={450}
                  className="pt-20 tablet:w-96 phone:w-64"
                />
              </motion.div>
            </div>
          </section>

          <section className="sm:px-28 px-12 sm:py-20 py-10">
            <div className="flex sm:flex-row flex-col-reverse items-center  sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div className="sm:block hidden">
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675074995/21ctl/Group_56024_j0h0qz.svg"
                  className="w-3/4 h-3/4 dark:hidden "
                  alt="communication"
                />
              </div>
              <div className="max-w-3xl">
                <h2 className="font-bold  sm:text-5xl text-2xl">
                  <span className="text-primary-orange">Eligibility</span>{" "}
                  Criteria
                </h2>
                <div className="text-lg font-light mt-4 mb-6 max-w-2xl text-black tablet:mb-0 dark:text-white">
                  Applicants can be any of the following:
                  <ul className="list-disc mt-4 pl-4 space-y-1">
                    <li className="font-light">
                      Recent graduates looking to start a career in the IT field{" "}
                    </li>
                    <li className="font-light">
                      Companies or organizations looking to train their
                      employees in specific IT skills or technologies
                    </li>
                    <li className="font-light">
                      Experienced IT professionals seeking to expand their
                      skills and knowledge
                    </li>
                    <li className="font-light">
                      Individuals looking to make a career change into the IT
                      field
                    </li>
                    <li className="font-light">
                      Trainees interested in pursuing a specific area of study
                      within the IT field, such as data science or cybersecurity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="sm:px-28 px-8 sm:py-20 py-10">
            <div className="mt-20">
              <h3 className="font-bold sm:text-5xl text-2xl text-primary-orange text-center leading-8">
              Timeline
              </h3>
            </div>
            <div className="mt-4">
                <img src="https://res.cloudinary.com/dypedkp7i/image/upload/v1678734952/21ctl/Group_56027_dswqzy.svg" alt="admission processes" />
            </div>
          </section> */}
          <section className="sm:px-28 px-8 sm:py-20 py-10 tablet:hidden">
            <h3 className="font-bold sm:text-5xl text-xl text-primary-orange text-center leading-8">
              How to Apply
            </h3>
            <div className="mt-20">
              <h3 className="font-bold sm:text-4xl text-xl  text-center leading-8">
                Stage 1: Applicant Filtering Stage
              </h3>
            </div>
            <div className="mt-4">
              <img
                src="https://res.cloudinary.com/dypedkp7i/image/upload/v1678909267/21ctl/Group_56144_fzoghu.png"
                alt="admission processes"
              />
            </div>
          </section>
          <section className="w-full hidden tablet:block ">
            <img src="https://res.cloudinary.com/dypedkp7i/image/upload/v1678908307/21ctl/_con_r5jbcq.svg"  className="w-full px-10"/>
          </section>
          {/* <section className=" flex flex-col justify-center items-center hidden tablet:block w-full mx-10">
            <Link href="https://application.21ctldea.com">
              <p className="text-[#2B9647]">https://application.21ctldea.com</p>
            </Link>
            <div>
              <div className="flex justify-between bg-[#2B9647] rounded-xl px">
                <p className="text-white">01</p>
                <p className="text-white">Apply</p>
                <div></div>
              </div>
              <p className="text-[#2B9647] border border-[#F1F1F4] p-10">
                Visit DEA website to apply. You can apply as a fresh graduate or
                experienced applicant{" "}
              </p>
            </div>
            <div>
              <div>
                <p className="text-white">01</p>
                <p className="text-white">Apply</p>
                <></>
              </div>
              <p className="text-[#2B9647]">
                Visit DEA website to apply. You can apply as a fresh graduate or
                experienced applicant{" "}
              </p>
            </div>
          </section> */}
          <section className="sm:px-28 px-8 sm:py-20 py-10 tablet:py-0">
            <div className="mt-20">
              <h3 className="font-bold sm:text-4xl text-xl  text-center leading-8">
                Stage 2: Trainee Confirmation
              </h3>
            </div>
            <div className="mt-4">
              <img
                src="https://res.cloudinary.com/dypedkp7i/image/upload/v1678909379/21ctl/Group_56027_pcsrjp.svg"
                alt="Trainee Confirmation image"
              />
            </div>
          </section>

          <section className="relative flex flex-col items-center justify-center bg-[#145389] rounded-[56px] h-[480px] mx-10 w-[90%] my-[209px] tablet:mx-10 tablet:px-5 flex justify-center">
            <div className="konet_wallet_green_bg flex   justify-end items-center   ">
              <div className="absolute left-0 bottom-0 ">
                <img
                  src="https://res.cloudinary.com/dypedkp7i/image/upload/v1678908686/21ctl/Rectangle_11910_f8d7zz.png"
                  className="w-full px-5 rounded-[40px] top-10 tablet:hidden"
                />
              </div>
              <div className="w-[600px] ml-52 mb-10 flex flex-col justify-center items-start tablet:w-full tablet:ml-0 tablet:pt-10 tablet:items-center">
                
                <p className=" text-[50px] font-bold text-white leading-10 tablet:text-[30px]">
                Join the Team to <br/>achieve Greatness
              
                </p>
                <p className=" text-[24px] font-normal text-white py-10">
                Build your career with like-minded individuals at 21st Century Technologies. Unlock your potential at DEA to achieve greatness as part of our winning team.
                </p>
                <div className=" w-full ">
                <Link 
                href="http://application.21ctldea.com/"
                target="_blank"
                rel="noreferrer"
                >  <button className='bg-white text-[#134E82] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px]  cursor-pointer tablet:px-5 '>
                                        Apply Now</button>
                                        </Link>
                                    {/* <button className='flex bg-white text-[#60A297] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5 tablet:pr-2'><img src='/icons/playstore-green.svg' className='pr-5  tablet:pr-2  tablet:w-2/5' />Play Store</button> */}
                </div>
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
