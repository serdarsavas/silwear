import Image from 'next/image';

export default function Features() {
  return (
    <>
      <div className='bg-white'>
        <div className='relative mt-20'>
          <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
            <div className='relative sm:py-16 lg:py-0'>
              <div
                aria-hidden='true'
                className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
              >
                <div className='absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72'></div>
                <svg
                  className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
                  width='404'
                  height='392'
                  fill='none'
                  viewBox='0 0 404 392'
                >
                  <defs>
                    <pattern
                      id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='404'
                    height='392'
                    fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
                  />
                </svg>
              </div>
              <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
                <div className='relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
                  <Image
                    className='absolute inset-0 h-full w-full object-cover'
                    src='/images/hero-image.jpg'
                    alt=''
                    layout='fill'
                  />
                </div>
              </div>
            </div>

            <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
              <div className='pt-12 sm:pt-16 lg:pt-20'>
                <h2 className='text-3xl text-blue-700 font-bold tracking-tight sm:text-4xl'>
                  En rubrik
                </h2>
                <div className='mt-6 text-gray-500 space-y-6'>
                  <p className='text-lg'>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
