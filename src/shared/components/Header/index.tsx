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

import { useState } from 'react';

import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Languages } from '../languages';

type TProps = {
  openMenuInHeader: () => void;
  actualLocationTitle: string;
};

export function Header({ actualLocationTitle, openMenuInHeader }: TProps) {
  const t = useTranslations('sidebar');
  const tHeader = useTranslations('header');
  const tOthers = useTranslations('others');

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
            {t(actualLocationTitle)}
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:block">
            <input
              type="search"
              className="rounded-3xl border-0 bg-gray-100 px-3 py-2 text-base shadow"
              placeholder={tOthers('searchByName')}
            />
          </div>

          <div className="hidden lg:block">
            <Languages />
          </div>

          <button
            className="hidden rounded-full bg-gray-100 p-2 text-red-500 lg:block"
            title={tOthers('alerts')}
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
                <DropdownMenuLabel>{tHeader('myAccount')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{tHeader('settings')}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  {tHeader('logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
