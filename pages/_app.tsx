// pages/_app.tsx

import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
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

  return <Component {...pageProps} />;
}

export default MyApp;
