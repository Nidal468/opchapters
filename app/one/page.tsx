'use client'

import styles from "../../styles/page.module.css";
import Nav from "../../components/nav";
import Footer from '../../components/footer'
import Link from 'next/link'
import { useState, useEffect } from "react";
import {getLinks} from '../../schemas/sanity-utils'
import Image from 'next/image'
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
            <div className={styles.image}>
                <Image src="/images/one.Webp" fill={true} alt="one piece image" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" quality={75}/>
            </div>
            <div className={styles.frame1}>
                    <h1>One Piece</h1>
                    <h2 style={{color: "red"}}>EIICHIRO ODA</h2>
                    <p>As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer "Red-Haired" Shanks. But Luffy's life changed when he accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, still vowing to become the king of the pirates, Luffy sets out on his adventure...one guy alone in a rowboat, in search of the legendary "One Piece," said to be the greatest treasure in the world...</p>
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