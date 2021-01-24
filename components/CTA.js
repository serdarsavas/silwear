import Link from 'next/link';

export default function CTA() {
  return (
    <div className='bg-white'>
      <div className='max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-4xl font-extrabold tracking-tight text-blue-700 sm:text-4xl'>
          <span className='block'>Vill du veta mer?</span>
          <span className='text-gray-600 block bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent'>
            Läs mer under <span className='text-blue-700'>Om oss</span> eller
            hör av dig.
          </span>
        </h2>
        <div className='mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5'>
          <Link href='om-oss'>
            <a className='flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800'>
              Om oss
            </a>
          </Link>
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
