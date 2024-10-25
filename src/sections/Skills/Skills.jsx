import styles from "./SkillsStyles.module.css";
import check from "../../assets/check-mark.png";
import SkillSet from "./SkillSet";
const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillSet}>
        <SkillSet check={check} skill="HTML" />
        <SkillSet check={check} skill="CSS" />
        <SkillSet check={check} skill="JAVASCRIPT" />
        <SkillSet check={check} skill="REACT" />
        <SkillSet check={check} skill="BOOTSTRAP" />
        <SkillSet check={check} skill="JAVA" />
        <SkillSet check={check} skill="PYTHON" />
      </div>
    </section>
  );
};

export default Skills;
