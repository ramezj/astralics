import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '@/components/ErrorBoundary'
import { GeistSans } from "geist/font/sans";
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
    <main className={GeistSans.className}>
      <Component className='' {...pageProps} />
      <Analytics />
      </main>
      </NextUIProvider>
    </SessionProvider>
    </ErrorBoundary>
  )
}