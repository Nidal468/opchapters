'use client'
import { useEffect } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Nav from '../components/nav'

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
      <html>
        <body className={inter.className}>
          <Nav/>
          {children}
          </body>
      </html>
  )
}
