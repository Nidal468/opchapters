import styles from "../../styles/page.module.css";
import Nav from "../../components/nav";
import Footer from '../../components/footer'
export default function Home(){
    return(
        <div className={styles.body}>
            <Nav/>
            <img src="/images/boruto.Webp" className={styles.image}/>
            <div className={styles.frame1}>
                    <h1>Boruto</h1>
                    <h2>Mahashi Kishimoto</h2>
                    <p>Years have passed since Naruto and Sasuke teamed up to defeat Kaguya, the progenitor of chakra and the greatest threat the ninja world has ever faced. Times are now peaceful and the new generation of shinobi has not experienced the same hardships as its parents. Perhaps that is why Boruto would rather play video games than train. However, one passion does burn deep in this ninja boys heart, and that is the desire to defeat his father!</p>
            </div>
            <div className={styles.title}>
                <h1>Chapter List</h1>
            </div>
            <div className={styles.selection}>
                <div className={styles.list}>
                    <h1>Chapter 2 - <i>The Tree</i></h1>
                    <p>September 13,2023</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}