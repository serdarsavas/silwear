export default function Icons() {
  return (
    <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <h2 className='text-base font-semibold tracking-wider text-blue-700 uppercase'>
          Egenskaper
        </h2>

        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3'>
            <div className='pt-6'>
              <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                <div className='-mt-6'>
                  <div>
                    <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-lg'>
                      <svg
                        className='h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='white'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className='mt-8 text-lg font-medium text-gray-800 tracking-tight'>
                    Skyddar
                  </h3>
                  <p className='mt-5 text-base text-gray-500'>
                    Tyget har i laboratorietester bekräftats skydda mot virus
                    och bakterier med upp till 99%.
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-6'>
              <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                <div className='-mt-6'>
                  <div>
                    <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-lg'>
                      <svg
                        className='h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='white'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className='mt-8 text-lg font-medium text-gray-800 tracking-tight'>
                    Bekväm
                  </h3>
                  <p className='mt-5 text-base text-gray-500'>
                    Tillverkad i mjukt polyestertyg vilket gör den skön att bära
                    och behaglig att andas genom.
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-6'>
              <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                <div className='-mt-6'>
                  <div>
                    <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-lg'>
                      <svg
                        className='h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='white'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className='mt-8 text-lg font-medium text-gray-800 tracking-tight'>
                    Hållbar och ekonomisk
                  </h3>
                  <p className='mt-5 text-base text-gray-500'>
                    Håller länge då den är tvättbar. Kan tvättas upp till 50
                    gånger.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
