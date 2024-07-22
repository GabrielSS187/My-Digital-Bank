'use client';

import { Link } from '@/navigation';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';

import { useForm } from 'react-hook-form';

import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Languages } from '../languages';

type Props = {
  isFormLogin?: boolean;
};

type TFormData = {
  name?: string;
  email: string;
  password: string;
};

export function FormSignInAndSignUp({ isFormLogin = true }: Props) {
  const t = useTranslations('loginAndSign');

  const form = useForm<TFormData>();

  const handleForm = form.handleSubmit(async (data) => {
    const { email, password } = data;

    if (isFormLogin) {
      try {
        await signIn('credentials', { email, password, redirect: true });
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">
          {isFormLogin ? t('login') : t('signUp')}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {isFormLogin ? t('titleOne') : t('titleTwo')}
        </p>
      </div>
      <form onSubmit={handleForm} className="space-y-4">
        {!isFormLogin && (
          <div className="space-y-2">
            <Label htmlFor="name">{t('name')}</Label>
            <Input
              {...form.register('name')}
              id="name"
              placeholder={t('placeholderName')}
              type="text"
              required
            />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">{t('email')}</Label>
          <Input
            {...form.register('email')}
            id="email"
            placeholder={t('placeholderEmail')}
            type="email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t('password')}</Label>
          <Input
            {...form.register('password')}
            id="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <Button className="w-full" type="submit">
          {isFormLogin ? t('signIn') : t('confirm')}
        </Button>
      </form>

      {isFormLogin && (
        <div className="flex justify-center">
          <Link href="/signUp">{t('createNewAccount')}</Link>
        </div>
      )}

      {!isFormLogin && (
        <div className="flex justify-center">
          <Link href="/signIn">{t('loginInAccount')}</Link>
        </div>
      )}

      <div className="flex justify-center">
        <div className="max-w-fit rounded-full border-2 border-solid">
          <Languages />
        </div>
      </div>
    </div>
  );
}
