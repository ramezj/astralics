import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '@/components/ErrorBoundary'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ErrorBoundary>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </ErrorBoundary>
  )
}