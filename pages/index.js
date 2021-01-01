import Head from 'next/head';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

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
      </main>
    </div>
  );
}
