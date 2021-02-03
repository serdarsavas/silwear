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
          content='SilverShield - ett medicinskt munskydd som skyddar mot virus och bakterier. Är gjord av mjukt tyg med silvertrådar, som är bekvämare än kirurgiska munskydd'
        />
        <meta
          name='keywords'
          content='munskydd, virus, ansiktsmask, antibakteriell, bekväm, tygmask, tyg, skydd, skyddar, medicinskt munskydd'
        />
        <title>SilverShield - Medicinskt Munskydd med Silver</title>
      </Head>
      <Header />
      <main className='relative'>
        <Hero scrollToComponent={scrollToComponent} reference={ref} />
        <Icons />
        <Features ref={ref} />
        <CTA />
      </main>
      <div className='relative'>
        <Footer />
        <Cookie />
      </div>
    </>
  );
}
