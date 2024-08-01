import styles from "./styles.module.scss";

import tag from "../../assets/tag.svg";
import smartphone from "../../assets/smartphone.svg";
import server from "../../assets/server.svg";

const services = [
  {
    title: "Criação de sites",
    image: tag,
  },
  {
    title: "Back-end e API's",
    image: server,
  },
  {
    title: "Sites Responsivos",
    image: smartphone,
  },
];

export function Services() {
  return (
    <section id="services" className={styles.services}>
      <h1>Serviços</h1>

      <div>
        {services.map((service) => (
          <div key={service.title} className={styles.service}>
            <img src={service.image} alt={service.title} />
            <span>{service.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
