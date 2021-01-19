import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Integrity() {
  return (
    <>
      <Head>
        <title>SilverShield</title>
      </Head>
      <Nav />
      <h1 className='text-3xl text-blue-700 text-center py-8'>
        Personuppgiftspolicy
      </h1>
      <Footer color='gray-700' bgColor='gray-50' />
    </>
  );
}
