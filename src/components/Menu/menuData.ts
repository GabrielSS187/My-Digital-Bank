import { CreditCard } from '@/assets/svgs/CreditCard';
import { Econometrics } from '@/assets/svgs/Econometrics';
import { EconomicInvestment } from '@/assets/svgs/EconomicInvestment';
import { House } from '@/assets/svgs/House';
import { Loan } from '@/assets/svgs/Loan';
import { Service } from '@/assets/svgs/Service';
import { SettingsSolid } from '@/assets/svgs/SettingsSolid';
import { Transfer } from '@/assets/svgs/Transfer';
import { User } from '@/assets/svgs/User';

import { FC } from 'react';

type TMenu = {
  id: number;
  title: string;
  path: string;
  Icon: FC<{ color?: string }>;
};

export const menuData: TMenu[] = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
    Icon: House
  },
  {
    id: 2,
    title: 'Transactions',
    path: '/transactions',
    Icon: Transfer
  },
  {
    id: 3,
    title: 'Accounts',
    path: '/accounts',
    Icon: User
  },
  {
    id: 4,
    title: 'Investments',
    path: '/investments',
    Icon: EconomicInvestment
  },
  {
    id: 5,
    title: 'Credit Cards',
    path: '/creditCards',
    Icon: CreditCard
  },
  {
    id: 6,
    title: 'Loans',
    path: '/loans',
    Icon: Loan
  },
  {
    id: 7,
    title: 'Services',
    path: '/services',
    Icon: Service
  },
  {
    id: 8,
    title: 'My Privileges',
    path: '/myPrivileges',
    Icon: Econometrics
  },
  {
    id: 9,
    title: 'Settings',
    path: '/settings',
    Icon: SettingsSolid
  }
];
