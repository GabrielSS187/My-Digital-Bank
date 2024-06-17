'use client';

import { Header } from '@/shared/components/Header';
import { Sidebar } from '@/shared/components/Sidebar';
import { menuData } from '@/shared/data/menuData';

import { useCallback, useState } from 'react';

import { usePathname } from 'next/navigation';

type TProps = {
  pChildren: React.ReactNode;
};

export function EncapsulatingDashboard({ pChildren }: TProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [actualLocationTitle, setActualLocationTittle] = useState<string>('');

  const pathname = usePathname();

  const getTittleActualLocation = useCallback((pathname: string) => {
    const actualMenu = menuData.find(
      (menu) => menu.path.toLowerCase() === pathname.toLowerCase()
    );
    if (actualMenu) {
      setActualLocationTittle(actualMenu.title);
    }
  }, []);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  function openMenuInHeader() {
    setOpenMenu(true);
    console.log(openMenu);
  }

  return (
    <section className="flex h-screen md:bg-white">
      <Sidebar
        openMenu={openMenu}
        handleMenu={handleMenu}
        menuData={menuData}
        pathname={pathname}
        getTittleActualLocation={() => getTittleActualLocation(pathname)}
      />

      <div className="w-full">
        <Header
          openMenuInHeader={openMenuInHeader}
          actualLocationTitle={actualLocationTitle}
        />
        <div className="h-full bg-gray-50 p-5">{pChildren}</div>
      </div>
    </section>
  );
}
