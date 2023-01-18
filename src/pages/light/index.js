import { LightNavbar, SocialIcons } from '@components/layout/';
import { ArrowRight } from '@icons/index';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Popover } from 'evergreen-ui';
import { buttonVarient, leftTransitionVarient, rightTansitionVarient, delayVarient1 } from '@components/constants/animations';
function LightDesign() {
  const [displayPopup, setDisplayPopup] = useState([false, -1]);

  const products = [
    // {
    //   icon: '/icons/home/baseline-call.svg',
    //   name: 'Communication',
    //   snippet:
    //     'We build, provide one to one, one to many, many to many, communication infrastructures and platforms, supporting millions of users transactions and variety of business processes',
    //   link: '/communication',
    // },
    {
      icon: '/icons/home/cloud-computing.svg',
      name: 'Digital Infrastructure',
      snippet:
        ' We have connectivity, data centers & edge computing centers, Towers, Network & 5G enabled platforms for SMBs, SMEs and large Enterprises.',
      link: '/digital-infrastructure',
    },

    // {
    //   icon: "/icons/home/computer.svg",
    //   name: "Digital Platform",
    //   snippet:
    //     "We company offers digital communication platforms and infrastructure to support various business processes and handle high volumes of transactions for millions of users.",
    //   link: "#",
    // },
    {
      icon: '/icons/home/globe.svg',
      name: 'Digital Platform',
      snippet:
        '21st century technologies limited offers digital communication platforms and infrastructure to support various business processes and handle high volumes of transactions for millions of users.',
      link: '/platform',
    },
    {
      icon: '/icons/home/credit-card.svg',
      name: 'Payment',
      snippet:
        'Our secured fintech gateway that allows transfer of monetary values including payment processing, institutional procedures, e-Commerce instruments, rules, standards and technologies.',
      link: 'https://konetpay.com/',
    },
    {
      icon: '/icons/home/power-lighting.svg',
      name: 'Power',
      snippet:
        '21ctl enhouses premier renewable energy, turbine power infrastructure, power plant and electric energy storage system integrations and balancing services.',
      link: '/power',
    },

    {
      icon: '/icons/home/group.svg',
      name: 'People',
      snippet:
        'The Digital Academy is a training hub where creative thinkers and distruptors are exposed to highly equiped pre-programmed and mataversed laboratories while interacting with experts in domains such as Cloud computing, Artificial Intelligence, Cyber security, Data analytics and so much more.',
      link: '/people',
    },
    {
      icon: '/icons/home/security.svg',
      name: 'Security as Service',
      snippet:
        '21ctl manages your business security, providing cloud-based security service and in-house security management. Our SECaaS business model is available for integration into a corporate infrastructure.',
      link: '/security',
    },
  ];

  
  return (
    <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-hidden relative">
      <div className="absolute w-full h-full flex justify-between items-center">
        <div className="w-full min-h-[50%] bg_gradient_l"></div>
        <div className="w-full min-h-[50%] bg_gradient_r"></div>
      </div>
      <div className="w-full min-h-screen overflow-y-hidden flex flex-col z-[1]">
        <LightNavbar />
        <div className=" flex items-center justify-center w-full h-full px-20 flex-grow largeTablet:mt-10 largeTablet:flex-wrap phone:flex-grow-0 tablet:px-10 tablet:mt-10 smallTablet:px-5 pt-28">
          <motion.div 
          variants={leftTransitionVarient}
          animate="visible"
          initial="hidden"
          
          className="w-full h-full flex items-center justify-center">
            <div className="max-w-3xl mt-10 flex flex-col items-center justify-center">
              <h1 className="text-5xl font-lato font-black whitespace-pre-wrap largeTablet:text-6xl tablet:text-5xl smallTablet:text-4xl">
                Building Africa&apos;s{' '}
                <span className="text-primary-orange">Largest Digital</span>{' '}
                Infrastructure
              </h1>
              <motion.p
              initial={delayVarient1}

              
              className="text-lg mt-6 largeTablet:text-xl smallTablet:text-lg">
                21st Century Technologies, an ecosystem Technology Group of
                companies, building bold, ambitious and audacious digital
                infrastructure projects. Integrated infrastructure that is
                sustainable, resilient, secure, low latency, protected that will
                enable our customers to adopt cutting edge technology to
                accelerate technology modernization, exceptional corporate
                performance and transformation. We are well positioned and fully
                mobilized to provide unmatched operational excellence and
                unrivaled customer experience. Build many internationally
                recognized technology Hubs that will meet increasing demand for
                distributed digital infrastructure and support enterprises of
                all sizes by enabling the integration of all technology access
                business functions.
              </motion.p>
            </div>
          </motion.div>
          <motion.div
                   variants={rightTansitionVarient}
                   animate="visible"
                   initial="hidden"
          className=" h-full z-0 ">
            <div className="h-full flex justify-center mt-10 mx-auto largeTablet:mt-14 smallTablet:mt-8 phone:mt-6 mb-20">
              <div className="flex">
                <div className="hexagon-container">
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:bg-gray-900 flip-back">
                      <div className=" w-full h-full flex items-center justify-center dark:bg-black bg-white !m-0   ">
                        <div className="rounded-lg p-5 bg-white dark:bg-black flex items-center justify-center flex-col   ">
                          <p className="font-semibold text-[9px] phone:text-[7px] ">
                            Software Development
                          </p>
                          <p className="mt-3 text-[9px] phone:text-[7px] text-center">
                            We develop and deploy business solutions like HR,
                            CRM, cTap, Call Centre Software, etc.
                          </p>
                          {/* <a className="mt-3 flex items-center text-[11px]" href="#">
                            Go to Site <ArrowRight />
                          </a> */}
                        </div>
                      </div>
                    </div>
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/tree-structure.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:bg-gray-900 flip-back">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-white  !m-0">
                        <div className="rounded-lg p-5 bg-white dark:bg-black">
                          <p className="font-semibold text-center text-[9px] phone:text-[7px] ">
                            Technology Solutions
                          </p>
                          <p className="mt-3 text-[9px] text-center phone:text-[7px]">
                            These include Transmission, IT Infrastructure,
                            Access Control, Cloud services, etcetera.
                          </p>
                          {/* <a className="mt-3 flex items-center text-[11px]" href="#">
                            Go to Site <ArrowRight />
                          </a> */}
                        </div>
                      </div>
                    </div>
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/setting.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:bg-gray-900 flip-back">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-white dark:bg-black !m-0">
                        <div className="rounded-lg p-5 bg-white flip-back dark:bg-black">
                          <p className="font-semibold text-center  text-[9px] phone:text-[7px]">
                            Training & Consulting
                          </p>
                          <p className="mt-3 text-[9px] text-center phone:text-[7px]">
                            We Train and Consult in areas including Networks and
                            Transmission.
                          </p>
                          {/* <a className="mt-3 flex items-center text-[11px]" href="#">
                            Go to Site <ArrowRight />
                          </a> */}
                        </div>
                      </div>
                    </div>
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/group-large.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-back">
                      <div className="hex-shape w-full h-full flex items-center dark:bg-black justify-center bg-white !m-0">
                        <div className="rounded-lg p-5 bg-white dark:bg-black">
                          <p className="font-semibold text-center text-[9px] phone:text-[7px]">
                            Telecoms Solutions
                          </p>
                          <p className="mt-3 text-[9px] text-center phone:text-[7px]">
                            We provide Voice and Data Services such as (E1,
                            VOIP, Dark Fiber, Point 2 Point, etc.)
                          </p>
                          {/* <a className="mt-3 flex items-center text-[11px]" href="#">
                            Go to Site <ArrowRight />
                          </a> */}
                        </div>
                      </div>
                    </div>
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/arrow-rotate.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-back">
                      <div className="hex-shape w-full h-full flex items-center justify-center dark:bg-black bg-white !m-0">
                        <div className="rounded-lg p-5 bg-white dark:bg-black">
                          <p className="font-semibold text-[9px] text-center phone:text-[7px]">
                            Media Solutions
                          </p>
                          <p className="mt-3 text-[9px] text-center phone:text-[7px]">
                            Specifically designed for Live and On-Demand Online
                            Video and Audio Content Streaming.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/baseline-call-large.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:bg-gray-900 flip-back">
                      <div className="hex-shape w-full h-full flex items-center justify-center dark:bg-black bg-white !m-0">
                        <div className="rounded-lg p-5 bg-white dark:bg-black">
                          <p className="font-semibold text-[9px] text-center phone:text-[7px]">
                            E-Business & Security
                          </p>
                          <p className="mt-3 text-[9px] text-center phone:text-[7px]">
                            These are solutions designed for Web and Mobile
                            Payment, Remittances & Security.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900 flip-front">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/credit-card-large.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
        variants={buttonVarient}
        animate="visible"
        initial="hidden"
        
        className="flex items-center justify-between max-w-full gap-12 overflow-x-auto px-20 py-5 mt-16  tablet:px-10 tablet:grid-cols-4 tablet:bg-gradient-to-b tablet:from-transparent tablet:to-gray-400 tablet:dark:!bg-none smallTablet:px-10 phone:mt-auto phone:py-10">
          {products.map((product, index) => {
            return (
              <Popover
                key={product.name}
                triggerType="menu"
                isShown={displayPopup[0] && displayPopup[1] === index}
                content={
                  <div
                    className="rounded-lg rainbow-bg p-px max-w-[270px] mx-auto"
                    onMouseOver={(e) => setDisplayPopup([true, index])}
                    onMouseOut={(e) => setDisplayPopup([false, index])}
                  >
                    <div className="rounded-lg p-5 text-sm bg-white dark:bg-black">
                      <p>{product.name}</p>
                      <p className="mt-3 text-xs opacity-60">
                        {product.snippet}
                      </p>
                      <a
                        className="mt-3 flex items-center text-xs group hover:text-primary-orange"
                        href={product.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Go to site{' '}
                        <ArrowRight className="transition-all duration-500 ml-1 group-hover:ml-2" />
                      </a>
                    </div>
                  </div>
                }
              >
                <div
                  className={`animate__animated animate__bounce animate__delay-${index}s animate__infinite	infinitew-full z-100 flex  flex-col justify-center`}
                  role="button"
                  onMouseOver={(e) => setDisplayPopup([true, index])}
                  onMouseOut={(e) => setDisplayPopup([false, index])}
                >
                  <div className="w-full flex justify-center pt-5">
                    <div
                      className="h-24 min-w-[6rem] rounded-full shadow-lg shadow-text-primary-orange dark:shadow-lg  cursor-pointer flex items-center justify-center border bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-10 tablet:h-16 tablet:min-w-[4rem]"
                      role="button"
                    >
                      <img
                        src={product.icon}
                        className="h-12 w-auto tablet:h-8"
                      />
                    </div>
                  </div>
                  <p className="mt-4 flex justify-center items-center text-center text-sm group font-semibold text-primary-orange">
                    {product.name}
                  </p>
                </div>
              </Popover>
            );
          })}
        </motion.div>
      </div>
      <SocialIcons />
    </div>
  );
}

export default LightDesign;
