// List of supported locales
export const SUPPORTED_LOCALES = ['en', 'fr'] as const;

// TypeScript type for the locale
export type Locale = (typeof SUPPORTED_LOCALES)[number];

// Default locale if the browser language is not supported
export const DEFAULT_LOCALE: Locale = 'fr';
