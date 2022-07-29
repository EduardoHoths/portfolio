import styles from "./styles.module.scss";

import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import tailwind from "../../assets/tailwind.svg";
import react from "../../assets/react.svg";
import nodejs from "../../assets/nodejs.svg";
import mysql from "../../assets/mysql.svg";
import sass from "../../assets/sass.svg";

const skills = [
  {
    title: "HTML",
    image: html,
  },
  {
    title: "CSS",
    image: css,
  },
  {
    title: "Javascript",
    image: js,
  },
  {
    title: "Tailwind CSS",
    image: tailwind,
  },
  {
    title: "ReactJS",
    image: react,
  },
  {
    title: "Sass",
    image: sass,
  },
  {
    title: "NodeJS",
    image: nodejs,
  },
  {
    title: "MySQL",
    image: mysql,
  },
];

export function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h1>Minhas skills</h1>

      <div>
        {skills.map((skill) => (
          <div key={skill.title} className={styles.skill}>
            <img src={skill.image} alt={skill.title} />

            <span>{skill.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
