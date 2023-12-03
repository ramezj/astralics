import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '@/components/ErrorBoundary'
import { GeistSans } from "geist/font/sans";



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ErrorBoundary>
    <SessionProvider session={session}>
    <main className={GeistSans.className}>
      <Component className='' {...pageProps} />
      </main>
    </SessionProvider>
    </ErrorBoundary>
  )
}