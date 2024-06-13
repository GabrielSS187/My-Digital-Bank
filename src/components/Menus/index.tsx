'use client';

import { usePathname } from 'next/navigation';

import { Desktop } from './Desktop';

export function Menu() {
  const pathname = usePathname();

  return <Desktop pathname={pathname} />;
}
