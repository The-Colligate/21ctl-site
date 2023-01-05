import { LightNavbar } from '@components/layout/';
import { ArrowRight } from '@icons/index';
// import { Popover } from "@nextui-org/react";
import { useState } from 'react';
import { Popover} from 'evergreen-ui'


function LightDesign() {
  const [displayPopup,setDisplayPopup] = useState([false, -1]);

 
  const products = [
    {
      icon: '/icons/home/baseline-call.svg',
      name: 'Communication',
      snippet:
        'We build, provide one to one, one to many, many to many, communication infrastructures and platforms, supporting millions of users transactions and variety of business processes',
      link: '#',
    },
    {
      icon: '/icons/home/cloud-computing.svg',
      name: 'Digital Infrastructure',
      snippet:
        ' We have connectivity, data centers & edge computing centers, Towers, Network & 5G enabled platforms for SMBs, SMEs and large Enterprises.',
      link: '/digital',
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
      name: 'Konet Space',
      snippet:
        'Konet space ecosystem allows users and businessess to use their Konet mail to access variety of apps, solutions, products and support services.',
      link: '#',
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
      link: '#',
    },

    {
      icon: '/icons/home/group.svg',
      name: 'People',
      snippet:
        'The Digital Academy is a training hub where creative thinkers and distruptors are exposed to highly equiped pre-programmed and mataversed laboratories while interacting with experts in domains such as Cloud computing, Artificial Intelligence, Cyber security, Data analytics and so much more.',
      link: '#',
    },
    {
      icon: '/icons/home/security.svg',
      name: 'Security as Service',
      snippet:
        '21ctl manages your business security, providing cloud-based security service and in-house security management. Our SECaaS business model is available for integration into a corporate infrastructure.',
      link: '#',
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
        <div className="flex items-center w-full h-full px-20 flex-grow largeTablet:mt-10 largeTablet:flex-wrap phone:flex-grow-0 tablet:px-10 tablet:mt-10 smallTablet:px-5">
          <div className="w-full h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-lato font-black whitespace-pre-wrap largeTablet:text-6xl tablet:text-5xl smallTablet:text-4xl">
                <span className="text-primary-orange">Innovative</span>{' '}
                Solutions for all Communication Needs
              </h1>
              <p className="text-lg mt-6 largeTablet:text-xl smallTablet:text-lg">
                21st Century Technologies Limited, an ecosystem Technology
                company, building bold, ambitious and audacious digital
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
              </p>
            </div>
          </div>
          <div className="w-full h-full min-w-[50%]">
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
          </div>
        </div>
        <div className="flex items-center justify-between max-w-full gap-12 overflow-x-auto px-20 py-5 mt-16  tablet:px-10 tablet:grid-cols-4 tablet:bg-gradient-to-b tablet:from-transparent tablet:to-gray-400 tablet:dark:!bg-none smallTablet:px-10 phone:mt-auto phone:py-10">
          {products.map((product, index) => {
            return (
              <Popover
                key={product.name}
                
                triggerType='menu'
                isShown={displayPopup[0] && displayPopup[1] === index}
                  
                content={<div className="rounded-lg rainbow-bg p-px max-w-[270px] mx-auto"
                onMouseOver={(e)=>setDisplayPopup([true, index]) } 
                onMouseOut={(e)=>setDisplayPopup([false, index]) }
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
                  className={`animate__animated animate__bounce animate__delay-${index}s animate__infinite	infinitew-full z-10 flex  flex-col justify-center`}
                  role="button"
                  onMouseOver={(e)=>setDisplayPopup([true, index]) } 
                  onMouseOut={(e)=>setDisplayPopup([false, index]) }
                >
                  <div className="w-full flex justify-center pt-5">

                  
                    <div
                      className="h-24 min-w-[6rem] rounded-full shadow-lg shadow-text-primary-orange dark:shadow-lg  cursor-pointer flex items-center justify-center border bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-10 tablet:h-16 tablet:min-w-[4rem]"
                      role="button"
                    >
                      <img src={product.icon} className="h-12 w-auto tablet:h-8" />
                    </div>
                   
                  </div>
                  <p className="mt-4 flex justify-center items-center text-center text-sm group font-semibold text-primary-orange">
                      {product.name}
                    </p>
                  </div>
                        </Popover>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col fixed z-[1] p-2 right-0 space-y-4 top-1/3 rounded-r bg-white tablet:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="Black"
          className="bi bi-whatsapp cursor-pointer w-6"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
        <img className="cursor-pointer w-6" src="/icons/home/instagram.svg" />
        <img className="cursor-pointer w-6" src="/icons/home/phone.svg" />
        <img className="cursor-pointer w-6" src="/icons/home/linkedin.svg" />
      </div>
    </div>
  );
}

export default LightDesign;
