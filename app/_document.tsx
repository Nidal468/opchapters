import { Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'
import { Metadata } from 'next';

export default function Docs() {
  return (
    <Html lang="en">
            <Head>
                <title>OPSCANS</title>
                <meta name='title' content='OPSCANS' />
                <meta name='description' content='Hey everybody we are glad that you enjoy our scanlations but, dont forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
                <Script strategy="afterInteractive" src="https://cdn.pubfuture-ad.com/v2/unit/pt.js"/>
                <Script strategy="afterInteractive" src="https://cdn.pubfuture-ad.com/v2/unit/pt.js"/>
                <Script strategy="afterInteractive" src="https://cdn.pubfuture-ad.com/v2/unit/pt.js"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
    </Html>
  );
}