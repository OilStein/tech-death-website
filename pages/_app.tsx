import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div className='text-white font-mono bg-gradient-to-b from-gray-900 to-gray-600 h-screen w-screen '>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </div>
    </UserProvider>
  )
}

export default MyApp
