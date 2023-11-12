'use client'
import { useEffect} from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Nav from '../components/nav'
import Script from 'next/script'
export default function RootLayout({children,}: {children: React.ReactNode}){
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Error registering Service Worker:', error);
        });
    }
  }, []);
  
  return (
      <html lang='en'>
        <head>
          <title>OPSCANS</ title>
          <meta name='title' content='OPSCANS' />
          <link rel='icon' href='/images/favicon.ico'/>
          <meta name='description' content='Hey everybody we are glad that you enjoy our scanlations but, dont forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6216514032813165" crossOrigin="anonymous"/>
          {/**<Script data-cfasync="false" async type="text/javascript" src="//ip.coggertyning.com/rNWd1mxbtVm/nEOlO"></Script>**/}
          <meta name="google-adsense-account" content="ca-pub-2225423027937651"></meta>
        </head>
        <body className={inter.className}>
          <Nav/>
          {children}
          </body>
      </html>
  )
}
