import styles from "./ProjectsStyles.module.css";
const ProjectCard = ({ src, link, h3 }) => {
  return (
    <div className={styles.projects}>
      <a href={link}>
        <img className="hover" src={src} alt={h3} />
      </a>
      <h3>{h3}</h3>
    </div>
  );
};

export default ProjectCard;
