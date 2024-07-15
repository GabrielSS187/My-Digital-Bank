import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from '@/lib/routes';
import { authConfig } from '@/shared/services/auth/auth.config';

import NextAuth from 'next-auth';

import { intlMiddleware } from './translate-middleware';

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;

  const pathUrl = nextUrl.pathname.replace(/^\/[a-zA-Z]{2}\//, '/');
  const isPublicRoute = PUBLIC_ROUTES.includes(pathUrl);

  if (isPublicRoute) {
    if (isAuthenticated) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(ROOT, nextUrl));
  }

  if (isAuthenticated) {
    return intlMiddleware(req);
  }
});
