'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/shared/components/ui/avatar';
import { Gear, BellSimple } from 'phosphor-react';

type TProps = {
  actualLocationTitle: string;
};

export function Header({ actualLocationTitle }: TProps) {
  return (
    <div className="flex h-[4.45rem] w-full items-center justify-between border-b-2 px-5">
      <div>
        <h2 className="mt-2 text-2xl font-semibold text-blue-900">
          {actualLocationTitle}
        </h2>
      </div>
      <div className="flex items-center gap-5">
        <div className="">
          <input
            type="search"
            className="rounded-3xl border-0 bg-gray-100 px-3 py-2 text-base shadow"
            placeholder="Search by name..."
          />
        </div>
        <button className="rounded-full bg-gray-100 p-2">
          <Gear size={25} />
        </button>
        <button className="rounded-full bg-gray-100 p-2 text-red-500">
          <BellSimple size={25} />
        </button>
        <button>
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </div>
  );
}
