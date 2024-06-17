import bankLogo from '@/shared/assets/images/bank-logo.png';
import { TMenu } from '@/shared/data/menuData';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

type TProps = {
  menuData: TMenu[];
  pathname: string;
  openMenu: boolean;
  handleMenu: () => void;
  // eslint-disable-next-line no-unused-vars
  getTittleActualLocation: (pathname?: string) => void;
};

export function Sidebar({
  menuData,
  pathname,
  getTittleActualLocation,
  openMenu,
  handleMenu
}: TProps) {
  const [actualClass, setActualClass] = useState<string>('');

  useEffect(() => {
    getTittleActualLocation();
    if (openMenu) {
      setActualClass('transition-all ease-out duration-300 w-[15.9rem]');
    } else {
      setActualClass('transition-all ease-in duration-300 md:w-16');
    }
  }, [openMenu, actualClass, pathname, getTittleActualLocation]);

  return (
    <nav
      className={`fixed h-screen  md:static ${!openMenu ? 'transition-all duration-300 ease-in max-md:translate-x-[-20rem]' : 'z-50 w-full bg-neutral-600 bg-opacity-55 md:w-auto md:bg-none'}`}
    >
      <ul className={`${actualClass} h-screen break-words border-r-2 bg-white`}>
        <div className="font-month flex items-center gap-2 px-5 py-4 text-3xl font-extrabold text-blue-950">
          {openMenu && (
            <Image
              src={bankLogo}
              alt="Bank Logo"
              className="!h-[30px] !w-[30px]"
            />
          )}
          {openMenu && <span>BankDash.</span>}
          {!openMenu && <span className="ml-[-1px]">B.</span>}
        </div>
        <button
          onClick={handleMenu}
          className={`absolute  ${openMenu ? 'left-[15.1rem] transition-all ease-out' : 'left-[3.1rem] transition-all ease-in'} top-[3.45rem] z-50 rounded-full border border-stone-950 bg-blue-700 px-[7px] text-center font-extrabold text-white duration-300`}
        >
          {openMenu ? '<' : '>'}
        </button>
        <div className="mt-3">
          {menuData.map((menu) => (
            <li key={menu.id} title={`${!open ? menu.title : ''}`}>
              <Link
                href={menu.path}
                className={`
                      mt-1 flex items-center gap-4  rounded-s-xl py-2 pl-5 md:mt-2 lg:text-lg ${openMenu && `${menu.path === pathname && 'border-l-[.35rem] border-blue-700 text-blue-700'}`} ${menu.path === pathname && 'bg-blue-50'} hover:bg-blue-50
                    `}
                onClick={() => getTittleActualLocation(pathname)}
              >
                <menu.Icon
                  color={menu.path === pathname ? '#1D4ED8' : undefined}
                />
                {openMenu && (
                  <span className="truncate font-medium">{menu.title}</span>
                )}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
