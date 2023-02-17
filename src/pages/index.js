import Head from "next/head";
// import Link from 'next/link';
import LightDesign from "./light/index";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

export default function Home() {
  // const image_src = 'https://res.cloudinary.com/dqsggbqmf/image/upload/v1676021796/21ctl/web_Banner_igkutv.png'
  // const [popVid, setPopVid] = useState()

  // const openVid = () => {
  //   setPopVid(true)
  // }

  // useEffect(() => {
  //   openVid()
  // },[])

  return (
    <>
      <Head>
        <title>21st Century Technologies</title>
        <meta name="description" content="21st Century Technologies" />
        <link rel="icon" href="/favicons/21ctl_favicon.ico" />
      </Head>
      <LightDesign />
      {/* <div className="z-50">
            {popVid && (
              <Modal
                modalIsOpen={popVid}
                closeModal={() => setPopVid(false)}
                img_src={image_src}
                img_alt="21stCTL and Oracle"
              />
            )}
          </div> */}
    </>
  );
}
