import Head from 'next/head';
import Features from '../components/Features';
import { useRef } from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Icons from '../components/Icons';
import Footer from '../components/Footer';
import Cookie from '../components/Cookie';
import CTA from '../components/CTA';

export default function Home() {
  const ref = useRef();

  const scrollToComponent = ref => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  };

  return (
    <>
      <Head>
        <title>SilverShield</title>
      </Head>
      <main className='relative'>
        <div className='relative bg-gray-50'>
          <Nav />
          <Hero scrollToComponent={scrollToComponent} reference={ref} />
        </div>
        <Icons />
        <Features ref={ref} />
        <CTA />
      </main>
      <div className='relative'>
        <Footer color='gray-700' bgColor='gray-50' />
        <Cookie />
      </div>
    </>
  );
}
