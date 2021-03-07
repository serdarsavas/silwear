import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='sm:mt-0 bg-gray-50 border-gray-100 border-t'>
      <div className='flex justify-around space-x-6 py-12 items-center'>
        <div className='flex items-center'>
          <div className='ml-2'>
            <Image src='/logo.png' alt='Logo' width={70} height={86} />
          </div>
          <p className='text-center text-base text-gray-800 sm:ml-8 ml-2'>
            &copy; 2020 <span className='text-blue-700'>SilverShield</span>
          </p>
        </div>
        <div>
          <p className='text-gray-800'>
            Kontakt:{' '}
            <a href='mailto:info@silvershield.com' className='text-blue-700'>
              info@silvershield.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
