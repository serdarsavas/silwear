import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'

export default function Header() {
  return (
    <header className='border-b border-gray-100'>
      <nav className='bg-white shadow'>
        <div className='mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex-1 flex items-center justify-center items-stretch sm:justify-start'>
              <div className='sm:ml-6 flex sm:space-x-8 text-4xl sm:text-lg mr-12 sm:mr-0'>
                <Link href='/'>
                  <div className='self-center mt-2 mr-6 sm:mr-0 hover:cursor-pointer hover:scale-150'>
                    <Image
                      src='/logo.png'
                      width={35}
                      height={43}
                      alt='Logo of white shield with letters AG'
                    />
                  </div>
                </Link>
                <NavLink href='/'>
                  <a>Produkt</a>
                </NavLink>
                <NavLink href='/om-oss'>
                  <a>Om</a>
                </NavLink>
                <NavLink href='/kontakt'>
                  <a>Kontakt</a>
                </NavLink>
                <NavLink href='/faq'>
                  <a>FAQ</a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
