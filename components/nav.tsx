'use client'

import { Filter } from './filter'
import styles from '../styles/styles.module.css'
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
            <a href='#main'></a>
            </div>
          <div className={styles.filters}>
            <Filter/>
          </div>
          <button onClick={HandleClick} className="text-[4vw] lg:text-[1.5vw]">Menu</button>
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