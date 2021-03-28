import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CTA() {
  const router = useRouter()

  function getLinks(pathname) {
    switch (pathname) {
      case '/':
        return {
          path1: '/om-oss',
          path2: '/kontakt',
          linkText1: 'Om',
          linkText2: 'Kontakt',
          buttonText1: 'SilverShield',
          buttonText2: 'Kontakt',
        }
      case '/om-oss':
        return {
          path1: '/',
          path2: '/kontakt',
          linkText1: 'Produkt',
          linkText2: 'Kontakt',
          buttonText1: 'SilverShield',
          buttonText2: 'Kontakt',
        }
      case '/faq':
        return {
          path1: '/',
          path2: '/kontakt',
          linkText1: 'Produkt',
          linkText2: 'Kontakt',
          buttonText1: 'SilverShield',
          buttonText2: 'Kontakt',
        }
    }
  }

  const links = getLinks(router.pathname)

  return (
    <div className='bg-white'>
      <div className='max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h3 className='text-4xl font-extrabold tracking-tight text-gray-800 sm:text-4xl'>
          <span className='block'>Vill du veta mer?</span>
          <span className='block'>
            Gå till{' '}
            <Link href={links.path1}>
              <a className='text-blue-700 hover:text-blue-800'>
                {links.linkText1}{' '}
              </a>
            </Link>
            eller{' '}
            <Link href={links.path2}>
              <a className='text-blue-700 hover:text-blue-800'>
                {links.linkText2}
              </a>
            </Link>
          </span>
        </h3>
        <div className='mt-6 flex'>
          <Link href={links.path1}>
            <a className='w-32 text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800'>
              {links.buttonText1}
            </a>
          </Link>

          <Link href={links.path2}>
            <a className='w-32 text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-gray-50 hover:bg-gray-100 ml-4'>
              {links.buttonText2}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
