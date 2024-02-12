import { Header } from 'components/header/header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.sass'

export const Layout = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
