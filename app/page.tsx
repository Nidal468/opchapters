'use client'

import Image from 'next/image';
import styles from '../styles/styles.module.css';
import { getBoruto, getAssets, getManga, getSoon} from '../schemas/sanity-utils';
import Footer from '../components/footer'
import Link from 'next/link'
import { useState , useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Script from 'next/script';

export default function Home() {
  const [isManga, setIsManga] = useState([])
  const [isSoon, setIsSoon] = useState([])
  useEffect(() => {
    async function fetchData() {
      const mangas = await getManga();
      const soon = await getSoon();
      setIsManga(mangas);
      setIsSoon(soon);
    }
    fetchData();
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.frame1}>
          <div className={styles.imageContainer}>
            <div className={styles.fade}></div>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              loop={true}
              className={styles.swiper}
              >
                <SwiperSlide><Image src='/images/sgojo.Webp' alt='boruto' fill={true} priority={true}/></SwiperSlide>
                <SwiperSlide><Image src='/images/borutom.Webp' alt='boruto' fill={true} priority={true}/></SwiperSlide>
                <SwiperSlide><Image src='/images/one.Webp' alt='op' fill={true} priority={true}/></SwiperSlide>
            </Swiper>
          </div>
        <div className={styles.bot}>
          <div className={styles.button}><Link href='#bar'>Read Now</Link></div>
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
        <div className={styles.bar} id="bar">
          <div className={styles.title}><h1>Manga List</h1></div>
          <div className={styles.buttons}>
          </div>
        </div>
        <div className={styles.cards}>
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
        <Link href={`./one`}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src="/images/opCover.jpg"
                alt="boruto"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>One Piece</h1>
                <h2>EIICHIRO ODA</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`./jujutsu`}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src="/images/jjkCover.jpg"
                alt="boruto"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>Jujutsu Kaisen</h1>
                <h2>GEGE AKUTAMI</h2>
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
                src="/images/boruto-next.jpg"
                alt="boruto next"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>Boruto: Naruto Next Generations</h1>
                <h2>Masashi Kishimoto</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`./opraw`}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src="/images/opraw.jpg"
                alt="op raw"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>One piece raws</h1>
                <h2>EIICHIRO ODA</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`./opcolored`}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                src="/images/opcol.jpg"
                alt="op raw"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>One piece colored</h1>
                <h2>EIICHIRO ODA</h2>
              </div>
            </div>
          </div>
        </Link>
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
