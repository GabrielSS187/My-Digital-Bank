import Image, { StaticImageData } from 'next/image';

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
  iconCountry: StaticImageData;
};

type Checked = DropdownMenuCheckboxItemProps['checked'];

export function Languages() {
  const languages: TLanguages[] = [
    {
      language: 'Português',
      iconCountry: brazilIcon
    },
    {
      language: 'Inglês',
      iconCountry: uniStatesIcon
    }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="hidden rounded-full bg-gray-100 p-2 text-black  lg:block"
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
            <DropdownMenuCheckboxItem checked>
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
