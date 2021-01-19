import Image from 'next/image';

export default function Footer({ bgColor, color }) {
  return (
    <footer className={`mt-10 sm:mt-0 bg-${bgColor} border-t border-gray-200`}>
      <div className='flex justify-around space-x-6 py-12 items-center'>
        <div className='flex items-center'>
          <div className='ml-2'>
            <Image src='/logo.png' alt='Logo' width={70} height={86} />
          </div>
          <p className={`text-center text-base text-${color} sm:ml-8 ml-2`}>
            &copy; 2020 <span className='text-blue-600'>SilverShield</span>
          </p>
        </div>
        <div>
          <p className={`text-${color}`}>
            <a href=''></a>
            Kontakt:{' '}
            <a href='mailto:info@silvershield.com' className='text-blue-600'>
              info@silvershield.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
