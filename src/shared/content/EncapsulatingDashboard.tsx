'use client';

import { usePathname } from '@/navigation';
import { Header } from '@/shared/components/Header';
import { Sidebar } from '@/shared/components/Sidebar';
import { menuData } from '@/shared/data/menuData';

import { useCallback, useState, useEffect } from 'react';

type TProps = {
  pChildren: React.ReactNode;
};

export function EncapsulatingDashboard({ pChildren }: TProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [actualLocationTitle, setActualLocationTittle] =
    useState<string>('Dashboard');

  const pathname = usePathname();

  useEffect(() => {
    const widthScreen = window.screen.width;
    if (widthScreen <= 1024) {
      setOpenMenu(false);
    }
  }, []);

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
  }

  return (
    <section className="flex bg-s-bg-color-secondary">
      <Sidebar
        openMenu={openMenu}
        handleMenu={handleMenu}
        menuData={menuData}
        pathname={pathname}
        getTittleActualLocation={() => getTittleActualLocation(pathname)}
      />

      <div className="w-full max-lg:fixed">
        <Header
          openMenuInHeader={openMenuInHeader}
          actualLocationTitle={actualLocationTitle}
        />
        <div className="h-full bg-s-bg-color-primary p-5 max-lg:h-dvh">
          {pChildren}
        </div>
      </div>
    </section>
  );
}
