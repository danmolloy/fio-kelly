import '../styles/globals.css'
import { Raleway, Poiret_One } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const raleway = Raleway({weight: '400', subsets: ['latin'], variable: "--font-raleway"})
const poiretOne = Poiret_One({weight: '400', subsets: ["latin"], variable:"--font-poiret"})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} ${poiretOne.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
    )
}

export default MyApp
