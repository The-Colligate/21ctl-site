import SEO from '@bradgarropy/next-seo';
import '../styles/globals.css';
import 'animate.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="21st Century Technologies"
        icon={`https://res.cloudinary.com/dqsggbqmf/image/upload/v1672916362/favicon_w8xxc5.ico`}
        facebook={{
          image: 'https://res.cloudinary.com/dqsggbqmf/image/upload/v1672916362/favicon_w8xxc5.jpg',
          url: 'https://21ctl-site.vercel.app/',
          type: 'website',
        }}
        twitter={{
          image: 'https://res.cloudinary.com/dqsggbqmf/image/upload/v1672916362/favicon_w8xxc5.jpg',
          site: 'https://21ctl-site.vercel.app/',
          card: 'summary',
        }}
      />

      <Head>
        <meta name="description" content="21st Century Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="21st Century Technologies" />
        <meta property="og:url" content="https://21ctl-site.vercel.app/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dqsggbqmf/image/upload/v1672916362/favicon_w8xxc5.jpg"
        />
        {/* <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        /> */}

        
        {/* <link rel="manifest" href="/favicons/manifest.json" /> */}
        <link rel="icon" href="/logo.ico" />
        <meta name="msapplication-TileColor"  />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <ThemeProvider
        defaultTheme="light"
        attribute="class"
        enableSystem
        enableColorScheme
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
