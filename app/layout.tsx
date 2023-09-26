import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import pages from "../styles/page.module.css";
import styles from "../styles/style.module.css";
import Nav from '../components/nav'
export const metadata: Metadata = {
  title: 'OPSCANS',
  description: 'Hey everybody we are glad that you enjoy our scanlations but, dont forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back,relax and enjoy some quality manga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Nav/>
          {children}
          </body>
      </html>
  )
}
