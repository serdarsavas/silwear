import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Cookie from '../components/Cookie';
import Header from '../components/Header';

export default function Contact() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='SilverShield - Kontakta oss för mer information om vårt munskydd'
        />
        <meta
          name='keywords'
          content='munskydd, virus, ansiktsmask, antibakteriell, bekväm, tygmask, tyg, skydd, skyddar, medicinskt munskydd'
        />
        <title>SilverShield - Kontakta Oss</title>
      </Head>
      <Header />

      <div className='flex flex-col gap-8'>
        <main>
          <ContactForm />
        </main>
        <Footer />
      </div>
      <Cookie />
    </>
  );
}
