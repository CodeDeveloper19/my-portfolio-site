import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return ( 
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Okoli Akachukwu - Frontend Web Developer"/>
        <meta property="og:site_name" content="Portfolio Website"/>
        <meta property="og:description" content="A portfolio website for Okoli Akachukwu"/>
        <title>Okoli Akachuwku's Portfolio Website</title>
        <meta name='description' content='A portfolio website for Okoli Akachukwu'/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}