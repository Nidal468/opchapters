
'use client'

import styles from "../../styles/page.module.css";
import Nav from "../../components/nav";
import Footer from '../../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { getBoruto } from "../../schemas/sanity-utils";
import { useState, useEffect } from "react";
export default function Home(props: any){
    const { page } = props.params;
    const { param } = props.searchParams;
    console.log(props)
    console.log(props.params)
    const [isData, setData] = useState('');
    const [borutoData, setBorutoData] = useState([]);
    console.log(borutoData)
    useEffect(() => {
        const fetchData = async () => {
          if (page === 'boruto-chapter') {
            try {
              const data = await getBoruto();
              setBorutoData(data);
              setData('boruto');
            } catch (error) {
              console.error("Error fetching Boruto data:", error);
            }
          } else if (page === 'one-piece-chapter') {
          }
        };
    
        fetchData();
      }, [page]);
    
      if (!isData) {
        return <div>You fool</div>;
      }
    return(
        <div className={styles.body}>
            <Nav/>
            <img src={`/images/${isData}.Webp`} className={styles.image}/>
            <div className={styles.frame1}>
                    <h1>Boruto</h1>
                    <h2>Mahashi Kishimoto</h2>
                    <p>Years have passed since Naruto and Sasuke teamed up to defeat Kaguya, the progenitor of chakra and the greatest threat the ninja world has ever faced. Times are now peaceful and the new generation of shinobi has not experienced the same hardships as its parents. Perhaps that is why Boruto would rather play video games than train. However, one passion does burn deep in this ninja boys heart, and that is the desire to defeat his father!</p>
            </div>
            <div className={styles.title}>
                <h1>Chapter {param}</h1>
            </div>
            <div className={styles.page}>
                <div className={styles.card}>
            {borutoData.map((chapter: any) => (
            <Image 
              key={chapter._id}
              width={600}
              height={900}
              src={chapter.images} // Replace with the actual image URL property in your data
              alt={chapter.title}
              style={{ objectFit: "cover" }}
            />
        ))}
        </div>
            </div>
            <Footer/>
        </div>
    )
}