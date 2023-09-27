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
                <SwiperSlide><Image src='/images/op.Webp' alt='op' fill={true} priority={true}/></SwiperSlide>
            </Swiper>
          </div>
        <div className={styles.bot}>
          <div className={styles.button}><Link href='#bar'>Read Now</Link></div>
          <h1>Hey everybody we are glad that you enjoy our scanlations but, don't forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga</h1>
        </div>
      </div>
      <div className={styles.frame2}>
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
                <h1>One Piece</h1>
                <h2>EIICHIRO ODA</h2>
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
                <h1>Jujutsu Kaisen</h1>
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
                <h1>Kagurabachi</h1>
                <h2>TAKERU HOKAZONO</h2>
              </div>
            </div>
          </div>
        </Link>
        </div>
        <div className={styles.bar} style={{alignItems: "flex-start"}}>
          <div className={styles.title}><h1>Coming Soon</h1></div>
        </div>
        <div className={styles.cards}>
          {isSoon.map((so: any) => (
            <div className={styles.card} key={so._id}>
              <div className={styles.image}>
              <Image fill={true} src={so.location} alt={so.name} sizes="(max-width: 768px) 140px, (max-width: 1200px) 200px, 300px" priority={true}/>
              </div>
              <div className={styles.info}>
                <div>
                  <h1>{so.name}</h1>
                  <h2>{so.person}</h2>
                </div>
                <h1>{so.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
