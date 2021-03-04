import React, { useState } from 'react';
import Link from 'next/link';
import { Alert } from './Alert';

export default function ContactForm2() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    success: null
  });

  const [inputs, setInputs] = useState({
    fName: '',
    lName: '',
    email: '',
    message: ''
  });

  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const handleResponse = status => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        success: true
      });
      setInputs({
        name: '',
        email: '',
        tel: '',
        message: ''
      });
      setAlertIsOpen(true);
    } else {
      setStatus({
        success: false
      });
      setAlertIsOpen(true);
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      success: null
    });
    setAlertIsOpen(false);
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    });
    handleResponse(res.status);
  };

  return (
    <div className='relative bg-white'>
      <div className='absolute inset-0'>
        <div className='absolute inset-y-0 left-0 w-1/2 bg-gray-50'></div>
      </div>
      <div className='relative max-w-7xl mx-auto lg:grid lg:grid-cols-5'>
        <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
          <div className='max-w-lg mx-auto'>
            <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
              Kontakta Oss
            </h1>
            <p className='mt-3 text-lg leading-6 text-gray-500'>
              Vänligen kontakta oss om ni vill ha en offert eller har frågor
              kring produkten.
            </p>
            <dl className='mt-8 text-base text-gray-500'>
              <div>
                <dt className='sr-only'>Adress</dt>
                <dd>
                  <p>Ropgränd 55</p>
                  <p>187 42 Täby</p>
                </dd>
              </div>
              <div className='mt-6'>
                <dt className='sr-only'>Telefonnummer</dt>
                <dd className='flex'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  <span className='ml-3'>0709-211 003</span>
                </dd>
              </div>
              <div className='mt-3'>
                <dt className='sr-only'>Epost</dt>
                <dd className='flex'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <span className='ml-3'> info@silvershield.se </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className='bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
          <div className='max-w-lg mx-auto lg:max-w-none'>
            <Alert isOpen={alertIsOpen} success={status.success} />

            <form
              onSubmit={handleOnSubmit}
              className='grid grid-cols-1 gap-y-6 mb-0'
            >
              <div>
                <label htmlFor='full_name' className='sr-only'>
                  Fullständigt namn
                </label>
                <input
                  type='text'
                  name='full_name'
                  id='full_name'
                  autoComplete='name'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-600 focus:border-blue-600 border-gray-300 rounded-md'
                  placeholder='Namn'
                  onChange={handleOnChange}
                  value={inputs.name}
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Epost
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-600 focus:border-blue-600 border-gray-300 rounded-md'
                  placeholder='Epost'
                  onChange={handleOnChange}
                  value={inputs.email}
                />
              </div>
              <div>
                <label htmlFor='phone' className='sr-only'>
                  Telefon
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-600 focus:border-blue-600 border-gray-300 rounded-md'
                  placeholder='Telefon'
                  onChange={handleOnChange}
                  value={inputs.phone}
                />
              </div>
              <div>
                <label htmlFor='message' className='sr-only'>
                  Meddelande
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-600 focus:border-blue-600 border-gray-300 rounded-md'
                  placeholder='Meddelande'
                  onChange={handleOnChange}
                  value={inputs.message}
                ></textarea>
              </div>
              <p className='mt-4 text-sm text-gray-500'>
                Genom att skicka meddelande till oss hanterar vi dina
                personuppgifter. Klicka
                <Link href='/personuppgifter'>
                  <a className='text-blue-700 font-medium'> här </a>
                </Link>
                för mer information om hur vi hanterar dina uppgifter.
              </p>
              <div>
                <button
                  type='submit'
                  className='inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  disabled={status.submitting}
                >
                  {!status.submitting
                    ? !status.submitted
                      ? 'Skicka'
                      : 'Skickat'
                    : 'Skickar...'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
