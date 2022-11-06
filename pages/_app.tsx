import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hashverse NFT</title>
        {/* 项目简介 */}
        <meta name="description" content="Hashverse NFT Launch " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar/>
      </header>
      <Component {...pageProps} />
    </>
  )
}
