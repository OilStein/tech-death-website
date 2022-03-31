import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='text-white font-mono bg-gradient-to-b from-gray-900 to-gray-600 h-screen w-screen '>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </div>
  )
}

export default MyApp
