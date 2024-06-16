'use client';

import bankLogo from '@/assets/images/bank-logo.png';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menuData } from './menuData';

export function Menu() {
  const [open, setOpen] = useState<boolean>(true);
  const [actualClass, setActualClass] = useState<string>('');

  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      setActualClass('transition-all ease-out duration-300 w-64');
    } else {
      setActualClass('transition-all ease-in duration-300 md:w-16');
    }
  }, [open, actualClass]);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <div
      className={`relative ${!open ? 'transition-all duration-300 ease-in max-md:translate-x-[-20rem]' : 'bg-neutral-600'} h-screen md:bg-white`}
    >
      <ul
        className={`${actualClass} absolute h-screen break-words border-r-2 bg-white`}
      >
        <div className="font-month m-5 flex items-center gap-2 text-3xl font-extrabold text-blue-950">
          {open && (
            <Image
              src={bankLogo}
              alt="Bank Logo"
              className="!h-[30px] !w-[30px]"
            />
          )}
          {open && <span>BankDash.</span>}
          {!open && <span className="ml-[-1px]">B.</span>}
        </div>
        <button
          onClick={handleMenu}
          className={`absolute ${open ? 'left-[15.1rem] transition-all ease-out' : 'left-[3.1rem] transition-all ease-in'} top-[3.5rem] z-50 rounded-full border border-stone-950 bg-blue-700 px-[7px] text-center font-extrabold text-white duration-300`}
        >
          {open ? '<' : '>'}
        </button>
        <div className="mt-9">
          {menuData.map((menu) => (
            <li key={menu.id} title={`${!open ? menu.title : ''}`}>
              <Link
                href="#"
                className={`
              mt-1 flex items-center gap-4  rounded-s-xl py-2 pl-5 md:mt-2 md:text-lg ${open && `${menu.path === pathname && 'border-l-[.35rem] border-blue-700 text-blue-700'}`} ${menu.path === pathname && 'bg-blue-50'} hover:bg-blue-50
            `}
              >
                <menu.Icon
                  color={menu.path === pathname ? '#1D4ED8' : undefined}
                />
                {open && (
                  <span className="truncate font-medium">{menu.title}</span>
                )}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
