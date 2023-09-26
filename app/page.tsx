'use client'

import Image from 'next/image';
import styles from '../styles/styles.module.css';
import { getBoruto, getAssets, getManga, getSoon} from '../schemas/sanity-utils';
import {NewFilter} from '../components/filter';
import Nav from '../components/nav'
import Footer from '../components/footer'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import { useState , useEffect} from 'react'
export default function Home() {
  const [isManga, setIsManga] = useState([])
  const [isSoon, setIsSoon] = useState([])
  useEffect(() =>{
    async function fetchData(){
        const mangas = await getManga();
        const soon = await getSoon();
        setIsManga(mangas)
        setIsSoon(soon)
    }
    fetchData()
},[])
  
  return (
    <div className={styles.body}>
      <div className={styles.frame1}>
          <div className={styles.imageContainer}>
            <div className={styles.fade}></div>
            <Image src='/images/borutom.Webp' alt='boruto' fill={true} priority={true}/>
          </div>
        <Nav/>
        <div className={styles.bot}>
          <div className={styles.button}>Read Now</div>
          <h1>Years have passed since Naruto and Sasuke teamed up to defeat Kaguya, the progenitor of chakra and the greatest threat the ninja world has ever faced. Times are now peaceful and the new generation of shinobi has not experienced the same hardships as its parents. Perhaps that is why Boruto would rather play video games than train. However, one passion does burn deep in this ninja boys heart, and that is the desire to defeat his father!</h1>
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.bar}>
          <div className={styles.title}><h1>Manga List</h1></div>
          <div className={styles.buttons}>
          </div>
        </div>
        <div className={styles.cards}>
          {isManga.map((manga: any) => (
           <Link href={`./${manga.to.toLowerCase()}`} key={manga._id}>
               <div className={styles.card}>
              <div className={styles.image}>
              <Image src={manga.location} alt={manga.name} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
              <div className={styles.info}>
                <div>
                  <h1>{manga.name}</h1>
                  <h2>{manga.person}</h2>
                </div>
                <h1>{manga.number}</h1>
              </div>
            </div>
            </Link>
           
          ))}
        </div>
        <div className={styles.bar} style={{alignItems: "flex-start"}}>
          <div className={styles.title}><h1>Coming Soon</h1></div>
        </div>
        <div className={styles.cards}>
          {isSoon.map((so: any) => (
            <div className={styles.card} key={so._id}>
              <div className={styles.image}>
              <Image fill={true} src={so.location} alt={so.name} sizes="(max-width: 768px) 140px, (max-width: 1200px) 200px, 300px"/>
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
