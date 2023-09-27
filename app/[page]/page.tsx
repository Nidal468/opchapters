'use client'

import styles from "../../styles/page.module.css";
import Footer from '../../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { getBoruto, getOP, getJJK , getKagura} from "../../schemas/sanity-utils";
import { useState, useEffect } from "react";
import json from '../../public/data/data.json'
import Script from 'next/script';
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
    const [isJson, setIsJson] = useState(0)
    useEffect(() => {
        async function fetchData() {
            if (page === 'boruto-chapter') {
                setData('boruto');
                try {
                    const data = await getBoruto();
                    setChapters(data);
                    setIsJson(0)
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            } else if (page === 'one-piece-chapter') {
                setData('one')
                setIsJson(1)
                try {
                    const data = await getOP();
                    setChapters(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            } else if (page === 'jujutsu-chapter') {
                setData('gojo')
                setIsJson(2)
                try {
                    const data = await getJJK();
                    setChapters(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            else if (page === 'kagura-chapter') {
                setData('kagura')
                setIsJson(3)
                try {
                    const data = await getKagura();
                    setChapters(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        }
        fetchData();
    }, [page]);

    if (chapters.length === 0) {
        return <div></div>;
    }

    // Calculate previous and next chapter numbers
    const prevChapter = parseInt(param) - 1;
    const nextChapter = parseInt(param) + 1;
    const maxChapter = chapters.length;

    return (
        <div className={styles.body}>
            <div className={styles.image}>
                <Image src={`/images/${isData}.Webp`} fill={true} alt={isData} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" quality={75}/>
            </div>
            <div className={styles.frame1}>
                <h1>{json[isJson].name}</h1>
                <h2>{json[isJson].author}</h2>
                <p>{json[isJson].info}</p>
            </div>
            <div className={styles.title}>
                <h1>{chapters[0].title}</h1>
            </div>
            <div id="pf-4545-1">
            <Script>
                {`window.pubfuturetag = window.pubfuturetag || [];
                window.pubfuturetag.push({
                    unit: '647eba0aac8efb003f768eac',
                    id: 'pf-4545-1',
                })`}
            </Script>
            </div>
            <div className={styles.page}>
                {chapters.length > 0 && (
                    <div key={chapters[parseInt(param) - 1]._id}>
                        {chapters[parseInt(param) - 1].images.map((imageUrl: string, index: number) => (
                            <div className={styles.pageimage} key={index}>
                                <Image
                                    width={713}
                                    height={1024}
                                    src={imageUrl}
                                    alt={`Chapter ${chapters[0].title} - Image ${index}`}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div id="pf-4499-1">
            <Script>
                {`window.pubfuturetag = window.pubfuturetag || [];
                window.pubfuturetag.push({
                    unit: '6475cb8abb5c49003e9b86b5',
                    id: 'pf-4499-1',
                })`}
            </Script>
            </div>

            <div className={styles.pageChange}>
                <div className={styles.button}>
                    {prevChapter > 0 && (
                        <Link href={`./${page}?param=${prevChapter}`}>Previous Chapter</Link>
                    )}
                </div>
                <h1 >{param}</h1>
                <div className={styles.button}>
                    {nextChapter <= maxChapter && (
                        <Link href={`./${page}?param=${nextChapter}`}>Next Chapter</Link>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}
