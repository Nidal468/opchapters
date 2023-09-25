'use client'

import styles from "../../styles/page.module.css";
import Nav from "../../components/nav";
import Footer from '../../components/footer'
import Link from 'next/link'
import { useState, useEffect } from "react";
import {getLinks} from '../../schemas/sanity-utils'

interface Data{

}

export default function Home(){
const [isData, setData] = useState([])
useEffect(() =>{
    async function fetchData(){
        const data = await getLinks();
        setData(data)
    }
    fetchData()
},[])

    return(
        <div className={styles.body}>
            <Nav/>
            <img src="/images/boruto.Webp" className={styles.image}/>
            <div className={styles.frame1}>
                    <h1>Boruto</h1>
                    <h2>Mahashi Kishimoto</h2>
                    <p>Years have passed since Naruto and Sasuke teamed up to defeat Kaguya, the progenitor of chakra and the greatest threat the ninja world has ever faced. Times are now peaceful and the new generation of shinobi has not experienced the same hardships as its parents. Perhaps that is why Boruto would rather play video games than train. However, one passion does burn deep in this ninja boys heart, and that is the desire to defeat his father!</p>
            </div>
            <div className={styles.title}>
                <h1>Chapter List</h1>
            </div>
            <div className={styles.selection}>
            {isData.map((data: any) => (
                <div className={styles.list} key={data._id}>
                    <Link href={`./boruto-chapter?param=${data.number}`}>
                        <div className="w-full flex items-center justify-start">
                            <h1>{data.name} -</h1>
                            <h1>--<i>{data.title}</i></h1>
                        </div>
                        <p>{data.date}</p>
                    </Link>
                </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}