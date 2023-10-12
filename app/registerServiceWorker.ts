// registerServiceWorker.ts
import { useEffect } from 'react';

const useRegisterServiceWorker = () => {
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
};

export default useRegisterServiceWorker;
