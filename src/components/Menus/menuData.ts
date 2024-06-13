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
  title: string;
  path: string;
  Icon: FC<{ color?: string }>;
};

export const menuData: TMenu[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    Icon: House
  },
  {
    title: 'Transactions',
    path: '/transactions',
    Icon: Transfer
  },
  {
    title: 'Accounts',
    path: '/accounts',
    Icon: User
  },
  {
    title: 'Investments',
    path: '/investments',
    Icon: EconomicInvestment
  },
  {
    title: 'Credit Cards',
    path: '/creditCards',
    Icon: CreditCard
  },
  {
    title: 'Loans',
    path: '/loans',
    Icon: Loan
  },
  {
    title: 'Services',
    path: '/services',
    Icon: Service
  },
  {
    title: 'My Privileges',
    path: '/myPrivileges',
    Icon: Econometrics
  },
  {
    title: 'Settings',
    path: '/settings',
    Icon: SettingsSolid
  }
];
