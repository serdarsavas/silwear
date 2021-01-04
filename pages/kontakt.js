import ContactForm from '../components/ContactForm';
import Team from '../components/Team';
import Nav from '../components/Nav';

export default function Contact() {
  return (
    <>
      <Nav />
      <div className='bg-gray-50 h-screen m-0'>
        <ContactForm />
      </div>
    </>
  );
}
