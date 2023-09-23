import {Filter} from './filter'
import styles from '../styles/styles.module.css'


export default function Nav() {
    return(
        <div className={styles.nav}>
          <h1>OPSCANS</h1>
          <div className={styles.filters}>
            <Filter />
          </div>
        </div>
    )
}