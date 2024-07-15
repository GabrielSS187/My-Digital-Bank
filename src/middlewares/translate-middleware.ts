import createMiddleware from 'next-intl/middleware';

import { locales } from '../i18n';

export const intlMiddleware = createMiddleware({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'en'
});
