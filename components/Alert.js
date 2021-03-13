export function Alert({ success, isOpen }) {
  const render = (success, isOpen) => {
    if (isOpen && !success) {
      return (
        <div className='rounded-md bg-red-50 p-4 mb-8'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <svg
                className='h-5 w-5 text-red-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-medium text-red-800'>
                Något gick tyvärr fel :(
              </h3>
              <div className='mt-2 text-sm text-red-700'>
                <p>
                  Hör gärna av dig direkt till info@silvershield.se istället.
                </p>
                <p>Vi ber om ursäkt för besväret.</p>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (isOpen && success) {
      return (
        <div className='rounded-md bg-green-50 p-4 mb-8'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <svg
                className='h-5 w-5 text-green-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-medium text-green-800'>
                Mejlet är skickat!
              </h3>
              <div className='mt-2 text-sm text-green-700'>
                <p>
                  Tack för att Du kontaktar oss. Vi återkommer så fort vi
                  behandlat din förfrågan.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  return render(success, isOpen)
}
