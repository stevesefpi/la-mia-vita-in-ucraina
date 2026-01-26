import {NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {updateSession} from '@/utils/supabase/middleware';

const intl = createMiddleware(routing);

export default async function proxy(request) {
  const {pathname} = request.nextUrl;

  // 1) Protect private routes
  if (pathname.startsWith('/private')) {
    return updateSession(request);
  }

  // 2) Do NOT run i18n on auth routes (keep them exactly as filesystem routes)
  if (pathname.startsWith('/login') || pathname.startsWith('/auth')) {
    return NextResponse.next();
  }

  // 3) Everything else: i18n routing
  return intl(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
