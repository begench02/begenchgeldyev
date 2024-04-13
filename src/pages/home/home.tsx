import styles from './home.module.sass';
import Github from 'assets/github.svg';
import LinkedIn from 'assets/linkedin.svg';
import Resume from 'assets/resume.svg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Software Engineer</div>
      <div>
        <p>
          <div className={styles.quote}>
            <q>Software is a great combination between artistry and engineering.</q>
            <address>Bill Gates</address>
          </div>
          Software engineer, mostly experienced with web development, especially with frontend.
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <a href="https://github.com/begench02" target="_blank">
              <Github fill="#fff" />
            </a>
          </div>
          <div className={styles.contact}>
            <a href="https://www.linkedin.com/in/begench02/" target="_blank">
              <LinkedIn fill="#fff" />
            </a>
          </div>
        </div>

        <div className={styles.resume_block}>
          <p>download cv: </p>
          <Link to="Begench Geldyev(CV).pdf" download rel="noreferrer" target="_target">
            <Resume className={styles.resume} fill="#fff" />
          </Link>
        </div>
      </div>
    </div>
  );
};
