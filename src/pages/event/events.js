import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import {
  LightNavbar,
  Footer,
  SocialIcons,
  EventLayout,
} from '@components/layout/';
import { motion } from 'framer-motion';
import {
  buttonVarient,
  leftTransitionVarient,
  rightTansitionVarient,
} from '@components/constants/animations';
import { eventsArray } from '../../../data/eventsData';

const Events = () => {
  // truncate text
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };
  return (
    <>
      <Head>
        <title>Events - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex pt-40 flex-col z-[1]">
          <LightNavbar />
          {/* start */}
          <EventLayout truncate={truncate}>
            {/* content */}
            <div className="flex flex-col w-full sm:mt-0 mt-10">
              <div className="flex justify-center flex-1">
                {/* image here */}
                <div className="flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-4 max-h-max ">
                  {/* one */}
                  <div className="max-w-md space-y-2">
                    <div className="flex space-x-2">
                      <div>
                        <img
                          className="w-[240px] h-[206px] rounded-xl"
                          src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675250342/21ctl/1674495588828_bpf9lm.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="w-[240px] h-full rounded-xl"
                          src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675250386/21ctl/1674495589326_yyqqyd.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* sub one  */}
                    <div>
                      <img
                        className="object-cover w-full h-[340px] rounded-xl"
                        src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675250411/21ctl/1674495589157_or9oaf.jpg"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* two */}
                  <div className="flex-1 max-w-md">
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675250442/21ctl/1674495588974_jb8krp.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* write-up */}
              <div className="flex flex-col justify-start max-w-4xl m-auto w-full mt-5 space-y-3">
                <h2 className="text-4xl font-bold text-primary-orange">
                  Unveiling the Digital Experts Academy (DEA)
                </h2>
                <p>23 January 2023</p>
                <p>
                  On Monday January 23, 2023, 21st Century Technologies, led by
                  the visionairy chairman Mr. Wale Ajisebutu, unveiled the
                  Digital Experts Academy, which was declared open by Mr. Will
                  Stevens, the United States Consul General, in the presence of
                  Mr. Wole Adeniyi, the Chief Executive Officer (CEO) of Stanbic
                  IBTC Bank, Dr. Dare Obadare, the MD/Chairman of Digital Encode
                  and notable top executives from Oracle, Microsoft, VMWare.
                </p>
              </div>
            </div>
          </EventLayout>
          {/* end */}
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};



export default Events;
