import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '@/components/ErrorBoundary'
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { PaddleLoader } from '@/components/PaddleLoader';

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false})

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
    <main className={`${inter.className} font-sans min-h-screen antialiased`}>
      {/* <PaddleLoader /> */}
      <Component className='' {...pageProps} />
      <Analytics />
      </main>
    </SessionProvider>
    </ThemeProvider>
    </ErrorBoundary>
  )
}