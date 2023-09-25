import {Filter} from './filter'
import styles from '../styles/styles.module.css'


export default function Nav(props: any) {
    return(
        <div className={styles.nav}>
          <img src='/images/pscans.Webp' alt='opscans'/>
          <div className={styles.filters}>
            <Filter/>
          </div>
        </div>
    )
}