'use client';

import { usePathname } from 'next/navigation';

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export function Menu() {
  const pathname = usePathname();

  return (
    <div>
      <Desktop pathname={pathname} />
      <Mobile pathname={pathname} />
    </div>
  );
}
