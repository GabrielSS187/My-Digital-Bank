'use client';

import bankLogo from '@/assets/images/bank-logo.png';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { menuData } from '../menuData';

type TProps = {
  pathname: string;
};

export function Desktop({ pathname }: TProps) {
  const [open, setOpen] = useState<boolean>(true);
  const [actualClass, setActualClass] = useState<string>('');

  useEffect(() => {
    if (open) {
      setActualClass('transition-all ease-out duration-300');
    } else {
      setActualClass('transition-all ease-in duration-300 w-16');
    }
  }, [open, actualClass]);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <ul className={`${actualClass} relative h-screen w-64 break-words border`}>
      <div className="font-month my-7 ml-5 flex items-center gap-2 text-3xl font-extrabold text-blue-950">
        {open && (
          <Image
            src={bankLogo}
            alt="Bank Logo"
            className="!h-[36px] !w-[36px]"
          />
        )}
        {open && <span>BankDash.</span>}
        {!open && <span className="ml-[-1px]">B.</span>}
      </div>
      <button
        onClick={handleMenu}
        className={`absolute ${open ? 'left-[15.1rem]' : 'left-[3.1rem]'} top-[3.95rem] z-50 rounded-full border border-stone-950 bg-blue-700 px-[7px] text-center font-extrabold text-white`}
      >
        {open ? '<' : '>'}
      </button>
      <div className="mt-9">
        {menuData.map((menu) => (
          <li
            key={`${menu.title + menu.title.length}`}
            title={`${!open ? menu.title : ''}`}
          >
            <Link
              href="#"
              className={`
              mt-2 flex h-10 items-center gap-4 rounded-s-xl pl-5 ${open && `${menu.path === pathname && 'border-l-[.35rem] border-blue-700 text-blue-700'}`} ${menu.path === pathname && 'bg-blue-50'} hover:bg-blue-50
            `}
            >
              <menu.Icon
                color={menu.path === pathname ? '#1D4ED8' : undefined}
              />
              {open && <span className="truncate">{menu.title}</span>}
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
}
