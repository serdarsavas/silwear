import Head from 'next/head';
import About from '../components/About';
import Nav from '../components/Nav';
import Team from '../components/Team';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Om Oss</title>
      </Head>
      <main>
        <div className='relative bg-gray-50'>
          <Nav />
        </div>
        <About />
        <Team />
      </main>
    </>
  );
}
