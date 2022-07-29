import { Header } from "./components/Header";

import "./styles/globalStyles.scss";
import styles from "./styles/App.module.scss";

import illustration from "./assets/illustration.svg";

import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles["first-section"]}>
          <div>
            <strong>
              Olá, eu sou o
              Eduardo Hoths :)
            </strong>

            <span>Desenvolvedor Front-end</span>

            <a href="./assets/profile.pdf" download="profile.pdf">
              Download CV
            </a>
            <a href="https://www.linkedin.com/in/eduardohoths/" target="_blank">
              Entrar em contato
            </a>
          </div>

          <img src={illustration} />
        </section>

        <AboutMe />
        <Projects />
        <Services />
        <Skills />
      </main>

      <footer className={styles.footer}>
        <span>
          Orgulhosamente feito por{" "}
          <a href="https://linkedin.com/in/eduardohoths" target="_blank">
            Eduardo Hoths
          </a>
        </span>
      </footer>
    </>
  );
}

export default App;
