import styles from "../../styles/page.module.css";
import Footer from '../../components/footer'
import Link from 'next/link'
import Data from './list.json'
import Image from 'next/image'
import Json from '../../public/data/data.json'
export default function Home(){
    
    return(
        <div className={styles.body}>
            <div className={styles.image}>
                <Image src="/images/kagura.Webp" fill={true} alt="boruto image" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" quality={75}/>
            </div>
            <div className={styles.frame1}>
                    <h1>{Json[3].name}</h1>
                    <h2>{Json[3].author}</h2>
                    <p>{Json[3].info}</p>
            </div>
            <div className={styles.title} id="main">
                <h1>Chapter List</h1>
            </div>
            <div className={styles.selection}>
            {Data.map((data: any, index: number) => (
                <Link href={`./kagura-chapter?param=${index + 1}`} key={index + 1} id={styles.link}>
                <div className={styles.list}>
                        <div className="w-full flex items-center justify-start">
                            <h1>Chapter {data.number} --- <i>{data.title}</i></h1>
                        </div>
                </div>
                </Link>
                ))}
            </div>
            <Footer/>
        </div>
    )
}