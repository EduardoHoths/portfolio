"use client"

import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['pt-br', 'en-us', 'jp'],
 
  // Used when no locale matches
  defaultLocale: 'pt-br'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt-br|en-us|jp)/:path*']
};