import styles from "../styles/styles.module.css";
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
    return(
        <div className={styles.footer}>
        <div className="Frame45 h-[20vw] flex-col justify-center items-start gap-2 inline-flex absolute z-40 pl-[5%]">
          <div className="OpScans text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.large}>OPSCANS</div>
          <div className="FollowUsAt text-center text-white text-opacity-60 text-base font-normal font-['SF Pro Text'] leading-tight" id={styles.small}>Follow us at</div>
          <div className="Frame44 opacity-50 justify-start items-center gap-[5px] inline-flex">
            <div className="DiscordOpscanCom text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.small}><Link href="https://discord.com/invite/opscans">Discord &</Link></div>
            <div className="TwitterOpscanCom text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.small}><Link href="https://twitter.com/OPSCANS">Twitter</Link></div>
            <div className="TwitterOpscanCom text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.small}><Link href="https://instagram.com/opscans1?igshid=OGQ5ZDc2ODk2ZA==">Instagram</Link></div>
          </div>
          <div className="CopyrightOpscansComAllRightsReserved text-center text-white text-opacity-60 text-[1.5vw] font-normal font-['SF Pro Text'] leading-tight">Copyright © opscans.com. All Rights Reserved</div>
        </div>
        <div className={styles.effect}></div>
        <div className={styles.footerImage}>
        <Image src="/images/opslider.Webp" fill={true} alt={"footer image"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={50}/>
        </div>
      </div>
    )
}