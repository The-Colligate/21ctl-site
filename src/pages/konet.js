import React, { useState, useEffect } from "react";
import Head from "next/head";
import { LightNavbar, Footer, SocialIcons } from "@components/layout/";

const products = [
  {
    id: 1,
    name: "Billiing Automation",
  },
  {
    id: 2,
    name: "Konet Pay",
  },
  {
    id: 3,
    name: "Konet Wallet",
  },
  {
    id: 4,
    name: "Konet Mail",
  },
  {
    id: 5,
    name: "Konet KYC",
  },
  {
    id: 6,
    name: "Konet Space",
  },
  {
    id: 7,
    name: "Konet App",
  },
];

const Konet = () => {
  const [id, setId] = useState();
  console.log("id", id);

  // set default active class
  useEffect(() => {
    setActive(1);
    (function(d,t) {
      var BASE_URL="https://app.chatwoot.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'DSFHCNrNuExCXvjxbMaUNLAk',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  }, []);

  // set active class
  const setActive = (id) => {
    setId(id);
    console.log("id", id);
  };
  return (
    <>    
      <Head>
        <title>Konet</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicons/dea_favicon.ico" /> */}
 
      </Head>
      <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative bg-[#F4F4F4] ">
        <div className="w-full min-h-screen flex flex-col z-[0] ">
          <LightNavbar />

          <section className="px-5 sm:px-28 pt-20 mt-[6vh] bg-[#A1D5EB] dark:bg-[#373737]">
            <div className="flex justify-center m-auto">
              <div className="flex flex-col justify-center pb-10 md:max-w-2xl">
                <h1 className="sm:text-7xl text-3xl sm:leading-[98px] leading-normal font-bold text-gray-900 dark:text-[#A1D5EB]">
                  Manage your finances effortlessly
                </h1>
                <p className="sm:text-2xl text-lg sm:leading-9 font-light leading-normal mt-10">
                  Our company simplifies financial transactions and streamlines
                  business operations with a comprehensive suite of billing
                  automation, payment processing, wallet systems, KYC
                  verification services, and an integrated workspace with email
                  and utility apps.
                </p>
              </div>
              <div className="">
                <img
                  className="w-[750px] sm:hidden md:hidden lg:block"
                  src="../../konet-hero.png"
                />
              </div>
            </div>
          </section>

          <section className="px-5 sm:px-28 sm:pt-56 pt-28 dark:bg-[#272727] ">
            <div className="flex flex-col items-center justify-center">
              <h3 className="sm:text-5xl text-2xl font-bold">
                Everything you need in one place
              </h3>
              <p className="sm:text-2xl text-base text-[#333333] dark:text-white opacity-60 pt-6">
                Streamline your financial operations with our comprehensive
                suite of tools.
              </p>
            </div>

            <div
              id="products"
              className="flex justify-center pt-20 space-x-4 flex-wrap"
            >
              {products.map((pro) => {
                return (
                  <div
                    key={pro.id}
                    className={`flex items-center justify-center px-6 rounded-[40px] h-11 cursor-pointer mb-4 text-sm ${
                      id == pro.id ? " bg-white dark:bg-black " : "border-2"
                    } `}
                    onClick={() => setActive(pro.id)}
                  >
                    {pro.name}
                  </div>
                );
              })}
            </div>

            <div className="flex sm:flex-col flex-row justify-center sm:pt-40 pt-20 pb-40 sm:px-28 px-5">
              {id == 1 && (
                <ProductCard
                  name="Billing Automation"
                  img="../../konet/billing.png"
                  text="Our billing automation service takes the hassle out of invoicing and
            collecting payments. With our automated system, you can easily
            generate and send invoices, collect payments, and issue receipts -
            all without lifting a finger."
                />
              )}
              {id == 2 && (
                <ProductCard
                  name="Konet Pay"
                  reverse="flex-row-reverse"
                  img="../../konet/kpay.png"
                  text="Make payments simpler with our advanced payment functionality services. Our user-friendly interface and advanced security features ensure smooth and secure transactions. Experience the ease of hassle-free payments with KonetPay."
                />
              )}
              {id == 3 && (
                <ProductCard
                  name="Konet Wallet"
                  img="../../konet/kwallet.png"
                  text="Our wallet platform puts you in control of your finances, allowing you to seamlessly manage your money, pay bills, and make transactions, all with just a few taps on your device."
                />
              )}
              {id == 4 && (
                <ProductCard
                  name="Konet Mail"
                  reverse={"flex-row-reverse"}
                  img="../../konet/kmail.png"
                  text="Communication is key to any successful business, and our mail feature helps you keep your team and clients connected. With our all-in-one platform, you can easily manage your emails, attachments, and contacts in one place, making it easier to collaborate and stay on top of your correspondence."
                />
              )}
              {id == 5 && (
                <ProductCard
                  name="Konet KYC"
                  img="../../konet/kkyc.png"
                  text="Our KYC verification service ensures that all of our clients are verified and comply with regulatory requirements. We make it easy for you to upload your identification documents and complete the verification process quickly and securely."
                />
              )}
              {id == 6 && (
                <ProductCard
                  name="Konet Space"
                  reverse={"flex-row-reverse"}
                  img="../../konet/billing.png"
                  text="Our wallet platform puts you in control of your finances, allowing you to seamlessly manage your money, pay bills, and make transactions, all with just a few taps on your device."
                />
              )}
              {id == 7 && (
                <ProductCard
                  name="Konet App"
                  img="../../konet/kwallet.png"
                  text="Our wallet platform puts you in control of your finances, allowing you to seamlessly manage your money, pay bills, and make transactions, all with just a few taps on your device."
                />
              )}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

const ProductCard = ({ reverse, img, name, text }) => {
  return (
    <>
      <div
        className={`flex sm:flex-row flex-col justify-center w-full ${reverse}`}
      >
        <div className="flex-1">
          <img src={img} className="w-[600px]" />
        </div>
        <div className="flex flex-1 flex-col justify-center sm:pl-10 pl-0">
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="text-lg text-[#333333] dark:text-white opacity-60 pt-6">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Konet;
