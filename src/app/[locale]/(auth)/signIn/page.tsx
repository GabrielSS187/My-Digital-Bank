import { FormSignInAndSignUp } from '@/shared/components/FormSignInAndSignUp';

import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('signIn');

  return (
    <main className="flex h-screen items-center justify-center">
      <FormSignInAndSignUp />
    </main>
  );
}
