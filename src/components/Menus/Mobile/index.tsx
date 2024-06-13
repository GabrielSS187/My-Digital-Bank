'use client';

import bankLogo from '@/assets/images/bank-logo.png';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { menuData } from '../menuData';

type TProps = {
  pathname: string;
};

export function Mobile({ pathname }: TProps) {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <>
      <button onClick={() => setHidden(!hidden)}>Aplly</button>
      <ul className={`${hidden ? 'block h-screen w-64 border' : 'hidden'}`}>
        <div className="font-month m-7 flex items-center gap-2 text-3xl font-extrabold text-blue-950">
          <Image src={bankLogo} alt="Bank Logo" width={36} height={36} />
          BankDash.
        </div>
        {menuData.map((menu) => (
          <li key={`${menu.title + menu.title.length}`}>
            <Link
              href="#"
              className={`
            mt-2 flex h-10 items-center gap-4 rounded-s-xl ${menu.path === pathname && 'border-l-[.35rem] border-blue-700 text-blue-700'} pl-7 hover:bg-blue-50
          `}
            >
              <menu.Icon
                color={menu.path === pathname ? '#1D4ED8' : undefined}
              />
              <span>{menu.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
