import React from "react";
import Head from "next/head";
import { LightNavbar, Footer, SocialIcons } from "@components/layout/";
import Link from "next/link";

const ExploreMore = () => {
  return (
    <>
      <Head>
        <title>Explore More - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex justify-center flex-col z-[1]">
          <LightNavbar />
          <section className="about-us sm:px-36 px-8 my-16 ">
            <div className="flex items-center justify-center h-full">
              <div className="max-w-3xl">
                <h1 className="text-7xl font-bold tracking-normal text-center font-lato text-white whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                  Welcome to 21st{" "}
                  <span className="text-primary-orange leading-8">
                    Century Technologies{" "}
                  </span>
                </h1>
                {/* <p className="text-2xl text-white text-center mt-6 largeTablet:text-xl smallTablet:text-lg">
                  We provide reliability, security, and high traffic handling
                  for a seamless customer experience
                </p> */}
              </div>
            </div>
          </section>

          <section className="sm:px-20 px-5 py-20">
            <div className="flex sm:flex-row flex-col w-full justify-center items-start">
              <div className="max-w-lg w-full h-full">
                <div>
                  <img
                    src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675261998/21ctl/chairman_mrizd7.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center mt-5">
                  <h3 className="text-3xl font-bold">Wale Ajisebutu</h3>
                  <p className="text-md font-medium">
                    CEO/Chairman 21st Century Technologies
                  </p>
                </div>
              </div>
              <div className="flex-1 sm:ml-10 ml-0 sm:mt-0 mt-8 text-base text-justify tablet:px-10">
                <p className="max-w-3xl text-xl">
                  {/* 21st Century Technologies, an ecosystem Technology Group of
                  companies, building bold, ambitious and audacious digital
                  infrastructure projects. Integrated infrastructure that is
                  sustainable, resilient, secure, low latency, protected that
                  will enable our customers to adopt cutting edge technology to
                  accelerate technology modernization, exceptional corporate
                  performance and transformation. We are well positioned and
                  fully mobilized to provide unmatched operational excellence
                  and unrivaled customer experience. <br />
                  <br /> Build many internationally recognized technology Hubs
                  that will meet increasing demand for distributed digital
                  infrastructure and support enterprises of all sizes by
                  enabling the integration of all technology access business
                  functions. */}
                  Our vision is to use state of the art infrastructure to offer
                  world class services to our customers and solve critical
                  problems for the industries through motivated talents and
                  skilled workforce in partnership with pioneering global best
                  in class subject matter experts with sustainability at the
                  heart of everything we do.
                </p>
                <br />
                <ul className="list-decimal text-xl">
                  There are 5 critical elements in our vision
                  <li>Infrastructure</li>
                  <li>Customers</li>
                  <li>People</li>
                  <li>Partnerships</li>
                  <li>Sustainability</li>
                </ul>
                <br />
                <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>
                    {" "}
                    <q className="text-xl">
                      The only challenges open to mankind are ourselves.
                    </q>
                  </p>
                </blockquote>
                <p className="max-w-3xl text-xl pl-20">
                  In our business we do not discuss challenges but always
                  identify mandatory steps and actions we have to take to
                  fulfill our visions. We are fully focused on a trillion dollar
                  opportunities Nigeria presents as a country.
                </p>
                <br />
                <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>
                    {" "}
                    <q className="text-xl">
                      We are pioneering in everything we do
                    </q>
                  </p>
                </blockquote>
                <p className="max-w-3xl pl-20 text-xl">
                  The first company to build a fiber connectivity and Data
                  Centre infrastructure in Nigeria and we immediately boarded
                  the top 1000 companies   including the Mobile operators. They
                  all remain our customers till date.
                </p>
                <br />
                <p className="text-xl font-bold">Current point </p>
                <p className="text-xl">
                  Today, we are rolling out compelling digital infrastructure
                </p>
                <ul className="list-decimal text-xl">
                  <li className="font-bold">CONNECTIVITY</li>
                  <li className="font-bold">TECHNOLOGY PLATFORMS</li>
                  <li className="font-bold">DATA CENTERS</li>
                  <li className="font-bold">POWER</li>
                  <li className="font-bold">PEOPLE</li>
                  <li className="font-bold">PAYMENT</li>
                  <li className="font-bold">SECURITY</li>
                </ul>
                <br />
                <p className="font-bold text-2xl">FUTURE</p>
                <p className="">
                  EVERY COMPANY IN THE WORLD TODAY IS FACING DISRUPTION AS
                  DIGITAL EMPOWERS COMPETITORS TO DO THINGS BETTER, FASTER AND
                  CHEAPER. WE ARE WELL POSITIONED AND FULLY MOBILIZED TO DO THE
                  FOLLOWING:
                </p>
                <ul className="list-decimal ">
                  <li>SOLVING COMPLEX PROBLEMS FOR THE INDUSTRIES</li>
                  <li>FAST TRACT DIGITAL ECONOMY</li>
                  <li>ACCELERATE DIGITAL TRANSFORMATION </li>
                  <li>DRIVE DIGITAL TECHNOLOGY ADOPTION </li>
                  <li>
                    ENABLE THE USE OF TECHNOLOGY AS A RESOURCE LIBERATING
                    MECHANISM, AN ENABLER AND TOOL FOR DEVELOPMENT AND SKILL
                    EMPOWERMENT.
                  </li>
                </ul>
                <br />
                <p className="font-bold text-2xl">KEY VALUES</p>
                <ul className="list-decimal">
                  <li>BOLD AND AUDACIOUS VISION AND MASTERY OF EXECUTION</li>
                  <li>TRACK RECORDS</li>
                  <li>GOOD CORPORATE GOVERNANCE & STRUCTURE </li>
                  <li>SOUND POLICIES AND PROCESSES </li>
                  <li>SKILLED PEOPLE.</li>
                </ul>
                <br />

                <p className="text-center font-bold">
                  WE ARE CURRENTLY WAY ABOVE THE CURVE. WINNING MORE AND MORE
                  CRITICAL PROJECTS. TECHNOLOGY IS OUR CORE BUSINESS.
                </p>
              </div>
            </div>
            {/* <div className='w-1/5'>

            </div> */}
          </section>

          <section className="">
            <h2 className="text-[36px]  mt-[12vh] font-semibold text-center mb-4">
              Core Values
            </h2>
            <div className="values_grid m-auto ">
              <div className="flex justify-center items-center tablet:my-5">
                <img
                  src="./icons/innovation.svg"
                  className=" w-50 pr-2 "
                  height={50}
                  width={50}
                />
                <p>Innovation</p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="./icons/partnership.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Partnership</p>
              </div>
              <div className="flex justify-center items-center tablet:my-5">
                <img
                  src="./icons/integrity.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Integrity</p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="./icons/inspiring.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Inspiring</p>
              </div>
              <div className="flex justify-center items-center tablet:my-5 sm:ml-0 ml-5">
                <img
                  src="./icons/commitment.svg"
                  className=" w-50 pr-2"
                  height={50}
                  width={50}
                />
                <p>Commitment</p>
              </div>
            </div>
            <div className="mt-5 mb-10 pl-20 h-[600px] flex justify-between items-center  tablet:p-10 tablet:flex-col">
              <div className="w-[50%] tablet:w-full">
                <h2 className="text-5xl font-semibold tablet:text-[24px] mb-4">
                  Vision and Mission
                </h2>
                <div className="tablet:my-5 mb-4">
                  <h3 className="text-[26px] font-semibold opacity-40 tablet:text-[20px] mb-2">
                    MISSION
                  </h3>
                  <p className="text-[24px] text-[#2e2e2c] dark:text-white  text-justify tablet:text-[18px] mb-4">
                    &quot;To use State of the Art Infrastructure to provide
                    world-class solutions to our valued customers through highly
                    motivated talent and strategic alliances.&quot;{" "}
                  </p>
                </div>
                <div>
                  <h3 className=" text-[26px] font-semibold opacity-40 tablet:text-[20px] mb-2">
                    VISION
                  </h3>
                  <p className="text-[24px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[18px]">
                    &quot;To be the foremost integrated ICT solutions provider
                    in Africa.&quot;
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end w-[50%] tablet:w-full">
                <img
                  src="/logo/vision-mission.png"
                  className=""
                  height={734}
                  width={914}
                />
              </div>
            </div>
          </section>
          {/* <section className="sm:px-28 px-8 mt-[12vh]">
                        <div className="m-auto max-w-5xl">
                            <h2 className="text-[36px] font-semibold tablet:text-[26px] mb-4">
                                About the Company
                            </h2>
                            <p className="text-[26px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[16px]">
                                21st Century Technologies is a licensed information
                                communications and technology provider in Nigeria, with a
                                19-year history. The company owns and operates the most
                                extensive optical fibre cable networks in Nigeria, with
                                high-speed internet access and international subsea fibre
                                capacity.
                                <br />
                                <br />
                                21st Century Technologies is also the leading commercial data
                                centre service provider in Nigeria, specializing in the
                                protection of off-site data and server hosting in its
                                state-of-the-art, secure facilities. The company offers bespoke
                                service solutions to government, businesses, and homes with a
                                redundant and multi-homed network backbone. 21st Century
                                Technologies has its head office in Lagos and branches
                                throughout Nigeria.
                            </p>
                        </div>
                        <div className="flex justify-center item-center w-[50vw] h-[50vh]">
    <img src='/logo/21ctl-building.jpg' className="w-[50vw] h-[50vh]" />
</div>
                    </section>
                    */}

          <section className="my-10">
            <div className="sm:px-36 px-12 text-5xl font-bold pb-5">
              Our Journey
            </div>
            <div className="sm:px-36 px-12 text-xl text-justify font-bold">
              21st century is a Digital Infrastructure company with 25 years
              experience and still counting. We are creating an ecosystem
              companies that will address all technology challenges, empower
              people and more importantly, use technology as a resource
              liberalization mechanism and enabler.
            </div>
            <hr />
          </section>
          <section className="flex justify-start items-center">
            <div className="flex-none rotate-90 text-5xl font-extrabold w-[20vw] mx-0 px-0 tablet:hidden">
              1997 - 2002
            </div>
            <div className="grow mr-10 tablet:ml-10">
              <img
                src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675036189/Digital%20Expert%20Academy%20Video/Journey_xsy94x.png"
                // '/logo/journey.png'
              />

              <div className="flex flex-wrap w-full">
                <div className="w-1/3 p-10 tablet:w-full">
                  <h2 className="font-bold text-2xl">1997</h2>
                  <ul className="list-disc">
                    <li>Company registered 29/4/1997</li>
                    <li>
                      Became the sole distributor of gateway computers &
                      printers in Nigeria
                    </li>
                    <li>
                      Commenced importation and distribution of computer papers.
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full">
                  <h2 className="font-bold text-2xl">1999</h2>
                  <ul className="list-disc">
                    <li>
                      Obtained a major contract from the Central Bank of Nigeria
                      (CBN) and major companies in Nigeria to supply the entire
                      computers, printers and infrastructure required for Y2K
                      readiness refresh.
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full">
                  <h2 className="font-bold text-2xl">2000</h2>
                  <ul className="list-disc">
                    <li>Obtained licenses from NCC</li>
                    <li>
                      Commenced the digging and laying of Fiber infrastructure
                      network rollout in Nigeria.
                    </li>
                    <li>
                      Completed first edge Computing Centre with 70meter tower
                      in Nigeria with MTN as anchor tenant
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full pt-0">
                  <h2 className="font-bold text-2xl">2001</h2>
                  <ul className="list-disc">
                    <li>
                      Installation of TDM switches to provide voice & data
                      services.
                    </li>
                    <li>Continuation of Fiber Installation rollout.</li>
                    <li>
                      We initiated, pioneered and linked all the banks to
                      Central Bank of Nigeria (CBN) for real-time update of
                      banking records ad daily returns.
                    </li>
                    <li>
                      Launched data connectivity services for the corporate,
                      MNOS and ISP.
                    </li>
                    <li>
                      We commenced laying of extensive copper network to homes
                      in Lagos and control 85% of Wireline in Nigeria by end of
                      2003.
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full pt-0">
                  <h2 className="font-bold text-2xl">2002</h2>
                  <ul className="list-disc">
                    <li>
                      Installation & Commissioning of 9.4m KU & 9.3m C band
                      satellite antennas in Lekki .
                    </li>
                    <li>Continuation of Fiber Installation rollout.</li>
                    <li>
                      We initiated, pioneered and linked all the banks to
                      Central Bank of Nigeria (CBN) for real-time update of
                      banking records ad daily returns.
                    </li>
                    <li>
                      Launched data connectivity services for the corporate,
                      MNOS and ISP.
                    </li>
                    <li>
                      We commenced laying of extensive copper network to homes
                      in Lagos and control 85% of wireline in Nigeria by end of
                      2003.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="flex justify-start items-center">
            <div className="flex-none rotate-90 text-5xl font-extrabold w-[20vw] mx-0 px-0 tablet:hidden">
              2003 - 2016
            </div>
            <div className="grow mr-10 tablet:ml-10">
              <img
                src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675036189/Digital%20Expert%20Academy%20Video/Journey2_ougsfg.png"
                // '/logo/journey2.png'
              />

              <div className="flex flex-wrap w-full">
                <div className="w-1/3 p-10 tablet:w-full">
                  <h2 className="font-bold text-2xl">2003</h2>
                  <ul className="list-disc">
                    <li>
                      Commenced construction of the first Data Center in Lekki,
                      Lagos, Nigeria
                    </li>
                    <li>
                      Continuation of laying of fiber infrastructure network
                      rollout
                    </li>
                    <li>
                      Installation of robust transmission network in Lagos for
                      MNOs and corporate.
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full">
                  <h2 className="font-bold text-2xl">2004</h2>
                  <ul className="list-disc">
                    <li>
                      Completion of first Data Centre project in Nigeria with
                      British Telecoms as anchor tenant & 3 Edge computing
                      centers and towers with 9Mobile & MTN Nigeria as anchor
                      tenants.
                    </li>
                    <li>
                      Continuation of Fiber infrastructure network rollout.
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full">
                  <h2 className="font-bold text-2xl">2005</h2>
                  <ul className="list-disc">
                    <li>
                      Expansion of our network and fibre infrastructure network
                      rollout to Abuja
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full pt-0">
                  <h2 className="font-bold text-2xl">2006</h2>
                  <ul className="list-disc">
                    <li>
                      Expansion of our network and fiber infrastructure network
                      rollout to Port Harcourt.
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full pt-0">
                  <h2 className="font-bold text-2xl">2007-2016</h2>
                  <ul className="list-disc">
                    <li>
                      We signed co-location agreement with Etisalat UAE for
                      Nigeria business occupying 60% of first Data centre
                      completed in 2004.
                    </li>
                    <li>Acquisition of sites for data centers services.</li>
                    <li>
                      Expansion of fiber infrastructure network rollout &
                      aggressive sale of voice and data services.
                    </li>
                    <li>Building of 3 edge computing centers in Lagos.</li>
                    <li>
                      Suffered a catastrophic setback in 2010 when all our
                      extensive copper infrastructure worth $20million was
                      carted away by copper theft within a space of 12 months. •
                      Massive deployment of MICROWAVE NETWORK to mitigate the
                      effect of Fibre theft.
                    </li>
                    <li>Built over 4000sqm telecoms warehouse with tower</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="flex justify-start items-center">
            <div className="flex-none rotate-90 text-5xl font-extrabold w-[20vw] mx-0 px-0 tablet:hidden">
              2017 - Date
            </div>
            <div className="grow mr-10 tablet:ml-10">
              <img
                src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675185232/21ctl/logo/partners/Journey3_ibikea.png"
                // '/logo/journey3.png'

                className="w-4/5 flex justify-center "
              />

              <div className="flex flex-wrap w-full">
                <div className="w-1/3 p-10 tablet:w-full">
                  <h2 className="font-bold text-2xl">2017 - 2020</h2>
                  <ul className="list-disc">
                    <li> Building of Data Centers. </li>
                    <li>
                      {" "}
                      Expansion of our fiber network rollout and services to
                      Ogun State.{" "}
                    </li>
                    <li>Built two computing Centers in Lagos.</li>
                    <li>
                      Launched cloud services and partner with PCCW to deploy
                      cloud on ramp network gateway in Nigeria.
                    </li>
                    <li>
                      Enter into strategic relationship with Facebook to deploy
                      public Wi-Fi.
                    </li>
                    <li>
                      Completed our first Digital Hub campus in Lagos built on a
                      20000 square meter plot.
                    </li>
                    <li>
                      Set up an academy to train Industry ready and employable
                      skill sets.
                    </li>
                    <li>
                      {" "}
                      Launch of Ikeja computing centre & Tower with Africa
                      finance corporation (AFC) as anchor tenant.
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full">
                  <h2 className="font-bold text-2xl">2021</h2>
                  <ul className="list-disc">
                    <li>Expansion of Fiber Infrastructure to Ogun State.</li>
                    <li>Completion of first Tier IV Data Center in Lekki.</li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full">
                  <h2 className="font-bold text-2xl">2022 - Date</h2>
                  <ul className="list-disc">
                    <li>
                      {" "}
                      The future is bright. Technology and Internet will be at
                      heart of our existence. Technology, Science, Engineering
                      and Social Media shall rapidly transform our world. The
                      information and communications revolution, now underway is
                      spreading across the planet.{" "}
                    </li>
                    <li>
                      {" "}
                      21st Century Technologies limited is fully mobilized and
                      well positioned to deploy Technology and skill to enable
                      citizens and businesses have access to digital solutions
                      that will address daily challenges. Intensify connectivity
                      business principally to close digital infrastructure gap
                      by making available accessible, safe and affordable
                      broadband across gender and businesses in Nigeria.
                    </li>
                    <li>
                      Splitting of 21st Century into 3 companies as follows:
                      21st Century Digital Infrastructure Limited, 21st Century
                      Technologies Limited & Konetpay Nigeria Limited.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="flex justify-center my-10 font-bold text-2xl">
              Meet our Directors and Unit Heads
            </h2>

            <div className="flex sm:flex-row flex-col pb-20 sm:px-20 px-5 justify-center items-start w-full ">
              <Link
                href="/digital-infrastructure"
                className="w-1/4 flex flex-col items-center tablet:pb-10 tablet:w-full "
              >
                <img
                  src="/logo/blank-profile-picture.svg"
                  className="w-1/4 pb-5  rounded-full"
                />
                <p className="break-words w-3/5 text-center">
                  Director, Connectivity
                </p>
              </Link>
              <Link
                href="/platform"
                className="w-1/4 flex flex-col items-center  tablet:pb-10 tablet:w-full"
              >
                <img
                  src="/logo/blank-profile-picture.svg"
                  className="w-1/4 pb-5  rounded-full"
                />
                <p className="break-words w-3/5 text-center">
                  Director, Infrastructure
                </p>
              </Link>
              <Link
                href="/communication"
                className="w-1/4 flex flex-col items-center  tablet:pb-10 tablet:w-full"
              >
                <img
                  src="/logo/blank-profile-picture.svg"
                  className="w-1/4 pb-5  rounded-full"
                />
                <p className="break-words w-3/5 text-center">
                  Director, Data Center
                </p>
              </Link>
              <Link href="/konet" className="w-1/4  tablet:pb-10 tablet:w-full">
                <div className=" flex flex-col items-center">
                  <img
                    src="/logo/blank-profile-picture.svg"
                    className="w-1/4 pb-5  rounded-full"
                  />
                  <p className="break-words w-3/5 text-center">
                    Director, Power
                  </p>
                </div>
              </Link>
              <Link href="/power" className="w-1/4  tablet:pb-10 tablet:w-full">
                <div className="flex flex-col items-center ">
                  <img
                    src="/logo/blank-profile-picture.svg"
                    className="w-1/4 pb-5  rounded-full"
                  />
                  <p className="break-words w-3/5 text-center">
                    Director, Digital Experts Academy
                  </p>
                </div>
              </Link>
              {/* <Link href="/people" className="w-1/4">
              <div className=" flex flex-col items-center">
                <img
                  src="/logo/blank-profile-picture.svg"
                  className="w-1/4 pb-5  rounded-full"
                />
                <p className="break-words w-3/5 text-center">
                Head of Digital Experts Academy
                </p>
              </div>
              </Link> */}
              <Link href="/security" className="w-1/4  tablet:w-full">
                <div className=" flex flex-col items-center">
                  <img
                    src="/logo/blank-profile-picture.svg"
                    className="w-1/4 pb-5  rounded-full "
                  />
                  <p className="break-words w-3/5 text-center">
                    Director, Security
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <Footer />
        </div>
        <SocialIcons />
      </div>
    </>
  );
};

export default ExploreMore;
