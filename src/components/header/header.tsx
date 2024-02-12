import styles from './header.module.sass'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className={styles.main}>
            <div>Begench</div>
            <div className={styles.menu}>
                <div className={styles.menu_item}>
                    <Link to='/'>Home</Link>
                </div>
                <div className={styles.menu_item}>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div className={styles.menu_item}>
                    <Link to='/projects'>Projects</Link>
                </div>
            </div>
        </div>
    )
}
