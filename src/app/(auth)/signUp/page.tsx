'use client';

import { FormSignInAndSignUp } from '@/components/FormSignInAndSignUp';

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <FormSignInAndSignUp isFormLogin={false} />
    </main>
  );
}
