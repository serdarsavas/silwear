import Link from 'next/link';

export default function CTA({ isHome }) {
  return (
    <div className='bg-white'>
      <div className='max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-4xl font-extrabold tracking-tight text-gray-800 sm:text-4xl'>
          <span className='block'>Vill du veta mer?</span>
          <span className='block'>
            Läs mer under{' '}
            {isHome ? (
              <Link href='om-oss'>
                <a className='text-blue-700'>Om Oss</a>
              </Link>
            ) : (
              <Link href='/'>
                <a className='text-blue-700'>Produkt</a>
              </Link>
            )}{' '}
            eller{' '}
            <Link href='kontakt'>
              <a className='text-blue-700'>Kontakta oss.</a>
            </Link>
          </span>
        </h2>
        <div className='mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5'>
          {isHome ? (
            <Link href='om-oss'>
              <a className='flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800'>
                Om Oss
              </a>
            </Link>
          ) : (
            <Link href='/'>
              <a className='flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800'>
                SilverShield
              </a>
            </Link>
          )}
          <Link href='kontakt'>
            <a className='flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-gray-50 hover:bg-gray-100'>
              Kontakt
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
