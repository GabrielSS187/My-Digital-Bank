'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const a = '';

  useEffect(() => {
    router.push('/singIn');
  }, []);

  return <></>;
}
