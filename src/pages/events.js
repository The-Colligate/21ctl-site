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
import {eventsArray} from '../../data/eventsData';
const Events = () => {
    // truncate text
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
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
          <div className="flex sm:flex-row flex-col sm:px-20 px-8 py-10 pb-10">
            {/* event lists */}
            <div className="flex flex-col">
              <div className="mb-5">
                <h3 className="text-6xl font-extrabold text-primary-orange">
                  Events
                </h3>
              </div>

              <div className="post_list space-y-4 overflow-y-scroll  ">
                {/* post title */}
                {eventsArray.map((event) => (
                  <div key={event._id} className="bg-[#D9D9D9] px-4 py-1 font-semibold cursor-pointer w-[250px]">
                    {truncate(event.title, 30)}
                  </div>
                ))}
              </div>
            </div>
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
                          src="https://plus.unsplash.com/premium_photo-1661668908629-93e712f0d551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="w-[240px] h-full rounded-xl"
                          src="https://plus.unsplash.com/premium_photo-1661668908629-93e712f0d551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* sub one  */}
                    <div>
                      <img
                        className="object-cover w-full h-[340px] rounded-xl"
                        src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* two */}
                  <div className="flex-1 max-w-md">
                    <img
                      className="w-full h-full rounded-xl"
                      src="https://images.unsplash.com/photo-1675178328976-80670d18071d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* write-up */}
              <div className='flex flex-col justify-start max-w-4xl m-auto w-full mt-5 space-y-3'>
                <h2 className='text-4xl font-bold text-primary-orange'>Unveiling the digital training center</h2>
                <p>23 January 2023</p>
                <p>On Monday January 23, 2023, 21st Century Technologies hosted the U.S. Consul General, Will Stevens, the CEO of Stanbic IBTC bank, Wole Adeniyi and top executives of Oracle and Digital Encode. The event was the unveiling of the new digital center.</p>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  );
};

export default Events;
