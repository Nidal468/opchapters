'use client'

import styles from "../../styles/page.module.css";
import Nav from "../../components/nav";
import Footer from '../../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { getBoruto } from "../../schemas/sanity-utils";
import { useState, useEffect } from "react";

interface Chapter {
  _id: string,
  images: any,
  title: string
}

export default function Home(props: any) {
    const { page } = props.params;
    const { param } = props.searchParams;
    const [isData, setData] = useState('');
    const [chapters, setChapters] = useState<Chapter[]>([]);
    useEffect(() => {
        async function fetchData() {
            if (page === 'boruto-chapter') {
                setData('boruto');
                try {
                    const data = await getBoruto();
                    setChapters(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            } else if (page === 'one-piece-chapter') {
            }
        }

        fetchData();
    }, [page]);

    if (chapters.length === 0) {
        return <div></div>;
    }

    return (
        <div className={styles.body}>
            <Nav/>
            <div className={styles.image}>
            <Image src={`/images/${isData}.Webp`} fill={true} alt={isData}/>
            </div>
            <div className={styles.frame1}>
                <h1>Boruto</h1>
                <h2>Masashi Kishimoto</h2>
                <p>Years have passed since Naruto and Sasuke teamed up to defeat Kaguya, the progenitor of chakra and the greatest threat the ninja world has ever faced. Times are now peaceful and the new generation of shinobi has not experienced the same hardships as its parents. Perhaps that is why Boruto would rather play video games than train. However, one passion does burn deep in this ninja boy's heart, and that is the desire to defeat his father!</p>
            </div>
            <div className={styles.title}>
                <h1>Chapter {param}</h1>
            </div>
            <div className={styles.page}>
            {chapters.length > 0 && (
              <div key={chapters[parseInt(param) - 1]._id}>
                {chapters[parseInt(param) - 1].images.map((imageUrl: string, index: number) => (
                  <div className={styles.pageimage} key={index}>
                  <Image
                    fill={true}
                    src={imageUrl}
                    alt={`Chapter ${chapters[0].title} - Image ${index}`}
                  />
                  </div>
                ))}
              </div>
            )}
            </div>
            <div className={styles.pageChange}>
              <div className={styles.button}><Link href={`./${page}?param=${parseInt(param) - 1}`}>Preivious Chapter</Link></div>
              <div className={styles.button}><Link href={`./${page}?param=${parseInt(param) + 1}`}>Next Chapter</Link></div>
            </div>
            <Footer />
        </div>
    )
}
