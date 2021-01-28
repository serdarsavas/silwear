import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Team from '../components/Team';
import Cookie from '../components/Cookie';
import Header from '../components/Header';

export default function Contact() {
  return (
    <>
      <Head>
        <title>SilverShield</title>
      </Head>
      <Header />
      <Team />
      <div className='m-0 flex flex-col gap-8'>
        <main>
          <ContactForm />
        </main>
        <Footer />
      </div>
      <Cookie />
    </>
  );
}
