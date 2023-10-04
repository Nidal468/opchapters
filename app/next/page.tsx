'use client'

import styles from "../../styles/page.module.css";
import Footer from '../../components/footer'
import Link from 'next/link'
import { useState, useEffect } from "react";
import {getBorutoNLinks} from '../../schemas/sanity-utils'
import Image from 'next/image'
export default function Home(){
    const [isData, setData] = useState([])
    useEffect(() =>{
        async function fetchData(){
            const data = await getBorutoNLinks();
            setData(data)
        }
        fetchData()
    },[])

    return(
        <div className={styles.body}>
            <div className={styles.image}>
                <Image src="/images/kagura.Webp" fill={true} alt="boruto image" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" quality={75}/>
            </div>
            <div className={styles.frame1}>
                    <h1>Kagurabachi</h1>
                    <h2>TAKERU HOKAZONO</h2>
                    <p>Young Chihiro spends his days training under his famous swordsmith father. One day he hopes to become a great sword-maker himself. The goofy father and the serious son--they thought these days would last forever. But suddenly, tragedy strikes. A dark day soaked in blood. Chihiro and his blade now live only for revenge. Epic sword battle action!</p>
            </div>
            <div className={styles.title}>
                <h1>Chapter List</h1>
            </div>
            <div className={styles.selection}>
            {isData.map((data: any) => (
                <Link href={`.kagura-chapter-raw?param=${data.number}`} key={data._id} id={styles.link}>
                <div className={styles.list}>
                        <div className="w-full flex items-center justify-start">
                            <h1>{data.name} -</h1>
                            <h1>--<i>{data.title}</i></h1>
                        </div>
                        <p>{data.date}</p>
                </div>
                </Link>
                ))}
            </div>
            <Footer/>
        </div>
    )
}