import Head from 'next/head';
import Features from '../components/Features';
import { useRef } from 'react';
import Hero from '../components/Hero';
import Icons from '../components/Icons';
import Footer from '../components/Footer';
import Cookie from '../components/Cookie';
import CTA from '../components/CTA';
import Header from '../components/Header';

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
        <meta
          name='description'
          content='SilverShield - ett medicinskt munskydd som skyddar mot virus och bakterier. Är gjord av mjukt tyg med silvertrådar. För ett bekvämt skydd.'
        />
        <meta
          name='keywords'
          content='munskydd, tyg, virus, ansiktsmask, silver, medicinsk, tygmask, hållbar, tvättbar'
        />
        <link rel='icon' href='/favicon.ico' />
        <title>SilverShield - Medicinskt Munskydd med Silver</title>
      </Head>
      <Header />
      <main className='relative'>
        <Hero scrollToComponent={scrollToComponent} reference={ref} />
        <Icons />
        <Features ref={ref} />
        <CTA isHome={true} />
      </main>
      <div className='relative'>
        <Footer />
        <Cookie />
      </div>
    </>
  );
}
