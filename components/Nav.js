import { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggledClassName = isOpen ? 'block' : 'hidden';

  return (
    <nav className='bg-white shadow'>
      <div className='mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-1 flex items-center justify-center items-stretch sm:justify-start'>
            <div className='sm:ml-6 flex sm:space-x-8'>
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
