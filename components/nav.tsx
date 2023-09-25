'use client'

import {Filter} from './filter'
import styles from '../styles/styles.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'
import Link from "next/link";

export default function Nav() {

    const [isActive, setIsActive] = useState(false)

    function HandleClick() {
        setIsActive(current => ! current);
    }


    return(
        <div className={styles.nav}>
          <img src='/images/pscans.Webp' alt='opscans'/>
          <div className={styles.filters}>
            <Filter/>
          </div>
          <MenuIcon onClick={HandleClick} className={styles.menuicon} />
          <div className={styles.menu} style={{transform: isActive? 'translateX(0px)': 'translateX(200px)'}}>
            <ul className={styles.menuItems}>
                <li><Link href="/one">One Piece</Link></li>
                <li><Link href="/boruto">Boruto</Link></li>
                <li><Link href="/jujutsu">Jujutsu Kaisen</Link></li>
                <li><Link href="kagura">Kagura bachi</Link></li>
                <li><Link href="discord.gg/opscans">Join Us</Link></li>
            </ul>
        </div>
        </div>
    )
}