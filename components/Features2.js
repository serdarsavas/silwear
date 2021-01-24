import Image from 'next/image';
import { forwardRef } from 'react';

const Features = forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className='bg-white flex flex-col lg:flex-row items-center lg:justify-evenly mb-20'
      >
        <div className=''>
          <Image
            className='rounded-lg shadow-lg object-cover object-center'
            src='/images/hero-image.jpg'
            alt='Whitney leaning against a railing on a downtown street'
            width='600'
            height='400'
          />
        </div>
        <div className='self-center max-auto'>
          <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl text-center lg:text-left'>
            High Quality Material
          </h2>
          <p className='text-gray-500 mt-4 text-xl'>
            Breathable, comfortable, and soft to the skin.
          </p>
        </div>
      </div>

      <div className='bg-white flex flex-col lg:flex-row items-center lg:justify-evenly mb-20'>
        <div className='order-1 lg:order-2'>
          <Image
            className='rounded-lg shadow-lg object-cover object-center'
            src='/images/hero-image.jpg'
            alt='Whitney leaning against a railing on a downtown street'
            width='600'
            height='400'
          />
        </div>

        <div className='self-center max-auto w-1/3'>
          <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl text-center lg:text-left'>
            One Size
          </h2>
          <p className='text-gray-500 mt-4 text-xl'>
            Depending on the head circumference, the length of the ear loops can
            be adjusted with sliding regulators.
          </p>
        </div>
      </div>

      <div className='bg-white flex flex-col lg:flex-row items-center lg:justify-evenly mb-20'>
        <div className=''>
          <Image
            className='rounded-lg shadow-lg object-cover object-center'
            src='/images/hero-image.jpg'
            alt='Whitney leaning against a railing on a downtown street'
            width='600'
            height='400'
          />
        </div>
        <div className='self-center max-auto w-1/3'>
          <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl text-center lg:text-left'>
            Dual Adjuster
          </h2>
          <p className='text-gray-500 mt-4 text-xl '>
            Allowing to adjust the top and bottom of the mask seperately for a
            perfect custom fit.
          </p>
        </div>
      </div>

      <div className='bg-white flex flex-col lg:flex-row items-center lg:justify-evenly mb-20'>
        <div className='order-1 lg:order-2'>
          <Image
            className='rounded-lg shadow-lg object-cover object-center'
            src='/images/hero-image.jpg'
            alt='Whitney leaning against a railing on a downtown street'
            width='600'
            height='400'
          />
        </div>

        <div className='self-center max-auto w-1/3'>
          <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl text-center lg:text-left'>
            Sustainability
          </h2>
          <p className='text-gray-500 mt-4 text-xl'>
            Investing in a quality washable face mask instead of disposable ones
            helps reduce waste. Our product can be washed up to 60 times.
          </p>
        </div>
      </div>
    </>
  );
});

export default Features;
