'use client'

import {Filter} from './filter'
import styles from '../styles/styles.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'


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
                <li>One Piece</li>
                <li>Boruto</li>
                <li>Jujutsu Kaisen</li>
                <li>Kagura bachi</li>
                <li>Join Us</li>
            </ul>
        </div>
        </div>
    )
}