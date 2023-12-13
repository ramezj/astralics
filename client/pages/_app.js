import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '@/components/ErrorBoundary'
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react';
import { NextUIProvider } from '@nextui-org/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ErrorBoundary>
    <SessionProvider session={session}>
      <NextUIProvider>
    <main>
      <Component className='' {...pageProps} />
      <Analytics />
      </main>
      </NextUIProvider>
    </SessionProvider>
    </ErrorBoundary>
  )
}