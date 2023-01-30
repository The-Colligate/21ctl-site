import React from 'react'
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import Head from 'next/head';
import WorkingMan from '/public/logo/Working-Man.png';
import WorkingWoman from '/public/logo/working-female.png';
import Instructor from '/public/logo/instructor.png';
import Laptop from '/public/logo/laptop.png';


const Pillars = () => {
  return (
    <>
     <Head>
        <title>Training Pillars - 21 CTL</title>
        <meta name="description" content="" />
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="absolute w-full h-full flex justify-between items-center">
          <div className="w-full min-h-[50%] bg_gradient_l"></div>
          <div className="w-full min-h-[50%] bg_gradient_r"></div>
        </div>
        <div className="w-full min-h-screen flex flex-col z-[1] ">
          <LightNavbar />
          </div>   
          </div>   
      </>
  )
}

export default Pillars