import styles from "./styles.module.scss";

import todoApp from "../../assets/todoapp.png";
import dogs from "../../assets/dogs.png";
import eCommerce from "../../assets/e-commerce.png";
import naped from "../../assets/naped.png";
import chihiro from "../../assets/chihiro.png";
import spotify from "../../assets/spotify.png";

const projects = [
  {
    title: "Todo App",
    tecnologies: ["React", "Typescript", "NodeJS", "Express", "JWT", "Bcrypt", "Mysql"],
    image: todoApp,
    link: "https://front-end-todo-app.vercel.app/",
  },
  {
    title: "Naped",
    tecnologies: ["React", "Typescript", "Styled Components", "MirageJS"],
    image: naped,
    link: "https://desafio-10-naped.vercel.app/",
  },
  {
    title: "Dogs",
    tecnologies: ["React", "Victory", "Styled Components", "React Router Dom"],
    image: dogs,
    link: "https://dogs-origamid-puce.vercel.app/",
  },
  {
    title: "Simple E-commerce Page",
    tecnologies: ["HTML", "SASS", "JS"],
    image: eCommerce,
    link: "https://eduardohoths.github.io/Projetos-Pessoais/e-commerce/",
  },

  {
    title: "A Viagem de Chihiro",
    tecnologies: ["React", "SASS"],
    image: chihiro,
    link: "https://desafios-codelandia-five.vercel.app/",
  },
  {
    title: "Spotify Clone",
    tecnologies: ["HTML", "CSS", "Bootstrap"],
    image: spotify,
    link: "https://eduardohoths.github.io/Projetos-Pessoais/spotify-clone/",
  },
];

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h1>Projetos</h1>

      <div>
        {projects.map((project) => (
          <a key={project.title} href={project.link} target="_blank" className={styles.project}>
            <img src={project.image} alt="" />

            <strong>{project.title}</strong>

            <span>
              Tecnologias:
              {project.tecnologies.map((technology, index) => {
                if (index === project.tecnologies.length - 1) {
                  return ` e ${technology}.`;
                } else if (index === project.tecnologies.length - 2) {
                  return ` ${technology}`;
                } else {
                  return ` ${technology},`;
                }
              })}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
