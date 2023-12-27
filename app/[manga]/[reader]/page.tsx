import styles from "@/styles/page.module.css";
import Footer from '@/components/footer'
import Link from 'next/link'
import Data from '@/public/data/manga.json'
import { Adsense , BidgearAds, Adsense3} from "@/components/ads";
import Nav from '@/components/nav'
   
export default function Home(params: any) {
    const {manga, reader } = params.params;
    const checkedManga = Data.find((data: any) => data.id === manga);
    const checkedChapter = checkedManga?.chapters.find((data:any) => data.id === reader);

    return (
        <div className={styles.body}>
            <Nav/>
            <div className={styles.image}>
                <img src={checkedManga?.cover} alt={checkedManga?.name} />
            </div>
            <div className={styles.frame1}>
                <h1>{checkedManga?.name}</h1>
                <h2>{checkedManga?.author}</h2>
                <p>{checkedManga?.info}</p>
            </div>
            <Adsense/>
            <div className={styles.title}>
                <h1><i>{checkedChapter?.number}</i></h1>
            </div>
            <BidgearAds/>
            <div className='w-full flex flex-col items-center justify-start'>
                {checkedChapter?.images.map((data:any) => (
                    <img
                        src={data.source}
                        alt={data.source}
                        loading="lazy"
                        className="w-[95%] lg:w-[50%]"
                        key={data.source}
                    />
                ))}
            </div>
            <Adsense3/>
            <div className={styles.pageChange}>
                <div className={styles.button}>
                    
                </div>
                <h1 className="text-2xl">{checkedChapter?.number}</h1>
                <div className={styles.button}>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}
