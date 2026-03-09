import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from './locales';

export function getLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
    if (!acceptLanguage) return DEFAULT_LOCALE;
    const preferred = acceptLanguage.split(',').map((s) => s.split(';')[0].trim().slice(0, 2).toLowerCase());
    return (SUPPORTED_LOCALES.find((l) => preferred.includes(l)) as Locale) ?? DEFAULT_LOCALE;
}
