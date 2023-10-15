import Link from 'next/link'
import styles from '../styles/styles.module.css'
export default function Card(props: any){
    return(
        <Link href={props.href}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src={props.src}
                alt={props.alt}
                loading="lazy"
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