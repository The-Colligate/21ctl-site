import React, {useState} from 'react';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import Head from 'next/head';
import Video from '../components/Video';

const Pillars = () => {
  const [video1, setVideo1] = useState(false);
  
  
  
  const src1 =
  'https://res.cloudinary.com/dqsggbqmf/video/upload/v1675030374/Digital%20Expert%20Academy%20Video/Digital_Expert_Academy-1_wptior.mp4';
  return (
    <>
      <Head>
        <title>Training Pillars - 21 CTL</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicons/dea_favicon.ico" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[0] ">
          <LightNavbar />

          {/* top-section */}
          <section className="pillar-top-section h-[80vh] px-8 ">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="font-extrabold sm:text-6xl text-3xl text-white text-center sm:leading-normal leading-10 max-w-6xl">
                The <span className="text-primary-orange">Pillars</span> of
                Digital Experts Academy Model
              </h1>
            </div>
          </section>

          <section className="sm:px-28 px-8 py-20">
            <div className="mt-20">
              <h3 className="font-bold sm:text-5xl text-2xl text-primary-orange text-center leading-8">
                Trainee
              </h3>
              <p className="text-center text-xl mt-3">
                Our trainees are mapped to specific cells (units of programs)
                with specific goals
              </p>
            </div>
            <div className="flex sm:flex-row flex-col items-center  sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div>
                <img
                  src="/logo/Working-Man.png"
                  className="w-3/4 h-3/4 "
                  alt="communication"
                />
              </div>
              <div className="max-w-3xl">
                <ul className="text-lg list-disc font-light mb-6 max-w-lg space-y-2 text-black dark:text-white">
                  <li>
                    Recent graduates looking to start a career in the IT field
                  </li>
                  <li>
                    Companies or organizations looking to train their employees
                    in specific IT skills or technologies
                  </li>
                  <li>
                    Experienced IT professionals seeking to expand their skills
                    and knowledge
                  </li>
                  <li>
                    Individuals looking to make a career change into the IT
                    field
                  </li>
                  <li>
                    Trainees interested in pursuing a specific area of study
                    within the IT field, such as data science or cybersecurity
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-[#f3f4fa] py-20 sm:pl-28 pl-8 sm:pr-10 pr-5 dark:bg-transparent">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div className="">
                <h2 className="font-bold sm:text-5xl text-2xl text-primary-orange dark:text-white ">
                  Curriculum
                </h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-white ">
                  The Academy&apos;s curriculum provides trainees
                  with theoretical and practical knowledge and skills for
                  success in their field, updated regularly by instructors.
                  <ul className="list-disc mt-4 pl-4">
                    <li className="">
                      <span className="font-bold">Traditional based</span>
                      <p>
                        This curriculum consists of a set of courses that
                        requires to be taken in a specific order, with each
                        course building on the previous one.
                      </p>
                    </li>
                    <li className="">
                      <span className="font-bold">Product based</span>
                      <p>
                        This curriculum focuses on the completion of
                        real-world projects and challenges, with trainees
                        learning through hands-on experience.
                      </p>
                    </li>
                    <li className="">
                      <span className="font-bold">Problem based</span>
                      <p>
                        This curriculum focuses on the resolution of
                        real-world problems and challenges, with trainees
                        learning through problem-solving and critical thinking.
                      </p>
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <img src="/logo/working-female.png" alt="connectivity" />
                {/* <iframe src='https://res.cloudinary.com/bucpgs/video/upload/v1674640061/course_form/21ctl/Background_technology_world_loop_v144P_oiv924.mp4' ></iframe> */}
              </div>
            </div>
          </section>

          <section className="sm:px-28 px-8 py-20">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div>
                <img
                  src="/logo/instructor.png"
                  alt="cloud"
                  className="w-[600px]"
                />
              </div>
              <div className="max-w-3xl ">
                <h2 className="font-bold text-primary-orange sm:text-5xl text-2xl">
                  Instructors
                </h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-white">
                  Our instructors are experienced mentors, professionals and
                  experts from:
                  <ul className="list-disc mt-4 pl-4">
                    <li className="font-light">Technology Companies </li>
                    <li className="font-light">Professional Associations</li>
                    <li className="font-light">Employers of Labour</li>
                    <li className="font-light">
                      International Research Institutions
                    </li>
                    <li className="font-light">Educational Institutions</li>
                    <li className="font-light">Government Agencies</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>
          

          <section className="bg-[#f3f4fa] py-20 sm:pl-28 pl-8 sm:pr-10 pr-5 dark:bg-transparent">
            <div>
              <h2 className="text-center sm:text-5xl text-2xl text-primary-orange font-bold">
                Infrastructure and Resources
              </h2>
              <p className="text-lg text-center font-light mt-4 max-w-3xl m-auto text-black dark:text-white">
                The Academy infrastructures and resources are carefully designed
                and maintained to support the training program.
              </p>
            </div>

            <div className="flex justify-center items-center ">
              <img src="/logo/laptop.png" alt="laptop" />
            </div>

            <div className="resrc-pillar">
              <div className="bg-[#EF9876] resrc-shadow flex flex-col rounded-3xl py-8 px-4 items-center justify-center w-72 h-80 ">
                <h4 className="text-white text-center font-bold text-xl">
                  Classrooms and labs
                </h4>
                <p className="mt-6 text-center text-base text-white">
                  Our labs are equipped with the necessary hardware, software,
                  and equipment to support the training program.
                </p>
              </div>
              <div className="bg-white resrc-shadow flex flex-col rounded-3xl py-8 px-4 items-center justify-center w-72 h-80 ">
                <h4 className="text-black text-center font-bold text-xl">
                  Learning management system
                </h4>
                <p className="mt-6 text-center text-base text-black">
                  The LMS delivers and manages course materials, manage
                  assignments and assessments, and facilitate communication
                  between trainees and instructors.
                </p>
              </div>
              <div className="bg-[#EF9876] resrc-shadow flex flex-col rounded-3xl py-8 px-4 items-center justify-center w-72 h-80 ">
                <h4 className="text-white text-center font-bold text-xl">
                  Classrooms and labs
                </h4>
                <p className="mt-6 text-center text-base text-white">
                  Our labs are equipped with the necessary hardware, software,
                  and equipment to support the training program.
                </p>
              </div>
              <div className="bg-white resrc-shadow flex flex-col rounded-3xl py-8 px-4 items-center justify-center w-72 h-80 ">
                <h4 className="text-black text-center font-bold text-xl">
                  Trainee support services
                </h4>
                <p className="mt-6 text-center text-base text-black">
                  We provide services that include academic advising, career
                  services, and mental health support by mentors chosen by the
                  board
                </p>
              </div>
            </div>
          </section>
          <div className="flex justify-center items-center bg-[#f3f4fa] dark:bg-transparent">
          <button
                  onClick={() => setVideo1(true)}
                  className=" bg-primary-orange rounded text-white py-3 px-6 my-6 hover:bg-primary-orange hover:text-white"
                >
                  <span className="capitalize">
                    see our training facilities
                  </span>
                </button>
          </div>
          <div className="z-50">
            {video1 && (
              <Video
                modalIsOpen={video1}
                closeModal={() => setVideo1(false)}
                video_src={src1}
              />
            )}
          </div>
          <section className="bg-[#f3f4fa] dark:bg-transparent py-20 sm:pl-28 pl-8 sm:pr-10 pr-5">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div className="">
                <h2 className="font-bold sm:text-5xl text-2xl text-primary-orange dark:text-white ">
                  Didactics
                </h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-white ">
                 Oversee trainee eligibility, reviews and approves applications, supports program
                  facilitators, and serves as a liaison between facilitators
                  and trainees.
                </p>
              </div>

              <div>
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675087972/21ctl/image_10_b651vp.svg"
                  alt="connectivity"
                />
              </div>
            </div>
          </section>

          <section className=" training_pillars_partners light:bg-[#f3f4fa] px-20">
            <h3 className="text-primary-orange text-center font-bold sm:text-5xl text-2xl my-10 px-5 ">
              Industry Partners.
            </h3>
            <div className="flex">
              <img
                src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1676387495/21ctl/partners/partners_cep2j1.png"
                className="w-full"
              />
            </div>
          </section>

          <section className="py-20 sm:px-28 px-8">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div>
                <img
                  // src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                  src="/logo/quality-assurance.png"
                  alt="connectivity"
                  className="w-[500px]"
                />
              </div>

              <div className="max-w-xl">
                <h3 className="font-bold sm:text-5xl text-2xl text-primary-orange leading-8">
                  Quality Assurance
                </h3>
                <p className="text-lg font-light mt-3">
                  The Academy&apos;s QA Unit aims to provide high-quality
                  training by regularly setting and assessing goals, seeking
                  feedback, updating course materials, using assessments,
                  offering instructor development, monitoring trainee outcomes,
                  and tracking metrics.
                </p>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Pillars;
