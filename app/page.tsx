import Image from 'next/image';
import styles from '../styles/styles.module.css';
import Footer from '../components/footer'
import Link from 'next/link'
import Script from 'next/script';
import SwiperComponent from '@/components/swiper';
import Card from '../components/card'
export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.frame1}>
          <div className={styles.imageContainer}>
            <div className={styles.fade}></div>
            <SwiperComponent/>
          </div>
        <div className={styles.bot}>
          <div className={styles.button}><Link href='#main'>Read Now</Link></div>
          <h1>Hey everybody we are glad that you enjoy our scanlations but, don't forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga</h1>
        </div>
      </div>
      <div className={styles.frame2}>
      <div id="pf-4545-1">
      <Script>
        {`window.pubfuturetag = window.pubfuturetag || [];
          window.pubfuturetag.push({
            unit: '647eba0aac8efb003f768eac',
            id: 'pf-4545-1',
          })`}
      </Script>
      </div>
        <div className={styles.bar} id="main">
          <div className={styles.title}><h1>Manga List</h1></div>
          <div className={styles.buttons}>
          </div>
        </div>
        <div className={styles.cards}>
        <Card href="./one" src="/images/opCover.jpg" alt="one piece" title="One Piece" author="EIICHIRO ODA"/>
        <Card href="./opraw" src="/images/opraw.jpg" alt="one piece raw" title="One Piece Raw" author="EIICHIRO ODA"/>
        <Card href="./opcolored" src="/images/opcol.jpg" alt="one piece colored" title="One Piece Colored" author="EIICHIRO ODA"/>
        <Card href="./jujutsu" src="/images/jjkCover.jpg" alt="jujutsu kaisen" title="Jujutsu Kaisen" author="GEGE AKUTAMI"/>
        <Link href={`./jjkraw`}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src="/images/jjkraw.jpg"
                alt="boruto"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>Jujutsu Kaisen Raw</h1>
                <h2>GEGE AKUTAMI</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`./boruto`}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src="/images/borutoCover.jpg"
                alt="boruto"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>Boruto</h1>
                <h2>Masashi Kishimoto</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`./kagura`}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src="/images/kaguraCover.jpg"
                alt="boruto"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>Kagurabachi</h1>
                <h2>TAKERU HOKAZONO</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`./next`}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src="/images/kaguraCover.jpg"
                alt="boruto next"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>Kagurabachi Raw</h1>
                <h2>TAKERU HOKAZONO</h2>
              </div>
            </div>
          </div>
        </Link>
        </div>
        <div id="pf-4702-1">
        <Script>
          {`window.pubfuturetag = window.pubfuturetag || [];
            window.pubfuturetag.push({
              unit: '649a799104b327003ffaa324',
              id: 'pf-4702-1',
            })`}
        </Script>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
