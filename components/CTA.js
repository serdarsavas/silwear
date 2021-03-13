import Link from 'next/link'

export default function CTA({ isHome }) {
  return (
    <div className='bg-white'>
      <div className='max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-4xl font-extrabold tracking-tight text-gray-800 sm:text-4xl'>
          <span className='block'>Vill du veta mer?</span>
          <span className='block'>
            Gå till{' '}
            {isHome ? (
              <Link href='/om-oss'>
                <a className='text-blue-700 hover:text-blue-800'>Om Oss</a>
              </Link>
            ) : (
              <Link href='/'>
                <a className='text-blue-700 hover:text-blue-800'>Produkt</a>
              </Link>
            )}{' '}
            eller{' '}
            <Link href='/kontakt'>
              <a className='text-blue-700 hover:text-blue-800'>Kontakta oss.</a>
            </Link>
          </span>
        </h2>
        <div className='mt-6 flex'>
          {isHome ? (
            <Link href='/om-oss'>
              <a className='w-32 text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800'>
                Om Oss
              </a>
            </Link>
          ) : (
            <Link href='/'>
              <a className='w-32 text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800'>
                SilverShield
              </a>
            </Link>
          )}
          <Link href='/kontakt'>
            <a className='w-32 text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-gray-50 hover:bg-gray-100 ml-4'>
              Kontakt
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
