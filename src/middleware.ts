import { getLocaleFromAcceptLanguage } from '@/i18n/utils';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const LOCALES = ['fr', 'en'] as const;

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Already a locale in the URL → we don't modify it
    if (LOCALES.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) {
        return NextResponse.next();
    }

    // Access to the root → redirection according to the browser language
    if (pathname === '/') {
        const locale = getLocaleFromAcceptLanguage(request.headers.get('accept-language'));
        return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }

    return NextResponse.next();
}
