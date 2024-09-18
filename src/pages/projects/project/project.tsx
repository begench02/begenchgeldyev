import { FC } from 'react';
import { TProject } from '../projects.data';
import styles from './project.module.sass';
import { Link } from 'react-router-dom';

export const Project: FC<Props> = (props) => {
  const { name, link, description, image, stack } = props.project;

  return (
    <Link to={link} target="_blank" className={styles.main}>
      <img src={image} width={200} height={200} className={styles.image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className={styles.tech_stack}>Tech stack: {stack}</p>
    </Link>
  );
};

type Props = {
  project: TProject;
};
