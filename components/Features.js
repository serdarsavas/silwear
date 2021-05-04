import Image from 'next/image'
import { forwardRef } from 'react'

const Features = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='bg-white overflow-hidden'>
        <div className='text-lg max-w-prose mx-auto pb-8 md:pb-16 sm:pb-24 px-6'>
          <h2 className='mt-2 text-4xl font-extrabold text-blue-700  tracking-tight text-center'>
            Silvershield
          </h2>
          <p className='text-xl text-gray-500 leading-8 mt-8'>
            Våra munskydd innehåller silvertrådar som framgångsrikt har påvisats
            skydda mot virus och bakterier. Vår produkt är av högkvalitativ
            textil/tyg som andas, är bekväm och mjuk mot huden. Tyget består av
            97 % Polyester och 3 % silver.
          </p>
        </div>
        <div className='relative max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8'>
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
                    src='/images/skyddar-min.jpg'
                    alt='Close view of cloth'
                    width='600'
                    height='400'
                  />
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0 px-4 sm:px-8 mx-auto flex sm:items-center'>
              <div className='mt-5 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 text-center lg:text-left'>
                  Testad
                </h2>
                <p className='text-gray-500 mt-4 text-lg'>
                  Munskyddets CE-märkning vilar i huvudsak på två tester:{' '}
                  <a
                    href='https://www.sis.se/produkter/halso-och-sjukvard/sjukvardstextilier-allmant/ss-en-146832019/'
                    target='blank'
                    className='text-blue-700 underline'
                  >
                    EN 14683
                  </a>{' '}
                  och{' '}
                  <a
                    href='https://www.iso.org/standard/71292.html'
                    target='blank'
                    className='text-blue-700 underline'
                  >
                    ISO 18184
                  </a>
                  . ISO 18148 undersöker hur väl ett tyg skyddar mot virus. I
                  detta test visade sig vårt munskydd vara bäst i sin klass med
                  ett skydd på{' '}
                  <span className='font-semibold text-gray-800'>99.9%</span>. EN
                  14683 är ett test för medicinska munskydd som mäter hur väl
                  materialet skyddar mot mikrober. Vårt munskydd visade i detta
                  test på ett skydd mot bakterier med 91%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8'>
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
                    src='/images/bekvam-min.jpg'
                    alt='White face mask'
                    width='600'
                    height='400'
                  />
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0 px-4 sm:px-8 mx-auto flex sm:items-center'>
              <div className='mt-5 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 text-center lg:text-left'>
                  Bekväm
                </h2>
                <p className='text-gray-500 mt-4 text-xl'>
                  Silvershield är tillverkad av ett mjukt tyg som är behaglig
                  att andas genom och skön att bära. De justerbara öronöglorna
                  gör det möjligt att justera övre och nedre delen av munskyddet
                  separat för en perfekt anpassad passform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8'>
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
                    src='/images/hallbar-min.jpg'
                    alt='White face mask'
                    width='600'
                    height='400'
                  />
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0 px-4 sm:px-8 mx-auto flex sm:items-center'>
              <div className='mt-5 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 text-center lg:text-left'>
                  Hållbar och ekonomisk
                </h2>
                <p className='text-gray-500 mt-4 text-xl'>
                  SilverShield kan tvättas upp till 50 gånger. Att investera i
                  ett tvättbart munskydd av hög kvalitet istället för att
                  använda engångsmunskydd hjälper till att minska avfallet. Det
                  är dessutom skonsamt mot plånboken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default Features
