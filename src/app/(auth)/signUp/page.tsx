'use client';

import { FormSignInAndSignUp } from '@/shared/components/FormSignInAndSignUp';

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <FormSignInAndSignUp isFormLogin={false} />
    </main>
  );
}
