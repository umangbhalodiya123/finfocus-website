import { ReactNode } from 'react'
import { notFound, redirect } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from 'react-hot-toast'
import { Providers } from '@/lib/redux/provider'
import AmplitudeContextProvider from '@/lib/amplitude'
import GrowthBookWrapper from '@/lib/growthbook'
import { Rubik } from 'next/font/google'
import MainLayout from '@/components/layouts/mainLayout'
import { getMessages } from 'next-intl/server'
import '../globals.css'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fin-focus',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params?: { locale?: string } // ✅ Mark params as optional
}) {
  const param = await params
  if (!param?.locale || !routing.locales.includes(param.locale)) {
    return redirect('/en')
  }

  const messages = await getMessages({ locale: param.locale })

  return (
    <html lang={param.locale}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={`${rubik.variable}`}>
        <NextIntlClientProvider locale={param.locale} messages={messages}>
          <Toaster position='top-right' reverseOrder={false} />
          <Providers>
            <AmplitudeContextProvider>
              <GrowthBookWrapper>
                <MainLayout>{children}</MainLayout>
              </GrowthBookWrapper>
            </AmplitudeContextProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
