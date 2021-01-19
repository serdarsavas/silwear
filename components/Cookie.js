import cookie from 'js-cookie';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Cookie() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const hasDismissed = cookie.get('isDismissed');

  const onButtonClick = () => {
    setIsCollapsed(true);
    setTimeout(() => {
      cookie.set('isDismissed', true, { expires: 500 });
    }, 10);
  };

  return (
    <>
      {hasDismissed ? null : (
        <motion.div
          className='p-2 bg-gray-700 text-white fixed bottom-0 h-24 w-full flex justify-center items-center'
          initial={{ y: 0 }}
          animate={{ y: isCollapsed ? 200 : 0 }}
          transition={{ duration: 1, type: 'tween' }}
        >
          <div>
            <span>
              Vi använder cookies för att webbplatsen ska fungera på ett bra
              sätt.
            </span>
            <Link href='/personuppgifter'>
              <a className='ml-1 underline text-gray-100'>Läs mer</a>
            </Link>
          </div>
          <div>
            <button
              className='ml-3 py-1 px-6 border border-transparent text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100'
              onClick={onButtonClick}
            >
              OK
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
