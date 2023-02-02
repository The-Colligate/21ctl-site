import Head from 'next/head';
// import Link from 'next/link';
import LightDesign from './light/index';
// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>21st Century Technologies</title>
        <meta name="description" content="21st Century Technologies" />
        <link rel="icon" href="/favicons/21ctl_favicon.ico" />
      </Head>
      <LightDesign />
      {/* <div>
        Check
        <Link href="/dark">
          <p className="text-purple-500">Dark version</p>
        </Link>
        <Link href="/light">
          <p className="text-purple-500">Light version</p>
        </Link>
      </div> */}
    </>
  );
}
