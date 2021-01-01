import Head from 'next/head';
import Features from '../components/Features';
import { useRef } from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Silwear</title>
      </Head>
      <main>
        <div className='relative bg-gray-50'>
          <Nav />
          <Hero />
        </div>
        <Features />
        <About />
      </main>
    </div>
  );
}
