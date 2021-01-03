import Head from 'next/head';
import Features from '../components/Features';
import { useRef } from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import About from '../components/About';

export default function Home() {
  const aboutRef = useRef();

  const scrollToComponent = ref => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  };

  return (
    <div>
      <Head>
        <title>Silwear</title>
      </Head>
      <main>
        <div className='relative bg-gray-50'>
          <Nav />
          <Hero scrollToComponent={scrollToComponent} reference={aboutRef} />
        </div>
        <Features />
        <About ref={aboutRef} />
      </main>
    </div>
  );
}
