import Image from 'next/image'
import styles from "../styles/styles.module.css";
import { getBoruto } from "@/schemas/sanity-utils";




export default async function Home() {
  const contents = await getBoruto();
  return (
    <div className={styles.body}>
      <div className={styles.frame1}>
        <nav className={styles.nav}></nav>
        {contents.map((content) => (
          <div key={content._id}>
            {content.name}
         
          </div>
        ))}
      </div>
    </div>
  )
}
