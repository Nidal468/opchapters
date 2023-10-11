import styles from "../../styles/page.module.css";
import Footer from '../../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import json from '../../public/data/data.json'
import Script from 'next/script';
import borutoData from '../boruto/chapters.json'
import opData from '../one/chapters.json'
import jjkData from '../jujutsu/chapters.json'
import kaguraData from '../kagura/chapters.json'
import opraw from '../opraw/chapters.json'
interface Chapter {
  id: string,
  images: any
}

export default async function Home(props: any) {
    const { page } = props.params;
    const { param } = props.searchParams;

    let isData = '';
    let chapters: Chapter[] = [];
    let isTitle = '';
    let isJson = 0;
    if (page === 'boruto-chapter') {
        isData = 'boruto';
        chapters = borutoData;
        isJson = 0;
        isTitle = "Boruto Two Blue Vortex";
    } else if(page === 'one-piece-chapter') {
        isData = 'one';
        isJson = 1;
        isTitle = 'One Piece';
        chapters = opData;
    }  else if(page === 'one-piece-raw-chapter') {
        isData = 'opraw';
        isJson = 1;
        isTitle = 'One Piece Raw';
        chapters = opraw;
    } else if(page === 'jjk-chapter') {
        isData = 'gojo';
        isJson = 2;
        isTitle = 'Jujutsu Kaisen';
        chapters = jjkData;
    } else if(page === 'jjk-chapter-raw') {
        isData = 'gojoraw';
        isJson = 2;
        isTitle = 'Jujutsu Kaisen';
        chapters = jjkData;
    } 
    else if(page === 'kagura-chapter') {
        isData = 'kagura';
        isJson = 3;
        isTitle = 'Kagurabachi';
        chapters = kaguraData;
    }
    const prevChapter = parseInt(param) - 1;
    const nextChapter = parseInt(param) + 1;
    const maxChapter = chapters.length;

    return (
        <div className={styles.body}>
            <div className={styles.image}>
                <Image src={`/images/${isData}.Webp`} fill={true} alt={isData} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" quality={75} />
            </div>
            <div className={styles.frame1}>
                <h1>{json[isJson].name}</h1>
                <h2>{json[isJson].author}</h2>
                <p>{json[isJson].info}</p>
            </div>
            <div className={styles.title}>
                <h1><i>{isTitle}</i></h1>
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
                <Image width={713} height={1024} src={`/images/${isData}/chapter1/main.jpg`} alt="opscans" id="main"/>
                {chapters.length > 0 && (
                    <div key={chapters[parseInt(param) - 1].id}>
                        {chapters[parseInt(param) - 1].images.map((image: any, index: number) => (
                            <div className={styles.pageimage} key={index}>
                            <Image
                                width={713}
                                height={1024}
                                src={`/images/${isData}/chapter${param}/${index}.jpg`} // Access the src property of the image object
                                alt={`chapter ${index}`}
                            />
                            </div>
                        ))}
                    </div>
                )}
                <Image width={713} height={1024} src={`/images/${isData}/chapter1/end.jpg`} alt="opscans" id="main"/>
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
