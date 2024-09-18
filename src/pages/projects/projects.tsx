import { Project } from './project/project';
import { TProject, projects } from './projects.data';
import styles from './projects.module.sass';

export const Projects = () => {
  return (
    <div className={styles.main}>
      {projects.map((project: TProject) => (
        <Project project={project} />
      ))}
    </div>
  );
};
