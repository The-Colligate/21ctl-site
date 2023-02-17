import React, { useState } from 'react';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import Head from 'next/head';

const KonetWallet = () => {
    return (
        <>
            <Head>
                <title>Konet Wallet - 21 CTL</title>
                <meta name="description" content="" />
                {/* <link rel="icon" href="/favicons/dea_favicon.ico" /> */}
            </Head>
            <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative ">

                <div className="w-full min-h-screen flex flex-col z-[0] ">
                    <LightNavbar />
                    <section className='konet__landing__page pt-[10vh] flex justify-between items-center tablet:flex-col bg-[#F7F7F8] dark:bg-[#373737] tablet:pt-[20vh] tablet:w-full tablet:px-10'>
                        <div className='w-[650px] mx-20 tablet:mx-10  tablet:w-full tablet:mb-20'>
                            <div className='text-[#60A297] text-[18px] font-semibold flex items-center '>Seamless Mobile Money <p className='h-[5px] ml-2 w-[37px] rounded-lg bg-[#60A297]'></p></div>
                            <p className=' text-[70px]  dark:text-white font-bold text-[#606163] tablet:text-[35px]'>The <span className='text-[#60A297]'>future</span> of <br /><span className='text-[#60A297]'>finance</span> is in your <br />hands</p>
                            <p className=' text-[24px] font-normal text-[#606163] py-10 tablet:text-[16px]'>Our wallet platform puts you in control of your finances, allowing you to seamlessly manage your money, pay bills, and make transactions, all with just a few taps on your device.</p>
                            {/* <div className='flex tablet:justify-center'>
                                <button className='flex bg-[#60A297] text-white text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5'>
                                    <img src='/icons/apple-icon.svg ' className='pr-5 tablet:pr-2 ' />App Store</button>
                                <button className='flex bg-[#60A297] text-white text-[24px] font-bold px-10 py-5 rounded-xl items-center tablet:text-[12px] tablet:px-5'><img src='/icons/play-store.svg' className='pr-5  tablet:pr-2 w-2/5' />Play Store</button>
                            </div> */}
                        </div>
                        <div>
                            <img src='/logo/konet_wallet_phone.png' />
                        </div>

                    </section>
                    <section className='mt-10  tablet:mx-10'>
                        <div className='flex flex-col justify-center items-center w-full '>
                            <div className='text-[#60A297] text-center text-[18px] flex items-center font-semibold'>Exceptional Security, Flexibility & Support <p className='h-[5px] ml-2 w-[37px] rounded-lg bg-[#60A297]'></p></div>
                            <p className=' text-[50px] text-center font-semibold text-black  dark:text-white tablet:text-[30px]'>Experience <span className='text-[#60A297]'>Simpler</span> and More <span className='text-[#60A297]'>Secure</span> Payment</p>
                            <p className=' text-[24px] text-center font-normal text-[#606163] w-2/4 py-10 tablet:w-full'>Our payment solutions simplify your financial transactions and provide a secure way to pay, so you can enjoy peace of mind and focus on what really matters.</p>

                        </div>
                        <div className='flex justify-center items-center tablet:flex-col'>
                            <div className='flex flex-col justify-center items-center border border-[#808080] border-opacity-[23%] rounded-3xl w-[270px] p-10 '>
                                <img src='/icons/instant-payment.svg' />
                                <p className=' font-semibold text-[24px] my-2'>Instant Payments</p>
                                <p className=' font-medium text-[18x] text-[#808080] text-center'>Save time and complete transactions quickly and efficiently.</p>
                            </div>
                            <div className='flex flex-col justify-center items-center mx-20 border border-[#808080] border-opacity-[23%] p-10 rounded-3xl w-[270px] tablet:my-10'>
                                <img src='/icons/secure-payment.svg' />
                                <p className=' font-semibold text-[24px]  my-2'>Secure Payments</p>
                                <p className=' font-medium text-[18px] text-[#808080] text-center'>Save time and complete transactions quickly and efficiently.</p>
                            </div>
                            <div className='flex flex-col justify-center items-center border border-[#808080] border-opacity-[23%] p-10 rounded-3xl w-[270px]'>
                                <img src='/icons/virtual-card.svg' />
                                <p className=' font-semibold text-[24px]  my-2'>Virtual Card</p>
                                <p className=' font-medium text-[18px] text-[#808080] text-center'>Save time and complete transactions quickly and efficiently.</p>
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
                    <section className='bg-[#60A297] rounded-[56px] h-[480px] mx-[200px] my-[209px] tablet:mx-10 tablet:px-5 flex justify-center'>

                        <div className='konet_wallet_green_bg   flex   justify-center items-center   '>
                            <div className=''>
                                <img src='/logo/pay_mobile.png' className="w-full top-10 tablet:hidden" />
                            </div>
                            <div className='w-[650px] ml-52 mb-10 flex flex-col justify-center items-start tablet:w-full tablet:ml-0'>
                                <div className='text-white text-[18px] font-semibold flex items-center'>Payment <p className='h-[5px] ml-2 w-[37px] rounded-lg bg-white'></p></div>
                                <p className=' text-[50px] font-bold text-white leading-10 tablet:text-[30px]'>Pay Smarter, Not<br />Harder</p>
                                <p className=' text-[24px] font-normal text-white py-10'>Effortlessly pay like a boss with our secure and intuitive pay page. Get started now for a smarter way to pay.</p>
                                <div className='flex justify-center w-full '>
                                    {/* <button className='flex bg-white text-[#60A297] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5 tablet:mr-2'>
                                        <img src='/icons/apple-icon-green.svg ' className='pr-5  tablet:pr-2 ' />App Store</button>
                                    <button className='flex bg-white text-[#60A297] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5 tablet:pr-2'><img src='/icons/playstore-green.svg' className='pr-5  tablet:pr-2  tablet:w-2/5' />Play Store</button> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='flex justify-between items-center my-[209px] tablet:flex-col tablet:mx-10'>
                        <div className='w-[650px] ml-20 tablet:w-full tablet:ml-10 '>
                            <div className='text-[#60A297] text-[18px] font-semibold flex items-center ]'>Virtual & Physical Cards <p className='h-[5px] ml-2 w-[37px] rounded-lg bg-[#60A297]'></p></div>
                            <p className=' text-[50px] font-bold text-black dark:text-white leading-[60px] tablet:text-[40px]'><span className='text-[#60A297]'>Virtual</span> and <br /><span className='text-[#60A297]'>Physical</span> Cards <br />Made Easy</p>
                            <p className=' text-[24px] font-normal text-[#606163] py-10'>Whether you prefer to use virtual or physical cards, our wallet has got you covered. It's the perfect solution for all your payment needs.</p>

                        </div>
                        <div>
                            <img src='/logo/virtual_wallet.png' className='mr-20' />
                        </div>

                    </section>
                    <section className='flex justify-between items-center  mx-20 tablet:flex-col-reverse tablet:mx-10'>

                        <div>
                            <img src='/logo/bills.png' className='flex justify-center'/>
                        </div>

                        <div className='w-[650px]  tablet:w-full'>
                            <div className='text-[#60A297] text-[18px] font-semibold flex items-center'>Utility <p className='h-[5px] ml-2 w-[37px] rounded-lg bg-[#60A297]'></p></div>
                            <p className=' text-[50px] font-bold text-black dark:text-white tablet:text-[36px]'>One<span className='text-[#60A297]'> Wallet</span> for All <br />Your <span className='text-[#60A297]'>Bills</span></p>
                            <p className=' text-[24px] font-normal text-[#606163] py-10'>Whether you prefer to use virtual or physical cards, our wallet has got you covered. It's the perfect solution for all your payment needs.</p>
                        </div>


                    </section>
                    {/* <section className='bg-[#60A297] rounded-[56px] h-[380px] mx-[200px] my-[209px] flex justify-center tablet:mx-10'>

                        <div className='konet_wallet_green_bg   flex  flex-col justify-center items-center   '>

                            <div className='w-4/5  tablet:w-full  flex flex-col justify-center items-start'>
                                <p className='mb-10 px-10 text-[42px] tablet:text-[20px] tablet:px-2 font-bold text-center text-white leading-10'>What are you waiting for? Download the Konetwallet now and take control of your financies!!</p>
                                <div className='flex justify-center w-full '>
                                    <button className='flex bg-white text-[#60A297] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5'>
                                        <img src='/icons/apple-icon-green.svg ' className='pr-5  tablet:pr-2 ' />App Store</button>
                                    <button className='flex bg-white text-[#60A297] text-[24px] font-bold px-10 py-5 rounded-xl mr-5 tablet:text-[12px] items-center tablet:px-5 tablet:pr-2'><img src='/icons/playstore-green.svg' className='pr-5  tablet:pr-2  tablet:w-2/5' />Play Store</button>
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

export default KonetWallet;
