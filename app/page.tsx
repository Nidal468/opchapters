import styles from '../styles/styles.module.css';
import Footer from '../components/footer';
import Link from 'next/link';
import SwiperComponent from '@/components/swiper';
import Card from '../components/card';
import { Adsense, BidgearAds, Adsense2 } from "@/components/ads";
import Data from '@/public/data/manga.json'
import Nav from '@/components/nav'
export default function Home() {

  return (
    <div className={styles.body}>
      <Nav />
      <div className={styles.frame1} id='link2'>
        <div className={styles.imageContainer}>
          <div className={styles.fade}></div>
          <SwiperComponent />
        </div>
        <div className={styles.bot}>
          <div className={styles.button}><Link href='#main'>Read Now</Link></div>
          <h1>Hey everybody we are glad that you enjoy our scanlations but, don't forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga</h1>
        </div>
      </div>
      <Adsense/>
      <div className={styles.frame2}>
        <div className={styles.bar} id="main">
          <div className={styles.title}><h1>Manga List</h1></div>
          <div className={styles.buttons}>
          </div>
        </div>
        <BidgearAds />
        <div className={styles.cards}>
          {Data.map((data: any) => (
            <Card href={`/${data.id}`} src={data.cover} alt={data.name} title={data.name} author={data.author} key={data.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
