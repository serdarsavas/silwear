import Head from 'next/head';
import About from '../components/About';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Team from '../components/Team';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Silwear</title>
        <link />
      </Head>
      <Hero />
      <Features />
      <About />
      <Team />
    </div>
  );
}
