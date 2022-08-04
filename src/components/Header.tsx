import { useEffect, useRef, useState } from "react";
import styles from "../styles/Header.module.scss";

import menu from "../assets/menu.svg";

import { X } from "phosphor-react";

import { Link, animateScroll } from "react-scroll";

export function Header() {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [menuActive, setMenuActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobile) {
      document.addEventListener("keydown", closeMenuMobileWithKeyboard);

      return () => {
        document.removeEventListener("keydown", closeMenuMobileWithKeyboard);
      };
    }
  }, [mobile]);

  function closeMenuMobileWithKeyboard(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setMenuActive(false);
    }
  }

  function closeMenuMobile() {
    setMenuActive(false);
  }

  function openMenuMobile() {
    setMenuActive(true);
  }

  function handleScroll() {
    setHeaderActive(window.scrollY > 0);
  }

  function scrollToTop() {
    animateScroll.scrollToTop();
  }

  return (
    <header className={headerActive ? styles.headerActive : styles.header}>
      <div>
        <strong onClick={scrollToTop}>Portfólio</strong>

        {mobile ? (
          <>
            <div
              className={menuActive ? styles.fadeActive : styles.fade}
              onClick={closeMenuMobile}
            ></div>
            <img src={menu} alt="" className={styles.menuIcon} onClick={openMenuMobile} />
            <nav className={menuActive ? styles.menuMobileActive : styles.menuMobile} >
              <X className={styles.closeIcon} onClick={closeMenuMobile} />
              <Link
                smooth={true}
                offset={headerActive ? -90 : -150}
                to="about-me"
                href="/"
                onClick={closeMenuMobile}
              >
                Sobre mim
              </Link>
              <Link
                smooth={true}
                offset={headerActive ? -90 : -150}
                to="projects"
                href="/"
                onClick={closeMenuMobile}
              >
                Projetos
              </Link>
              <Link
                smooth={true}
                offset={headerActive ? -90 : -150}
                to="services"
                href="/"
                onClick={closeMenuMobile}
              >
                Serviços
              </Link>
              <Link
                smooth={true}
                offset={headerActive ? -90 : -150}
                to="skills"
                href="/"
                onClick={closeMenuMobile}
              >
                Minhas skills
              </Link>
            </nav>
          </>
        ) : (
          <nav>
            <Link duration={1}  smooth={true} offset={headerActive ? -130 : -220} to="about-me" href="/">
              Sobre mim
            </Link>
            <Link smooth={true} offset={headerActive ? -130 : -220} to="projects" href="/">
              Projetos
            </Link>
            <Link smooth={true} offset={headerActive ? -130 : -220} to="services" href="/">
              Serviços
            </Link>
            <Link smooth={true} offset={headerActive ? -130 : -220} to="skills" href="/">
              Minhas skills
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
