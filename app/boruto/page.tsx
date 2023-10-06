import styles from "../../styles/page.module.css";
import Footer from '../../components/footer'
import Link from 'next/link'
import { getLinks } from '../../schemas/sanity-utils'
import Image from 'next/image'

export default async function Home() {
    const data = await getLinks();

    return (
        <div className={styles.body}>
            <div className={styles.image}>
                <Image src="/images/boruto.Webp" fill={true} alt="boruto image" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" quality={75} />
            </div>
            <div className={styles.frame1}>
                <h1>Boruto</h1>
                <h2>Mahashi Kishimoto</h2>
                <p>Years have passed since Naruto and Sasuke teamed up to defeat Kaguya, the progenitor of chakra and the greatest threat the ninja world has ever faced. Times are now peaceful and the new generation of shinobi has not experienced the same hardships as its parents. Perhaps that is why Boruto would rather play video games than train. However, one passion does burn deep in this ninja boys heart, and that is the desire to defeat his father!</p>
            </div>
            <div className={styles.title}>
                <h1>Chapter List</h1>
            </div>
            <div className={styles.selection}>
                {data.map((data: any) => (
                    <Link href={`./boruto-chapter?param=${data.number}`} key={data._id} id={styles.link}>
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