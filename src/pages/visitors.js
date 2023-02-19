import React from 'react'
import JotformEmbed from 'react-jotform-embed';
import { LightNavbar, Footer, SocialIcons } from '@components/layout/';
import Head from 'next/head';

const Visitors = () => {
  return (
    <>
     <Head>
        <title>Visitors - 21 CTL</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicons/dea_favicon.ico" />
      </Head>

        <LightNavbar />
            
        <JotformEmbed src="https://eu.jotform.com/230402356070544" oncontextmenu="return false"/>
        
    </>
  )
}

export default Visitors