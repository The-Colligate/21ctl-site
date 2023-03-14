import React, { useState } from "react";
import { LightNavbar, Footer, SocialIcons } from "@components/layout/";
import Head from "next/head";

const KonetApp = () => {
  return (
    <>
      <Head>
        <title>Konet App - 21 CTL</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicons/dea_favicon.ico" /> */}
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative ">
        <div className="w-full min-h-screen flex flex-col z-[0] ">
          <LightNavbar />
          <section className=" px-20 h-[90vh] pt-[10vh] flex justify-between items-center  tablet:h-full tablet:flex-col-reverse bg-konet-app-bg dark:bg-[#373737] tablet:pt-[15vh] tablet:w-full tablet:px-10">
          <div>
              <img src="https://res.cloudinary.com/dypedkp7i/image/upload/v1678795752/21ctl/Frame_56134_s9pjgr.png" className="w-4/5 tablet:w-full" />
            </div>
            <div className=" w-[650px]  tablet:mx-10  tablet:w-full tablet:mb-10">
              
              <p className=" text-[70px] leading-[70px] dark:text-white font-bold text-[#606163] tablet:leading-[50px] tablet:text-[35px]">
                Stay <span className="text-[#3572AD]">Connected</span>  <br /> with {" "}
                <span className="text-[#3572AD]">Voice</span> and{" "}
                <br />
                <span className="text-[#3572AD]">Video Calls</span>
              </p>
              <p className=" text-[22px] font-normal text-[#606163]  py-10 tablet:text-[16px]">
              With our powerful tools and intuitive interface, you can work together with colleagues, friends, and collaborators to bring your ideas to life and make amazing things happen.
              </p>
              {/* <div className='flex tablet:justify-center'>
                                <button className='flex bg-[#3572AD] text-white text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5'>
                                    <img src='/icons/apple-icon.svg ' className='pr-5 tablet:pr-2 ' />App Store</button>
                                <button className='flex bg-[#3572AD] text-white text-[24px] font-bold px-10 py-5 rounded-xl items-center tablet:text-[12px] tablet:px-5'><img src='/icons/play-store.svg' className='pr-5  tablet:pr-2 w-2/5' />Play Store</button>
                            </div> */}
            </div>
           
          </section>
          <section className="mt-20  tablet:mx-10">
            <div className="flex flex-col justify-center items-center w-full ">
              
              <p className=" text-[50px] text-center font-semibold text-black  dark:text-white tablet:text-[30px]">
                Experience <span className="text-[#3572AD]">Simpler</span> and
                More <span className="text-[#3572AD]">Secure</span> Payment
              </p>
              <p className=" text-[24px] text-center font-normal text-[#606163]  w-2/4 py-10 tablet:w-full">
                Our payment solutions simplify your financial transactions and
                provide a secure way to pay, so you can enjoy peace of mind and
                focus on what really matters.
              </p>
            </div>
            <div className="flex justify-center items-center tablet:flex-col">
              <div className="flex flex-col justify-center items-center border border-[#808080] border-opacity-[23%] rounded-3xl w-[300px] p-10 ">
                <img src="/icons/recharge.svg" />
                <p className=" font-semibold text-[24px] my-2">
                Recharge with ease
                </p>
                <p className=" font-medium text-[18x] text-[#808080] text-center">
                Make quick and easy recharges on the go!
                </p>
              </div>
              <div className="flex flex-col justify-center items-center mx-10 border border-[#808080] border-opacity-[23%] py-10 px-5 rounded-3xl w-[300px] tablet:my-10">
                <img src="/icons/call.svg" />
                <p className=" font-semibold text-[24px]  my-2">
                Talk non-stop
                </p>
                <p className=" font-medium text-[18px] text-[#808080] text-center">
                Get voice packages for uninterrupted conversations.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border border-[#808080] border-opacity-[23%] p-10 rounded-3xl w-[300px]">
                <img src="/icons/private.svg" />
                <p className=" font-semibold text-[24px]  my-2">Stay private</p>
                <p className=" font-medium text-[18px] text-[#808080] text-center">
                Generate virtual phone numbers for added privacy.
                </p>
              </div>
              <div className="flex flex-col justify-center ml-20 items-center border border-[#808080] border-opacity-[23%] p-10 rounded-3xl w-[300px] tablet:ml-0 tablet:my-10">
                <img src="/icons/refer.svg" />
                <p className=" font-semibold text-[24px]  my-2">Share and earn</p>
                <p className=" font-medium text-[18px] text-[#808080] text-center">
                Spread the word and earn rewards
                </p>
              </div>
            </div>
          </section>
          <section className="relative bg-[#3572AD] rounded-[56px] h-[480px] mx-10 my-36 tablet:mx-10 tablet:px-5 flex justify-center">
            <div className="konet_wallet_green_bg flex justify-end items-center">
              <div className="absolute left-0 bottom-0 ">
                <img
                  src="https://res.cloudinary.com/dypedkp7i/image/upload/v1678747473/21ctl/Rectangle_11895_bghgjc.png"
                  className="w-full top-10 tablet:hidden"
                />
              </div>
              <div className="w-[650px] pr-10 flex flex-col justify-center items-start tablet:w-full tablet:ml-0 tablet:pr-0">
                {/* <div className="text-white text-[18px] font-semibold flex items-center">
                  Payment{" "}
                  <p className="h-[5px] ml-2 w-[37px] rounded-lg bg-white"></p>
                </div> */}
                <p className=" text-[50px] font-bold text-white leading-10 tablet:text-[30px]">
                  Make every call more{" "}
                  <br className="tablet:hidden"/>
                  productive
                </p>
                <p className=" text-[24px] font-normal text-white py-10">
                  Effortlessly pay like a boss with our secure and intuitive pay
                  page. Get started now for a smarter way to pay.
                </p>
                <div className="flex justify-center w-full ">
                  {/* <button className='flex bg-white text-[#3572AD] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5 tablet:mr-2'>
                                        <img src='/icons/apple-icon-green.svg ' className='pr-5  tablet:pr-2 ' />App Store</button>
                                    <button className='flex bg-white text-[#3572AD] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5 tablet:pr-2'><img src='/icons/playstore-green.svg' className='pr-5  tablet:pr-2  tablet:w-2/5' />Play Store</button> */}
                </div>
              </div>
            </div>
          </section>
          

          {/* <section className='relative mt-[209px]'>


                        <div className='flex items-center justify-center'>
                            <img src='/logo/wallet_green_bg.svg' />

                        </div>
                        <div className='absolute  top-10 w-full'>
                            <div className='flex justify-center items-end'>
                                <div className=''>
                                    <img src='/logo/pay_mobile.png' className="w-full" />
                                </div>


                            </div>
                        </div>
                    </section> */}
          
          <section className="flex justify-between items-center my-10 tablet:flex-col tablet:mx-10">
            <div className="w-[650px] ml-20 tablet:w-full tablet:ml-10 ">
             
              <p className=" text-[50px] font-bold text-[#606163] dark:text-white leading-[60px] tablet:text-[38px]">
              A better way to<br/><span className="text-[#3572AD]">communicate</span>,{" "} no <br />
                matter the{" "}<span className="text-[#3572AD]">distance.</span>
              </p>
              <p className=" text-[24px] font-normal text-[#606163] py-10">
              Say goodbye to choppy video calls and hello to crystal-clear conversations with our platform.
              </p>
            </div>
            <div>
              <img src="https://res.cloudinary.com/dypedkp7i/image/upload/v1678748347/21ctl/Group_56118_wkdysh.png" className="mr-20" />
            </div>
          </section>
     
          {/* <section className='bg-[#3572AD] rounded-[56px] h-[380px] mx-[200px] my-[209px] flex justify-center tablet:mx-10'>

                        <div className='konet_wallet_green_bg   flex  flex-col justify-center items-center   '>

                            <div className='w-4/5  tablet:w-full  flex flex-col justify-center items-start'>
                                <p className='mb-10 px-10 text-[42px] tablet:text-[20px] tablet:px-2 font-bold text-center text-white leading-10'>What are you waiting for? Download the Konetwallet now and take control of your financies!!</p>
                                <div className='flex justify-center w-full '>
                                    <button className='flex bg-white text-[#3572AD] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5'>
                                        <img src='/icons/apple-icon-green.svg ' className='pr-5  tablet:pr-2 ' />App Store</button>
                                    <button className='flex bg-white text-[#3572AD] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5 tablet:pr-2'><img src='/icons/playstore-green.svg' className='pr-5  tablet:pr-2  tablet:w-2/5' />Play Store</button>
                                </div>
                              

                            </div>
                        </div>
                    </section> */}
          <Footer />
        </div>
        <SocialIcons />
      </div>
    </>
  );
};

export default KonetApp;
