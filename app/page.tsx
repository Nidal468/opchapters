import Image from 'next/image';
import styles from '../styles/styles.module.css';
import { getBoruto, getAssets, getManga, getSoon} from '../schemas/sanity-utils';
import { Filter, NewFilter } from '../components/filter';
import MenuIcon from '@mui/icons-material/Menu';

export default async function Home() {
  console.log('Home component rendered');

  const assets = await getAssets();
  const mangas = await getManga();
  const boruto = await getBoruto();
  const soon = await getSoon();
  console.log('Fetched assets:', assets);
  console.log('Fetched mangas:', mangas);
  console.log('Fetched boruto:', boruto);
  console.log('Fetched soon:', soon);
  return (
    <div className={styles.body}>
      <div className={styles.frame1}>
        {assets.map((asset: any) => (
          <div key={asset._id} className={styles.imageContainer}>
            <div className={styles.fade}></div>
            <img src={asset.images} alt={asset.name}/>
          </div>
        ))}
        <div className={styles.nav}>
          <h1>OPSCANS</h1>
          <div className={styles.filters}>
            <Filter />
          </div>
        </div>
        <div className={styles.bot}>
          <div className={styles.button}>Read Now</div>
          <h1>Years have passed since Naruto and Sasuke teamed up to defeat Kaguya, the progenitor of chakra and the greatest threat the ninja world has ever faced. Times are now peaceful and the new generation of shinobi has not experienced the same hardships as its parents. Perhaps that is why Boruto would rather play video games than train. However, one passion does burn deep in this ninja boys heart, and that is the desire to defeat his father!</h1>
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.bar}>
          <div className={styles.title}><MenuIcon/><h1>Manga List</h1></div>
          <div className={styles.buttons}>
            <NewFilter/>
          </div>
        </div>
        <div className={styles.cards}>
          {mangas.map((manga: any) => (
            <div className={styles.card} key={manga._id}>
              <img width={'200px'} height={'300px'} src={manga.location} alt={manga.name}/>
              <div className={styles.info}>
                <div>
                  <h1>{manga.name}</h1>
                  <h2>{manga.person}</h2>
                </div>
                <h1>{manga.number}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bar} style={{alignItems: "flex-start"}}>
          <div className={styles.title}><h1>Coming Soon</h1></div>
        </div>
        <div className={styles.cards}>
          {soon.map((so: any) => (
            <div className={styles.card} key={so._id}>
              <img src={so.location} alt={so.name}/>
              <div className={styles.info}>
                <div>
                  <h1>{so.name}</h1>
                  <h2>{so.person}</h2>
                </div>
                <h1>{so.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <div className="Frame45 h-[140px] flex-col justify-center items-start gap-2.5 inline-flex absolute z-40 pl-[5%]">
          <div className="OpScans text-center text-white text-[32px] font-normal font-['SF Pro Text'] leading-tight">OP SCANS</div>
          <div className="FollowUsAt text-center text-white text-opacity-60 text-base font-normal font-['SF Pro Text'] leading-tight">Follow us at</div>
          <div className="Frame44 opacity-50 justify-start items-center gap-[5px] inline-flex">
            <div className="TwitterOpscanCom text-center text-white text-[10px] font-normal font-['SF Pro Text'] leading-tight">Twitter/opscan.com</div>
            <div className="OpscansGmailCom text-center text-white text-[10px] font-normal font-['SF Pro Text'] leading-tight">opscans@gmail.com</div>
            <div className="DiscordOpscanCom text-center text-white text-[10px] font-normal font-['SF Pro Text'] leading-tight">discord/opscan.com</div>
          </div>
          <div className="Frame45 opacity-50 justify-start items-center gap-[5px] inline-flex">
            <div className="DevelopedBy text-center text-white text-[10px] font-normal font-['SF Pro Text'] leading-tight">Developed by</div>
            <div className="AbuSaleh text-center text-white text-[10px] font-normal font-['SF Pro Text'] leading-tight">Abu Saleh</div>
          </div>
          <div className="CopyrightOpscansComAllRightsReserved text-center text-white text-opacity-60 text-base font-normal font-['SF Pro Text'] leading-tight">Copyright © opscans.com. All Rights Reserved</div>
        </div>
        <div className={styles.effect}></div>
        <img src="/images/footer.png"/>
      </div>
    </div>
  );
}
