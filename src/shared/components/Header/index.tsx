import { useState } from 'react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/shared/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu';
import { BellSimple, List } from 'phosphor-react';

import { signOut } from 'next-auth/react';
import { Languages } from '../languages';

type TProps = {
  openMenuInHeader: () => void;
  actualLocationTitle: string;
};

export function Header({ actualLocationTitle, openMenuInHeader }: TProps) {
  const [handleDrop, setHandleDrop] = useState<boolean>(false);

  function getDropChange(e: boolean) {
    setHandleDrop(e);
  }

  return (
    <div className="flex flex-col items-center gap-3 border-b-2 px-5 py-4">
      <div className="flex h-auto w-full items-center justify-between">
        <div className="mt-1 flex lg:hidden">
          <button onClick={openMenuInHeader}>
            <List size={30} />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-900">
            {actualLocationTitle}
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:block">
            <input
              type="search"
              className="rounded-3xl border-0 bg-gray-100 px-3 py-2 text-base shadow"
              placeholder="Search by name..."
            />
          </div>

          <Languages />

          <button
            className="hidden rounded-full bg-gray-100 p-2 text-red-500 lg:block"
            title="Alertas"
          >
            <BellSimple size={25} />
          </button>

          <DropdownMenu onOpenChange={(e) => getDropChange(e)}>
            <DropdownMenuTrigger>
              <Avatar className={`${handleDrop && 'outline-double'}`}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <DropdownMenuContent className="absolute !right-[-22px] !w-[10rem]">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex w-full gap-3 lg:hidden">
        <div className="w-full">
          <input
            type="search"
            className="w-full rounded-3xl border-0 bg-gray-100 px-3 py-2 text-base shadow"
            placeholder="Search by name..."
          />
        </div>
        {/* <div className="flex gap-3">
          <button className=" rounded-full bg-gray-100 p-2">
            <Gear size={25} />
          </button>
          <button className=" rounded-full bg-gray-100 p-2 text-red-500">
            <BellSimple size={25} />
          </button>
        </div> */}
      </div>
    </div>
  );
}
function getServerSession() {
  throw new Error('Function not implemented.');
}
