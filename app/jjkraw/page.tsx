import styles from "../../styles/page.module.css";
import Footer from '../../components/footer'
import Link from 'next/link'
import { useState, useEffect } from "react";
import Image from 'next/image'
export default function Home(){
    const [isData, setData] = useState([])

    return (
        <div className={styles.body}>
            <div className={styles.image}>
                <Image src="/images/gojo.Webp" fill={true} alt="gojo image" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" quality={75} />
            </div>
            <div className={styles.frame1}>
                <h1>Jujutsu Kaisen</h1>
                <h2>GEGE AKUTAMI</h2>
                <p>For some strange reason, Yuji Itadori, despite his insane athleticism would rather just hang out with the Occult Club. However, her soon finds out that the occult is as real as it gets when his fellow club members are attacked! Meanwhile, the mysterious Megumi Fushiguro is tracking down a special-grade cursed object, and his search leads him to Itadori...</p>
            </div>
            <div className={styles.title}>
                <h1>Chapter List</h1>
            </div>
            <div className={styles.selection}>
                {data.map((data: any) => (
                    <Link href={`./jujutsu-chapter-raw?param=${data.number}`} key={data._id} id={styles.link}>
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
            <Footer />
        </div>
    )
}