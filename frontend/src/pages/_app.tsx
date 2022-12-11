import { useEffect } from 'react'
import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer'
import NavHeader from '../components/nav/NavHeader'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap')
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" type="image/png" href='../../public/favicon.png' sizes='32x32' />
      </Head>

      <nav className='header'>
        <NavHeader />
      </nav>

      <main className='comp'>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}
