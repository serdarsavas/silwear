import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    fName: '',
    lName: '',
    email: '',
    message: ''
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg }
      });
      setInputs({
        fName: '',
        lName: '',
        email: '',
        message: ''
      });
    } else {
      setStatus({
        info: { error: true, msg }
      });
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
      info: { error: false, msg: null }
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    });

    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className='pt-8 space-y-8 divide-y divide-gray-200 w-3/5 mx-auto'
      >
        <div>
          <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first_name'
                className='block text-sm font-medium text-gray-700'
              >
                Förnamn
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  id='fName'
                  className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  value={inputs.fName}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last_name'
                className='block text-sm font-medium text-gray-700'
              >
                Efternamn
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  id='lName'
                  className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  onChange={handleOnChange}
                  value={inputs.lName}
                  required
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Epostadress
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  type='email'
                  className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  onChange={handleOnChange}
                  value={inputs.email}
                  required
                />
              </div>
            </div>
          </div>

          <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
            <div className='sm:col-span-6'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'
              >
                Meddelande
              </label>
              <div className='mt-1'>
                <textarea
                  id='message'
                  rows='3'
                  className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  onChange={handleOnChange}
                  value={inputs.message}
                ></textarea>
              </div>
              <p className='mt-2 text-sm text-gray-500'>
                Här kan du skriva några rader om du har några frågor
              </p>
            </div>
          </div>
        </div>

        <div className='pt-5'>
          <div className='flex justify-start'>
            <button
              type='submit'
              className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              disabled={status.submitting}
            >
              {!status.submitting
                ? !status.submitted
                  ? 'Skicka'
                  : 'Skickat'
                : 'Skickar...'}
            </button>
          </div>
        </div>
      </form>
      {status.info.error && <div> Error: {status.info.msg}</div>}
      {!status.info.error && status.info.msg && <div>{status.info.msg}</div>}
    </>
  );
}
