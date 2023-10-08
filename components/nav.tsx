'use client'

import { Filter } from './filter'
import styles from '../styles/styles.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {useState} from 'react'
import Link from "next/link";

export default function Nav() {
    const [isActive, setIsActive] = useState(false)

    function HandleClick() {
        setIsActive(current => !current);
    }

    return (
        <div className={styles.nav}>
            <div className='flex items-center justify-between'>
            <img src='/images/pscans.Webp' alt='opscans'/>
            <a href='#main'><ArrowCircleDownIcon/></a>
            </div>
          <div className={styles.filters}>
            <Filter/>
          </div>
          <MenuIcon onClick={HandleClick} className={styles.menuicon} />
          <div className={styles.menu} style={{display: isActive? 'flex': 'none'}}>
            <ul className={styles.menuItems} style={{display: isActive? 'block': 'none'}}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/one">One Piece</Link></li>
                <li><Link href="/boruto">Boruto</Link></li>
                <li><Link href="/jujutsu">Jujutsu Kaisen</Link></li>
                <li><Link href="kagura">Kagura bachi</Link></li>
                <li><Link href="https://discord.com/invite/opscans">Join Us</Link></li>
            </ul>
        </div>
        </div>
    )
}