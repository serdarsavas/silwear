import ContactForm from '../components/ContactForm';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Nav />
      <div className='bg-gray-50 h-screen m-0 relative'>
        <ContactForm />
        <Footer color='gray-600' bgColor='white' />
      </div>
    </>
  );
}
