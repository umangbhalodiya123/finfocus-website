import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(my|en|cn|hk|vn|ug|kz|kr|ru|th)'],
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Check if the request is at the root ("/") without a locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${routing.defaultLocale}`, req.url))
  }

  const handleI18nRouting = createMiddleware(routing)
  const headers = handleI18nRouting(req)
  return NextResponse.next({ request: headers })
}
