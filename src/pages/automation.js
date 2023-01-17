import React from 'react';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import Head from 'next/head';

const Automation = () => {
  return (
    <>
      {' '}
      <Head>
        <title>Automation - 21 CTL</title>
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
          <section className="auto-top-section h-[80vh] px-8 ">
            <div className="flex flex-col items-center justify-center w-full h-full leading-10">
              <h1 className="font-extrabold sm:text-6xl text-4xl text-white text-center">
                21st Century Digital Automation
              </h1>
              <p className="sm:text-2xl text-xl mt-4 text-white text-center">
                Data driven digital automation for enabling transformation
              </p>
            </div>
          </section>

          <section className="sm:px-28 px-8 py-20">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div>
                <img
                  src="https://d2pi5ijasmgfet.cloudfront.net/500x328/filters:focal(249x163:251x165):quality(82)/combined%2Fpublic%2Fmisc%2FPD20-hp-img-500x328.jpg"
                  alt="communication"
                />
              </div>
              <div className="max-w-3xl">
                <h2 className="font-bold text-2xl">Process Transformation</h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-white">
                  A significant focus of corporate activity has been in business
                  processes. Data, analytics, APIs, machine learning and other
                  technologies offer corporations valuable new ways to reinvent
                  processes throughout the corporation—with the goal of lowering
                  costs, reducing cycle times, or increasing quality.
                </p>

                <a
                  href="http://www.21ctl.vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Learn more
                </a>
              </div>
            </div>
          </section>

          <section className="bg-[#f3f4fa] py-20 sm:pl-28 pl-8 sm:pr-10 pr-5">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div className="">
                <h2 className="font-bold text-2xl text-black dark:text-dark">
                  Business Model Transformation
                </h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-dark">
                  This type of transformation involves using automation to
                  streamline internal processes and increase efficiency. This
                  can include things like automating data entry, inventory
                  management, and HR processes.
                </p>

                <a
                  href="http://www.21ctl.vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Learn more
                </a>
              </div>

              <div>
                <img
                  src="https://d1zzg2ksf0bp3o.cloudfront.net/combined/public/misc/HP-map-just-update.png?mtime=20220208163050&focal=none"
                  alt="connectivity"
                />
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
                <h2 className="font-bold text-2xl">Domain Transformation</h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl text-black dark:text-white">
                  An area where we see surprisingly little focus—but enormous
                  opportunity—is the area of domain transformation. New
                  technologies are redefining products and services, blurring
                  industry boundaries and creating entirely new sets of
                  non-traditional competitors. What many executives don’t
                  appreciate is the very real opportunity for these new
                  technologies to unlock wholly new businesses for their
                  companies beyond currently served markets. And often, it is
                  this type of transformation is that offers the greatest
                  opportunities to create new value.
                </p>

                <a
                  href="http://www.21ctl.vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Learn more
                </a>
              </div>
            </div>
          </section>

          <section className="bg-[#f3f4fa] py-20 sm:pl-28 pl-8 sm:pr-10 pr-5">
            <div className="flex sm:flex-row flex-col-reverse items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div className="sm:mt-0 mt-16">
                <h2 className="font-bold text-2xl text-black dark:text-dark">
                  Cultural/Organizational Transformation
                </h2>
                <p className="text-lg font-light mt-4 mb-6 max-w-2xl  text-black dark:text-dark">
                  Full, long-term digital transformation requires redefining
                  organizational mindsets, processes, and talent & capabilities
                  for the digital world. Best-in-class corporations recognize
                  digital requires agile workflows, a bias toward testing and
                  learning, decentralized decision-making, and a greater
                  reliance on business ecosystems. And they take active steps to
                  bring change to their organizations.
                </p>

                <a
                  href="http://www.21ctl.vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Learn more
                </a>
              </div>

              <div className="">
                <img
                  src="https://d1zzg2ksf0bp3o.cloudfront.net/combined/public/misc/HP-map-just-update.png?mtime=20220208163050&focal=none"
                  alt="connectivity"
                />
              </div>
            </div>
          </section>

          <section className="py-20 sm:px-28 px-8">
            <div className="flex sm:flex-row flex-col items-center justify-between sm:space-y-0 space-y-10 sm:space-x-5 space-x-0">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
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
                  href="http://www.21ctl.vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white text-lg font-light px-5 py-2"
                >
                  Learn more
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

export default Automation;
