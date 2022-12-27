import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import NavbarDark from '../components/NavbarDark';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>21ctl</title>
        <meta name="description" content="21CTL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Check
        <Link href="/dark">
          <p className="text-purple-500">Dark version</p>
        </Link>
      </div>
    </>
  );
}
