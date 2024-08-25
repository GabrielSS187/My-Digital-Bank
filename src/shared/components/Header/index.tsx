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
    <div className="border-border-color-1 flex flex-col items-center gap-3 border-b-2 px-5 py-4">
      <div className="flex h-auto w-full items-center justify-between">
        <div className="mt-1 flex lg:hidden">
          <button onClick={openMenuInHeader}>
            <List size={30} />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-color-text-1">
            {t(actualLocationTitle)}
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:block">
            <input
              type="search"
              className="rounded-3xl border-0 bg-bg-input-color-1 px-3 py-2 text-base placeholder-color-text-5 shadow"
              placeholder={tOthers('searchByName')}
            />
          </div>

          <div className="hidden lg:block">
            <Languages />
          </div>

          <button
            className="hidden rounded-full bg-bg-input-color-1 p-2 text-color-text-8 lg:block"
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

              <DropdownMenuContent className="absolute !right-[-22px] !w-[10rem] bg-s-bg-color-secondary">
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
