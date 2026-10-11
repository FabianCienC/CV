import { Section } from '../../components/Section/Section';
import { TagList } from '../../components/TagList/TagList';
import { cv } from '../../data/cv';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <Section id="projects" title="Projects & leadership">
      <ul className={styles.grid}>
        {cv.projects.map((project) => (
          <li key={project.name} className={styles.project} data-reveal>
            <p className={styles.kind}>{project.kind}</p>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <TagList tags={project.tags} />
            {project.url && (
              <a className={styles.link} href={project.url} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
