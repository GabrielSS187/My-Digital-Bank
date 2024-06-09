import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useForm } from 'react-hook-form';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  isFormLogin?: boolean;
};

type TFormData = {
  name?: string;
  email: string;
  password: string;
};

export function FormSignInAndSignUp({ isFormLogin = true }: Props) {
  const form = useForm<TFormData>();
  const router = useRouter();

  const handleForm = form.handleSubmit(async (data) => {
    const { name, email, password } = data;

    if (isFormLogin) {
      try {
        await signIn('credentials', { email, password, redirect: false });
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">
          {isFormLogin ? 'Login' : 'Sign up'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {isFormLogin
            ? 'Enter your email and password to access your account.'
            : 'Enter your email and password to create your account.'}
        </p>
      </div>
      <form onSubmit={handleForm} className="space-y-4">
        {!isFormLogin && (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              {...form.register('name')}
              id="name"
              placeholder="Gabriel..."
              type="text"
              required
            />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...form.register('email')}
            id="email"
            placeholder="m@example.com"
            type="email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            {...form.register('password')}
            id="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <Button className="w-full" type="submit">
          {isFormLogin ? 'Sign in' : 'Confirm'}
        </Button>
      </form>

      {isFormLogin && (
        <div className="flex justify-center">
          <Link href="/signUp">Create new account</Link>
        </div>
      )}

      {!isFormLogin && (
        <div className="flex justify-center">
          <Link href="/signIn">Login in account</Link>
        </div>
      )}
    </div>
  );
}
