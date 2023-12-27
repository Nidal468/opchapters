import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Script from 'next/script'
import { Push } from '@/components/ads'
export const metadata: Metadata = {
  title: "OPSCANS",
  icons: "/images/favicon.ico",
  description: 'Hey everybody we are glad that you enjoy our scanlations but, dont forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga'
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3610508378320499" crossOrigin="anonymous"></Script>
      </head>
      <body className={inter.className}>
        <Push />
        {children}
      </body>
    </html>
  )
}
