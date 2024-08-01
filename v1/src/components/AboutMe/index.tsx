import styles from "./styles.module.scss";

import github from "../../assets/github.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import instagram from "../../assets/instagram.svg";

const contacts = [
  {
    link: "https://github.com/EduardoHoths",
    imagem: github,
    title: "Github",
    network: "github.com/EduardoHoths",
  },
  {
    link: "https://eduardo.hoths@gmail.com",
    imagem: mail,
    title: "Email",
    network: "eduardo.hoths@gmail.com",
  },
  {
    link: "https://instagram.com/eduardo.hoths",
    imagem: instagram,
    title: "Instagram",
    network: "@eduardo.hoths",
  },
  {
    link: "https://api.whatsapp.com/send?phone=5511960133029",
    imagem: phone,
    title: "Telefone",
    network: "(11) 96013-3029",
  },
];

export function AboutMe() {
  return (
    <section id="about-me" className={styles["about-me"]}>
      <h1>Sobre mim</h1>

      <p>
        Me chamo Eduardo, tenho 20 anos e sou desenvolvedor front-end. Sou apaixonado em aprender
        coisas novas ou maneiras diferentes de fazer algo. Quando conheci a programação me encantei
        por isso. Todos os dias encaro um novo desafio e adquiro novos aprendizados.
      </p>

      <div>
        {contacts.map((contact) => (
          <a key={contact.title} href={contact.link} target="_blank" className={styles.contact}>
            <span>
              <img src={contact.imagem} />
            </span>

            <strong>{contact.title}</strong>

            <span>{contact.network}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
