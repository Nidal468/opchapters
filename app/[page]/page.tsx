import styles from "../../styles/page.module.css";
import Footer from '../../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import Json from '../../public/data/data.json'
import boruto from "../../public/list/borutolist.json";
import op from "../../public/list/oplist.json";
import jjk from "../../public/list/jujutsulist.json";
import jjkraw from "../../public/list/jjkrawlist.json";
import kagura from "../../public/list/kaguralist.json";
import opcolored from "../../public/list/opcoloredlist.json";
import opraw from "../../public/list/oprawlist.json";
interface Data {
    number: string,
    title: string
}

export default async function Home(props: any){
    const { page } = props.params;
    let image = 'boruto';
    let json = 0;
    let chapter = 'boruto-chapter';
    let data :Data [] = [];
    if (page === 'boruto') {
        chapter = 'boruto-chapter';
        json = 0;
        image = 'boruto';
        data = boruto;
    } else if (page === 'one') {
        chapter = 'one-piece-chapter';
        json = 1;
        image = 'one';
        data = op;
    }  else if (page === 'jujutsu') {
        chapter = 'jjk-chapter';
        json = 2;
        image = 'gojo';
        data = jjk;
    } else if (page === 'kagura') {
        chapter = 'kagura-chapter';
        json = 3;
        image = 'kagura';
        data = kagura;
    } else {
        chapter = 'boruto-chapter';
        json = 0;
        image = 'boruto';
        data = boruto;
    }
    return(
        <div className={styles.body}>
            <div className={styles.image}>
                <Image src={`/images/${image}.Webp`} fill={true} alt="boruto image" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" quality={75} />
            </div>
            <div className={styles.frame1}>
                    <h1>{Json[json].name}</h1>
                    <h2>{Json[json].author}</h2>
                    <p>{Json[json].info}</p>
            </div>
            <div className={styles.title}>
                <h1>Chapter List</h1>
            </div>
            <div className={styles.selection}>
            {data.slice().reverse().map((data: any, index: number, arr: any[]) => (
                <Link href={`./page/${chapter}?param=${arr.length - index}`} key={arr.length - index} id={styles.link}>
                <div className={styles.list}>
                        <div className="w-full flex items-center justify-start">
                            <h1>Chapter {data.number} --- <i>{data.title}</i></h1>
                        </div>
                </div>
                </Link>
                ))}
            </div>
            <div id="list"></div>
            <Footer />
        </div>
    )
}