import '../styles/globals.css'
import { Open_Sans, Raleway, Poiret_One } from 'next/font/google'

const raleway = Raleway({weight: '400', subsets: ['latin'], variable: "--font-raleway"})
const poiretOne = Poiret_One({weight: '400', subsets: ["latin"], variable:"--font-poiret"})
//Open_Sans({ weight: '400', subsets: ['latin'], variable: "--font-open"})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} ${poiretOne.variable}`}>
      <Component {...pageProps} />
    </main>
    )
}

export default MyApp
