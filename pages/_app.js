import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default appWithTranslation(MyApp)
