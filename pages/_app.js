import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
