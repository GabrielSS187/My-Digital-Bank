import { CreditCard } from '@/shared/assets/svgs/CreditCard';
import { Econometrics } from '@/shared/assets/svgs/Econometrics';
import { EconomicInvestment } from '@/shared/assets/svgs/EconomicInvestment';
import { House } from '@/shared/assets/svgs/House';
import { Loan } from '@/shared/assets/svgs/Loan';
import { Service } from '@/shared/assets/svgs/Service';
import { SettingsSolid } from '@/shared/assets/svgs/SettingsSolid';
import { Transfer } from '@/shared/assets/svgs/Transfer';
import { User } from '@/shared/assets/svgs/User';

import { FC } from 'react';

export type TMenu = {
  id: number;
  title: string;
  path: string;
  Icon: FC<{ color?: string }>;
  ref: string;
};

const BASE_PATH = '/dashboard';

export const menuData: TMenu[] = [
  {
    id: 1,
    title: 'Dashboard',
    ref: 'Dashboard',
    path: `${BASE_PATH}`,
    Icon: House
  },
  {
    id: 2,
    title: 'Transactions',
    ref: 'Transactions',
    path: `${BASE_PATH}/transactions`,
    Icon: Transfer
  },
  {
    id: 3,
    title: 'Accounts',
    ref: 'Accounts',
    path: `${BASE_PATH}/accounts`,
    Icon: User
  },
  {
    id: 4,
    title: 'Investments',
    ref: 'Investments',
    path: `${BASE_PATH}/investments`,
    Icon: EconomicInvestment
  },
  {
    id: 5,
    title: 'Credit Cards',
    ref: 'CreditCards',
    path: `${BASE_PATH}/creditCards`,
    Icon: CreditCard
  },
  {
    id: 6,
    title: 'Loans',
    ref: 'Loans',
    path: `${BASE_PATH}/loans`,
    Icon: Loan
  },
  {
    id: 7,
    title: 'Services',
    ref: 'Services',
    path: `${BASE_PATH}/services`,
    Icon: Service
  },
  {
    id: 8,
    title: 'My Privileges',
    ref: 'MyPrivileges',
    path: `${BASE_PATH}/myPrivileges`,
    Icon: Econometrics
  },
  {
    id: 9,
    title: 'Settings',
    ref: 'Settings',
    path: `${BASE_PATH}/settings`,
    Icon: SettingsSolid
  }
];
