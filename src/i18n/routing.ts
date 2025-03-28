import { defineRouting } from 'next-intl/routing'
import { EN, locales } from '@/utils/languageTypes'

export const routing = defineRouting({
  locales: locales,
  defaultLocale: EN,
})
