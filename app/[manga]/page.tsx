import styles from "@/styles/page.module.css";
import Footer from '@/components/footer'
import Link from 'next/link'
import Data from '@/public/data/manga.json'
import { Adsense, BidgearAds, Adsense3 } from "@/components/ads";
import Nav from '@/components/nav'

export default function Home(params: any) {
    const { manga } = params.params;
    console.log(params)
    const checkManga = Data.find((data: any) => data.id === manga);
    return (
        <div className={styles.body}>
            <Nav/>
            <div className={styles.image}>
                <img src={checkManga?.cover} alt={checkManga?.name} />
            </div>
            <div className={styles.frame1}>
                <h1>{checkManga?.name}</h1>
                <h2>{checkManga?.author}</h2>
                <p>{checkManga?.info}</p>
            </div>
            <Adsense3 />
            <div className={styles.title}>
                <h1>Chapter List</h1>
            </div>
            <BidgearAds />
            <div className={styles.selection}>
                {checkManga?.chapters.slice().reverse().map((data: any) => (
                    <Link href={`/${manga}/${data.id}`} key={data.id} id={styles.link}>
                        <div className={styles.list}>
                            <div className="w-full flex items-center justify-start">
                                <h1>{data.number} --- <i>{data.title}</i></h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Adsense />
            {
                checkManga?.name === "Boruto Two Blue Vortex Colored" && <div className="w-[95%] p-[2vw] bg-zinc-800 flex flex-wrap items-start justify-start gap-[2vw] rounded-[0.5vw] my-[2vw] ">
                    <div className="py-[1vw] px-[3vw] lg:text-base text-[3vw] bg-zinc-600 rounded-[0.5vw] hover:bg-zinc-700 transition-all duration-300"><Link href="https://x.com/k1k3art?t=5ydruhJSP-4wIgMYjOgzVA&s=09">k1k3art</Link></div>
                    <div className="py-[1vw] px-[3vw] lg:text-base text-[3vw] bg-zinc-600 rounded-[0.5vw] hover:bg-zinc-700 transition-all duration-300"><Link href="https://x.com/borutosrighteye?t=X4ql-n9WIglkyi2uJ1Dzuw&s=09">borutosrighteye</Link></div>
                    <div className="py-[1vw] px-[3vw] lg:text-base text-[3vw] bg-zinc-600 rounded-[0.5vw] hover:bg-zinc-700 transition-all duration-300"><Link href="https://x.com/howlxithree?t=a7EgLnkiP6xR5l1lSlnq-g&s=09">howlxithree</Link></div>
                    <div className="py-[1vw] px-[3vw] lg:text-base text-[3vw] bg-zinc-600 rounded-[0.5vw] hover:bg-zinc-700 transition-all duration-300"><Link href="https://x.com/TendouYu?t=RTiAfd06mnh-vkON3su09g&s=09">TendouYu</Link></div>
                    <div className="py-[1vw] px-[3vw] lg:text-base text-[3vw] bg-zinc-600 rounded-[0.5vw] hover:bg-zinc-700 transition-all duration-300"><Link href="https://x.com/killertwt05?t=n3clq2VJ9V_cRRSZdoLP2w&s=09">killertwt05</Link></div>
                    <div className="py-[1vw] px-[3vw] lg:text-base text-[3vw] bg-zinc-600 rounded-[0.5vw] hover:bg-zinc-700 transition-all duration-300"><Link href="https://x.com/itsbunnyyt?t=1p9luN2XmznHc71T3-F7hw&s=09">itsbunnyyt</Link></div>
                    <div className="py-[1vw] px-[3vw] lg:text-base text-[3vw] bg-zinc-600 rounded-[0.5vw] hover:bg-zinc-700 transition-all duration-300"><Link href="https://x.com/C_Swiirl?t=AjC_G-ODdTqyObZn9D7tzg&s=09">C_Swiirl</Link></div>
                    <div className="py-[1vw] px-[3vw] lg:text-base text-[3vw] bg-zinc-600 rounded-[0.5vw] hover:bg-zinc-700 transition-all duration-300"><Link href="https://x.com/LocalStevery?t=a-KvQRFx_d2PiZQYar6sQQ&s=09">LocalStevery</Link></div>
                    <div className="py-[1vw] px-[3vw] lg:text-base text-[3vw] bg-zinc-600 rounded-[0.5vw] hover:bg-zinc-700 transition-all duration-300"><Link href="https://x.com/MikioIkemoto9?t=fhYJyErrrrT1erIHWXAcYg&s=09">MikioIkemoto9</Link></div>
                </div>
            }
            <Footer />
        </div>
    )
}