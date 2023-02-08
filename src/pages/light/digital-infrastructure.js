import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Footer, SocialIcons } from '@components/layout/';
import { ArrowRight } from '@icons/index';
import { Popover } from 'evergreen-ui';
import { DigitalNavbar } from '@components/layout';
import HeroImage from '/public/logo/hero-image.png';
import apapa from '/public/data-centers/apapa-center.png';
import ikeja from '/public/data-centers/ikeja-center.png';
import lekki from '/public/data-centers/lekki-center.png';

const DigitalInfrastructure = () => {
  const links = [
    {
      name: 'Connectivity',
      link: '#',
    },
    {
      name: 'Data Centers',
      link: '#',
    },
    {
      name: 'Microcell',
      link: '#',
    },
    {
      name: 'Communication Towers',
      link: '#',
    },
    {
      name: '5G Readiness Infrastructure',
      link: '#',
    },
    {
      name: 'Cybersecurity',
      link: '#',
    },
  ];

  return (
    <>
      <Head>
        <title>Digital Infrastructure - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="  max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="w-full min-h-screen flex flex-col z-[1]">
          <div className="digital-main z-50">
            <DigitalNavbar />
            <section className="my-10 ">
              <div className="flex sm:px-36 px-8 my-16 items-center justify-between space-x-16 tablet:flex-col tablet:space-x-0 pt-28">
                <div className="max-w-xl">
                  <h1 className="text-7xl tracking-normal font-lato font-medium whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] leading-8">
                      Digital Infrastructure
                    </span>
                  </h1>
                  <p className="text-2xl mt-6 largeTablet:text-xl font-[20px] smallTablet:text-lg">
                    We provide reliability, security, and high traffic handling
                    for a seamless customer experience
                  </p>
                  <button className="bg-[#319FD9] rounded-xl  text-white py-2 px-6 my-6">
                    Get Started
                  </button>
                </div>
                <div>
                  <img
                    src={HeroImage}
                    width={650}
                    className="tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                  />
                </div>
              </div>

              <div className="flex justify-center flex-wrap">
                {links.map((link, index) => (
                  <div key={index} className="flex items-center pr-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#7BBC42"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>

                    <span>{link.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <hr />
          <section className="sm:px-36 px-8 my-10">
            <div className="flex flex-col items-center">
              <div className="text-lg font-semibold pb-5">
                Our statistics reveal more about us.
              </div>
              <div className="figures flex sm:flex-row flex-col sm:space-x-8 space-x-0">
                <div className="text-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold">
                    200+
                  </p>
                  <span className="font-light">Businessess Supported</span>
                </div>
                <div className="text-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold">
                    25+
                  </p>
                  <span className="font-light">Years Experience</span>
                </div>
                <div className="text-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold">
                    45M+
                  </p>
                  <span className="font-light">Satisfied Customers</span>
                </div>
                <div className="text-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold">
                    100+
                  </p>
                  <span className="font-light">Completed Projects</span>
                </div>
              </div>
            </div>
          </section>

          <hr />
          <section className="mx-20 my-10 phone:mb-0 relative tablet:mx-10">
            <div className="w-2/5 mb-20 phone:w-full">
              <p className="text-[#319FD9] font-[14px]">
                {'Regional Network Gateway Nigeria'.toUpperCase()}
              </p>
              <p className="font-bold text-[35px] tablet:text-[25px]">
                Connect to every
                <br /> Hyperscale Cloud Provider
              </p>
              <p className="text-[16px]">
                We have recently installed the 1st regional network gateway in
                Nigeria to support direct connectivity to major Data Centres
                around the globe in partnership with PCCW.
              </p>
              <button className="bg-[#319FD9] rounded-xl  text-white py-2 px-6 my-6">
                Get Started
              </button>
            </div>
            <div className="flex phone:flex-col phone:text-center">
              <div className="w-1/5 tablet:w-2/5 phone:w-full ">
                <h3 className="phone:font-extrabold">5G Readiness</h3>
                <p>
                  Infrastructure with edge computing capabilities to support 5th
                  generation technology standards
                </p>
              </div>
              <div className="absolute bottom-10 w-1/5 left-2/4  tablet:w-2/5 phone:relative phone:bottom-0 phone:w-full phone:left-0  phone:my-10">
                <h3 className="phone:font-extrabold">Data Centers</h3>
                <p>
                  His defective nor convinced residence own. Connection has put
                  impossible own apartments boisterous.
                </p>
              </div>
              <div className="absolute top-32 mx-auto w-1/5 right-0  tablet:w-2/5 tablet:top-28 phone:relative phone:top-0 phone:w-full phone:left-0">
                <h3 className="phone:font-extrabold">Towers</h3>
                <p>
                  Wide range communication infrastructure and managed service to
                  enable wireless connectivity connecting people, devices and
                  networks.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-center items-center mx-20 phone:my-5">
              <img src="/icons/potential-partners.png" height={100} />
            </div>
            <div className="flex flex-col justify-center items-center text-center w-3/4 mx-auto phone:w-3/3">
              <h2 className="text-[42px] text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] my-4 tablet:text-[28px]">
                21st century is a Digital professional service Infrastructure
                company with 25 years experience{' '}
              </h2>
              <p className="text-[20px]">
                Combine our capabilities with data Center operational knowledge,
                within a critical environment, connecting our customers. Our
                proven track record in delivering value to the customer.
                Providing sustainable solutions for today and tomorrow
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[26px] mt-5 px-28 tablet:grid-cols-1 tablet:px-10">
              <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
                <div className="p-5 text-black dark:text-black">
                  <h3 className="text-3xl font-medium tracking-wide ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81]">
                      Ikeja{' '}
                    </span>{' '}
                    Data Center
                  </h3>
                  <p className="py-2 pt-4 tracking-wide text-lg leading">
                    Our Ikoyi data center is designed to be energy-efficient,
                    maintainable, and secure, with redundant 8MW utility power.
                  </p>
                </div>
                <img src={ikeja} className="inline-block w-full fit" />
              </div>
              <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
                <div className="p-5 text-black dark:text-black">
                  <h3 className="text-3xl font-medium tracking-wide ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81]">
                      Ikoyi{' '}
                    </span>{' '}
                    Data Center
                  </h3>
                  <p className="py-2 pt-4 tracking-wide text-lg leading">
                    Our six-story data center in Africa is innovative and
                    equipped with a 10MW Turbine system, providing ample power
                    and space for clients to grow.
                  </p>
                </div>
                <img src={lekki} className="inline-block w-full h-fit" />
              </div>
              <div className="flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700">
                <div className="p-5 text-black dark:text-black">
                  <h3 className="text-3xl font-medium tracking-wide ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81]">
                      Apapa{' '}
                    </span>{' '}
                    Data Center
                  </h3>
                  <p className="py-2 pt-4 tracking-wide text-xl leading">
                    Our Apapa data center is a large, multi-tenant facility in
                    Africa with multiple carrier and utility feeds and strong
                    electrical and mechanical redundancy.
                  </p>
                </div>
                <img src={apapa} className="inline-block w-full h-fit" />
              </div>
            </div>
          </section>
          <section className="five-gr py-32 sm:mt-0 mt-10 flex flex-col justify-center items-center  mx-20 phone:mx-10">
            <div className="max-w-6xl flex sm:flex-row flex-col tablet:flex-col tablet:justify-center tablet:text-center tablet:items-center w-full border-solid border-2 py-5 pl-5 border-[#DEE1E6] rounded-3xl items-center m-auto sm:h-full  bg-white ">
              <div className="w-full basis-1/3 tablet:basis-3/3  sm:px-0 px-5 ">
                <img src="/icons/5G readiness.png" className="" />
              </div>
              <div className="px-5 sm:py-0 py-10 basis-3/3 text-black dark:text-black">
                <p className="text-xl text-left pt-3 text-[16px]">
                  Infrastructure designed with an extended capacity to enable
                  next-generation user experiences, empower new deployment
                  models and deliver new services.
                </p>
              </div>
            </div>
            <img src="/icons/5G.png" className="mt-5" />
          </section>

          <section className="locations">
            <div className="overlay  text-white px-20 flex flex-col justify-center phone:px-10">
              <h2 className=" text-[50px] text-white font-bold  phone:text-[30px]">
                Owned and <br /> Operated Fiber Diversity
              </h2>
              <ul className="list-disc">
                <li>
                  2000+km of installed Open Access Fiber Infrastructure in Lagos
                  & Ogun State
                </li>
                <br />
                <li>
                  21st Century resilient & redundancy network with 99.999%
                  availability
                </li>
                <br />
                <li>
                  Sustainable protected resilient, s ecured reliable Fiber
                  infrastructure in Lagos
                </li>
                <br />
                <li>
                  Already connected to top 1000 companies in Nigeria including
                  all operators and IXP (Internet exchange point of Nigeria)
                </li>
              </ul>
            </div>
          </section>
          <section className="my-5">
            <div className="flex justify-between mx-10 my-5">
              <div className=" w-1/5">
                <Link href="/">
                  <img
                    src="/light-logo.svg"
                    className="dark:hidden w-16 tablet:w-14"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="/light-logo_dark.svg"
                    className="dark:block hidden w-16 tablet:w-14"
                  />
                </Link>
                <div>
                  5 Jerimiah Ugwu Street,
                  <br />
                  Off babatunde Anjous,
                  <br />
                  Lekki Phase 1,
                  <br />
                  Lagos, Nigeria
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Company</h4>
                <p>About Us</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Pricing</p>
              </div>
              <div>
                <h4 className="font-semibold">Resources</h4>
                <p>Templates</p>
                <p>Tutorials</p>
                <p>Free resources</p>
                <p>Contract templates</p>
              </div>
              <div className="flex flex-col basis-1/5">
                <h4 className="font-semibold">Contact Us</h4>
                <div className="flex my-3">
                  <input
                    type="text"
                    class=" block w-full px-3 py-2 bg-[#F9F9F9]  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                  />{' '}
                  <button className="bg-[#319FD9]  text-white py-2 px-4 w-36">
                    Email Us
                  </button>
                </div>
                <div className="flex">
                  <a
                    href="https://api.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[#F64E1F] border-solid border-2  p-2 mr-2 rounded-full "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#F64E1F"
                      className="bi bi-whatsapp cursor-pointer w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/21ctlcom?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[#F64E1F] border-solid border-2  p-2 mr-2 rounded-3xl "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#F64E1F"
                      class="bi bi-instagram cursor-pointer w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                  <a
                    href="tel:+23412707777"
                    className="border-[#F64E1F] border-solid border-2  p-2 mr-2 rounded-3xl "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#F64E1F"
                      class="bi bi-telephone cursor-pointer w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/21st-century-technologies_2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[#F64E1F] border-solid border-2 p-2 mr-2 rounded-3xl "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#F64E1F"
                      class="bi bi-linkedin cursor-pointer w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="text-center">
              Copyright &copy; 21st Century Technology Limited 2023. All Rights
              Reserved.
            </div>
          </section>

          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default DigitalInfrastructure;
