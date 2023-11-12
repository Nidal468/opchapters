import Link from 'next/link'
import styles from '../styles/styles.module.css'
import Image from 'next/image'
export default function Card(props: any){
    return(
        <Link href={props.href}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                fill={true}
                src={props.src}
                alt={props.alt}
                sizes="10vw, 20vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <h1>{props.title}</h1>
                <h2>{props.author}</h2>
              </div>
            </div>
          </div>
        </Link>
    )
}