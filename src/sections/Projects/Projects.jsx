import React from "react";
import styles from "../Projects/ProjectsStyles.module.css";
import weather from "../../assets/weather.png";
import waiting from "../../assets/Coming soon banner.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionHeader}>Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={weather}
          link="https://pitabash1999.github.io/FistAPIproject_Kuna1999/"
          h3="WeatherApp"
        />
        <ProjectCard src={waiting} link="" h3="" />
      </div>
    </section>
  );
};

export default Projects;
