import { Link } from '@/navigation';
import bankLogo from '@/shared/assets/images/bank-logo.png';
import { TMenu } from '@/shared/data/menuData';
import { delPathIntl } from '@/shared/utils/delPathIntl';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

type TProps = {
  menuData: TMenu[];
  pathname: string;
  openMenu: boolean;
  handleMenu: () => void;
  getTittleActualLocation: (pathname?: string) => void;
};

export function Sidebar({
  menuData,
  pathname,
  getTittleActualLocation,
  openMenu,
  handleMenu
}: TProps) {
  const t = useTranslations('sidebar');

  const [actualClass, setActualClass] = useState<string>('');

  useEffect(() => {
    getTittleActualLocation();
    if (openMenu) {
      setActualClass('transition-all ease-out duration-300 w-[15.9rem]');
    } else {
      setActualClass('transition-all ease-in duration-300 lg:w-16');
    }
  }, [openMenu, actualClass, pathname]);

  return (
    <nav
      className={`fixed h-screen lg:static ${!openMenu ? 'transition-all duration-300 ease-in max-lg:translate-x-[-18rem]' : 'z-50 w-full bg-neutral-600 bg-opacity-55 transition-all duration-300 ease-out lg:w-auto lg:bg-none'}`}
    >
      <ul
        className={`${actualClass} border-border-color-1 h-screen break-words border-r-2 bg-s-bg-color-secondary`}
      >
        <div className="font-month flex items-center gap-2 px-5 py-4 text-3xl font-extrabold text-color-text-1">
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
          className={`absolute  ${openMenu ? 'left-[15.1rem] transition-all ease-out' : 'left-[3.1rem] transition-all ease-in'} top-[3rem] z-50 rounded-full border border-stone-950 bg-btn-bg-color-3 px-[7px] text-center font-extrabold text-color-text-6 duration-300 lg:top-[3.65rem]`}
        >
          {openMenu ? '<' : '>'}
        </button>
        <div className="mt-4 lg:mt-7">
          {menuData.map((menu) => (
            <li key={menu.id} title={`${!openMenu ? t(menu.ref) : ''}`}>
              <Link
                href={menu.path}
                className={`
                      mt-1 flex items-center gap-4  rounded-s-xl py-2 pl-5 lg:mt-2 lg:text-lg ${openMenu && `${menu.path === delPathIntl(pathname) ? 'border-l-[.35rem] border-color-text-2 text-color-text-2' : 'text-color-text-3'}`} ${menu.path === delPathIntl(pathname) && 'bg-blue-50'} hover:bg-blue-50
                    `}
                onClick={() => getTittleActualLocation(pathname)}
              >
                <menu.Icon
                  color={
                    menu.path === delPathIntl(pathname)
                      ? 'fill-color-text-2'
                      : undefined
                  }
                />
                {openMenu && (
                  <span className="truncate font-medium">{t(menu.ref)}</span>
                )}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
