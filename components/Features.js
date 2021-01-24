import Image from 'next/image';
import { forwardRef } from 'react';

const Features = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen'></div>
          <div className='mx-auto text-base lg:max-w-none'></div>
          <div className='mt-8 flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:row-start-1 lg:col-start-2'>
              <svg
                className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                width='404'
                height='384'
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='de316486-4a29-4312-bdfc-fbce2132a2c1'
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
                  height='384'
                  fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                />
              </svg>
              <div className='relative text-base mx-auto lg:max-w-none'>
                <figure className='aspect-h-7 lg:aspect-none'>
                  <Image
                    className='rounded-lg shadow-lg object-cover object-center'
                    src='/images/hero-image.jpg'
                    alt='Whitney leaning against a railing on a downtown street'
                    width='500'
                    height='600'
                  />
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0 w-3/4 mx-auto flex sm:items-center'>
              <div className='mt-5 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl text-center lg:text-left'>
                  High Quality Material
                </h2>
                <p className='text-gray-500 mt-4 text-xl'>
                  Breathable, comfortable, and soft to the skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen'></div>
          <div className='mx-auto text-base lg:max-w-none'></div>
          <div className='mt-8 flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:row-start-1 lg:col-start-2'>
              <svg
                className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                width='404'
                height='384'
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='de316486-4a29-4312-bdfc-fbce2132a2c1'
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
                  height='384'
                  fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                />
              </svg>
              <div className='relative text-base mx-auto lg:max-w-none'>
                <figure className='aspect-h-7 lg:aspect-none'>
                  <Image
                    className='rounded-lg shadow-lg object-cover object-center'
                    src='/images/hero-image.jpg'
                    alt='Whitney leaning against a railing on a downtown street'
                    width='500'
                    height='600'
                  />
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0 w-3/4 mx-auto flex sm:items-center'>
              <div className='mt-5 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl text-center lg:text-left'>
                  One Size
                </h2>
                <p className='text-gray-500 mt-4 text-xl'>
                  Depending on the head circumference, the length of the ear
                  loops can be adjusted with sliding regulators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen'></div>
          <div className='mx-auto text-base lg:max-w-none'></div>
          <div className='mt-8 flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:row-start-1 lg:col-start-2'>
              <svg
                className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                width='404'
                height='384'
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='de316486-4a29-4312-bdfc-fbce2132a2c1'
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
                  height='384'
                  fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                />
              </svg>
              <div className='relative text-base mx-auto lg:max-w-none'>
                <figure className='aspect-h-7 lg:aspect-none'>
                  <Image
                    className='rounded-lg shadow-lg object-cover object-center'
                    src='/images/hero-image.jpg'
                    alt='Whitney leaning against a railing on a downtown street'
                    width='500'
                    height='600'
                  />
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0 w-3/4 mx-auto flex sm:items-center'>
              <div className='mt-5 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl text-center lg:text-left'>
                  Dual Adjuster
                </h2>
                <p className='text-gray-500 mt-4 text-xl'>
                  Allowing to adjust the top and bottom of the mask seperately
                  for a perfect custom fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen'></div>
          <div className='mx-auto text-base lg:max-w-none'></div>
          <div className='mt-8 flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:row-start-1 lg:col-start-2'>
              <svg
                className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                width='404'
                height='384'
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='de316486-4a29-4312-bdfc-fbce2132a2c1'
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
                  height='384'
                  fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                />
              </svg>
              <div className='relative text-base mx-auto lg:max-w-none'>
                <figure className='aspect-h-7 lg:aspect-none'>
                  <Image
                    className='rounded-lg shadow-lg object-cover object-center'
                    src='/images/hero-image.jpg'
                    alt='Whitney leaning against a railing on a downtown street'
                    width='500'
                    height='600'
                  />
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0 w-3/4 mx-auto flex sm:items-center'>
              <div className='mt-5 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl text-center lg:text-left'>
                  Sustainability
                </h2>
                <p className='text-gray-500 mt-4 text-xl'>
                  Investing in a quality washable face mask instead of
                  disposable ones helps reduce waste. Our product can be washed
                  up to 60 times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Features;
