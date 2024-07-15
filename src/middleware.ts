import { PUBLIC_ROUTES } from '@/lib/routes';
import { auth } from '@/shared/services/auth';

import { NextRequest } from 'next/server';

import { locales } from './i18n';
import { default as authMiddleware } from './middlewares/auth-middleware';
import { intlMiddleware } from './middlewares/translate-middleware';

export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${PUBLIC_ROUTES.flatMap((p) =>
      p === '/' ? ['', '/'] : p
    ).join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  const containAuth = await auth();

  if (containAuth === null && isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
