import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '@/components/ErrorBoundary'
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ErrorBoundary>
    <ThemeProvider
    attribute='class'
    defaultTheme='system'
    >
    <SessionProvider session={session}>
    <main className={`${inter.variable} font-sans min-h-screen antialiased`}>
      <Component className='' {...pageProps} />
      <Analytics />
      </main>
    </SessionProvider>
    </ThemeProvider>
    </ErrorBoundary>
  )
}