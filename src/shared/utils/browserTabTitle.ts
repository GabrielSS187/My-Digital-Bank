import { getTranslations } from 'next-intl/server';

//8 Só pode ser usados em funções assíncronas
export async function browserTabTitle(title: string): Promise<string> {
  const t = await getTranslations('sidebar');

  return t(title);
}
