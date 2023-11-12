import styles from '../styles/styles.module.css';
import Footer from '../components/footer';
import Link from 'next/link';
import SwiperComponent from '@/components/swiper';
import Card from '../components/card';

export default function Home() {

  return (
    <div className={styles.body}>
      <div className={styles.frame1} id='link2'>
        <div className={styles.imageContainer}>
          <div className={styles.fade}></div>
          <SwiperComponent />
        </div>
        <div className={styles.bot}>
          <div className={styles.button}><Link href='#main'>Read Now</Link></div>
          <h1>Hey everybody we are glad that you enjoy our scanlations but, don't forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga</h1>
        </div>
      </div>
      <ins className="adsbygoogle" style={{display:"block"}} data-ad-client="ca-pub-6216514032813165" data-ad-slot="4557355396" data-ad-format="auto" data-full-width-responsive="true"></ins>
      <div className={styles.frame2}>
        <div className={styles.bar} id="main">
          <div className={styles.title}><h1>Manga List</h1></div>
          <div className={styles.buttons}>
          </div>
        </div>
        <ins className="adsbygoogle" style={{display:"block"}} data-ad-client="ca-pub-6216514032813165" data-ad-slot="4557355396" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <div className={styles.cards}>
          <Card href="./one" src="/images/opCover.jpg" alt="one piece" title="One Piece" author="EIICHIRO ODA" />
          <Card href="./opraw" src="/images/opraw.jpg" alt="one piece raw" title="One Piece Raw" author="EIICHIRO ODA" />
          <Card href="./opcolored" src="/images/opcol.jpg" alt="one piece colored" title="One Piece Colored" author="EIICHIRO ODA" />
          <Card href="./jujutsu" src="/images/jjkCover.jpg" alt="jujutsu kaisen" title="Jujutsu Kaisen" author="GEGE AKUTAMI" />
          <Card href="./jjkraw" src="/images/jjkraw.jpg" alt="jujutsu kaisen raw" title="Jujutsu Kaisen Raw" author="GEGE AKUTAMI" />
          <Card href="./boruto" src="/images/borutoCover.jpg" alt="boruto" title="Boruto Two Blue Vortex" author="Mahashi Kishimoto" />
          <Card href="./kagura" src="/images/kaguraCover.jpg" alt="kagurabachi" title="Kagurabachi" author="TAKERU HOKAZONO" />
          <Card href="./next" src="/images/kaguraCover.jpg" alt="kagurabachi raw" title="Kagurabachi Raw" author="TAKERU HOKAZONO" />
        </div>
      </div>
      <ins className="adsbygoogle" style={{display:"block"}} data-ad-client="ca-pub-6216514032813165" data-ad-slot="4557355396" data-ad-format="auto" data-full-width-responsive="true"></ins>
      <Footer />
    </div>
  );
}
