import Image from 'next/image'
import Link from 'next/link'

export default function Hero({ scrollToComponent, reference }) {
  return (
    <div className='lg:relative bg-gray-50'>
      <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
        <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
          <h1 className='text-4xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl'>
            <span className='block text-gray-800'>
              <span className='text-blue-700 block'>SilverShield</span>the new
              normal
            </span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl'>
            Munskydd ser ut att vara här för att stanna under en längre period.
            SilverShield med sina unika egenskaper kommer spela en viktig roll i
            kampen för en friskare värld.
          </p>
          <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
            <div
              onClick={() => scrollToComponent(reference)}
              className='rounded-md shadow'
            >
              <span className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10 cursor-pointer'>
                Läs mer
              </span>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <Link href='/kontakt'>
                <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                  Kontakt
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
        <Image
          className='absolute inset-0 w-full h-full object-cover'
          src='/images/jesper-hero.jpg'
          alt='Face mask'
          layout='fill'
        />
      </div>
    </div>
  )
}
