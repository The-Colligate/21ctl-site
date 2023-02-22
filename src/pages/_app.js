import SEO from "@bradgarropy/next-seo";
import "../styles/globals.css";
import "animate.css";
import { ThemeProvider } from "next-themes";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <SEO
        title="21st Century Technologies"
        icon={`https://res.cloudinary.com/dqsggbqmf/image/upload/v1672916362/favicon_w8xxc5.ico`}
        facebook={{
          image:
            "https://res.cloudinary.com/dqsggbqmf/image/upload/v1672916362/favicon_w8xxc5.jpg",
          url: "https://21ctl-site.vercel.app/",
          type: "website",
        }}
        twitter={{
          image:
            "https://res.cloudinary.com/dqsggbqmf/image/upload/v1672916362/favicon_w8xxc5.jpg",
          site: "https://21ctl-site.vercel.app/",
          card: "summary",
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
        <meta name="msapplication-TileColor" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        overlay={true}
        cookieName="21ctl_cookie_consent"
        style={{ background: "#FFF", color: "black", alignItems: "center" }}
        buttonStyle={{
          background: "#02A4EE",
          color: "#fff",
          fontSize: "16px",
          height: "60px",
          width: "120px",
        }}
        expires={150}
      >
        <p className="text-base">
          <strong>A note to our visitors</strong>
          <br />
          21st Century Technologies has updated its privacy policy in compliance
          with changes to Nigerian Data Protection Regulation and other
          applicable laws in this context, for all members globally. We’ve also
          updated our Privacy Policy to give you more information about your
          rights and responsibilities with respect to your privacy and personal
          information. Please read this to review the updates about which
          cookies we use and what information we collect on our site. By
          continuing to use this site, you are agreeing to our updated privacy
          policy.
          <br />{" "}
          <a className="text-primary-blue font-medium cursor-pointer" onClick={() => router.push('/privacy')}>
            View Privacy Policy
          </a>
        </p>
      </CookieConsent>
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
