import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, children }) {
  const router = useRouter();

  let className = children.props.className || '';

  router.pathname === href
    ? (className =
        'border-blue-700 text-gray-900 inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium')
    : (className =
        'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-3 pt-1 text-sm font-medium');
  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}
