import React from 'react';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import Head from 'next/head';

const Platform = () => {
  return (
    <>
      {' '}
      <Head>
        <title>Digital Platform - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[1]">
          <LightNavbar />

          {/* top-section */}
          <section className="platform-top-section h-[80vh] px-8 ">
            <div className="flex flex-col items-center justify-center w-full h-full leading-10">
              <h1 className="font-extrabold sm:text-6xl text-4xl text-white text-center">
                21st Century Digital Platforms
              </h1>
              <p className="sm:text-2xl text-xl mt-4 text-white text-center">
                Data driven digital solution for enabling transformation
              </p>
            </div>
          </section>

          <section className="sm:px-28 px-8 py-20">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div>
                <img
                  // src="https://d2pi5ijasmgfet.cloudfront.net/500x328/filters:focal(249x163:251x165):quality(82)/combined%2Fpublic%2Fmisc%2FPD20-hp-img-500x328.jpg"
                  src='https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058163/21ctl/logo/Social_Media_Globe_fbmzmt.png'
                  className='w-3/4 h-3/4 '

                  alt="communication"
                />
          
              </div>
              <div className="max-w-3xl">
                <h2 className="font-bold text-2xl">Communcation Solutions</h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-white">
                  As data becomes critical to the business agenda, IT is
                  undergoing a major shift toward data-centric architecture and
                  Hybrid IT. ServiceFabric, a global interconnectivity solution
                  and orchestration platform, provides an on-demand suite of
                  services supporting the digital transformation and
                  data-centric needs of the business. The ServiceFabric product
                  family will enable Enterprises and Service providers to
                  interconnect and securely host their critical infrastructure
                  and data sets.
                </p>
                
                <a
                  href='mailto:commercial@21ctl.com'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>

          <section className="bg-[#f3f4fa] py-20 sm:pl-28 pl-8 sm:pr-10 pr-5">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div className="">
                <h2 className="font-bold text-2xl text-black dark:text-dark">
                  World-Wide Connectivity
                </h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-dark">
                  Get virtual and physical connectivity to your customers,
                  partners, providers and facilities while extending your
                  network&apos;s capabilities.
                  <ul className="list-disc mt-4 pl-4">
                    <li className="font-light">
                      Move beyond cross connects and traditional interconnection
                      backhaul to an era of open, pervasively connected data
                      communities colocated at centers of data.
                    </li>
                    <li className="font-light">
                      Make your data integrated, traffic localized, services
                      exchanged and policies enforced by connecting to curated
                      data communities that matter to you.
                    </li>
                    <li className="font-light">
                      Remove legacy barriers across the interconnection industry
                      and tackle data gravity head on.
                    </li>
                  </ul>
                </p>

                <a
                  href='mailto:commercial@21ctl.com'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Contact Us
                </a>
              </div>

              <div>
                <img
                  src="https://d1zzg2ksf0bp3o.cloudfront.net/combined/public/misc/HP-map-just-update.png?mtime=20220208163050&focal=none"
                  alt="connectivity"
                />
                {/* <iframe src='https://res.cloudinary.com/bucpgs/video/upload/v1674640061/course_form/21ctl/Background_technology_world_loop_v144P_oiv924.mp4' ></iframe> */}
              </div>
            </div>
          </section>

          <section className="sm:px-28 px-8 py-20">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div>
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1673643615/Cloud_V2-01_vrcluj.png"
                  alt="cloud"
                  className="w-[600px]"
                />
              </div>
              <div className="max-w-3xl">
                <h2 className="font-bold text-2xl">Cloud Solutions</h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-white">
                  Get an optimal mix of cloud-enabled and privately-supported
                  applications to support all cloud connection needs.
                  <ul className="list-disc mt-4 pl-4">
                    <li className="font-light">
                      Invert traffic flow, leveraging interconnection, bringing
                      both clouds and users to the data.
                    </li>
                    <li className="font-light">
                      Secure integration of private and public data sets in
                      multi-tenant data centers.
                    </li>
                    <li className="font-light">
                      Gain data-centricity that organizes cloud, core and edge
                      in a way that enables enterprises, platforms and
                      connectivity providers to unlock trapped value and growth.
                    </li>
                  </ul>
                </p>

                <a
                  href='mailto:commercial@21ctl.com'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>

          <section className="bg-[#f3f4fa] py-20 sm:pl-28 pl-8 sm:pr-10 pr-5 dark:bg-black">
            <div className="flex sm:flex-row flex-col-reverse items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div className="sm:mt-0 mt-16">
                <h2 className="font-bold text-2xl text-black dark:text-white">
                  Payment Solution Provider
                </h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl  text-black dark:text-white">
                  We are here to provide you with the most efficient and secure
                  way to process your payments. Our platform offers a variety of
                  features to meet the needs of businesses of all sizes. Our
                  system is fully customizable and can be tailored to fit the
                  unique needs of your business. Our solutions include online
                  payments, mobile payments, and in-store payments, all with the
                  highest level of security.
                  <ul className="list-disc mt-4 pl-4">
                    <li className="font-light">
                      Allow International Transactions
                    </li>
                    <li className="font-light">
                      Make your data integrated, traffic localized, services
                      exchanged and policies enforced by connecting to curated
                      data communities that matter to you.
                    </li>
                  
                  </ul>
                </p>

                <a
                  href='mailto:commercial@21ctl.com'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Contact Us
                </a>
              </div>

              <div className="w-full">
                <img
                src='https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058151/21ctl/logo/payment-provider_ctqupk.svg'
                alt="connectivity"
                />
              </div>
            </div>
          </section>

          <section className="py-20 sm:px-28 px-8">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div>
                <img
                  // src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                  src='https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058149/21ctl/logo/automation_e6jwab.svg'
                  alt="connectivity"
                  className="w-[500px]"
                />
              </div>

              <div className="">
                <h2 className="font-bold text-2xl">Automation Process</h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-white">
                  Our company specializes in providing automation solutions to
                  businesses of all sizes. We understand the unique needs and
                  challenges that businesses face, and we work closely with our
                  clients to develop customized automation solutions that meet
                  their specific requirements.
                  <ul className="list-disc mt-4 pl-4">
                    <li className="font-light">
                      Process Automation: We help businesses automate repetitive
                      tasks and processes, such as data entry, document
                      management, and customer service.
                    </li>
                    <li className="font-light">
                      Workflow Automation: We help businesses streamline their
                      internal communication and collaboration by automating
                      workflows
                    </li>
                    <li className="font-light">
                      Robotic Process Automation (RPA): We help businesses
                      automate routine and manual tasks through the use of
                      software robots.
                    </li>
                  </ul>
                </p>

                <a
                  href='mailto:commercial@21ctl.com'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Contact Us
                </a>
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

export default Platform;
