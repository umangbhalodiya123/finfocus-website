import { getRequestConfig } from 'next-intl/server'
// Utility function to check if a locale exists
const hasLocale = (locales: string[], locale: string) => locales.includes(locale)
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale
  const locale =
    requested && hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
