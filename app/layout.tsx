import { Metadata } from 'next'
import '../styles/globals.css'
import { Raleway, Poiret_One } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const raleway = Raleway({weight: '400', subsets: ['latin'], variable: "--font-raleway"})
const poiretOne = Poiret_One({weight: '400', subsets: ["latin"], variable:"--font-poiret"})
 
export const metadata: Metadata = {
  title: 'Fiona Kelly Flute',
  description: 'Fiona Kelly is a freelance flautist based in London. She has been hailed by the New York Times as a player with “impressive technique and elegant musicianship".',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${poiretOne.variable}`}>
        {children}
      </body>
      <Analytics />
    </html>
  )
}