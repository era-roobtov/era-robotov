import PropTypes from "prop-types";
import Link from "next/link";
import navPaths from "@/utils/paths";
import styles from "./Header.module.scss";

const Header = ({ header }) => {
  const { about, contact, courses, home } = navPaths;
  return (
    <header className={styles.header}>
      <h1 className={styles.header__heading}>{header}</h1>
      <nav className={styles.header__nav}>
        <ul className={styles.list}>
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
