import styles from "../styles/styles.module.css";
import Image from 'next/image'
export default function Footer() {
    return(
        <div className={styles.footer}>
        <div className="Frame45 h-[140px] flex-col justify-center items-start gap-2.5 inline-flex absolute z-40 pl-[5%]">
          <div className="OpScans text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.large}>OP SCANS</div>
          <div className="FollowUsAt text-center text-white text-opacity-60 text-base font-normal font-['SF Pro Text'] leading-tight" id={styles.small}>Follow us at</div>
          <div className="Frame44 opacity-50 justify-start items-center gap-[5px] inline-flex">
            <div className="TwitterOpscanCom text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.small}>Twitter/opscan.com</div>
            <div className="OpscansGmailCom text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.small}>opscans@gmail.com</div>
            <div className="DiscordOpscanCom text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.small}>discord/opscan.com</div>
          </div>
          <div className="Frame45 opacity-50 justify-start items-center gap-[5px] inline-flex">
            <div className="DevelopedBy text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.small}>Developed by</div>
            <div className="AbuSaleh text-center text-white font-normal font-['SF Pro Text'] leading-tight" id={styles.small}>Abu Saleh</div>
          </div>
          <div className="CopyrightOpscansComAllRightsReserved text-center text-white text-opacity-60 text-[10px] font-normal font-['SF Pro Text'] leading-tight">Copyright © opscans.com. All Rights Reserved</div>
        </div>
        <div className={styles.effect}></div>
        <div className={styles.footerImage}>
        <Image src="/images/footer.Webp" fill={true} alt={"footer image"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={50}/>
        </div>
      </div>
    )
}