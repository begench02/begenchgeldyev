import styles from './header.module.sass';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.main}>
      <div>Begench</div>
      <div className={styles.menu}>
        <Link className={styles.menu_item} to="/">
          Home
        </Link>
        <Link className={styles.menu_item} to="/blog">
          Blog
        </Link>
        <Link className={styles.menu_item} to="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
};
