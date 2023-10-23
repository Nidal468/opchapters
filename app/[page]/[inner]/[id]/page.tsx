import styles from "@/styles/page.module.css";
import Footer from '@/components/footer'
import Link from 'next/link'
import json from '@/public/data/data.json'
import Script from 'next/script';
import borutoData from '@/public/chapter/borutochapters.json'
import opData from '@/public/chapter/opchapters.json'
import jjkData from '@/public/chapter/jujutsuchapters.json'
import kaguraData from '@/public/chapter/kagurachapters.json'
import opraw from '@/public/chapter/oprawchapters.json'
import jjkraw from '@/public/chapter/jjkrawchapters.json'
import opcol from '@/public/chapter/opcoloredchapters.json'
interface Chapter {
    id: string,
    images: any
}
export function generateStaticParams() {
    const jjkChapterIds = jjkData.map((chapter) => ({
        page: 'page',
        inner: 'jjk-chapter',
        id: (parseInt(chapter.id) +1).toString(),
    }));
    const jjkRawChapterIds = jjkraw.map((chapter) => ({
        page: 'page',
        inner: 'jjkraw-chapter',
        id: (parseInt(chapter.id) +1).toString(),
    }));
    const borutoChapterIds = borutoData.map((chapter) => ({
        page: 'page',
        inner: 'boruto-chapter',
        id: (parseInt(chapter.id) + 1).toString(),
    }));
    const oneChapterIds = opData.map((chapter) => ({
        page: 'page',
        inner: 'one-piece-chapter',
        id: (parseInt(chapter.id) +1).toString(),
    }));
    const kaguraChapterIds = kaguraData.map((chapter) => ({
        page: 'page',
        inner: 'kagura-chapter',
        id: (parseInt(chapter.id) + 1).toString(),
    }));
    return [
        ...borutoChapterIds,
        ...jjkChapterIds,
        ...oneChapterIds,
        ...kaguraChapterIds,
        ...jjkRawChapterIds
    ]
}
export default async function Home({ params }: { params: { inner: string; param: string, id: string } }) {
    const { inner, param, id } = params;
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
    }
    const prevChapter = parseInt(id) - 1;
    const nextChapter = parseInt(id) + 1;
    const maxChapter = chapters.length;

    return (
        <div className={styles.body}>
            <div className={styles.image}>
                <img src={`/images/${isData}.Webp`} alt={isData}/>
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
                {chapters.length > 0 && chapters[parseInt(id) - 1] && chapters[parseInt(id) - 1].images && (
                    <div key={chapters[parseInt(id) - 1].id}>
                        {chapters[parseInt(id) - 1].images.map((image: any, index: number) => (
                            <div className={styles.pageimage} key={index}>
                                <img
                                    src={`/images/${isData}/chapter${id}/${index}.jpg`}
                                    alt={`chapter ${index}`}
                                    loading="lazy"
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
                        <Link href={`./${prevChapter}`}>Previous Chapter</Link>
                    )}
                </div>
                <h1 className="text-2xl">{id}</h1>
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
