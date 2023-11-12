import styles from "@/styles/page.module.css";
import Footer from '@/components/footer'
import Link from 'next/link'
import Json from '@/public/data/data.json'
import Script from "next/script";

import { BorutoList, OnePieceList, OnePieceColoredList, OnePieceRawList, JujutsuKaisenList, JujutsuKaisenRawList, KaguraBachiList } from "@/public/list/index";
import Image from "next/image";
interface Data {
  number: string,
  title: string
}
export default function Home(params: any) {
  const { page } = params.params;
  let image = 'boruto';
  let json = 0;
  let chapter = 'boruto-chapter';
  let data: Data[] = [];
  if (page === 'boruto') {
    chapter = 'boruto-chapter';
    json = 0;
    image = 'boruto';
    data = BorutoList;
  } else if (page === 'one') {
    chapter = 'one-piece-chapter';
    json = 1;
    image = 'one';
    data = OnePieceList;
  } else if (page === 'opcol') {
    chapter = 'one-piece-chapter-colored';
    json = 1;
    image = 'one';
    data = OnePieceColoredList;
  } else if (page === 'opraw') {
    chapter = 'one-piece-chapter-raw';
    json = 1;
    image = 'one';
    data = OnePieceRawList;
  } else if (page === 'jujutsu') {
    chapter = 'jjk-chapter';
    json = 2;
    image = 'gojo';
    data = JujutsuKaisenList;
  } else if (page === 'jjkraw') {
    chapter = 'jjkraw-chapter';
    json = 2;
    image = 'gojo';
    data = JujutsuKaisenRawList;
  } else if (page === 'kagura') {
    chapter = 'kagura-chapter';
    json = 3;
    image = 'kagura';
    data = KaguraBachiList;
  } else {
    chapter = 'boruto-chapter';
    json = 0;
    image = 'boruto';
    data = BorutoList;
  }
  return (
    <div className={styles.body}>
      <div className={styles.image}>
        <Image fill={true} src={`/images/${image}.Webp`} alt="boruto image" priority={true}/>
      </div>
      <div className={styles.frame1}>
        <h1>{Json[json].name}</h1>
        <h2>{Json[json].author}</h2>
        <p>{Json[json].info}</p>
      </div>
      <div className={styles.title}>
        <h1>Chapter List</h1>
      </div>
      <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-6216514032813165" data-ad-slot="6548259764" data-ad-format="auto" data-full-width-responsive="true"></ins>
      <div className={styles.selection}>
        {data.slice().reverse().map((data: any, index: number, arr: any[]) => (
          <Link href={`/${page}/${chapter}?param=${arr.length - index}`} key={arr.length - index} id={styles.link}>
            <div className={styles.list}>
              <div className="w-full flex items-center justify-start">
                <h1>Chapter {data.number} --- <i>{data.title}</i></h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-6216514032813165" data-ad-slot="4557355396" data-ad-format="auto" data-full-width-responsive="true"></ins>
      <Footer />
    </div>
  )
}