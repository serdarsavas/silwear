import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Nav() {
  return (
    <nav className='bg-white shadow'>
      <div className='mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-1 flex items-center justify-center items-stretch sm:justify-start'>
            <div className='sm:ml-6 flex sm:space-x-8'>
              <Link href='/'>
                <div className='self-center mt-2 mr-6 sm:mr-0 hover:cursor-pointer hover:scale-150'>
                  <Image src='/logo.png' width={40} height={45} alt='Logo' />
                </div>
              </Link>
              <NavLink href='/'>
                <a>Hem</a>
              </NavLink>
              <NavLink href='/kontakt'>
                <a>Kontakt</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
