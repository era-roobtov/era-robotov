import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import navPaths from "@/utils/paths";
import styles from "./Header.module.scss";
import RainbowButton from "../Buttons/RainbowButton/RainbowButton";

const Header = ({ header }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const handleClickBurger = () => {
    setBurgerStatus(!burgerStatus);
  };

  const { about, contact, courses, home } = navPaths;

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}></div>
      <div
        onClick={() => handleClickBurger()}
        className={`${styles.burgerContainer} `}
      >
        <div
          className={`${styles.hamburgerToClose} ${
            burgerStatus ? styles.close : ""
          }`}
        >
          <div className={styles.hamburgerMiddle} />
        </div>
      </div>
      <nav className={`${styles.header__nav} ${burgerStatus ? styles.header__nav_open : ''}`}>
        <ul className={styles.list}>
          {/* <li className={styles.list__item}>
            <RainbowButton path={home} text={'Главная'}/>
          </li>
          <li className={styles.list__item}>
            <RainbowButton path={courses} text={'Курсы'}/>
          </li>
          <li className={styles.list__item}>
            <RainbowButton path={about} text={'О школе'}/>
          </li>
          <li className={styles.list__item}>
            <RainbowButton path={contact} text={'Контакты'}/>
          </li> */}
          <li className={styles.list__item}>
            <Link href={home}>
              <a className={styles.list__item__text}>Главная</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href={courses}>
              <a className={styles.list__item__text}>Курсы</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href={about}>
              <a className={styles.list__item__text}>О школе</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href={contact}>
              <a className={styles.list__item__text}>Контакты</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.string,
};

export default Header;
