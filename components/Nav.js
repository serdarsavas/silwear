import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggledClassName = isOpen ? 'block' : 'hidden';

  return (
    <nav className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              onClick={e => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='sm:ml-6 sm:flex sm:space-x-8 hidden'>
              <Link href='/'>
                <a className='border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                  Munskydd
                </a>
              </Link>
              <Link href='/om-oss'>
                <a className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                  Om Oss
                </a>
              </Link>
              <Link href='/kontakt'>
                <a className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                  Kontakt
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${toggledClassName} sm:hidden`}>
        <div className='pt-2 pb-4 space-y-1'>
          <a
            href='#'
            className='bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
          >
            Munskydd
          </a>
          <a
            href='#'
            className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
          >
            Om Oss
          </a>
          <a
            href='#'
            className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}
