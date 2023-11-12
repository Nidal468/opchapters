import styles from "@/styles/page.module.css";
import Footer from '@/components/footer'
import Link from 'next/link'
import json from '@/public/data/data.json'
import borutoData from '@/public/chapter/borutochapters.json'
import opData from '@/public/chapter/opchapters.json'
import jjkData from '@/public/chapter/jujutsuchapters.json'
import kaguraData from '@/public/chapter/kagurachapters.json'
import opraw from '@/public/chapter/oprawchapters.json'
import jjkraw from '@/public/chapter/jjkrawchapters.json'
import Chapters from "@/components/images"
import Image from "next/image";
interface Chapter {
    id: string,
    images: any
}
export default function Home(params: any) {
    const { searchParams: { param } } = params;
    const { inner } = params.params;
    console.log(params)
    let isData = '';
    let chapters: Chapter[] = [];
    let isTitle = '';
    let isJson = 0;
    if (inner === 'boruto-chapter') {
        isData = 'boruto';
        chapters = borutoData;
        isJson = 0;
        isTitle = "Boruto Two Blue Vortex";
    } else if (inner === 'one-piece-chapter') {
        isData = 'one';
        isJson = 1;
        isTitle = 'One Piece';
        chapters = opData;
    } else if (inner === 'one-piece-chapter-raw') {
        isData = 'opraw';
        isJson = 1;
        isTitle = 'One Piece Raw';
        chapters = opraw;
    } else if (inner === 'jjk-chapter') {
        isData = 'gojo';
        isJson = 2;
        isTitle = 'Jujutsu Kaisen';
        chapters = jjkData;
    } else if (inner === 'jjkraw-chapter') {
        isData = 'gojoraw';
        isJson = 2;
        isTitle = 'Jujutsu Kaisen';
        chapters = jjkraw;
    } else if (inner === 'kagura-chapter') {
        isData = 'kagura';
        isJson = 3;
        isTitle = 'Kagurabachi';
        chapters = kaguraData;
    } else {
        isData = 'boruto';
        chapters = borutoData;
        isJson = 0;
        isTitle = "Boruto Two Blue Vortex";
    }
    const prevChapter = parseInt(param) - 1;
    const nextChapter = parseInt(param) + 1;
    const maxChapter = chapters.length;

    return (
        <div className={styles.body}>
            <div className={styles.image}>
                <Image fill={true} src={`/images/${isData}.Webp`} alt={isData} priority={true} sizes="30vw, 40vw"/>
            </div>
            <div className={styles.frame1}>
                <h1>{json[isJson].name}</h1>
                <h2>{json[isJson].author}</h2>
                <p>{json[isJson].info}</p>
            </div>
            <div className={styles.title}>
                <h1><i>{isTitle}</i></h1>
            </div>
            <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-6216514032813165" data-ad-slot="4557355396" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-6216514032813165" data-ad-slot="6548259764" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <Chapters data={chapters} param={param} src={isData}/>
            <div className={styles.pageChange}>
                <div className={styles.button}>
                    {prevChapter > 0 && (
                        <Link href={`./${prevChapter}`}>Previous Chapter</Link>
                    )}
                </div>
                <h1 className="text-2xl">{param}</h1>
                <div className={styles.button}>
                    {nextChapter <= maxChapter && (
                        <Link href={`./${nextChapter}`}>Next Chapter</Link>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}
