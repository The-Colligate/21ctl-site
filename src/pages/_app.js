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

        <link rel="icon" href="/LOGO.ico" />
        <meta name="msapplication-TileColor"  />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <ThemeProvider
        defaultTheme='light'
        attribute="class"
        enableSystem
        enableColorScheme
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
