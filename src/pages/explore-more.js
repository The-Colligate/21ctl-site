import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import { motion } from 'framer-motion';
import {
  buttonVarient,
  leftTransitionVarient,
  rightTansitionVarient,
} from '@components/constants/animations';
import CountUp from 'react-countup';
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
                  Welcome to 21st {' '}
                  <span className="text-primary-orange leading-8">Century Technologies </span>
                </h1>
                {/* <p className="text-2xl text-white text-center mt-6 largeTablet:text-xl smallTablet:text-lg">
                  We provide reliability, security, and high traffic handling
                  for a seamless customer experience
                </p> */}
              </div>
            </div>
          </section>

          <section className="sm:px-20 px-5 py-28 flex sm:flex-row flex-col w-full justify-center">
            <div className="w-full h-full">
              <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675247065/21ctl/Group_56028_dxcfxm.svg" className="object-cover w-full h-full" />
              {/* <img src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675237353/21ctl/Chairman_zlqbo7.jpg" className="object-cover w-full h-full" /> */}
            </div>
            <div className="sm:ml-10 ml-0 sm:mt-0 mt-8 text-base">
              <p>
                In the last 25 years, we have been investing in compelling
                Digital Infrastructure in five key areas:
              </p>
              <ul className="list-diamondStar ml-5 my-4">
                <li>
                  Technology: As we all know poverty is a bigger indicator of
                  lack of access to Technologies than geography.
                </li>
                <li>Power: Renewable energy / Turbine power plant</li>
                <li>Payment</li>
                <li>Security</li>
                <li>People</li>
              </ul>
              <p>
                Because of the importance of people to our future and Africa in
                general, we have invested in an Academy to do the following:{' '}
              </p>
              <li>
                {' '}
                Build a workforce development program that will continue to
                build a resilient, digitally inclusive future for Africa
              </li>
              <li>
                {' '}
                Build a pipeline of Technology workers to strengthen our
                capacity
              </li>
              <li>
                {' '}
                Empower customers and consumers to ensure everyone has the skill
                and ability to participate in the digital world
              </li>
              <li> Upskill the existing workforce</li>
              <li> Create opportunities for success for young Africans</li>
              <li>
                {' '}
                Provide mentorship, professional development resources and
                support
              </li>
              <li>
                {' '}
                To give the students the best learning environment and to better
                our tech community
              </li>
              <li>
                {' '}
                Create subject matter experts in every area of our operations
                and services
              </li>
              <li> Making the African workforce employable</li>
              <li> Remove barriers for people seeking digital skills</li>
              <li>
                {' '}
                Provide sustainable learning laboratories and workshops for
                hands-on instrumental learning
              </li>
              <li>
                {' '}
                Working with ecosystems of partners, local and international
                educational institutions
              </li>
              <li>
                {' '}
                Offer scholarships to cover tuition fees to our students in
                various educational institutions and training centers
              </li>

              <p className="font-bold">
                In my candid opinion, Nigeria possesses trillion-dollar
                opportunities. We have dedicated the Digital Expert Academy
                today to enable African youths translate these opportunities to
                value that can boost our digital economy.
              </p>
            </div>
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
                    motivated talent and strategic alliances.&quot;{' '}
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
            <div className="sm:px-36 px-8 text-5xl font-bold pb-5">
              Our Journey
            </div>
            <div className="sm:px-36 px-8 text-xl font-bold">
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
                      in Lagos and control 85% of wireline in Nigeria by end of
                      2003.
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 p-10 tablet:w-full pt-0">
                  <h2 className="font-bold text-2xl">2002</h2>
                  <ul className="list-disc">
                    <li>
                      Installation & Commissioning of 9.4m KU & 9.3m C band
                      satallite antennas in Lekki .
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
                      MNOs and corporates.
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
                      We signed colocation agreement with Etisalat UAE for
                      Nigeria business occupying 60% of first Datacentre
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
                      {' '}
                      Expansion of our fiber network rollout and services to
                      Ogun State.{' '}
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
                      {' '}
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
                      {' '}
                      The future is bright. Technology and Internet will be at
                      heart of our existence. Technology, Science, Engineering
                      and Social Media shall rapidly transform our world. The
                      information and communications revolution, now underway is
                      spreading across the planet.{' '}
                    </li>
                    <li>
                      {' '}
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
              Meet our Directors and Heads
            </h2>
            <div className="flex mx-20 ">
              <div className="w-2/4 flex flex-col items-center">
                <img
                  src="/logo/blank-profile-picture.svg"
                  className="w-2/4 pb-5  rounded-full"
                />
                <p className="break-words w-3/5 text-center">
                  COO of KonetPay and Head of Digital Academy
                </p>
              </div>
              <div className="w-2/4 flex flex-col items-center">
                <img
                  src="/logo/blank-profile-picture.svg"
                  className="w-2/4 pb-5  rounded-full "
                />
                <p className="break-words w-3/5 text-center">
                  Head of Security
                </p>
              </div>
              <div className="w-2/4 flex flex-col items-center">
                <img
                  src="/logo/blank-profile-picture.svg"
                  className="w-2/4 pb-5  rounded-full"
                />
                <p className="break-words w-3/5 text-center">
                  Head of 21st Century Energy
                </p>
              </div>
              <div className="w-2/4 flex flex-col items-center">
                <img
                  src="/logo/blank-profile-picture.svg"
                  className="w-2/4 pb-5  rounded-full"
                />
                <p className="break-words w-3/5 text-center">
                  Head of 21st Century Digital Infrastructrue Limited
                </p>
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

export default ExploreMore;
