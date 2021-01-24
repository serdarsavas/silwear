import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Cookie from '../components/Cookie';

export default function Contact() {
  return (
    <>
      <Head>
        <title>SilverShield</title>
      </Head>
      <Nav />

      <Footer color='gray-600' bgColor='white' />

      <Cookie />
    </>
  );
}
