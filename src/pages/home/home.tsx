import styles from './home.module.sass'
// @ts-ignore
import Github from 'assets/github.svg'
// @ts-ignore
import LinkedIn from 'assets/linkedin.svg'
// @ts-ignore
import Resume from 'assets/resume.svg'

// @ts-ignore
import resume from '../../Resume.pdf'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>Frontend Engineer</div>
            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eaque totam voluptates saepe
                    provident numquam voluptas! Impedit enim facilis soluta nam dignissimos corporis rerum,
                    necessitatibus doloremque distinctio aperiam sapiente! Nemo officiis eaque, sequi tempore, nobis
                    voluptatem explicabo accusamus, vitae nesciunt atque commodi voluptatibus optio?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eaque totam voluptates saepe
                    provident numquam voluptas! Impedit enim facilis soluta nam dignissimos corporis rerum,
                    necessitatibus doloremque distinctio aperiam sapiente! Nemo officiis eaque, sequi tempore, nobis
                    voluptatem explicabo accusamus, vitae nesciunt atque commodi voluptatibus optio?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eaque totam voluptates saepe
                    provident numquam voluptas! Impedit enim facilis soluta nam dignissimos corporis rerum,
                    necessitatibus doloremque distinctio aperiam sapiente! Nemo officiis eaque, sequi tempore, nobis
                    voluptatem explicabo accusamus, vitae nesciunt atque commodi voluptatibus optio?
                </p>
            </div>
            <div className={styles.info}>
                <div className={styles.contacts}>
                    <div className={styles.contact}>
                        <a href='https://github.com/begench02' target='_blank'>
                            <Github fill='#fff' />
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <a href='https://www.linkedin.com/in/begench02/' target='_blank'>
                            <LinkedIn fill='#fff' />
                        </a>
                    </div>
                </div>

                <div className={styles.resume_block}>
                    <p>download cv: </p>
                    <Link to='resume.pdf' download='Begench Geldyev (resume)' rel='noreferrer' target='_target'>
                        <Resume className={styles.resume} fill='#fff' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
