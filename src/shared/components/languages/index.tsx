import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';

import { Button } from '@/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import { Translate } from 'phosphor-react';

import brazilIcon from '@/shared/assets/icons/brazil.png';
import uniStatesIcon from '@/shared/assets/icons/united-states.png';

type TLanguages = {
  language: string;
  ref: string;
  iconCountry: StaticImageData;
};

type Checked = DropdownMenuCheckboxItemProps['checked'];

export function Languages() {
  const [handleDrop, setHandleDrop] = useState<boolean>(false);

  const path = usePathname();
  const pathActuallyLanguage = path.split('/')[1];

  const languages: TLanguages[] = [
    {
      language: 'Português',
      ref: 'pt',
      iconCountry: brazilIcon
    },
    {
      language: 'Inglês',
      ref: 'en',
      iconCountry: uniStatesIcon
    }
  ];

  function getDropChange(e: boolean) {
    setHandleDrop(e);
  }

  return (
    <DropdownMenu onOpenChange={(e) => getDropChange(e)}>
      <DropdownMenuTrigger asChild>
        <button
          className={`hidden rounded-full p-2 ${handleDrop ? 'bg-gray-500 text-white' : 'bg-gray-100 text-black'} lg:block`}
          title="Idiomas"
        >
          <Translate size={25} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Idiomas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((l) => {
          return (
            <DropdownMenuCheckboxItem
              checked={l.ref === pathActuallyLanguage}
              key={l.language}
            >
              {l.language}

              <DropdownMenuShortcut>
                <Image src={l.iconCountry} width={26} alt={l.language} />
              </DropdownMenuShortcut>
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
