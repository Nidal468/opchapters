import {Filter} from './filter'
import styles from '../styles/styles.module.css'


export default function Nav() {
    return(
        <div className={styles.nav}>
          <img src='/images/pscans.Webp' alt='opscans'/>
          <div className={styles.filters}>
          
          </div>
        </div>
    )
}