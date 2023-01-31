import React,{ useEffect } from 'react';
import Head from 'next/head';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import { motion,useAnimation } from 'framer-motion';
import { leftTransitionVarient, rightTansitionVarient, scrollVariant } from '@components/constants/animations';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

const Security = () => {
  const control = useAnimation()
const [ref, inView] = useInView()

console.log(inView)
useEffect(() => {
  console.log(inView)
  if (inView) {
    console.log("visible")
    control.start("visible");
  } else {
    control.start("hidden");
    console.log("hidden")
  }
}, [control, inView]);
  return (
    <>
      <Head>
        <title>Security - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[1]">
          <LightNavbar />

          <section className=" sm:px-36  my-5">
            {/* <div className="flex items-center h-full">
              <div className="max-w-3xl">
                <h1 className="text-7xl font-bold tracking-normal font-lato text-white whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">
                
                  <span className="text-primary-orange leading-8">Elevate</span> Your Business{"'"}s Cybersecurity
                </h1>
                <p className="text-2xl text-white opacity-60 mt-6 largeTablet:text-xl smallTablet:text-lg">
                Stay protected in the digital world with our cutting-edge cybersecurity solutions
                </p>
                <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                Contact Us
              </button>
              </div>
  </div> */}
            <div className='flex px-22  my-0 items-center justify-between space-x-16 tablet:px-10 tablet:flex-col tablet:space-x-0 pt-28'>
              <motion.div
                variants={leftTransitionVarient}
                animate="visible"
                initial="hidden"


                className='w-full'>
                <h1 className="text-7xl font-bold tracking-normal font-lato text-black dark:text-white whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl">

                  <span className="text-primary-orange leading-8">Elevate</span> Your Business{"'"}s Cybersecurity
                </h1>
                <p className="text-2xl text-black dark:text-white opacity-60 mt-6 largeTablet:text-xl smallTablet:text-lg">
                  Stay protected in the digital world with our cutting-edge cybersecurity solutions
                </p>
                <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                  <a href="mailto:commercial@21ctl.com">
                  Contact Us
                  </a>
                
                </button>
              </motion.div>
              <motion.div
                variants={rightTansitionVarient}
                animate="visible"
                initial="hidden" className='w-[100%]'>
                <img
                  src='https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058154/21ctl/logo/security_uitcej.svg'
                  width={2000}
                  height={2000}
                  className=" tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"
                />
              </motion.div>

            </div>
          </section>

          <section className='sm:px-36 px-8 my-10'>
            <div className="flex flex-col items-center">
              <div className="text-lg font-semibold pb-5">
                Our statistics reveal more about us.
              </div>
              <div className="figures flex sm:flex-row flex-col sm:space-x-8 space-x-0">
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    <CountUp
                      start={0}
                      end={1000}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                    {/* 200+ */}
                  </p>
                  <span className="font-light">Business Supported</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    {/* 25+ */}
                    <CountUp
                      start={0}
                      end={25}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                  </p>
                  <span className="font-light">Years Experience</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    {/* 14M+ */}
                    <CountUp
                      start={0}
                      end={14}
                      duration={2.75}
                      prefix=""
                      suffix="M+"
                    />
                  </p>
                  <span className="font-light">Satisfied Customers</span>
                </div>
                <div className="text-center">
                  <p className="text-primary-orange text-4xl font-semibold">
                    {/* 100+ */}
                    <CountUp
                      start={0}
                      end={100}
                      duration={2.75}
                      prefix=""
                      suffix="+"
                    />
                  </p>
                  <span className="font-light">Completed Projects</span>
                </div>
              </div>
            </div>
          </section>


          <section className="sm:mb-0 mb-16 py-20 mx-20 tablet:mx-10">
            <div className="flex items-center space-x-10 space-y-0  tablet:flex-col-reverse">
              <div className="w-[40%]  tablet:mt-10  tablet:mx-10 tablet:w-full">
                <motion.img variants={leftTransitionVarient}
                ref={ref}
                animate="visible"
                // animate={control}
                initial="hidden"
             
                src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058155/21ctl/logo/security_operations_r2jwsl.svg"
               
                height={650}
                width={550}
                  className="rounded-2xl h-96 w-[100%] tablet:h-80"
                />
              </div>
              <motion.div
              ref={ref}
                variants={rightTansitionVarient}
                animate="visible"
                initial="hidden"
                // animate={control}
                className="flex-1 mb-5 w-[60%] tablet:w-full">
                <h1


                  className="sm:text-5xl text-3xl font-semibold tracking-medium mb-8">
                  <span className="text-primary-orange">Managed </span>{' '}
                  cybersecurity services
                </h1>

                <motion.p
                  variants={scrollVariant}
                  animate="visible"
                  initial="hidden"

                  className="text-lg text-justify">
               We specialize in providing a wide range of cybersecurity services to help organizations protect their sensitive information and infrastructure from cyber threats. Our security platform offers a comprehensive set of tools and technologies to help businesses manage cyber risks and stay compliant with regulatory requirements.
<br/><br/>
One of the key services offered by us is threat management, which involves identifying, analyzing and mitigating potential cyber threats before they can cause damage to the organization. We also provide managed detection and response, which allows businesses to quickly detect and respond to security incidents in real-time. Additionally, we offer managed cloud security to help protect sensitive data and applications hosted in the cloud, and provide data backup solutions to ensure that critical information can be recovered in the event of a disaster. We also provide identity verification services to help organizations secure their digital identities and prevent unauthorized access to sensitive information. All these services are backed by a global network that ensures zero downtime and maximum availability.
                </motion.p>
              </motion.div>
            </div>
          </section>
          <section>
            <div className=" flex items-center overflow-x-hidden justify-around rounded tablet:flex-col  tablet:m-5">
              {/* <div className="cableCard  rounded relative flex justify-center  phone:h-[220px]"> */}

              <div className="pl-10 w-[60%] mx-10 flex flex-col h-full justify-center tablet:pl-5 tablet:w-full">
                <h1 className="text-5xl font-semibold tablet:text-2xl tracking-medium mb-8  tablet:mb-2">
                  <span className="text-primary-orange">Managed </span>
                   Network Security Services
                </h1>
                <p className="leading-8 text-xl  tablet:text-lg">
                The company specializes in providing network security services to help organizations protect their networks and infrastructure from cyber threats. They offer a range of solutions that can be tailored to meet the specific needs of different types of businesses.
<br/><br />
One of the key services offered by the company is Secure Access Service Edge (SASE), which combines network security functions like firewall, VPN, and zero trust network access into a single, cloud-native platform. This allows businesses to secure their networks and remote users with a unified solution. Additionally, the company offers managed firewall services, which involves managing and monitoring the organization{"'"}s firewall to ensure that it is configured correctly and is able to detect and prevent cyber threats. The managed firewall service can be provided for various firewall solutions such as Next-Generation Firewall (NGFW), Stateful Firewall, and Application Firewall. The company also provides regular updates and patches to ensure that the firewall is up-to-date with the latest security features and threat intelligence.
                </p>
                <button className="bg-primary-orange w-32 rounded-xl font-semibold text-white py-3 px-6 my-6">
                <a href="mailto:commercial@21ctl.com">
                  Reach Us
                  </a>
                </button>    </div>
              <div className='w-[40%] tablet:w-full tablet:px-10'>
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058153/21ctl/logo/threat-protection_usjnjk.png"
                  className='rounded-2xl'
                />
              </div>
              {/* </div> */}
            </div>
          </section>

          <section className="px-20 mt-20 vision-mission-section tablet:px-0">
            <div className=" mr-0 flex justify-around items-center  tablet:m-10 tablet:flex-col tablet:flex-col-reverse">
            <div className="flex items-center justify-start w-[50%] tablet:w-full">
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058146/21ctl/logo/ddos-protection_bsxw5k.png"
                  className=""
                  height={581}
                  width={444}
                />
              </div>
              <div className="w-[60%] tablet:w-full">

                <div className="tablet:my-5 mb-4 ">
                  <h1 className="text-5xl font-semibold tablet:text-2xl tracking-medium mb-8  tablet:mb-2">
                  Security   <span className="text-primary-orange">Expert Training </span>
                 
                  </h1>
                  <p className="text-[18px] text-[#2e2e2c] dark:text-white  text-justify tablet:text-[18px] mb-4">
                  The company specializes in providing security expert training services to help organizations develop the skills and knowledge needed to protect their networks and infrastructure from cyber threats. They offer a wide range of training programs that can be tailored to meet the specific needs of different types of businesses and organizations.
<br /> <br />
One of the key services offered by the company is training in threat management, which involves teaching personnel how to identify, analyze and mitigate potential cyber threats before they can cause damage to the organization. The company also provides training in cloud security, which helps individuals understand how to secure and protect sensitive data and applications hosted in the cloud. Additionally, the company offers training in security administration, which covers the basics of security operations such as how to create and implement security policies, how to use security tools and technologies, and how to identify and respond to security incidents. All training is provided by certified security experts with years of experience in the field. The company also provides certifications for the trainees that can boost their career opportunities.

                  </p>
                  <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                  <a href='mailto:commercial@21ctl.com'>  Contact Us</a>
                  </button>
                </div>

              </div>

              
            </div>
            <div className=" mr-0 mt-20 flex justify-between items-center  tablet:m-10  tablet:flex-col">
              
              <div className="w-[40%] tablet:w-full">

                <div className="tablet:my-5 mb-4">
                  <h1 className="text-4xl font-semibold tablet:text-2xl tracking-medium mb-8  tablet:mb-2">
                    <span className="text-primary-orange">Managed Security Operations Center Services </span>

                  </h1>
                  <p className="text-[18px] text-[#2e2e2c] dark:text-white  text-justify tablet:text-[18px] mb-4">
                    21CTL Managed SOC Services offers real-time threat intelligence, data processing and incident response for cost-effective enterprise security
                  </p>
                  <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                    <a href='mailto:commercial@21ctl.com'>  Contact Us</a>
                  </button>
                </div>

              </div>

              <div className="flex items-center justify-end w-[50%] tablet:w-full">
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058155/21ctl/logo/security_operations_r2jwsl.svg"
                  className=""
                  height={581}
                  width={444}
                />
              </div>
            </div>
          </section>
          <section className="mx-20 my-20 tablet:mx-0 tablet:my-10">
            <div className=" mr-0 flex justify-between items-center  tablet:m-10 tablet:flex-col">
            
              <div className="w-[50%] tablet:w-full">

                <div className="tablet:my-5 mb-4 w-4/5 tablet:w-full">
                  <h1 className="text-5xl font-semibold tablet:text-2xl tracking-medium mb-8  tablet:mb-2 ">
                    <span className="text-primary-orange">SmartBackup </span>

                  </h1>
                  <p className="text-[18px] text-[#2e2e2c] dark:text-white  text-justify tablet:text-[18px] mb-4">
                    SmartBackup is an automated configuration backup solution that schedules automatic backups, monitors them from a dashboard interface, performs automatic network configuration backup procedures, verifies that they{"'"}ve been completed correctly, and provides easy management of devices for compliance.
                  </p>
                  <button className="bg-primary-orange rounded-xl font-semibold text-white py-3 px-6 my-6">
                   <a href='mailto:commercial@21ctl.com'>  Contact Us</a>
                  </button>
                </div>

              </div>
              <div className="flex items-center justify-end w-[50%] tablet:w-full">
                <img
                  src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058156/21ctl/logo/security-back-up_iyukbr.svg"
                  className="w-full"
                  // height={581}
                  // width={444}
                />
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

export default Security;
